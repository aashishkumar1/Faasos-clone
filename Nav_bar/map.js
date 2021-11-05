
    /*Map Initialization*/
    var map = new MapmyIndia.Map('map', {center: [28.09, 78.3], zoom: 5, search: false});
     
    /*Search plugin initialization*/
      var optional_config={
          location:[28.61, 77.23],
         /* pod:'City',
          bridge:true,
          tokenizeAddress:true,*
          filter:'cop:9QGXAM',
          distance:true,
          width:300,
          height:300*/
      };
      new MapmyIndia.search(document.getElementById("auto"),optional_config,callback);
      
      /*CALL for fix text - LIKE THIS
       * 
       new MapmyIndia.search("agra",optional_config,callback);
       * 
       * */

      var marker;
      function callback(data) { 
          if(data)
          {
              if(data.error)
              {
                  if(data.error.indexOf('responsecode:401')!==-1){
                  /*TOKEN EXPIRED, set new Token ie. 
                   * MapmyIndia.setToken(newToken);
                   */
                  }
                  console.warn(data.error);
                  
              }
              else
              {        
                   let clicked_location = null;
                   clicked_location = data[0]
                   console.log("data: ",clicked_location.placeName)

                    appennd_location(clicked_location.placeName)
                      var dt=data[0];
                      if(!dt) return false;
                      var eloc=dt.eLoc;
                      var lat=dt.latitude,lng=dt.longitude;
                      
                      var place=dt.placeName+(dt.placeAddress?", "+dt.placeAddress:"");
                      /*Use elocMarker Plugin to add marker*/
                      if(marker) marker.remove();
                      marker=new MapmyIndia.elocMarker({map:map,eloc:lat?lat+","+lng:eloc,popupHtml:place,popupOptions:{openPopup:true}}).fitbounds();
              }
          }
        }    

            

        // --- appennd_location ---

        function  appennd_location(Ldata){

            console.log(Ldata)
            let arr = [];
            arr.push(Ldata)
            localStorage.setItem("location", JSON.stringify(arr))


            let location_display = document.getElementById("location_display")
            location_display.innerHTML = null;
            location_display.textContent = Ldata
           
        }

        let location_display = document.getElementById("location_display")
        location_display.innerHTML = null;

        let location_data = JSON.parse(localStorage.getItem("location"))
        
        console.log(location_data)
        location_display.textContent = location_data[0]
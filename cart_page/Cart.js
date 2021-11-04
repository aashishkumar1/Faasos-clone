async function getData(){
    let res=await fetch(`https://demo8715768.mockable.io/faasos`)
    let data=await res.json()
    console.log(data)
    showData(data)
} 
getData()

function showData(data){
    let midContainer=document.getElementById('mid-container')
      data.forEach((prod)=>{
         // console.log(prod)
        let div=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        let div4=document.createElement("div")
       // if(prod.category=="Fab Wraps starting at 99 each"){
        let img=document.createElement("img")
         img.src=prod.img
         img.style.width="100%"
         let prod_name=document.createElement("p")
         prod_name.innerText=prod.name
         let prod_price=document.createElement("p")
         prod_price.innerText="₹" +prod.price
         div.append(prod_name,prod_price)
         let prod_desc=document.createElement("p")
         prod_desc.innerText=prod.description
         let prod_rating_div=document.createElement("div")
         let prod_rating=document.createElement("p")
         prod_rating="★"+""+prod.rating
         prod_rating_div.append(prod_rating)
         prod_rating_div.style.backgroundColor="green"
         prod_rating_div.style.color="white"
         prod_rating_div.style.width="15%"
         prod_rating_div.style.borderRadius="4px"
         let addtoCartBtn=document.createElement("button")
         addtoCartBtn.innerText="ADD"
         addtoCartBtn.style.backgroundColor="#FFCA28"
        // addtoCartBtn.style.width="40%"
         addtoCartBtn.className="addtoCartBtn"

      //   if(localStorage.getItem("displayitem")===null) {
     //    localStorage.setItem("displayitem",JSON.stringify([]))
     //}

    
        
         addtoCartBtn.onclick=function() {
                 console.log("Yes")
              let presentitems=JSON.parse(localStorage.getItem("FaasosCart"));
              let bagcount=0;
              console.log(presentitems);
               presentitems.forEach(function (items) {
                
               if(items.name==prod.name) {
                 bagcount++;
                 //let qty=document.getElementById(qty)
                 //qty.innerText="bagcount"
                }
               }); 
               if(bagcount==1) {
                  alert("Already in Cart");
              } else {
                  addtobag(prod);
                  
               }   
               }

               if(localStorage.getItem("FaasosCart")===null) {
         localStorage.setItem("FaasosCart",JSON.stringify([]))
     }
     function addtobag(p) {
     let products_cart=JSON.parse(localStorage.getItem("FaasosCart"));
     products_cart.push(p);

     localStorage.setItem("FaasosCart",JSON.stringify(products_cart));
         }





         div2.append(prod_rating_div,addtoCartBtn)
         div.style.display="flex"
         div.style.justifyContent="space-between"
         div2.style.display="flex"
         div2.style.justifyContent="space-between"
         div3.style.padding="2%"

         div3.append(div,prod_desc,div2)
         div4.append(img,div3)
         midContainer.append(div4)
         div4.style.backgroundColor="white"
      //  }
     
      })
}
let qty=document.getElementById("qty")
let kart=JSON.parse(localStorage.getItem("FaasosCart"))
var count=0;
console.log(kart)
function cartData(){
    kart.forEach((item)=>{
        count++
qty.innerHTML=count+" "+"Item";
        console.log(item.name)
        let div=document.createElement("div")
        let div2=document.createElement("div")
        let product_name=document.createElement("p")
        product_name.innerText=item.name
        product_name.style.width="90%"

        let product_price=document.createElement("p")
        product_price.innerText="₹"+" "+item.price
        //let buttonLeft=document.createElement("button")
        let buttonLeft=document.createElement("img")
        buttonLeft.src="https://github.com/pankaj5417/koovs.com/blob/main/icons/leftbtn.png?raw=true"
       
        let buttonRight=document.createElement("img")
        buttonRight.src="https://github.com/pankaj5417/koovs.com/blob/main/icons/right btn.png?raw=true"
       
       
      
        buttonLeft.style.width="43px"
        buttonLeft.style.marginRight="3px"
      let itemNo=document.createElement("p")
        itemNo.innerText=" "+"1"+" "
       // buttonRight.innerText="+"
        buttonLeft.style.backgroundColor="white"
        buttonRight.style.backgroundColor="white"
        buttonRight.style.width="40px"
        buttonRight.style.height="40px"
        buttonLeft.style.height="40px"
      
        buttonRight.style.marginLeft="3px"
        buttonLeft.className="cartLeftBtn"
        buttonRight.className="cartRightBtn"
        let btn_img = document.createElement("img")
        if (item.type === 'veg') {
            
            btn_img.src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
        } else {
            btn_img.src = "https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png"
        }
       btn_img.style.width="12px"
       btn_img.style.height="12px"

        div2.append( buttonLeft,itemNo,buttonRight)
        div2.style.display="flex"
        div2.style.width="25%"
        div2.style.marginLeft="2%"
        let div3=document.createElement("div")
        div3.append(btn_img,product_name)
        div3.style.display="flex"
        div3.style.alignItems="center"
        div3.style.width="56%"
        div3.style.justifyContent="space-between"



        let cartItem=document.getElementById("cart-item")
        div.append(div3,div2,product_price)
       // product_name.style.width="58%"
        product_price.style.width="10%"
        product_price.style.marginLeft="2%"

        div.style.display="flex"
       // div.style.height="20px"
        div.style.width="100%"
        cartItem.append(div)

        var total=kart.reduce(function(ac,el){ 

            return ac+ Number(el.price)
            },0)
            var total_pr=document.getElementById("total")
            var total_amt=document.getElementById("total-amt")
            //total_pr.style.textAlign="right"
           // total_pr.innerHTML='₹'+" "+total
            total_amt.innerHTML='₹'+" "+total

            //var total_pr2=document.getElementById("total2")
            var tax=0;
            tax=total*0.05
            var gsttax=document.getElementById("gsttax").innerText='₹'+" "+parseInt(tax)
            var total2=total+tax
            total3=total2
            total4=total2
            total_pr.innerHTML='₹'+" "+parseInt(total2)
            total_pr.style.fontWeight="700"
           // total_pr.style.fontSize="16px"
           // total_pr.style.width="13%"
 

           // total_pr.style.marginLeft="10%"
    })
}
cartData()

function viewCoupons(){
    
}

function gotoCart(){
 window.location.href="cart.html"
}

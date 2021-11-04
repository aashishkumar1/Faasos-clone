
/*Modal Functioning Of Search*/
  function search(){
      document.getElementById("searchModal").style.display = "block";
  }

  let close = document.getElementById("close");

  close.addEventListener("click",() => {
      document.getElementById("searchModal").style.display = "none";
  });

/*Modal Functioning Of Search End*/

/*Data Searching Code*/
var searchFood;
async function getData() 
{
  let res = await fetch(`https://demo8715768.mockable.io/faasos`);
  let data = await res.json();
  console.log("My Data:",data);
  searchFood = data;
  
} 
getData();
let searchContent = document.getElementById("searchContent");

function dataSearch(data){
  data.forEach((food) => {
    searchContent.innerHTML = null;
    let div = document.createElement("div");
    div.setAttribute("class","foodData");
    
    let img = document.createElement("img");
    img.src = food.img;
    div.append(img);
    searchContent.append(div);
  });
  console.log(data);
}
function searchFoodData(){
  let data = document.getElementById("searchData-appear").value;
  let arr=[];
  searchFood.forEach((food) => {
   if(food.name.includes(data) || food.category.includes(data))
   {
     arr.push(food);
   }
   
  });
dataSearch(arr);
}



var modal2 = document.getElementById("myModal2");

//  button that opens the modal
var btn2 = document.getElementById("myBtn2");

//  element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

//  onclicks button, open modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks <close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
//functionality of button yellow after only 10 digits
const submitButton2 = document.getElementById("btn2")
const input2 = document.getElementById("email2")
//number
input2.addEventListener("keyup",(e)=>{
let v2 = e.currentTarget.value;
if(v2.length>4){
submitButton2.style.backgroundColor = "#ffd344";
submitButton2.style.color="black"
}
if(v2.length<4){
    submitButton2.style.backgroundColor = "#d2d2d2"
    submitButton2.style.color="white"
}
})

const input3 = document.getElementById("number2")
input3.addEventListener("keyup",(e)=>{
  
   var v3 = e.currentTarget.value;
   if(v3.length>10 || v3.length<10){
    let check2 = document.getElementById("check2")
    console.log(check2.innerText)
    check2.innerText=null
    check2.append("Phone should contain 10 digits")
  }
  if(v3.length==0 || v3.length==10){
    let check = document.getElementById("check2")
    console.log(check2.innerText)
    check2.innerText=null
  }
  if(v3.length==0){
    let check = document.getElementById("check2")
    console.log(check2.innerText)
    check2.innerText=null
    check2.append("Phone should not be empty")
  }
})

//to get the country code
function get2(){
        let code2 = document.getElementById("country-code2").value
        console.log(code2)
        let num2 = document.getElementById("code2")
        num2.innerText=null
         num2.append(code2)
    }
    function signup(e){
e.preventDefault()

let myform2 = document.getElementById("form2")

console.log("myform2",myform2)
let numberbox2 = myform2.number2
let number2 = myform2.number2.value
let name2 = myform2.name2.value
let email2 = myform2.email2.value

//Document.getElementById("number2").innerText=null
    // console.log(email)
    // console.log(name)
    // console.log(number)
if(localStorage.getItem("faasosUser")===null){
    localStorage.setItem("faasosUser", JSON.stringify([]));
}
//0. grab and preapare user data.
let user={
    number2,
    name2,
    email2,
    
};

//console.log("user",user)
//1.get array from local storage 
let credentials2 = true
let arr2 = JSON.parse(localStorage.getItem("faasosUser"))
arr2.forEach(el => {
//console.log(el.number2)
   if(number2==el.number2 || email2==el.email2){
       alert("Already a member")
       credentials2 = false
   }
});
if(credentials2==true){
arr2.push(user)
alert("Sign Up sucsessfull")
modal2.style.display = "none";

let s2 = document.getElementById("number2")
let N = document.getElementById("name2")
let E = document.getElementById("email2")
    s2.value = null
    N.value = null
    E.value = null
    submitButton2.style.backgroundColor = "rgba(210,210,210,255)"
    submitButton2.style.color="white"
}
           

localStorage.setItem("faasosUser",JSON.stringify( arr2));

}
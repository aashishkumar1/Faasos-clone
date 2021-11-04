var modal = document.getElementById("myModal");

//  button that opens the modal
var btn = document.getElementById("myBtn");

//  element that closes the modal
var span = document.getElementsByClassName("close")[0];

//  onclicks button, open modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks <close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//functionality of button yellow after only 10 digits
const submitButton = document.getElementById("btn")
const input = document.getElementById("email")
//number
input.addEventListener("keyup",(e)=>{
let v = e.currentTarget.value;
if(v.length>4){
submitButton.style.backgroundColor = "#ffd344";
submitButton.style.color="black"
}
if(v.length<4){
    submitButton.style.backgroundColor = "#d2d2d2"
    submitButton.style.color="white"
}
})

//to get the country code
function get(){
        let code = document.getElementById("country-code").value
        console.log(code)
        let num = document.getElementById("code")
        num.innerText=null
         num.append(code)
    }
    function signup(e){
e.preventDefault()

let myform = document.getElementById("form")

console.log("myform",myform)
let number = myform.number.value
let name = myform.name.value
let email = myform.email.value

    // console.log(email)
    // console.log(name)
    // console.log(number)
if(localStorage.getItem("faasosUser")===null){
    localStorage.setItem("faasosUser", JSON.stringify([]));
}
//0. grab and preapare user data.
let user={
    number,
    name,
    email,
    
};

//console.log("user",user)
//1.get array from local storage 
let credentials = true
let arr = JSON.parse(localStorage.getItem("faasosUser"))
arr.forEach(el => {

   if(number==el.number || email==el.email){
       alert("Already a member")
       credentials = false
   }
});
if(credentials==true){
arr.push(user)
alert("Sign Up sucsessfull")
}
           

localStorage.setItem("faasosUser",JSON.stringify( arr));

}

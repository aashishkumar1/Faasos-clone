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
//to get the country code

 
function get(){
        let code = document.getElementById("country-code").value
        console.log(code)
        let num = document.getElementById("code")
        num.innerText=null
         num.append(code)
    }
    const submitButton = document.getElementById("btn")
   
    const input = document.getElementById("number")
input.addEventListener("keyup",(e)=>{
  
   var v = e.currentTarget.value;
   if(v.length>10 || v.length<10){
    let check = document.getElementById("check")
    console.log(check.innerText)
    check.innerText=null
    check.append("Phone should contain 10 digits")
  }
  if( v.length==10){
    let check = document.getElementById("check")
    console.log(check.innerText)
    check.innerText=null
  }
  if(v.length==0){
    let check = document.getElementById("check")
    console.log(check.innerText)
    check.innerText=null
    check.append("Phone should not be empty")
  }
    if(v.length==10){
    submitButton.style.backgroundColor = "#ffd344";
    submitButton.style.color="black"
    submitButton.disabled = false
    }
    if(v.length<10){
        submitButton.style.backgroundColor = "#d2d2d2"
        submitButton.style.color="white"
        submitButton.disabled = true
    }
})

function getdata(e){
e.preventDefault()
//document.getElementById("number").innerhtml=null
let number = document.getElementById("number").value
console.log(number)

//console.log(number)

let credentials = true
let arr = JSON.parse(localStorage.getItem("faasosUser"))
arr.forEach(el => {
//console.log(el.number2+"qwerty")
   if(number==el.number2){
       alert("Log in successfull")
       credentials = false
        modal.style.display = "none";
        // s stores the value of number
        let s = document.getElementById("number")
    s.value = null
    submitButton.style.backgroundColor = "rgba(210,210,210,255)"
    submitButton.style.color="white"
      
   }
});
if(credentials==true){
    alert("oops not a member")
}
}
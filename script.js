const emailInput=document.getElementsByClassName('email')[0]
const submitButton=document.getElementsByClassName('access')[0]
const errormessage=document.getElementById('error')
let emailValue
emailInput.addEventListener('input', function (){
    emailValue=emailInput.value
})

submitButton.addEventListener('click', function (){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(emailValue)){
        errormessage.textContent='Oops! Please check your email'
    }else{
        errormessage.textContent=''
    }
})
































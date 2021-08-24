var firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const email=document.getElementById('email');
const password=document.getElementById('passwprd');

function onClick(){
    if(firstName==''){
        alert("Enter your first Name");
    }else if(lastName==''){
        alert("Enter your last name");
    }else if(email==''){
        alert("Enter your Email Address");
    }else if(password==''){
        alert("Enter the password");
    }
}
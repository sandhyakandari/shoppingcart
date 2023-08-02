const signUpBtn=document.getElementById('signup');
const firstName=document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const email=document.getElementById('email')
const password=document.getElementById('password')
const confirmPassword=document.getElementById('confirmPassword')
const alreadyuser=document.getElementById('loginRedirect');


signUpBtn.addEventListener('click',(e)=>{
e.preventDefault();
  
    if(firstName.value==='' || lastName.value==='' || email.value===""|| password.value==="" || confirmPassword.value===''){
        alert('All field are required')
    }
    else{
        if(password.value.trim()!==confirmPassword.value.trim()){
            alert('password not matched')
        }
        else{ if(localStorage.getItem('users')){
            if(checkuseralreadylogin(email.value)){
                console.log('inside alreday user');
                   alert('email already in use please login or use another email')          
            }
            else{
                adduserindb(firstName.value,lastName.value,email.value,password.value);
            }
        }
        else{
            adduserindb(firstName.value,lastName.value,email.value,password.value);
        }
        }
    }
})

function checkuseralreadylogin(email){
    let user=JSON.parse(localStorage.getItem('users'));
        let ob=user.find((obj)=>{
            return obj.email===email
        })
        if(ob){ return true;}
        else return false;
    }

function adduserindb(fname,lname,emailinput,passwordinput){
    let userobj={
        firstName:fname,
        lastName:lname,
        email:emailinput,
        password:passwordinput,
    }
    let users=JSON.parse(localStorage.getItem('users'));
    if(users===null){
        users=[];
    }
    users.push(userobj);
    localStorage.setItem('users',JSON.stringify(users));
    let len=JSON.parse(localStorage.getItem('users')).length;
    sessionStorage.setItem('currentUser',len-1);
   // sessionStorage.setItem('loginUser',JSON.stringify(userobj));
    window.location.href='./shop.html';
}

alreadyuser.addEventListener('click',(e)=>{
   e.preventDefault();
    console.log('skdjf0')
    window.location.href='./login.html';
})
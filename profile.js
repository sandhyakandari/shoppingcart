let shoopingbtn=document.getElementsByClassName('navbar')[0];
let logoutbtn=document.getElementById('logout');
let fn=document.getElementById('firstname');
let ln=document.getElementById('lastname');
let saveinfobtn=document.getElementById('Saveinfo');
let curidxofu=sessionStorage.getItem('currentUser');
let changepasswordbtn=document.getElementById('changePassword');




shoopingbtn.addEventListener('click',()=>{
   
    window.location.href='./shop.html';

})

logoutbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    sessionStorage.removeItem('currentUser');
    window.location.href='./index.html';
})
function runonload(){
let data =JSON.parse(localStorage.getItem('users'));
let firstname=data[curidxofu].firstName;
let lastname=data[curidxofu].lastName;

fn.value=firstname;
ln.value=lastname;
}

runonload();


saveinfobtn.addEventListener('click',(e)=>{
      e.preventDefault();
      let data =JSON.parse(localStorage.getItem('users'));
       let firstn=fn.value;
       let lastn=ln.value;
       console.log(firstn,lastn)
       data[curidxofu].firstName=firstn;
       data[curidxofu].lastName=lastn;   
         localStorage.setItem('users',JSON.stringify(data));
})

changepasswordbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let oldpass=document.getElementById('oldpassword').value;
    let newpass=document.getElementById('password').value;
    let confirmpass=document.getElementById('confirmpassword').value
    let data =JSON.parse(localStorage.getItem('users'));
       
     if(oldpass===data[curidxofu].password){
        if(newpass===confirmpass){
        data[curidxofu].password=newpass;
        alert('passwrod changed')
     }
        else{ alert('pasword not matched');}
    }
    else{ 
        alert('old password is not correct')
    }
    localStorage.setItem('users',JSON.stringify(data));

})
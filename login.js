const loginbtn=document.getElementById('Login');
const email=document.getElementById('email');
const password=document.getElementById('password');
let userdata=localStorage.getItem('users');
   
loginbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(userdata===null){
        alert('Not a existing coustomer please signup');
        window.location.href='./signup.html';
    }
    else{
        let idx=-1;
        let multipleuser=JSON.parse(userdata)
        console.log(userdata);
        for(let i in multipleuser){
            console.log(multipleuser[i]);
            if(multipleuser[i].email===email.value && multipleuser[i].password===password.value){
               //console.log('inside findcost')
               idx=i;
            }      
        }

        if(idx!=-1){
            sessionStorage.setItem('currentUser',idx);
               window.location.href='./shop.html'; }
            else{
                alert('user not logddin');
                window.location.href='./signup.html'
           }
            }
})

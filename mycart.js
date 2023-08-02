//
let cartproductsitem=document.getElementById('left');
//total amount to pay

let sum=0;
let ul=document.getElementById('bill');
const item=document.getElementById("myitems");

//get currrent user idx from sessionstorage
let curuseridx=sessionStorage.getItem('currentUser');
//console.log(curuseridx);
//let userdata=JSON.parse(localStorage.getItem('users'));     
//let productsarray=JSON.parse(localStorage.getItem('productsdata'));
//user cart data;
//let  cartd=userdata[curuseridx].mycart;
//console.log(cartdata);
printdata();



function printdata()
 {  //get current user data
    let userdata=JSON.parse(localStorage.getItem('users'));     
    let productsarray=JSON.parse(localStorage.getItem('productsdata'));
    //user cart data;
    let  cartdata=userdata[curuseridx].mycart;
    console.log(cartdata);
       let mensarr=[];
       if(cartdata.length==0){ cartproductsitem.innerHTML=`<h2 >your cart is empy</h2>`}
for(let i=0;i<cartdata.length;i++){ 
    let obj= productsarray[cartdata[i]-1];
        mensarr.push(obj);
    //    return obj.id==="";
    }
   // localStorage.removeItem('currentproduct');
   // localStorage.setItem('currentproduct',"men's clothing");
   
    cartproductsitem.innerHTML="";
     ul.innerHTML="";
     
     ul.innerHTML=`<h3>Checkout List</h3>`
    for(let i=0;i<mensarr.length;i++){
    cartproductsitem.innerHTML+=`<li class="items" ><img src="${mensarr[i].image}">
        <p id="productdes">${mensarr[i].title}</p>
        <p>Price : ${mensarr[i].price}</p> 
            <button  id="${mensarr[i].id}">Remove from cart</button>
</li> `
ul.innerHTML+=`<li><span id="itemtitle">${i+1} : ${mensarr[i].title}</span><span>
    $${mensarr[i].price}</span></li>` 
   sum=sum+parseInt(mensarr[i].price);    
}
sum=Number(sum).toFixed(2);
ul.innerHTML+=`<li><span>Total</span>
        <span>${sum}</span></li>
        <li><button id="checkoutbtn">Click To Checkout</button></li>`  
        if(cartdata.length==0){ cartproductsitem.innerHTML=`<h2 >your cart is empy</h2>`}
        for(let i=0;i<cartdata.length;i++){ 
            let obj= productsarray[cartdata[i]-1];
                mensarr.push(obj);
            //    return obj.id==="";
            }
    }

 // Link for the documentation:
  //https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration
 
 // Add button code documentation:
//  https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#code-to-add-pay-button
 
document.getElementById('checkoutbtn').addEventListener('click',(e)=>{
    e.preventDefault();
 //  console.log('jds');

 var options = {
      key: "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
      amount: sum * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "MeShop",
      description: "This is your", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      theme: {
        color: "#000",
      },
      image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
    };
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    let userdata=JSON.parse(localStorage.getItem('users'));     
    //user cart data;
   // let  cartdata=userdata[curuseridx].mycart;
   userdata[curuseridx].mycart=[];
   sum=0;
   localStorage.setItem('users',JSON.stringify(userdata));
   printdata();    //e.preventDefault();  
 });   

//remove items form cart
cartproductsitem.addEventListener('click',(e)=>{
    if(e.target.nodeName==='BUTTON'){
        console.log(e.target.id);
         removeformcart(e.target.id);}
   })  

//remove from cart function
function removeformcart(proid){
    let userdata=JSON.parse(localStorage.getItem('users'));     
    //user cart data;
    let  cartdata=userdata[curuseridx].mycart;
    console.log(cartdata);
   let newcartdata= cartdata.filter((ele)=>{
        return ele!=proid;
    })
    userdata[curuseridx].mycart=newcartdata;
    localStorage.setItem('users',JSON.stringify(userdata));
    sum=0;
    printdata();
}   


   
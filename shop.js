const item=document.getElementById('product-category-btns');
let color=['red','black','green','yellow','brown','violet','blue'];
let sizevalue=['S','M','L','XL'];
const Pcontainer=document.getElementById('product-conatainer');
const applyfilterbtn=document.getElementById('applyfilter');
let currentprod;
//add eventListener to product category to select
item.addEventListener('click',(e)=>{
    currentprod=e.target.innerText;
    print(e.target.innerText);
})

const url='https://fakestoreapi.com/products';
//fetching data
async function datavalue(){
    const response= await fetch(url);
    const res= await response.json();
   // console.log(res);
        res.forEach((ele) => {
            let cl1=color[Math.floor(Math.random()*10)];
            let cl2=color[Math.floor(Math.random()*10)];
            let cl3=color[Math.floor(Math.random()*10)];
            ele.color=[cl1,cl2,cl3];
    
            let size1=sizevalue[Math.floor(Math.random()*4)];
            let size2=sizevalue[Math.floor(Math.random()*4)];
            let size3=sizevalue[Math.floor(Math.random()*4)];
            ele.size=[size1,size2,size3];
            
        });
   localStorage.setItem('productsdata',JSON.stringify(res));
    print('All');
}

datavalue();
//display particular category products
function print(category){
        let products=JSON.parse(localStorage.getItem('productsdata'))
        if(category==='All'){
         let activelist=document.getElementById('product-category-btns');       
         console.log(activelist);
         activelist
        localStorage.setItem('currentproduct','All');     
          //let allproducts=localStorage.getItem('currentproduct')
          
          let menclothing=document.getElementById('product-conatainer');
           menclothing.innerHTML="";
          for(let i=0;i<products.length;i++){
            menclothing.innerHTML+=`<li class="items" ><img src="${products[i].image}">
            <div class="rate"><span>${products[i].price}$</span><span>${products[i].size}</span> </div>
            <p>Colors : <i class="fa-solid fa-circle" style="color:${products[i].color[0]};"></i>
                <i class="fa-solid fa-circle" style="color:${products[i].color[1]};"></i></p>
                <p>Rating:<span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span> </p>  
                    <button  id="${products[i].id}">Add To Cart</button>
        </li> `
           
        } 
        }
    
        if(category==='Mens'){ 
           let mensarr= products.filter((obj)=>{
                return obj.category==="men's clothing";
            })
            localStorage.removeItem('currentproduct');
            localStorage.setItem('currentproduct',"men's clothing");
            let menclothing=document.getElementById('product-conatainer');
            menclothing.innerHTML="";
            for(let i=0;i<mensarr.length;i++){
            menclothing.innerHTML+=`<li class="items" ><img src="${mensarr[i].image}">
            <div class="rate"><span>${mensarr[i].price}$</span><span>${mensarr[i].size}</span> </div>
            <p>Colors : <i class="fa-solid fa-circle" style="color:${mensarr[i].color[0]};"></i>
                <i class="fa-solid fa-circle" style="color:${mensarr[i].color[1]};"></i></p>
                <p>Rating:<span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span> </p>  
                    <button  id="${mensarr[i].id}">Add To Cart</button>
        </li> `
            }     }
            if(category==="Women"){
                let mensarr= products.filter((obj)=>{
                    return obj.category==="women's clothing";
                })
                localStorage.removeItem('currentproduct');
                localStorage.setItem('currentproduct',"women's clothing");
                let menclothing=document.getElementById('product-conatainer');
                menclothing.innerHTML="";
                for(let i=0;i<mensarr.length;i++){
                menclothing.innerHTML+=`<li class="items" ><img src="${mensarr[i].image}">
                <div class="rate"><span>${mensarr[i].price}$</span><span>${mensarr[i].size}</span> </div>
                <p>Colors : <i class="fa-solid fa-circle" style="color:${mensarr[i].color[0]};"></i>
                    <i class="fa-solid fa-circle" style="color:${mensarr[i].color[1]};"></i></p>
                    <p>Rating:<span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span> </p>  
                        <button  id="${mensarr[i].id}">Add To Cart</button>
            </li> `
                }   

            }

            if(category==="Electronics"){
                let mensarr= products.filter((obj)=>{
                    return obj.category==="electronics";
                })
                localStorage.removeItem('currentproduct');
                localStorage.setItem('currentproduct',"electronics");
                let menclothing=document.getElementById('product-conatainer');
                menclothing.innerHTML="";
                for(let i=0;i<mensarr.length;i++){
                menclothing.innerHTML+=`<li class="items" ><img src="${mensarr[i].image}">
                <div class="rate"><span>${mensarr[i].price}$</span><span>${mensarr[i].size}</span> </div>
                <p>Colors : <i class="fa-solid fa-circle" style="color:${mensarr[i].color[0]};"></i>
                    <i class="fa-solid fa-circle" style="color:${mensarr[i].color[1]};"></i></p>
                    <p>Rating:<span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span> </p>  
                        <button  id="${mensarr[i].id}">Add To Cart</button>
            </li> `
                }   

            }
            if(category==="Jewellery"){
                let mensarr= products.filter((obj)=>{
                    return obj.category==="jewelery";
                })
                // did this for further apply filter to currents category products
                localStorage.removeItem('currentproduct');
                localStorage.setItem('currentproduct',"jewelery");
                let menclothing=document.getElementById('product-conatainer');
                menclothing.innerHTML="";
                for(let i=0;i<mensarr.length;i++){
                menclothing.innerHTML+=`<li class="items" ><img src="${mensarr[i].image}">
                <div class="rate"><span>${mensarr[i].price}$</span><span>${mensarr[i].size}</span> </div>
                <p>Colors : <i class="fa-solid fa-circle" style="color:${mensarr[i].color[0]};"></i>
                    <i class="fa-solid fa-circle" style="color:${mensarr[i].color[1]};"></i></p>
                    <p>Rating:<span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span> </p>  
                        <button  id="${mensarr[i].id}">Add To Cart</button>
            </li> `
                }   

            }

    }

//
Pcontainer.addEventListener('click',(e)=>{
   console.log(e);
    if(e.target.nodeName==='BUTTON'){
        let userdata=JSON.parse(localStorage.getItem('users'));
        let getcuruseridx=JSON.parse(sessionStorage.getItem('currentUser'));
        console.log(e.target.id); 
        console.log(getcuruseridx);
        if(userdata[getcuruseridx].mycart){
            userdata[getcuruseridx].mycart.push(e.target.id);
        }
        else{
            let ar=[];
            ar.push(e.target.id);
            userdata[getcuruseridx].mycart=ar;
        }
        alert('item added to cart')
        localStorage.setItem('users',JSON.stringify(userdata));
        console.log('get button presssed');
    }
    else {
        console.log('no btu rpe');
    }
})

const products = [
    {
        id:1,
        name: "Relaxed-fit cat show view",
        brand: 'zaza',
        type:"men",
        price: "$1,234.23",
        img: ["images/item01.jpg","images/item011.jpg","images/item012.jpg"],
        color: "black",
        size: "L",
        Qty: 100,
        sold:55,      
        sale: "50%",
        evaluate:4,
        productType:"Sweater",
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
        ],
      },
      {
        id:2,
        name: "Relaxed-fit cat show view",
        brand: 'zaza',
        type:"men",
        price: "$100.00",
        img: ["images/img0102.jpg","images/item01.jpg","images/item012.jpg"],
        color: "gray",
        size: "L",
        Qty: 100,
        sold:55,      
        sale: "0%",
        evaluate:4,
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
         ],
         productType:"Sweater"
      },
      {
        id:3,
        name: "Relaxed-Fit Cotton Shirt",
        brand: 'POLO',
        type:"women",
        price: "$100.00",
        img: ["images/item02.jpg","images/item02-1.jpg","images/item02-2.jpg"],
        color: "grey",
        size: "L",
        Qty: 100,
        sold:10,      
        sale: "0%",
        evaluate:4,
        productType:"Shirt",
        review:[
       
        
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
      ],
      },
      {
        id:4,
        name: "Relaxed-Fit Cotton Shirt",
        brand: 'zaza',
        price: "$400.00",
        img: ["images/item02-2.jpg","images/item02.jpg","images/item02-1.jpg"],
        color: "grey",
        size: "L",
        Qty: 100,
        sold:10,      
        sale: "10%",
        evaluate:4,
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
        ],
        productType:"Shirt"
      },

      {
        id:5,
        name: "Tailored Fit Mesh-Panel Polo",
        brand: 'zaza',
        price: "$460.00",
        type:"women",
        img: ["images/item03-2.jpg","images/item03-3.jpg","images/item03-4.jpg"],
        color: "blue",
        size: "L",
        Qty: 100,
        sold:90,      
        sale: "0",
        evaluate:0,
        review:[],
        productType:"Polo"
      },
      {
        id:6,
        name: "Tailored Fit Mesh-Panel Polo",
        brand: 'POLO',
        type:"women",
        price: "$460.00",
        img: ["images/item03-1.jpg","images/item03-4.jpg", "images/item03-5.jpg "],
        color: "blue",
        size: "L",
        Qty: 100,
        sold:30,      
        sale: "13%",
        evaluate:4,
        productType:"Polo",
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
      ],
      },
      {
        id:7,
        name: "Slim Fit Cotton Oxford Shirt",
        brand: 'Levis',
        type:"women",
        price: "$460.00",
        img: ["images/item04-1.jpg","images/item04-2.jpg", "images/item04-3.jpg"],
        color: "blue",
        size: "L",
        Qty: 100,
        sold:90,      
        sale: "0%",
        evaluate:4,
        review:[],
        productType:"Shirt"
      },
      {
        id:8,
        name: "Slim Fit Cotton Oxford Shirt",
        brand: 'Levis',
        type:"women",
        price: "$560.00",
        img: ["images/item04-2.jpg", "images/item04-4.jpg", "images/item04-5.jpg"],
        color: "blue",
        size: "M",
        Qty: 100,
        sold:10,      
        sale: "0%",
        evaluate:1,
        productType:"Shirt",
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 1
  
          },
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 1
  
          },
      ],
      },
      {
        id:9,
        name: "Faxon Canvas Low-Top Sneaker",
        brand: 'Levis',
        type:"men",
        price: "$160.00",
        img: ["images/item051.jpg", "images/item05-1.jpg", "images/item05-2.jpg"],
        color: "blue",
        size: "42",
        Qty: 100,
        sold:0,      
        sale: "0%",
        evaluate:5,
        productType:"Shoes",
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 5
  
          },
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
      ],
      },
      {
        id:10,
        name: "Faxon Canvas Low-Top Sneaker",
        brand: 'Levis',
        type:"men",
        price: "$170.00",
        img: ["images/item052.jpg","images/item051.jpg", "images/item05-3.jpg"],
        color: "gray",
        size: "42",
        Qty: 100,
        sold:20,      
        sale: "0%",
        evaluate:0,
        productType:"Shoes",
        review:[]
      },
      {
        id:11,
        name: "Viscose-Cashmere Scarf",
        brand: 'LACOSTE',
        type:"men women",
        price: "$70.00",
        img: ["images/item061.jpg", "images/item06-1.jpg", "images/item06-3.jpg"],
        color: "gray",
        size: "42",
        Qty: 50,
        sold:20,      
        sale: "0%",
        evaluate:0,
        productType:"Accessories",
        review:[]
      },
      {
        id:12,
        name: "Viscose-Cashmere Scarf",
        brand: 'LACOSTE',
        type:"men women",
        price: "$70.00",
        img: ["images/item06-2.jpg","images/item061.jpg", "images/item06-1.jpg"],
        color: "black",
        size: "42",
        Qty: 50,
        sold:40,      
        sale: "20%",
        evaluate:2,
        productType:"Accessories",
        review:[
          {
              IDreview:100,
              nameReview: "david",
              dateReview: "Jun 10,2019",
              titleReview: "Good",
              contentReview: "That is goood!",
              rateReview: 2
  
          },
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 2
  
          },
      ],
      },
      {
        id:13,
        name: "Plaid Cotton Oxford Shirt",
        brand: 'Levis',
        type:"men",
        price: "$730.00",
        img: ["images/item071.jpg","images/item07-2.jpg","images/item07-2.jpg"],
        color: "black",
        size: "42",
        Qty: 500,
        sold:43,      
        sale: "0%",
        evaluate:4,
        productType:"Shirt",
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
  
      ],
      },
      {
        id:14,
        name: "Rae Suede Sandal",
        brand: 'GUESS',
        type:"women",
        price: "$130.00",
        img: ["images/item09.jpg","images/item09-1.jpg","images/item09-2.jpg"],
        color: "brown",
        size: "42",
        Qty: 500,
        sold:1,      
        sale: "0%",
        evaluate:0,
        review:[],
        productType:"Shoes"
      },
      {
        id:15,
        name: "Relaxed Painted Oxford Shirt",
        brand: 'GUESS',
        type:"women",
        price: "$999.00",
        img: ["images/item10.jpg","images/item10-1.jpg","images/item10-2.jpg"],
        color: "brown",
        size: "42",
        Qty: 500,
        sold:32,      
        sale: "5%",
        evaluate:5,
        productType:"Shirt",
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 5
  
          },
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 5
  
          },
      ],
      },
      {
        id:16,
        name: "Rounded Cat Eye Sunglasses",
        brand: 'POLO',
        type:"women",
        price: "$600.00",
        img: ["images/item11.jpg","images/item11-1.jpg","images/item11-2.jpg"],
        color: "black",
        size: "42",
        Qty: 500,
        sold:2,      
        sale: "0%",
        evaluate:5,
        
        productType:"Accessories",
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 5
  
          },
          {
              IDreview:101,
              nameReview: "anh",
              dateReview: "Jun 10,2020",
              titleReview: "not bad",
              contentReview: "This theme is amazing!",
              rateReview: 4
  
          },
      ],
      },
      {
        id:17,
        name: "Rounded Cat Eye Sunglasses",
        brand: 'POLO',
        type:"women",
        price: "$300.00",
        img: ["images/item12.jpg","images/item12-1.jpg", "images/item12-2.jpg"],
        color: "white",
        size: "42",
        Qty: 500,
        sold:1,      
        sale: "0%",
        evaluate:5,
        productType:"Accessories",
        review:[
          {
              IDreview:100,
              nameReview: "hoang anh",
              dateReview: "Jun 10,2021",
              titleReview: "That Good",
              contentReview: "This theme is amazing!",
              rateReview: 5
  
          },
        
      ],
      },

]

// if(localStorage.getItem("products") == null){
//    = JSON.parse(localStorage.setItem("products", JSON.stringify("productss")))
 
// }
//const products = JSON.parse(localStorage.getItem("products"))



//mo model-dialog
setTimeout(function(){
  $(".model-dialog").addClass("active-model")
  $(".model-dialog").show()
  document.querySelector("body").style.overflow = 'hidden';  
},2000)



var productCart=[]//luu tru danh sach sp trong cart
if(localStorage.getItem("cartProduct") !== null){
  productCart = JSON.parse(localStorage.getItem("cartProduct"))
  $(".login__cart-num").text(productCart.length); //load so luong sp trong mang len giao dien

}
// localStorage.removeItem("cartProduct")

var uniqueproductCart = unique(productCart);//danh sach cac san pham khong trung nhau trong cart
var numProductInCart =  tanXuat(uniqueproductCart,productCart);//tan xuat xuat hien cua cac phan tu trong cart


//////////////////////////////////////////////render bestSeller
var BestSellerProducts = []
BestSellerProducts = products.sort(function(p1,p2){return p2.sold - p1.sold}).filter((val,idx) =>{//lay top 8 sp ban nhieu nhat
  return idx < 8
})
renderProducts(BestSellerProducts,".bestSeller_list")
  renderStar(BestSellerProducts)//render star


//render trendding products
var trenddingProducts = []
trenddingProducts = products.sort(function(p1,p2){return p2.Qty- p1.Qty}).filter((val,idx) =>{//lay top 8 sp co sl nhieu nhat trong mang
  return idx < 8
})
renderProducts(trenddingProducts,".trendding_list")
renderStar(trenddingProducts)//render star






function renderProducts(list,bestSeller_list){

    list.forEach(val =>{
        const pricesale = +val.sale.slice(0, val.sale.length-1)
       if(pricesale > 0){

        $(`${bestSeller_list}`).append(`
        <did class="col-3 col-md-4 col-sm-6">
       <div class="card" id="${val.id}">
         <div class="img">
           <span class="sale">${val.sale}</span>
           <div class="icons">
             <span class="icon_eye"><i class="far fa-eye"></i></span>
             <span class="icon_heart"><i class="far fa-heart"></i></span>
             <span class="icon_compare"><i class="las la-balance-scale" style = "font-size:22px"></i> </span>
           </div>
           <a><img src="${val.img[0]}" alt="" style=" cursor: pointer;" class="goDetails"></a>
           <div class="clock">
           <div class="clock__day">
             <span class="day"></span>
             <span>Day</span>
           </div>
           <div class="clock__hour">
             <span class="hour"></span>
             <span>Hrs</span>
           </div>
           <div class="clock__min">
             <span class="min"></span>
             <span>Min</span>
           </div>
           <div class="clock__sec">
             <span class="sec"></span>
             <span>Sec</span>
           </div>
         </div>
         </div>
         <div class="card__about">
             <p class="title"><a href="">${val.brand}</a> </p>
             <div class="card__about-start ${val.id}" ></div>
               <p class="card__nameProduct"><a href="">${val.name}</a></p>
               <p class="card__priceProduct"><span class="priceSlae">${TinhTienSauSale(val.price,pricesale)}</span><span class="initiPrice">${val.price}</span></p>

               <div class="addToCart" id="myBtn">
                 <a href=""> <i class="las la-shopping-bag"></i>Add To Cart</a>
               </div>
         </div>
     </div>
     </div>
     
       
       `);
      
       }
       else{

         $(`${bestSeller_list}`).append(`
        <did class="col-3 col-md-4 col-sm-6">
       <div class="card" id="${val.id}">
         <div class="img">
          
           <div class="icons">
             <span class="icon_eye"><i class="far fa-eye"></i></span>
             <span class="icon_heart"><i class="far fa-heart"></i></span>
             <span class="icon_compare"><i class="las la-balance-scale" style = "font-size:22px"></i></span>
           </div>
           <a><img class="goDetails" src="${val.img[0]}" alt=""  style=" cursor:pointer;"></a>
          
         </div>
         <div class="card__about">
                <p class="title"><a href="">${val.brand}</a> </p>
                <div class="card__about-start ${val.id}" ></div>
                <p class="card__nameProduct"><a href="">${val.name}</a></p>
                <p class="card__priceProduct">${val.price}</p>

                <div class="addToCart">
                    <a> <i class="las la-shopping-bag"></i>Add To Cart</a>
                </div>
         </div>
     </div>
     </div>
     
       
       `);
       }

    })
  

  
}

//render star
function renderStar(list){
   list.forEach(val =>{
    $(`.${val.id}`).empty()
   })
   list.forEach(val =>{
       for(let i = 0; i < val.evaluate;i++){
        $(`.${val.id}`).append(`
              <i class="fas fa-star starActive"></i>
        `)
        
       }
   })
   list.forEach(val =>{
    for(let i = 0; i < 5 - val.evaluate;i++){
     $(`.${val.id}`).append(`
     <i class="far fa-star"></i>
     `)
     
    }
  
})

}




//an vao them vao gio hang
$(".addToCart").click(function (e) { 
  e.preventDefault();
  const IDcurrent= $(this).parent().parent().attr("id");
  const item = products.filter(val => val.id == IDcurrent)
 
  productCart.push(item[0])
 
  
  
  $(".login__cart-num").text(productCart.length); //load so luong sp trong mang len giao dien
 
  localStorage.setItem("cartProduct", JSON.stringify(productCart.flat(Infinity)))
   uniqueproductCart = unique(productCart);//danh sach cac san pham khong trung nhau trong cart
   numProductInCart =  tanXuat(uniqueproductCart,productCart);//tan xuat xuat hien cua cac phan tu trong cart
 
  renderCartTab(uniqueproductCart,numProductInCart)    
  
  $(".login__content_cart").hide()
  
  //mo model
  renderModel(item[0],productCart)



  $("#myModal").fadeIn(500);
  $("#myModal").addClass("active-model")
  document.querySelector("body").style.overflow = 'hidden';  


});

/////////////////////////////////////////



//cart trong header

//click vao icon cart
$(".cart-click").click(function (e) {
  console.log("cart ne");

  e.preventDefault();

  $(".login__content_cart").empty();
  //trong cart khong co sp nao
  if (productCart.length == 0) {
    $(".login__content_cart").css({
      width: "250px",
      height: "150px",
    });
    $(".login__content_cart").append(`
        <div class="login__content-inner"><div>
    `);
    $(".login__content-inner").append(`
       <i class="fas fa-shopping-bag"></i>
       <p>No Products In The Cart</p>
      `);
  
   $(".login__content--account").hide();
   
    $(".login__content_cart").slideToggle()
    $(".login__content_cart").addClass("cart_active")
  } 
  else{//trong cart co sp
    $(".login__content--account").hide();
   
      renderCartTab(uniqueproductCart,numProductInCart)    
    
  }


});


///render san pham
function rederCartProducts(products,arrNum) {
  $(".login__content-cart-products").empty()
  const curentHeight =  $(".login__content_cart").outerHeight()

 
  products.forEach((val,idx) => {
      const pricesale = +val.sale.slice(0, val.sale.length-1)
      if(pricesale==0){
      
              $(".login__content-cart-products").append(`
              <div class= "products">
              <div class="left">
                  <img src="${val.img[0]}" alt="">
                  <div class="name-product">
                      <p class="name">${val.name}</p>
                      <p class="color">${val.color}</p>
                      <p class="num">${arrNum[idx]}X <span class="price">${val.price}</span></p>
                  </div>
                </div>
            
                  <i class="fas fa-dumpster cart__delete" data-id="${val.id}"></i>
            
            </div> 
              
          `);   
      }
      else{
     
        $(".login__content-cart-products").append(`
        <div class= "products">
        <div class="left">
            <img src="${val.img[0]}" alt="">
            <div class="name-product">
                <p class="name">${val.name}</p>
                <p class="color">${val.color}</p>
                <p class="num">${arrNum[idx]}X <span class="price" style="color:red; padding:0px 4px">${TinhTienSauSale(val.price,pricesale)}</span><span style=" text-decoration: line-through;">${val.price}</span></p>
            </div>
          </div>
      
            <i class="fas fa-dumpster cart__delete" data-id="${val.id}"></i>
      
      </div> 
        
    `);   
      }
     
    });

}

function renderCartTab(products,numArr){
  $(".login__content_cart").empty()
  $(".login__content_cart").css({
    width: "280px",
    height: `${120 * products.length + 250}px`,
      // bottom:`${-120 * productCart.length - 250}px`,
  });



  $(".login__content_cart").append(`
      <div class="login__content-cart-products"><div>
 `);
      rederCartProducts(products,numArr);
    renderTermCart()

    $(".login__content_cart").slideToggle()
    // $(".login__content_cart").slideToggle("slow");


}
//render Term
function renderTermCart(){

  $(".login__content-cart-products").append(`
        <div class="terms">
        <div class="total">
        <span class="title">TOTAL</span>
        <span class="priceTotal">${"$" + totalMoney(uniqueproductCart,numProductInCart).toFixed(2)}</span>
        </div>
        <div class="checkBox">
        <div class="pretty p-default p-curve" >
          <input type="checkbox" />
          <div class="state">
            <label style="font-size:12px">I agree with the terms and conditions</label>
          </div>
        </div>
        </div>
        <div class="buttom">
        <button>PROCEED TO CHECKOUT</button>
        <div class="view">
            <a href="cart.html">VIEW CART</a>
        </div>
        
        </div>
    </div>
    `)
}



//click bar hien cart
$(".cart-click").click(function (e) { 
e.preventDefault();
$(".header__tab-cart").toggleClass("header__tab_cart-active")


$(".header__screen").toggleClass("header__screen-black")

  rederCartProducts(uniqueproductCart,numProductInCart)
  renderTermCart()


});

//lick vao thung rac
document.addEventListener("click", function(e){
  const target = e.target

  if(target.classList.contains("cart__delete")){
      const ID = target.dataset.id;//lay ra ID sp can xoa
      const currentPoss = uniqueproductCart.findIndex(val => val.id == ID)
      uniqueproductCart.splice(currentPoss,1)//xoa sp can xoa khoi mang
      numProductInCart.splice(currentPoss,1)//xoa so lan xuat hien khoi mang

      for(let i = 0; i < productCart.length; i++){
        if(productCart[i].id==ID){
          productCart.splice(i,1)
          i--
          console.log("xoa");
        }
      }
      console.log(productCart);
      localStorage.setItem("cartProduct", JSON.stringify(uniqueproductCart))
      $(".login__cart-num").text(uniqueproductCart.length); //load so luong sp trong mang len giao dien
      rederCartProducts(uniqueproductCart,numProductInCart)
      $(".login__content_cart").css({
        width: "280px",
        height: `${120 * uniqueproductCart.length + 250}px`,
         // bottom:`${-120 * uniqueproductCart.length - 225}px`,
      });
      renderTermCart()     
  }
});


//render model
function renderModel(item,listProduct){
  $(".box").empty()
  $(".box").append(`
  <div class="row">
  <div class="col-6 col-sm-12">
    <div class="box__left">
      <div class="box__left-title">
        <i class="fas fa-check"></i><span>Added to cart successfully!</span>
      </div>
      <div class="img">
        <img src="${item.img[0]}" alt="">
        <p class="name">${item.name}</p>
        <p class="QTY">QTY: ${item.Qty}</p>
        <div class="total">Price: <span class="total-price">${item.price}</span></div>
      </div>
    </div>
  </div>
  <div class="col-6 col-sm-12">
    <div class="box__right">
      <div class="box__right-top">
        <p class="right_acc">There are <span class="num">${listProduct.length}</span> items
         
        </p>
        <p class="right_acc">in your cart</p>
        <p class="total_right">TOTAL: <span class="box__right-money">${"$" + totalMoney(uniqueproductCart,numProductInCart).toFixed(2)}</span></p>
        
      </div>
      <div class="coutinua">
        <a href="">CONTINUA SHOPPING</a>
      </div>
      <div class="viewcart">
        <a href="cart.html">VIEW CART</a>
      </div>
      <div class="term">
      <input type="checkbox" id="checkBox">
      <label for="checkBox">I agree with the terms and conditions</label>
     
      </div>
      <div class="checkout">
        <a href="">PROCEED TO CHECKOUT</a>
      </div>
    </div>
  </div>
</div>`)
}




//$400
//tra ve tien sau khi da sale
function TinhTienSauSale(money, sale){
    const newMoney =   +money.slice(1,-1).replace(/,/g,'')
    
    return '$'+(newMoney - newMoney*sale/100).toFixed(2)
}

//lay ra mang cac phan tu doc lap
function unique(arr) {
  const newArr = []
  for(let i = 0; i < arr.length;i++){
    let bool = true
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i].id == arr[j].id){
          bool = false
        }
    }
    if(bool){
      newArr.push(arr[i])
    }
  }
  return newArr
}

//lay ra tan xuat xuat hien cua cac phan tu trong mang
function tanXuat(arr1,arr2){
  const arrCount = []
  for(let i = 0; i < arr1.length; i++){
    let count = 0
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i].id==arr2[j].id){
        count++
      }
    }
    arrCount.push(count)
    
  }
  return arrCount
}

function totalMoney(uniqueproductCart,numProductInCart){
    
    var totalMoney = uniqueproductCart.reduce((acc,val,idx)=>{
      const pricesale = +val.sale.slice(0, val.sale.length-1)
      if(pricesale==0){
        var newMoney =   +val.price.slice(1,-1).replace(/,/g,'') * numProductInCart[idx]
      }
      else{
        var newMoney = TinhTienSauSale(val.price,pricesale).slice(1,-1).replace(/,/g,'') * numProductInCart[idx]
      }
      
    
    return  acc + newMoney
    },0)
  return totalMoney
}


// localStorage.removeItem("cartProduct")
function radomID(){
    return Math.floor(Math.random() * 10000)
}


//click lay ra ID de xem chi tiet san pham
$(document).click(function (e) { 
  //e.preventDefault();
    const target = e.target
   
    if(target.classList.contains("goDetails")){
      const dataID = target.parentNode.parentNode.parentNode.id
      //lay ra san pham co ma la dataID
      const item = products.filter(val =>{
          return val.id==dataID
      })

     //dua vao localStore
    
     localStorage.setItem("item", JSON.stringify(item))
     
     window.location.href = "details.html"
    }
    
});




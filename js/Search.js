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


//renderProducts(products, ".listSearch")
function renderProducts(list,bestSeller_list){

    list.forEach(val =>{
        const pricesale = +val.sale.slice(0, val.sale.length-1)
        console.log("search");
       if(pricesale > 0){

        $(`${bestSeller_list}`).append(`
        <did class="col-3 col-md-4 col-sm-6">
       <div class="card" id="${val.id}">
         <div class="img">
           <span class="sale">${val.sale}</span>
           <div class="icons">
             <span class="icon_eye"><i class="far fa-eye"></i></span>
             <span class="icon_heart"><i class="far fa-heart"></i></span>
             <span class="icon_compare clickCompare compareRender" id = ${radomDataID()} data-id="${val.id}"><i data-id="${val.id}" class="las la-balance-scale icon__clickCompare" style = "font-size:22px"></i> </span>
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
             <span class="icon_compare clickCompare compareRender" id = ${radomDataID()} data-id="${val.id}"><i data-id="${val.id}" class="las la-balance-scale icon__clickCompare" style = "font-size:22px"></i></span>
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

//lay value can search
const valueSearch = localStorage.getItem("itemSearch")
//loc ra cac san pham co tu khoa valueSearch
const searchArr = products.filter(val =>{
    return val.name.toLowerCase().includes(valueSearch.toLowerCase())
})

$(".search-name").text(valueSearch.toUpperCase())
$(".search-itemNum").text(searchArr.length)

//xu ly load panigation
$rowsPerPage = 8
$curentPage = 1

const row_page = $rowsPerPage //so row tren 1 trang
const current_page = $curentPage

renderUsers(searchArr, row_page, current_page);
renderNavigation(searchArr, row_page);


$(".btn").click(function (e) {
  e.preventDefault();
  $(".btn").removeClass("active")
  $(this).toggleClass("active")
  const newPage = $(this).text();
  $(".btn-descending").show()
  $(".loader").show()
  $(".bg-loader").show()
  setTimeout(function(){
    renderUsers(searchArr, row_page, $(".active").text());
    renderStar(searchArr)
    $(".loader").hide()
    $(".bg-loader").hide()
  },1000)
 
});



function renderUsers(users, row_page, page) {
  $(".listSearch").empty();
  page--;
  let start = row_page * page;
  let end = start + row_page;
  let currentUsers = users.filter((val, index) => {
    return index >= start && index < end;
  });
 // console.log(currentUsers);
 
  currentUsers.map(val => {
    const pricesale = +val.sale.slice(0, val.sale.length - 1);
    if (pricesale > 0) {
      $(".listSearch").append(`
        <did class="col-3 col-md-4 col-sm-6">
       <div class="card" id="${val.id}">
         <div class="img">
           <span class="sale">${val.sale}</span>
           <div class="icons">
             <span class="icon_eye"><i class="far fa-eye"></i></span>
             <span class="icon_heart"><i class="far fa-heart"></i></span>
             <span class="icon_compare clickCompare compareRender" id = ${radomDataID()} data-id="${val.id}"><i data-id="${val.id}" class="las la-balance-scale icon__clickCompare" style = "font-size:22px"></i> </span>
           </div>
           <a><img src="${val.img[0]}" alt="" class="goDetails"  style="cursor: pointer;"></a>
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
               <p class="card__priceProduct"><span class="priceSlae">${TinhTienSauSale(
                 val.price,
                 pricesale
               )}</span><span class="initiPrice">${val.price}</span></p>

               <div class="addToCart" id="myBtn">
                 <a class="addtocart"  data-id="${
                   val.id
                 }"> <i class="las la-shopping-bag"></i>Add To Cart</a>
               </div>
         </div>
     </div>
     </div>
     
       
       `);
    } else {
      $(".listSearch").append(`
        <did class="col-3 col-md-4 col-sm-6">
       <div class="card" id="${val.id}">
         <div class="img">
          
           <div class="icons">
             <span class="icon_eye"><i class="far fa-eye"></i></span>
             <span class="icon_heart"><i class="far fa-heart"></i></span>
             <span class="icon_compare clickCompare compareRender" id = ${radomDataID()} data-id="${val.id}"><i data-id="${val.id}" class="las la-balance-scale icon__clickCompare" style = "font-size:22px"></i></span>
           </div>
           <a><img src="${val.img[0]}" alt="" class="goDetails" style="cursor: pointer;"></a>
          
         </div>
         <div class="card__about">
                <p class="title"><a href="">${val.brand}</a> </p>
                <div class="card__about-start ${val.id}" ></div>
                <p class="card__nameProduct"><a href="">${val.name}</a></p>
                <p class="card__priceProduct">${val.price}</p>

                <div class="addToCart">
                    <a class="addtocart" data-id="${val.id}"> <i class="las la-shopping-bag"></i>Add To Cart</a>
                </div>
         </div>
     </div>
     </div>
     
       
       `);
    }
  });
}



function renderNavigation(users, row_page) {
  $(".pagination").empty()
  let numNav = Math.ceil(users.length / row_page);
  for (let i = 1; i <= numNav; i++) {
    $(".pagination").append(`
         <a class="btn" id="${radomDataID()}" >${i}</a>
  `);
    
  }
  $(".pagination").append(`
         <a class="btn-descending">&raquo;</a>
  `)
  $(".btn").first().addClass("active")

}

//click de tang len trang
$(".btn-descending").click(function (e) { 
    e.preventDefault();
   let pageCurrent = $(".active").text();
  const ID =  $(".active").attr("id");
  
   if(pageCurrent <  Math.ceil(searchArr.length / row_page) ){//can sua cho nay
    $(`#${ID}`).removeClass("active")
  
    $(`#${ID}`).next().addClass("active")//them class Active cho so dang sau 
    //render lai trang
    //mo model-dialog
    $(".loader").show()
    $(".bg-loader").show()
    // $('html, body').animate({
    //   scrollTop:0
    // },1000)
    setTimeout(function(){
      renderUsers(searchArr, row_page, $(".active").text());
      renderStar(searchArr)
      $(".loader").hide()
      $(".bg-loader").hide()
   
    },1000)
   
   }
   else{
       $(this).hide()
   }
});


function radomDataID(){
  return Math.floor(Math.random() * 100000)
}


//render star
renderStar(products)
function renderStar(list){
  console.log("star");
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

//thuc hien click vao them gio hang
var productCart = []; //luu tru danh sach sp trong cart
if (localStorage.getItem("cartProduct") !== null) {
  productCart = JSON.parse(localStorage.getItem("cartProduct"));
  $(".login__cart-num").text(productCart.length); //load so luong sp trong mang len giao dien
}
// localStorage.removeItem("cartProduct")

var uniqueproductCart = unique(productCart); //danh sach cac san pham khong trung nhau trong cart
var numProductInCart = tanXuat(uniqueproductCart, productCart); //tan xuat xuat hien cua cac phan tu trong cart


//an vao them vao gio hang
// lam xong phan them san pham vao gio hang
$(document).click(function (e) {
  //e.preventDefault();
  const target = e.target;
  // console.log(target.classList.contains("addToCart"));
  if (target.classList.contains("addtocart")) {
    const IDcurrent = target.dataset.id;
    console.log(IDcurrent);
    const item = products.filter((val) => val.id == IDcurrent);
    productCart.push(item[0]);

    $(".login__cart-num").text(productCart.length); //load so luong sp trong mang len giao dien

    localStorage.setItem(
      "cartProduct",
      JSON.stringify(productCart.flat(Infinity))
    );
    uniqueproductCart = unique(productCart); //danh sach cac san pham khong trung nhau trong cart
    numProductInCart = tanXuat(uniqueproductCart, productCart); //tan xuat xuat hien cua cac phan tu trong cart

    renderCartTab(uniqueproductCart, numProductInCart);

    $(".login__content_cart").hide();

    //  mo model
    renderModel(item[0], productCart);

    $("#myModal").fadeIn(500);
    $("#myModal").addClass("active-model");
    document.querySelector("body").style.overflow = "hidden";
  }
});
// //render model
function renderModel(item, listProduct) {
  $(".box").empty();
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
        <div class="total">Price: <span class="total-price">${
          item.price
        }</span></div>
      </div>
    </div>
  </div>
  <div class="col-6 col-sm-12">
    <div class="box__right">
      <div class="box__right-top">
        <p class="right_acc">There are <span class="num">${
          listProduct.length
        }</span> items
         
        </p>
        <p class="right_acc">in your cart</p>
        <p class="total_right">TOTAL: <span class="box__right-money">${
          "$" + totalMoney(uniqueproductCart, numProductInCart).toFixed(2)
        }</span></p>
        
      </div>
      <div class="coutinua">
        <a href="">CONTINUA SHOPPING</a>
      </div>
      <div class="viewcart">
        <a href="cart.html">VIEW CART</a>
      </div>
      <div class="term">
      <input type="checkbox" id="checkboxColl">
      <label for="checkboxColl">I agree with the terms and conditions</label>
     
      </div>
      <div class="checkout">
        <a href="">PROCEED TO CHECKOUT</a>
      </div>
    </div>
  </div>
</div>`);
}


//render compare title
var compareListInSearch = JSON.parse(localStorage.getItem("compareList"))


//console.log(compareList);
renderCompare(compareListInSearch)
function renderCompare(list){
  list.forEach(val =>{
    $(`#${val.id} .compareRender`).removeClass("icon_compare")
    $(`#${val.id} .compareRender`).addClass("active-icon_compare")
  })
}

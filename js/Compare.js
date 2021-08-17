
// var items = [ 
//    {
//     id:1,
//     name: "Relaxed-fit cat show view",
//     brand: 'zaza',
//     type:"men",
//     price: "$1,234.23",
//     img: ["images/item01.jpg","images/item011.jpg","images/item012.jpg"],
//     color: "black",
//     size: "L",
//     Qty: 100,
//     sold:55,      
//     sale: "50%",
//     evaluate:4,
//     productType:"Sweater",
//     review:[
//       {
//           IDreview:100,
//           nameReview: "hoang anh",
//           dateReview: "Jun 10,2021",
//           titleReview: "That Good",
//           contentReview: "This theme is amazing!",
//           rateReview: 4

//       },
//       {
//           IDreview:101,
//           nameReview: "anh",
//           dateReview: "Jun 10,2020",
//           titleReview: "not bad",
//           contentReview: "This theme is amazing!",
//           rateReview: 4

//       },
//     ],
//   },
//   {
//     id:2,
//     name: "Relaxed-fit cat show view",
//     brand: 'zaza',
//     type:"men",
//     price: "$100.00",
//     img: ["images/img0102.jpg","images/item01.jpg","images/item012.jpg"],
//     color: "gray",
//     size: "L",
//     Qty: 100,
//     sold:55,      
//     sale: "0%",
//     evaluate:4,
//     review:[
//       {
//           IDreview:100,
//           nameReview: "hoang anh",
//           dateReview: "Jun 10,2021",
//           titleReview: "That Good",
//           contentReview: "This theme is amazing!",
//           rateReview: 4

//       },
//       {
//           IDreview:101,
//           nameReview: "anh",
//           dateReview: "Jun 10,2020",
//           titleReview: "not bad",
//           contentReview: "This theme is amazing!",
//           rateReview: 4

//       },
//      ],
//      productType:"Sweater"
//   },
//   {
//     id:3,
//     name: "Relaxed-Fit Cotton Shirt",
//     brand: 'POLO',
//     type:"women",
//     price: "$100.00",
//     img: ["images/item02.jpg","images/item02-1.jpg","images/item02-2.jpg"],
//     color: "grey",
//     size: "L",
//     Qty: 100,
//     sold:10,      
//     sale: "0%",
//     evaluate:4,
//     productType:"Shirt",
//     review:[
   
    
//       {
//           IDreview:101,
//           nameReview: "anh",
//           dateReview: "Jun 10,2020",
//           titleReview: "not bad",
//           contentReview: "This theme is amazing!",
//           rateReview: 4

//       },
//   ],
//   },
//   {
//     id:4,
//     name: "Relaxed-Fit Cotton Shirt",
//     brand: 'zaza',
//     price: "$400.00",
//     img: ["images/item02-2.jpg","images/item02.jpg","images/item02-1.jpg"],
//     color: "grey",
//     size: "L",
//     Qty: 100,
//     sold:10,      
//     sale: "10%",
//     evaluate:4,
//     review:[
//       {
//           IDreview:100,
//           nameReview: "hoang anh",
//           dateReview: "Jun 10,2021",
//           titleReview: "That Good",
//           contentReview: "This theme is amazing!",
//           rateReview: 4

//       },
//       {
//           IDreview:101,
//           nameReview: "anh",
//           dateReview: "Jun 10,2020",
//           titleReview: "not bad",
//           contentReview: "This theme is amazing!",
//           rateReview: 4

//       },
//     ],
//     productType:"Shirt"
//   },

// ]

var items = JSON.parse(localStorage.getItem("compareList"))
console.log(items);
renderSlick(items)


function renderSlick(list){
      renderConpare(list)
      if(list.length == 0){
        $(".tt-listCompare").hide()
        $(".title").hide()
        $(".listEmpty").show()
      }
       else if(list.length== 1){
          $(".tt-listCompare").show()
          $(".title").show()
          $(".listEmpty").hide()
          $('.listCompare_col-product').slick({
            slidesToShow: 1,
          
            arrows:false,
            responsive: [
          
              {
              breakpoint: 576,
              settings: {
        
              slidesToShow: 1,
              arrows:true,
              prevArrow:'<i class="las la-angle-left arrow-right"></i>',
              nextArrow: '<i class="las la-angle-right arrow-left"></i>',
              }} ]
        
        });
      }
      
      else if(list.length== 2){
        $(".tt-listCompare").show()
        $(".title").show()
        $(".listEmpty").hide()
        $('.listCompare_col-product').slick({
          slidesToShow: 2,
        // slidesToScroll: 1,
          arrows:false,
          responsive: [
          
            {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            arrows:true,
            prevArrow:'<i class="las la-angle-left arrow-right"></i>',
            nextArrow: '<i class="las la-angle-right arrow-left"></i>',
            }} ]
        

      });
      }
      else if(list.length== 3){
        $(".tt-listCompare").show()
        $(".title").show()
        $(".listEmpty").hide()
        $('.listCompare_col-product').slick({
          slidesToShow: 3,
        // slidesToScroll: 1,
          arrows:false,
          responsive: [
          
            {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            arrows:true,
            prevArrow:'<i class="las la-angle-left arrow-right"></i>',
            nextArrow: '<i class="las la-angle-right arrow-left"></i>',
            }} ]
      

      });
      }
      else if(list.length >  3){
        $(".tt-listCompare").show()
        $(".title").show()
        $(".listEmpty").hide()
        $('.listCompare_col-product').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:true,
          prevArrow:'<i class="las la-angle-left arrow-right"></i>',
          nextArrow: '<i class="las la-angle-right arrow-left"></i>',
          responsive: [
          
            {
            breakpoint: 576,
            settings: {
            slidesToShow: 1
            }} ]
          
        
      });
      }

}



function renderConpare(list){
  
  list.forEach(val =>{
    const pricesale = +val.sale.slice(0, val.sale.length-1)
  
    if(pricesale > 0){
      $(".listCompare_col-product").append(`
      <div class="itemCompare">
      <div class="col-item-top">
        <span class="tt-delete" data-id = ${val.id}><img src="images/trash.svg" alt="" class="img-delete" data-id = ${val.id}></span>
        <div class="tt-img">
          <img src="${val.img[0]}" alt="">
        </div>
        <span class="tt-inStock">In Stock</span>
        <p class="tt-name quickProduct"><a class="goDetails" data-id="${val.id}">${val.name}</a></p>
        <p> <span class="tt-sale">${TinhTienSauSale(val.price,pricesale)}</span> <span class="tt-price">${val.price}</span> </p>
        <button class="btn-primary addtocart" style="padding: 10px 25px; margin-top: 10px;" data-id="${val.id}">ADD TO CART</button>
    </div>
    <div class="col-item-text">
          <div class="col-text-item"><p>Description</p></div>
          <div class="col-text-item"><p>${val.brand}</p></div>
          <div class="col-text-item"><p>${val.color}</p></div>
          <div class="col-text-item"><p>${val.size}</p></div>
    </div>
    </div>
    
      `)
    }
    else{
      //console.log('1');
      $(".listCompare_col-product").append(`
      <div class="itemCompare">
      <div class="col-item-top">
        <span class="tt-delete" data-id = "${val.id}"><img src="images/trash.svg" alt="" class="img-delete" data-id = "${val.id}"></span>
        <div class="tt-img">
          <img src="${val.img[0]}" alt="">
        </div>
        <span class="tt-inStock">In Stock</span>
        <p class="tt-name"><a class="goDetails" data-id = "${val.id} ">${val.name}</a></p>
        <p> <span class="tt-price" style="text-decoration: none;">${val.price}</span> </p>
        <button class="btn-primary addtocart" style="padding: 10px 25px; margin-top: 10px;" data-id="${val.id}">ADD TO CART</button>
    </div>
    <div class="col-item-text">
          <div class="col-text-item"><p>Description</p></div>
          <div class="col-text-item"><p>${val.brand}</p></div>
          <div class="col-text-item"><p>${val.color}</p></div>
          <div class="col-text-item"><p>${val.size}</p></div>
    </div>
    </div>
    
      `)
    }
  
  })
}


// //click vao thung rac
// $(document).click(function (e) { 
//  // e.preventDefault();
//   const target = e.target
//   if(target.classList.contains("tt-delete") || target.classList.contains("img-delete")){
//       const ID = target.dataset.id
//       items = items.filter(val => val.id != ID)
     

      
//     }
// });


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
 
  if (target.classList.contains("addtocart")) {
 
     const IDcurrent = target.dataset.id;
  
      const item = items.filter((val) => val.id == IDcurrent);
      console.log(item);
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

    // //  mo model
    renderModel(item[0], productCart);

    $("#myModal").fadeIn(500);
    $("#myModal").addClass("active-model");
    document.querySelector("body").style.overflow = "hidden";
  }
});
// // //render model
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

//click vao ten san pham chuyen den trang chi tiet
$(document).click(function (e) { 
  //e.preventDefault();
  const target = e.target;

  if(target.classList.contains("goDetails")){
        const ID = target.dataset.id
        console.log(ID);
        //lay san pham co ID ra
        const item = items.filter(val =>{
          return val.id == ID
        })
        //console.log(item[0]);
        localStorage.setItem("item", JSON.stringify(item))
      window.location.href = "details.html"
  }
});


//mang chua trong gio hang
var productCart = [];
 productCart = JSON.parse(localStorage.getItem("cartProduct"))


  
  $(".login__cart-num").text(productCart.length); //load so luong sp trong mang len giao dien

  $(".login___cart").click(function (e) {
    console.log("a");

    e.preventDefault();
    $(".login__content_cart").empty();
  
    //trong cart khong co sp nao
    if (productCart.length == 0) {
      $(".login__content_cart").css({
        width: "240px",
        height: "150px",
        bottom: "-155px",
      });
      $(".login__content_cart").append(`
               <div class="login__content-cart"><div>
         `);
      $(".login__content-cart").append(`
         <span class=""><i class="fas fa-shopping-bag"></i></span>
         <p>No Products In The Cart</p>
  
        `);
     // $(".login__content").removeClass("active")
      $(".login__content_cart").toggleClass("active")
    } else {//trong cart co sp
     
        renderCartTab(productCart)    
       
    }
  
  
  });
  

  function rederCartProducts(productsCart) {
    $(".login__content-cart-products").empty()
    productsCart.forEach((val) => {
      $(".login__content-cart-products").append(`
             <div class= "products">
              <div class="left">
                  <img src="${val.img}" alt="">
                  <div class="name-product">
                      <p class="name">${val.name}</p>
                      <p class="color">${val.color}</p>
                      <p class="num">${val.number}X <span class="price">${val.price}</span></p>
                  </div>
               </div>
            
                  <i class="fas fa-dumpster cart__delete" data-id="${val.id}"></i>
            
            </div> 
              
          `);
    });
  }

  function renderCartTab(productsCart){
    $(".login__content_cart").empty()
    $(".login__content_cart").css({
      width: "280px",
      height: `${120 * productCart.length + 220}px`,
        bottom:`${-120 * productCart.length - 225}px`,
    });



    $(".login__content_cart").append(`
        <div class="login__content-cart-products"><div>
   `);
        rederCartProducts(productCart);
 

      renderTermCart(productCart)
    //  $(".login__content").removeClass("active")
      $(".login__content_cart").toggleClass("active")
  
  }



  function renderTermCart(productCard){
    const totalPrice = productCard.reduce((acc,val) =>{
      return acc + val.price*val.number
    },0)
    $(".login__content-cart-products").append(`
          <div class="terms">
          <div class="total">
          <span class="title">TOTAL</span>
          <span class="priceTotal">${totalPrice}</span>
          </div>

          <div class="checkBox">
          <input type="checkbox">
          <span>I agree with the terms and conditions</span>
          </div>

          <div class="buttom">
          <button>PROCEED TO CHECKOUT</button>
          <div class="view">
              <a href="">VIEW CART</a>
          </div>
          
          </div>
      </div>
      `)
  }



 //click bar hien cart
$(".login___cart").click(function (e) { 
  e.preventDefault();
  $(".header__tab-cart").toggleClass("header__tab_cart-active")
  

  $(".header__screen").toggleClass("header__screen-black")
  
    rederCartProducts(productCart)
    renderTermCart(productCart)
  
 
});

  //lick vao thung rac
  document.addEventListener("click", function(e){
    const target = e.target
   
    if(target.classList.contains("cart__delete")){
        const ID = target.dataset.id;//lay ra ID sp can xoa
        const currentPoss = productCart.findIndex(val => val.id == ID)
        productCart.splice(currentPoss,1)
        localStorage.setItem("cartProduct", JSON.stringify(productCart))
        $(".login__cart-num").text(productCart.length); //load so luong sp trong mang len giao dien
        rederCartProducts(productCart)
        $(".login__content_cart").css({
          width: "280px",
          height: `${120 * productCart.length + 220}px`,
            bottom:`${-120 * productCart.length - 225}px`,
        });
        renderTermCart(productCart)
   
        
    }
  })


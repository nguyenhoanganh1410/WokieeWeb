// render san pham len giao dien cua header trong Cart





var productCart=[]//luu tru danh sach sp trong cart
if(localStorage.getItem("cartProduct") !== null){
  productCart = JSON.parse(localStorage.getItem("cartProduct"))
  $(".login__cart-num").text(productCart.length); //load so luong sp trong mang len giao dien

}
// localStorage.removeItem("cartProduct")

var uniqueproductCart = unique(productCart);//danh sach cac san pham khong trung nhau trong cart
var numProductInCart =  tanXuat(uniqueproductCart,productCart);//tan xuat xuat hien cua cac phan tu trong cart




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
          <input type="checkbox" id="checkBox1">
          <label for="checkBox1">I agree with the terms and conditions</label>
         
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

function TinhTienSort(money, saleNum) {
  const newMoney = +money.slice(1, -1).replace(/,/g, "");
  const pricesale = +saleNum.toString().slice(0, saleNum.length - 1);

  return newMoney - (newMoney * pricesale) / 100;
}



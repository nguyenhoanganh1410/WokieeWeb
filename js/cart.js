
var productCart=[]//luu tru danh sach sp trong cart

if(localStorage.getItem("cartProduct") !== null){
  productCart = JSON.parse(localStorage.getItem("cartProduct"))
}
// console.log(productCart.length);
//su ly tien sau sale


var uniqueproductCart = unique(productCart);//danh sach cac san pham khong trung nhau trong cart
var numProductInCart =  tanXuat(uniqueproductCart,productCart);//tan xuat xuat hien cua cac phan tu trong cart
renderListProduct(uniqueproductCart,numProductInCart)

//cap nhat tong tien trong phan proceed to checkout
$(".submoney").text(`${"$" + totalMoney(uniqueproductCart,numProductInCart).toFixed(2)}`)
$(".grandmoney").text(`${"$" + totalMoney(uniqueproductCart,numProductInCart).toFixed(2)}`)


function renderListProduct(listProduct, listNum){

    $(".shoppingCart-info").empty()
    $(".render").empty()
    $(".proceed").empty()
    if(productCart.length===0){
      $(".shoppingCart-info").append(`
      <div class="emptyCart">
      <i class="las la-shopping-bag"></i>
      <h6>SHOPPING CART IS EMPTY</h6>
      <p>You have no items in your shopping cart.</p>
      <button><a href="index.html">COUNTINUE SHOPPING</a></button>
    </div>
  `)
    }
    else{
    
      $(".shoppingCart-info").append(`
      <h1>SHOPPING CART</h1>
      <table class="table"></table>
     `)

     $(".render").append(`
   
       <div class="left"><a href="index.html"><i class="fas fa-undo-alt"></i>CONTINUE SHOPPING</a></div>
       <div class="right">  <a><i class="fas fa-dumpster"></i>CLEAR SHOPPING CART</a> </div>
     `)

     $(".proceed").append(`
     <div class="container">
     <div class="row">
       <div class="col-4 col-xs-12">
         <div class="shippingEstimate">
           <h5>ESTIMATE SHIPPING AND TAX</h5>
           <p>Enter your destination to get a shipping estimate</p>

           <label for="fname">PROVINCE</label><br>
           <select name="calc_shipping_provinces" required="" class="select-tinh">
             <option value="">Tỉnh / Thành phố</option>
           </select><br>
           <label for="fname">STATE</label><br>
           <select name="calc_shipping_district" required=""  class="select-quan">
             <option value="">Quận / Huyện</option>
           </select>
           <input class="billing_address_1" name="" type="hidden" value="">
           <input class="billing_address_2" name="" type="hidden" value="">

           <br>
           <label for="fname">FEE SHIPPING</label><br>
           <input type="text" placeholder="fee shipping" disabled class="input-fee">
           <button class="process"><a>CALCULATE SHIPPING</a></button>
           <span class="err"></span>
         </div>


       </div>
       <div class="col-4 col-xs-12">
         <div class="comment">
           <h5>NOTE</h5>
           <p>Add special instructions for your order...</p>
           <textarea name="" id="" cols="30" rows="10"></textarea>
         </div>
       </div>
       <div class="col-4 col-xs-12">
           <div class="ckechout">
             <div class="subtotal"><h5>SUBTOTAL</h5><span class="submoney">$900.00</span></div>
             <div class="grandtotal"><h5>GRAND TOTAL</h5><span class="grandmoney">$900.00</span></div>
             <div class="term">
             <input type="checkbox" id="check">
             <label for="check">I agree with the terms and conditions</label>
            
             </div>
             <button class="btn"><a>PROCEED TO CHECKOUT</a></button>
           </div>
       </div>
     </div>
   </div>
     `)
     listProduct.forEach((val,idx) =>{
      const pricesale = +val.sale.slice(0, val.sale.length-1)
      if(pricesale == 0){
          $(".table").append(`
          <tr id="${val.id}">
          <td>
            <div class="info">
              <img src="${val.img[0]}" alt="">
              <div class="info__name">
                <p class="nameProduct">${val.name}</p>
                <p class="colorProduct">COLOR: <span>${val.color}</span></p>
              
              </div>
              
            </div>
           
          </td>
  
          <td><span class="price">${val.price}</span></td>
          <td ><div class="couter__input">
            <div class="minus" data-id="${val.id}"><i class="fas fa-minus count__minus"></i></div>
            <div class="numberProduct"> <input type="text" value="${listNum[idx]}" class="input_num"></div>
            <div class="pluss" data-id="${val.id}"><i class="fas fa-plus count__plus"></i></div>
          </div></td>
          <td> <div class="number"> x<span class="number_pro">${listNum[idx]}</span></td></div>
          <td class="money-rela"><span class="totoalMoney">${tinhTien(val.price, listNum[idx])}</span></td>
          <td class="delete" data-id = "${val.id}"><i class="fas fa-dumpster dele"></i></td>
        </tr>
          
          `)
      }
      else{
          let priceCurrent = TinhTienSauSale(val.price, pricesale)
          $(".table").append(`
          <tr id="${val.id}">
          <td>
            <div class="info">
              <img src="${val.img[0]}" alt="">
              <div class="info__name">
                <p class="nameProduct">${val.name}</p>
                <p class="colorProduct">COLOR: <span>${val.color}</span></p>
              
              </div>
              
            </div>
           
          </td>
  
          <td><span class="price">${priceCurrent}</span></td>
          <td ><div class="couter__input">
            <div class="minus" data-id="${val.id}"><i class="fas fa-minus count__minus"></i></div>
            <div class="numberProduct"> <input type="text" value="${listNum[idx]}" class="input_num"></div>
            <div class="pluss" data-id="${val.id}"><i class="fas fa-plus count__plus"></i></div>
          </div></td>
          <td> <div class="number"> x<span class="number_pro">${listNum[idx]}</span></td></div>
          <td class="money-rela"><span class="totoalMoney">${tinhTien(priceCurrent, listNum[idx])}</span></td>
          <td class="delete" data-id = "${val.id}"><i class="fas fa-dumpster dele"></i></td>
         </tr>
          
          `)

         
      }
     
  })
    }
   
}


$(document).click(function (e) { 
    
     const target = e.target
     if(target.classList.contains("count__plus")){
        let ID = target.parentNode.dataset.id  //lya ra data ID cua sp vua click
       
        const item = uniqueproductCart.filter(val => val.id == ID)
        let currentPos = -1
        for(let i = productCart.length -1; i >= 0;i--){
            if(productCart[i].id == ID){
                currentPos = i
                break;
            }
        }
     
        productCart.splice(currentPos,0,item[0])
        console.log(productCart);
      
        localStorage.setItem("cartProduct", JSON.stringify(productCart.flat(Infinity)))//luu xuong local 
       uniqueproductCart = unique(productCart);//danh sach cac san pham khong trung nhau trong cart
       numProductInCart =  tanXuat(uniqueproductCart,productCart);//tan xuat xuat hien cua cac phan tu trong cart
     
    renderListProduct(uniqueproductCart,numProductInCart)
    $(".submoney").text(`${"$" + totalMoney(uniqueproductCart,numProductInCart).toFixed(2)}`)
    $(".grandmoney").text(`${"$" + totalMoney(uniqueproductCart,numProductInCart).toFixed(2)}`)

     }
     if(target.classList.contains("count__minus")){
        let ID = target.parentNode.dataset.id  //lya ra data ID cua sp vua click
        let currentPos = uniqueproductCart.findIndex(val => val.id == ID)
        if(numProductInCart[currentPos] > 1){
            for(let i = 0; i < productCart.length;i++){
                if(productCart[i].id == ID){
                    productCart.splice(i,1);
                    break;
                }
            }
           
            localStorage.setItem("cartProduct", JSON.stringify(productCart.flat(Infinity)))//luu xuong local 
           uniqueproductCart = unique(productCart);//danh sach cac san pham khong trung nhau trong cart
           numProductInCart =  tanXuat(uniqueproductCart,productCart);//tan xuat xuat hien cua cac phan tu trong cart
         
            renderListProduct(uniqueproductCart,numProductInCart)
            $(".submoney").text(`${"$" + totalMoney(uniqueproductCart,numProductInCart).toFixed(2)}`)
            $(".grandmoney").text(`${"$" + totalMoney(uniqueproductCart,numProductInCart).toFixed(2)}`)

        }

     
     }
     if(target.classList.contains("delete") || target.classList.contains("dele") ){//click vao thung rac
      let ID = target.parentNode.dataset.id  //lya ra data ID cua sp vua click
      
     $(`#${ID}`).addClass("opacityDelete")//hieu ung giam opacity ve 0

    setTimeout(function(){
      
      const currentPoss = uniqueproductCart.findIndex(val => val.id == ID)
      uniqueproductCart.splice(currentPoss,1)//xoa sp can xoa khoi mang
      numProductInCart.splice(currentPoss,1)//xoa so lan xuat hien khoi mang

      for(let i = 0; i < productCart.length; i++){
        if(productCart[i].id==ID){
          productCart.splice(i,1)
          i--
        
        }
      }

      localStorage.setItem("cartProduct", JSON.stringify(uniqueproductCart))
      renderListProduct(uniqueproductCart,numProductInCart)
    },500)
     }
    


    
});

//xoa het cac sp trong cart
$(".right").click(function (e) { 
  e.preventDefault();
  uniqueproductCart.length=0
  numProductInCart.length=0

  productCart.length=0
  localStorage.setItem("cartProduct", JSON.stringify(uniqueproductCart))
  renderListProduct(uniqueproductCart,numProductInCart)



});

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
  
  



function tinhTien(money, num){
    const newMoney =   +money.slice(1,-1).replace(/,/g,'')
    
    return '$'+(newMoney * num).toFixed(2)
}

//$400
//tra ve tien sau khi da sale
function TinhTienSauSale(money, sale){
    const newMoney =   +money.slice(1,-1).replace(/,/g,'')
    
    return '$'+(newMoney - newMoney*sale/100).toFixed(2)
}

//ham tinh tong tien
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




//su ly kiem tra phi ship
$(".process").click(function (e) { 
  e.preventDefault();
    const province = $(".select-tinh").find(":selected").val()
    const state = $(".select-quan").find(":selected").val()
    if(province==""|| state==""){
      $(".err").text("Err: chưa chọn tỉnh thành hoặc quận huyện")
    }
    else{
      $(".err").text("")
        if(province < 30){
          $(".input-fee").val("15.000 VND / 1$")
        }
        if(province > 30){
          $(".input-fee").val("35.000 VND / 2$")
        }
    }
});


//bat sk checked cho ckechbox
var check = true
$(".term").click(function (e) { 
  e.preventDefault();
    const checkBox = document.querySelector("#check")
    if(check){
      checkBox.checked = true
      check =!check
      $(".btn").css({"opacity":"1", "cursor":"pointer"})
    }
    else{
      checkBox.checked = false
      check =!check
      $(".btn").css({"opacity":"0.5", "cursor":"none"})
    }

});
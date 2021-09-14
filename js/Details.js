// const item =  {
//     id:15,
//     name: "Relaxed Painted Oxford Shirt",
//     brand: 'GUESS',
//     type:"women",
//     price: "$999.00",
//     img: ["images/item10.jpg","images/item10-1.jpg","images/item10-2.jpg"],
//     color: "brown",
//     size: "42",
//     Qty: 500,
//     sold:32,      
//     sale: "5%",
//     evaluate:3,
//     review:[
//         {
//             IDreview:100,
//             nameReview: "hoang anh",
//             dateReview: "Jun 10,2021",
//             titleReview: "That Good",
//             contentReview: "This theme is amazing!",
//             rateReview: 4

//         },
//         {
//             IDreview:101,
//             nameReview: "anh",
//             dateReview: "Jun 10,2020",
//             titleReview: "not bad",
//             contentReview: "This theme is amazing!",
//             rateReview: 4

//         },
//     ],
//     productType:"Shirt"
// };
//const products = JSON.parse(localStorage.getItem("products"))//lay ra ds cac san pham  de cap nhat lai review


var item = []
if(localStorage.getItem("item") !== null){
     item = JSON.parse(localStorage.getItem("item"))
}
console.log(item[0].id);

//lay ra so san pham dang co trong cart
var productCart=[]//luu tru danh sach sp trong cart
if(localStorage.getItem("cartProduct") !== null){
  productCart = JSON.parse(localStorage.getItem("cartProduct"))
  $(".login__cart-num").text(productCart.length); //load so luong sp trong mang len giao dien

}




$(".productName").text(item[0].name)
$(".type").text(item[0].type)

//render chi tiet san pham len giao dien
renderDetails(item[0])
function renderDetails(product){

    $(".details").append(`
    <div class="container">
    <div class="row">
        <div class="col-1">
            <div class="details__imgs">
            </div>
        </div>
        <div class="col-5" style="position: relative;">
           
             <div class="details__item"></div>
        </div>
        <div class="col-6 col-xs-12">
            <div class="details__content">
                <p>SKU: <span class="dc--sku">28</span></p>
                <p style="margin: 10px 0px 30px 0px">Availability: <span class="dc--avilibity">${product.Qty}</span></p>
                <h5 class="dc--name">Pink Pony eather Aneaker</h5>
                <h5 class="dc--price">${TinhTienSauSale(product.price, product.sale)}</h5>
                <div class="dc--starReview">
                   <div class="dc--star">

                   </div>
                   <p class="review"><a><span class="num__review">${product.review.length}</span>review</a></p>
                </div>

                <div class="dc--guide">
                   <div class="guide-left">
                    <p class="guide-size"><a><i class="fab fa-acquisitions-incorporated"></i>Size guide</a></p>
                    <p class="guide-ship"><a><i class="fas fa-box"></i>Shipping</a></p>
                   </div>

                    <p class="askMail"><a><i class="far fa-envelope"></i>Ask about this product</a></p>
                </div>


                <div class="choiseProduct">
                    <div class="choisePro-top">
                       <div class="assDess">
                        <span class="minus"><i class="fas fa-minus"></i></span>
                        <input type="text" value="1" id="input-numProduct">
                        <span class="pluss"><i class="fas fa-plus"></i></span>
                       </div>
                       <button class="addToCart btn-primary"><i class="las la-shopping-bag"></i>ADD TO CART</button>
                    </div>
                      <div class="term">
                        <input type="checkbox" id="Box">
                        <label for="Box">I agree with the terms and conditions</label>
                       
                     </div>
                     <button class="buyItNow btn-primary">BUY IT NOW</button>
                </div>

                <div class="dc--add">
                    <span><i class="far fa-heart"></i> ADD TO WISHLIST</span>
                    <span class="compareSpan addToCompare"><i class="fas fa-balance-scale-left" style="margin-right:6px"></i>ADD TO COMPARE</span>
                </div>

                  <div class="dc--info">
                    <p>Vendor: <span class="vendor">${product.brand}</span></p>
                    <p>Product Type: <span class="vendor">${product.productType}</span></p>
                    <p>Barcode: <span class="">123456789</span></p>
                  </div>



                  <div class="description">
                    <h4 class="description_text">DECRIPTION</h4>
                    <p class="description_text-p">
                      We are proud to present our best premium Shopify theme - Wokiee.<br>

                      This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.
                      <br>
                      Please, take a look at feature list and compare with our competitors.
                      <br>
                      You can buy our theme and start your business online with minimal time investments.
                      <br>
                      Wokiee support DropShipping app Oberlo.
                      <br> Wokiee Shopify theme is powerfool tool to create personal webshop.
                    </p>
                  </div>
                  <div class="generalYab">
                    <h4 class="generalTab-h4">GENERAL TAB</h4>
                   <div class="generalTab_text">
                    <p>Color: <span class="color">${product.color}</span></p>
                    <p>Size: <span class="size">${product.size}</span></p>
                   </div>
                  </div>

                  <div class="content-review" id="content__review">
                    <h4 class="contentReview-h4">REVIEW</h4>
                    <div class="content-text">

                      <div class="title-review">
                        <p class="">CUSTOMER REVIEWS</p>
                        <div class="reviewInstar">
                          <div class="reviewInstar-star">
                         
                          </div>
                          <div style="display: flex; justify-content: space-between; align-items: center;" >
                            <span>Based on <span class="numReview">${product.review.length}</span> review</span>
                            <a class="btnOpenForm" style="cursor: pointer;">Write a review</a>
                          </div>

                          <form action="" class="formComment">  
                            <h5>WRITE A REVIEW</h5>
                            <div class="errForm">Not all the fields have been filled out correctly!</div>
                            <label for="formName">NAME:</label>
                            <input type="text"  id="formName" placeholder="Enter your name">
                            <label for="formMail">EMAIL:</label>
                            <input type="text" id="formMail" placeholder="hoanganh1410tb@gmail.com">
                            <div class="rateinting">
                              <p>Rating</p>
                              <div class="ratingStar">
                                <i class="fas fa-star ratestar" data-id = "1"></i>
                                <i class="fas fa-star ratestar" data-id = "2"></i>
                                <i class="fas fa-star ratestar" data-id = "3"></i>
                                <i class="fas fa-star ratestar" data-id = "4"></i>
                                <i class="fas fa-star ratestar" data-id = "5"></i>
                              </div>
                            </div>

                            <label for="formtitle">REVIEW TITLE:</label>
                            <input type="text" id="formtitle" placeholder="Give your review a title">

                            <label for="">BODY OF REVIEW (<span style = "color: black;" class= "numberC">1500</span>):</label>
                           <textarea name="" id="formComment" cols="30" rows="6" placeholder="Write your comments here"></textarea>

                           <button class= "submitForm btn-primary">SUBMIT REVIEW</button>

                          </form>
                         
                        </div>
                      </div>

                      <div class="blockReview">
                    </div>
                   
                    
                  
                    </div>

          
                  </div>


            </div>
        </div>
    </div>
</div>
    `)
}

renderSliderImgage(item[0])
function renderSliderImgage(product){
  // product.img.forEach(val =>{
  //   $("#silder_image").append(`
  //   <div class="item">
  //     <div class="slider__img">
  //       <img src="${val}" alt="">
  //     </div>
  //   </div>
    
    
  // </div>
  //   `)
  // })
  
 $(".image01").attr({
  "src" : `${item[0].img[0]}`,
 
});
$(".image02").attr({
  "src" : `${item[0].img[1]}`,
 
});
$(".image03").attr({
  "src" : `${item[0].img[2]}`,
 
});

  



}


//render star
renderStar(item[0],".dc--star")
function renderStar(product, string){
    const length = product.evaluate
    for(let i = 0; i < length;i++){
        $(`${string}`).append(`
        <i class="fas fa-star active_star"></i>
        `)
    }
    for(let i = 0; i < 5 - length;i++){
        $(`${string}`).append(`
        <i class="fas fa-star"></i>
        `)
    }
    console.log("3");

 }
 
 //render image
 renderIMG(item[0])
 function renderIMG(product){
    document.querySelector(".details__item").style.backgroundImage = "url('"+product.img[1]+"')";
    product.img.forEach(val =>{
        $(".details__imgs").append(`
        <a><img src="${val}" alt="" data-id="${radomDataID()}"class = "changeIMG"></a>
        `)
    })
 
 }

 //render review
 if(item[0].review.length > 0){
    
   renderReview(item[0])
 }
 
//   renderStar(val.rateReview, ".review-contentEvery-star")
 function renderReview(view){
    $(".blockReview").empty()
   
    view.review.forEach(val =>{
        
        $(".blockReview").append(`
                    <div class="review-contentEvery">
                       <div class="reviewInstar-star" id="${val.IDreview}"></div>
                      <p class="review-title">${val.titleReview.toUpperCase()}</p>
                        <p class="review-date">${val.dateReview}</p>
                        <p class="review-text">${val.contentReview}</p> 
                        <div style="display: flex; justify-content: space-between;margin-bottom:15px">
                        
                         <a style="cursor: pointer;" class="reportComment" id = "${radomDataID()}">Report as Inappropriate</a>
                        </div>
                

                </div>
   
        `)
        renderStarReview(val.rateReview,val.IDreview)
       

    })
 }

 function  renderStarReview(rate, id){
      $(`#${id}`).empty()
    for(let i = 0; i < rate;i++){
        $(`#${id}`).append(`
        <i class="fas fa-star active_starReview"></i>
        `)
    }
    for(let i = 0; i < 5 - rate;i++){
        $(`#${id}`).append(`
        <i class="fas fa-star"></i>
        `)
    }
    console.log(rate);
    console.log(id);

 }
 //radom data-id
 function radomDataID(){
     return Math.floor(Math.random()  * 1000000)

 }


//tra ve tien sau khi da sale
function TinhTienSauSale(money, saleNum){
    const newMoney =   +money.slice(1,-1).replace(/,/g,'')
    const sale = +saleNum.toString().slice(0, saleNum.length - 1);
    return '$'+(newMoney - newMoney*sale/100).toFixed(2)
}

//render model
renderModelSucces()
function renderModelSucces(){
    $(".box").empty()
    $(".box").append(`
    <div class="row">
    <div class="col-6 col-sm-12">
      <div class="box__left">
        <div class="box__left-title">
          <i class="fas fa-check"></i><span>Added to cart successfully!</span>
        </div>
        <div class="img">
          <img src="${item[0].img[0]}" alt="">
          <p class="name">${item[0].name}</p>
          <p class="QTY">QTY: ${item[0].Qty}</p>
          <div class="total">Price: <span class="total-price">${item[0].price}</span></div>
        </div>
      </div>
    </div>
    <div class="col-6 col-sm-12">
      <div class="box__right">
        <div class="box__right-top">
          <p class="right_acc">There are <span class="num">${productCart.length}</span> items
           
          </p>
          <p class="right_acc">in your cart</p>
          <p class="total_right">TOTAL: <span class="box__right-money">${"$" + sumMoney(productCart).toFixed(2)}</span></p>
          
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

//click dong model
$(".closeModel").click(function (e) { 
    e.preventDefault();
    $(".modelSucess").fadeOut(500);
    $(".modelSucess").removeClass("active-model")
    document.querySelector("body").style.overflow = 'visible';
    setTimeout(function(){
        location.reload() 
       },1000)
});

//click ra ngoai dong model
// When the user clicks anywhere outside of the modal, close it

$(document).click(function (e) { 
    //e.preventDefault();
    const target = e.target
    if(target.classList.contains("modelSucess")){
        $(".modelSucess").fadeOut(500);
        $(".modelSucess").removeClass("active-model")
       document.querySelector("body").style.overflow = 'visible';
       setTimeout(function(){
       location.reload() 
      },1000)
      
    }
    if(target.classList.contains("modelSize")){
        alert("ok")
    }
});


//render smart addcart
renderSmartCart()
function renderSmartCart(){
  $(".smartAdd").empty()
  $(".smartAdd").append(`
  <div class="container">
  <div class="smartAdd__box">
   <div class="box-left">
    <img src="${item[0].img[0]}" alt="">
        <div class="smartAdd__box-name">
          <p class="nameProduct">${item[0].name}</p>
          <p class="pricePro">${TinhTienSauSale(item[0].price, item[0].sale)}</p>
        </div>
   </div>
   <div class="box-right">
    <div class="box-right-item">
      <span class="smart-minus"><i class="fas fa-minus"></i></span>
      <input type="text" value="1" class="smart-input">
      <span class="smart-plus"><i class="fas fa-plus"></i></span>
     </div>
     <button class="btn-primary addToCart" style="margin-left:5px; padding:11px 20px"><i class="las la-shopping-bag" style="font-size:16px; padding-right:4px"></i>ADD TO CART</button>
   </div>

  </div>
</div>
  `)
}
//bat su kien tang giam so luong
$(".smart-plus").click(function (e) { 
  e.preventDefault();
  let num = $(".smart-input").val()
  num = +num+1;
  if(num <= item[0].Qty){
    $(".smart-input").val(num)
    $("#input-numProduct").val(num)
  }
  else{
    alert("Not enough quantity")
  }
  
 
});
$(".smart-minus").click(function (e) { 
  e.preventDefault();
  let num = $(".smart-input").val()
  num = +num-1;
  if(num > 0){
    $(".smart-input").val(num)
    $("#input-numProduct").val(num)
  }
  

});


//click them san pham vao gio hang
$(".addToCart").click(function (e) { 
  e.preventDefault();
  const numProduct = $("#input-numProduct").val();//lay ra so luong san pham can them vao gio
  for(let i = 0; i < numProduct;i++){//them vao gio hang theo so luong sp
          productCart.push(item[0])   
  }
  //luu giu lieu xuong local store
  localStorage.setItem("cartProduct", JSON.stringify(productCart))
 
//  location.reload()
  //mo model
  renderModelSucces()



  $(".modelSucess").fadeIn(500);
  $(".modelSucess").addClass("active-model")
  document.querySelector("body").style.overflow = 'hidden';  
//   document.body.style.position = 'fixed';
//  document.body.style.top = `-${window.scrollY}px`;


});

//scrool keo hien smartAdd
$(document).scroll(function () {
  const currentLength = $(document).scrollTop();

  if (currentLength > 700) {
    $(".smartAdd").fadeIn(500)
 
  } else {
    $(".smartAdd").fadeOut(500)
  }

});

//tinh tong tien trong gio hang
function sumMoney(list){
    var sum = 0;
    list.forEach(val =>{
      sum+= TienThuc(val.price, val.sale)
    })
    return sum
}

//tien sau khi sale
function TienThuc(money, saleNum) {
  var newMoney = +money.slice(1, -1).replace(/,/g, "");
  var pricesale = +saleNum.toString().slice(0, saleNum.length - 1);

  return newMoney - (newMoney * pricesale) / 100;
}



//click vao star trong phan danh gia
var rateNum = -1
$(document).click(function (e) { 
//  e.preventDefault();
  //lay ra data-id
  const target = e.target
  if(target.classList.contains("ratestar") ){
    const dataID = e.target.dataset.id
    rateNum = dataID
    renderRateStar(dataID)
  //  console.log(dataID);
  }
 
  
});

function renderRateStar(rate){
  $(".ratingStar").empty()
    for(let i = 0; i < rate; i++){
      $(".ratingStar").append(`
         <i class="fas fa-star ratestar active-starReview" data-id = "${i+1}"></i>
      `)
    }
    for(let i = 0 ; i < 5 - rate; i++){
      $(".ratingStar").append(`
      <i class="fas fa-star ratestar" data-id = "${i+1 + +rate}"></i>
   `)
    }
    
}


//lay ra du lieu tu form
function checkFormReview(){
  const name = $("#formName").val()
  const mail = $("#formMail").val()
  const message = $("#formComment").val()
  const title = $("#formtitle").val()
  

  if(rateNum==-1){
      $(".errForm").show()
      return false;
  }
  else if(name=="" || mail =="" || message=="" || title == ""){
    $(".errForm").show()
    return false;
  }
  $(".errForm").hide()
  return true
}

$(".submitForm").click(function (e) { 
  e.preventDefault();
  if(checkFormReview()){
    const name = $("#formName").val()
    const mail = $("#formMail").val()
    const message = $("#formComment").val()
    const title = $("#formtitle").val()
    var rate = rateNum;
    //lay ra ngay hien tai
    var today = new Date()
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    //dua du lieu vao trong doi tuong review
    item[0].review.push({
              IDreview:radomDataID(),
              nameReview: name.trim(),
              dateReview: date,
              titleReview: title.trim(),
              contentReview: message.trim(),
              rateReview: rate
    })

    //cap nhap lai du lieu du lieu goc(ds San Pham)
   // console.log(item[0]);
      //cap nhat lai evalator
    // var sumRate = item[0].review.reduce((acc,val) => {
    //     return acc + +val.rateReview
    // },0)
    // var newRate = Math.round(sumRate/item[0].review.length)
    // //cap nhat lai rate trong products
    
    // products.forEach(val =>{
    //   if(val.id == item[0].id){
    //       val.review = item[0].review;
    //       val.evaluate = newRate;
    //   }
    // })

  
    // //luu vao localStore
    // console.log(products);
  //  localStorage.setItem("products", JSON.stringify(products))


    //hien thi loading
    $(".loader").show()
 
    setTimeout(function(){
      $(".formComment").slideUp()
      renderReview(item[0])
       $(".loader").hide()
     },2000)
  }
 
});

// //bat su kien keyup de giam so chu hien
$("#formComment").keyup(function (e) { 
     var numChar = $("#formComment").val().length
    $(".numberC").text(1500-numChar)
});



//click chay xuong cho review
$(".dc--starReview").click(function (e) { 
  e.preventDefault();
  $('html, body').animate({
    scrollTop:630
  },1000)
});
$(".submitForm").click(function (e) { 
  e.preventDefault();
  $('html, body').animate({
    scrollTop:630
  },1000)
});




//click odong mo
$(".generalTab-h4").click(function (e) { 
    e.preventDefault();
    $(".generalTab_text").slideToggle();
});

$(".contentReview-h4").click(function (e) { 
    e.preventDefault();
    $(".content-text").slideToggle();
});

$(".description_text").click(function (e) { 
    e.preventDefault();
    $(".description_text-p").slideToggle();
});

//click tang tang so luong
$(".pluss").click(function (e) { 
    e.preventDefault();
    var numProduct = $("#input-numProduct").val()
    numProduct++
    $("#input-numProduct").val(numProduct)
    $(".smart-input").val(numProduct)
});
//click tang giam so luong
$(".minus").click(function (e) { 
    e.preventDefault();
    var numProduct = $("#input-numProduct").val()
    if(numProduct > 1){
        numProduct--
        $("#input-numProduct").val(numProduct)
        $(".smart-input").val(numProduct)
    }

});


//click mo model size
$(".guide-size").click(function (e) { 
    e.preventDefault();
    $(".modalSize").addClass("active-modelSize")
    document.querySelector("body").style.overflow = 'hidden';  
   
});


$(".close").click(function (e) { 
    e.preventDefault();
  
       
    $(".modalSize").addClass("active-modelSize-up")
  
        setTimeout(function(){
            $(".modalSize").removeClass("active-modelSize")
            $(".modalSize").removeClass("active-modelSize-up")
         },500)
    
     
    document.querySelector("body").style.overflow = 'visible';  
});

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById("myModalSize");
window.onclick = function(event) {
    if (event.target == modal) {
        $(".modalSize").addClass("active-modelSize-up")
        setTimeout(function(){
            $(".modalSize").removeClass("active-modelSize")
            $(".modalSize").removeClass("active-modelSize-up")
         },500)
       document.querySelector("body").style.overflow = 'visible';
    }
  }


  //su kien click vao anh chuyen anh
  $(".details__imgs img").click(function (e) { 
    //   e.preventDefault();
   
    const imgLink = $(this).attr("src");
  
    //document.querySelector(".details__item").style.backgroundImage =  "url('../images/item20-1.jpg')";
   document.querySelector(".details__item").style.backgroundImage =   "url('"+imgLink+"')";
    
    
  });


//check form cho form nhap mail
if(!$("#yourName").val()){
    $("#yourName").attr("title","Please fill out this fill")
}
if(!$("#yourMail").val()){
    $("#yourMail").attr("title","Please fill out this fill")
}

if($("#yourPhone").val() == ""){
    $("#yourPhone").attr("title","Please fill out this fill")
}

function checkPhone(){
    let phone = $("#yourPhone").val()
    let reg = /^\d{10}$/
    if(!phone){
        $(".errPhone").text("Please fill out this fill")
        $("#yourPhone").addClass("invalid")
        return false;
    }
    if(!reg.test(phone)){
        $(".errPhone").text("Phone number must have 10")
        $("#yourPhone").addClass("invalid")
        return false;
    }
    $(".errPhone").text("")
    $("#yourPhone").removeClass("invalid")
    return true
}

function checkMail(){
    let mail = $("#yourMail").val()
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!mail){
        $(".errMail").text("Please fill out this fill")
        $("#yourMail").addClass("invalid")
        return false
    }
    if(!re.test(mail)){
        $(".errMail").text("Invalid email")
        $("#yourMail").addClass("invalid")
        return false
    }
    $(".errMail").text("")
    $("#yourMail").removeClass("invalid")
    return true

}
function checkMess(){
   
        $(".errMess").text("")
    
    
}
function checkName(){
   
    $(".errName").text("")
    $("#yourName").removeClass("invalid")

}



function checkValue(){
    if(checkMail() && checkPhone()){
        let message = $("#yourMeassgae").val()
        let name =  $("#yourName").val()
        let mail = $("#yourMail").val()
        let phone = $("#yourPhone").val()
        if(!message){
            $(".errMess").text("Please fill out this fill")
            $("#yourMessage").addClass("invalid")
            return false
        }
        else if(!name){
            $(".errName").text("Please fill out this fill")
            $("#yourName").addClass("invalid")
            return false
        }
        else if(!mail){
            $(".errMail").text("Please fill out this fill")
            return false
        }
        else if(!phone){
            $(".errPhone").text("Please fill out this fill")
            return false
        }
       return true
    }

    return false

    
}


$(".sendMess").click(function (e) { 
    e.preventDefault();
    if(checkValue()){
    $(".loader").show()
 
     setTimeout(function(){
        $(".contractUs").css("display","none")
       // $(".modal-content").addClass("active__secess")
        $(".contractSucces").css("display","block")
        $(".loader").hide()
      },2000)
      
    }

});

//click mo model mail
$(".askMail").click(function (e) { 
    e.preventDefault();
    $(".modalContract").addClass("active-modelMail")
    document.querySelector("body").style.overflow = 'hidden';  
   
});

$(".closeMail").click(function (e) { 
    e.preventDefault();
  
       
    $(".modalContract").addClass("active-modelMail-up")
  
        setTimeout(function(){
            $(".modalContract").removeClass("active-modelMail")
            $(".modalContract").removeClass("active-modelMail-up")
         },500)
    
     
    document.querySelector("body").style.overflow = 'visible';  
});


//bat sk checked cho ckechbox
var check = true
$(".term").click(function (e) { 
  e.preventDefault();
    const checkBox = document.querySelector("#Box")
    if(check){
      checkBox.checked = true
      check =!check
      $(".buyItNow").addClass("active-btn")
    }
    else{
      checkBox.checked = false
      check =!check
      $(".buyItNow").removeClass("active-btn")
    }
  

});


//click mo form nhap commment
$(".btnOpenForm").click(function (e) { 
    e.preventDefault();
    $(".formComment").slideToggle()
});


$(document).click(function (e) { 
 // e.preventDefault();
  const target = e.target
  
  if(target.classList.contains("reportComment")){
    var report = confirm("Are you sure you want to report this review as inappropriate?");
    
    const dataID = target.id
    
    if(report){
    
        $(`#${dataID}`).addClass("active-report")
        $(`#${dataID}`).removeClass("reportComment")
        $(`#${dataID}`).text("This review has been reported")
    }
  }
});



//zoom image product
const image = document.querySelector(".details__item")

image.addEventListener('mousemove', function(e){
    let width = image.offsetWidth;
    let height = image.offsetHeight;

    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    let bgPosX = (mouseX / width * 100)
    let bgPosY = (mouseY / height * 100)

    image.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`

})


image.addEventListener("mouseleave", function(){
    image.style.backgroundPosition = "top"
})
  


//su kien click vao 
const compareListProduct = JSON.parse(localStorage.getItem("compareList")) ;
if(compareListProduct.findIndex(val => val.id == item[0].id) !== -1){
  $(".addToCompare").removeClass("compareSpan")
  $(".addToCompare").addClass("active_compareSpan")
}

$(".addToCompare").click(function (e) { 
  //e.preventDefault();
  const target = e.target
 
  var compareList = []
  if(JSON.parse(localStorage.getItem("compareList")) != null){
    compareList = JSON.parse(localStorage.getItem("compareList")) 
   
  }
  

  //neu khong chua class active-icon_compare
  if(!target.classList.contains("active_compareSpan")){
    compareList.push(item[0])
    //luu san pham vao localstroge 
    localStorage.setItem("compareList", JSON.stringify(compareList))
  
   
   // console.log(IDcurrent);
    //console.log(IDcurrent);
    $(".addToCompare").toggleClass("compareSpan")
    $(".addToCompare").toggleClass("active_compareSpan")
  }
  else if(target.classList.contains("active_compareSpan")){
     //lay ra san pham co id tuong ung
     const newCompareList = compareList.filter(val => val.id !== item[0].id)
    
             
     //luu san pham vao localstroge 
     localStorage.setItem("compareList", JSON.stringify(newCompareList))
   
     
     //console.log(IDcurrent);
     $(".addToCompare").toggleClass("compareSpan")
     $(".addToCompare").toggleClass("active_compareSpan")
  }


  
});
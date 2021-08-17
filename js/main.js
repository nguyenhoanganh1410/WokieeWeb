//thuc hien cho Header
//thuc hien su kien Scrool hien header
//thuc hien render choise money tren header
//thuc hien cac su kien click hien form trong phan header: cart, account, setting, search
//footer reponsive: cac hieu ung dong mo


//scrool keo thao header
$(document).scroll(function () {
  const currentLength = $(document).scrollTop();
  if (currentLength > 90) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  // $(".login__content_cart").hide()
  // $(".sub-login__setting").hide();
  // $(".login__content--account").hide();
});



//mang chua cac loai tien
const TypeOfMoney = [
  {
    id: 111,
    content: "$ US Dollars",
    status: true,
  },
  {
    id: 222,
    content: "~ Euro",
    status: false,
  },
];
$(".login__setting-click").click(function (e) {
    e.preventDefault();
    rederMoney(TypeOfMoney);
    $(".login__content--account").hide();
    $(".login__content_cart").hide()
   
    $(".sub-login__setting").slideToggle();
});

function rederMoney(money) {
  $(".ul-setting").empty();

  money.map((val) => {
    $(".ul-setting").append(`
            
             <li id="${val.id}"><a class="${val.id}">${val.content} </a></li>
       
        `);
  });
  money.map((val) => {
    if (val.status === true) {
      $(`.${val.id}`).addClass("setting-active");
    }
  });
}

document.addEventListener("click", function (e) {
  const target = e.target;
//  console.log(target.classList);
  var ID = target.classList.value;
  TypeOfMoney.forEach((val) => {
    if (val.id == ID) {
      TypeOfMoney.forEach((value) => {
        if (value.status === true) {
          value.status = false;
        }
      });
      val.status = !val.status;
      rederMoney(TypeOfMoney);
      
    }
  });
  if (
    e.target.classList.value != "las la-search" && e.target.classList.value !== "input-group" && e.target.classList.value !== "input_group_txt" &&
    !e.target.classList.contains("login__search__input")&&
    !e.target.classList.contains("searchBtn")
  ) {
    $(".login__search__input").slideUp();
  }

});

//click account hien thi cac chuc nang
$(".login__account").click(function (e) {
  e.preventDefault();
  $(".login__content_cart").hide()
  $(".sub-login__setting").hide();
  $(".login__content--account").slideToggle();
});

//click Search hien thi form tim
$(".login__search").click(function (e) {
  e.preventDefault();
  $(".login__search__input").slideToggle();
});
//dong o search
$(".delete").click(function (e) {
  e.preventDefault();
  $(".login__search__input").slideToggle();
});

//---------------------------------------------------------
//click bar hien menu
$(".header__bar").click(function (e) {
  e.preventDefault();
  $(".header__tab").toggleClass("header__tab-active");

  $(".header__screen").toggleClass("header__screen-black");
});
//dong menu
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("header__screen-black")) {
    $(".header__tab").removeClass("header__tab-active");
    $(".header__screen").toggleClass("header__screen-black");
    $(".header__tab-cart").removeClass("header__tab_cart-active");
  }
  if (e.target.classList.contains("close-cart")) {
    $(".header__screen").toggleClass("header__screen-black");
    $(".header__tab-cart").removeClass("header__tab_cart-active");
  }
});

$(".close-parent").click(function (e) {
  e.preventDefault();
  $(".header__tab").removeClass("header__tab-active");
  $(".header__screen").toggleClass("header__screen-black");
});

renderAccountRepon();
function renderAccountRepon() {
  $(".header__tab-account").append(`
    <ul>
    <li> <a href="https://wokiee-demos.myshopify.com/"><i class="fas fa-unlock-alt"></i> Sign In</a></li>
    <li><a  href="https://translate.google.com.vn"><i class="far fa-user"></i> Resister</a></li>
    <li> <a href="cart.html"><i class="fas fa-shopping-bag"></i> View Cart</a></li>
    <li><a href=""><i class="far fa-heart"></i> Wishlist</a></li>
    <li><a  href="compare.html"><i class="fas fa-balance-scale-left"></i> Compare</a></li>
    </ul>
  `);
}

//--render NAV
const nav = [
  {
    name: "HOME",
    link: "index.html",
    title:"index"
  },
  {
    name: "SHOP",
    link: "shop.html",
    title:"shop"
  },
  {
    name: "PAGES",
    link: "pages.html",
    title:"pages"
  },
  {
    name: "BLOG",
    link: "#",
    title:"blog"
  },
  {
    name: "PORTFOLIO",
    link: "#",
    title:"protfolio"
  },
  {
    name: "WOMEN",
    link: "collections.html",
    title:"women"
  },
  {
    name: "MEN",
    link: "collections.html",
    title:"men"
  },
  {
    name: "BUY THEME",
    link: "",
    title:"buytheme"
  },
];
const ul = document.querySelector(".navigation");
renderNAV(nav);

function renderNAV(nav) {
  const currentPath = window.location.pathname;
  console.log(currentPath);

  nav.forEach((val, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href ="${val.link}" class="${val.title}">${val.name}</a>`;
    if (currentPath.includes(val.title) || (idx == 0 && currentPath == "/")) {
      li.classList.add("active_nav");
    }
   
    ul.appendChild(li);
  });
}

//click nav luu xuong local 
$(".navigation li").click(function (e) { 

    var namePath = $(this).text()
    console.log(namePath);
    localStorage.setItem("pathName", namePath)
});



//click mo footer
$(".div1").click(function (e) { 
  e.preventDefault();
  $(".ul1").slideToggle()
});

$(".div2").click(function (e) { 
  e.preventDefault();
  $(".ul2").slideToggle()
});
$(".div3").click(function (e) { 
  e.preventDefault();
  $(".content1").slideToggle()
});
$(".div4").click(function (e) { 
  e.preventDefault();
  $(".content2").slideToggle()
});
$(".div5").click(function (e) { 
  e.preventDefault();
  $(".input1").slideToggle()
});


$(".searchBtn").click(function (e) { 
  e.preventDefault();
  const value = $(".input_group_txt").val()
  //dua vao luu tru trong localStorage
  localStorage.setItem("itemSearch", value)
  window.location.href = "search.html"
});


//su kien click vao icon compare 

$(document).click(function (e) { 
 // e.preventDefault();
    const target = e.target
    if(target.classList.contains("icon__clickCompare") ){
      var compareList = []
      if(JSON.parse(localStorage.getItem("compareList")) != null){
        compareList = JSON.parse(localStorage.getItem("compareList")) 
       
      }
      

      //neu khong chua class active-icon_compare
      if(!target.parentNode.classList.contains("active-icon_compare")){
           //lay ra data-id
          const IDproduct = target.dataset.id
         // console.log(IDproduct);
          //lay ra san pham co id tuong ung
          const item = products.filter(val => val.id == IDproduct)
          compareList.push(item[0])
          //luu san pham vao localstroge 
          localStorage.setItem("compareList", JSON.stringify(compareList))
        
          const IDcurrent = target.parentNode.id
          console.log(IDcurrent);
          //console.log(IDcurrent);
          $(`#${IDcurrent}`).toggleClass("icon_compare")
          $(`#${IDcurrent}`).toggleClass("active-icon_compare")
      }
      else{
                 //lay ra data-id
                 const IDproduct = target.dataset.id
                // console.log(IDproduct);
                 //lay ra san pham co id tuong ung
                 const item = compareList.filter(val => val.id != IDproduct)
                
                 //luu san pham vao localstroge 
                 localStorage.setItem("compareList", JSON.stringify(item))
               
                 const IDcurrent = target.parentNode.id
                 //console.log(IDcurrent);
                 $(`#${IDcurrent}`).toggleClass("icon_compare")
                 $(`#${IDcurrent}`).toggleClass("active-icon_compare")

      }

   
 
    }
});
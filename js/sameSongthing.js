const products__Abort = [
  {
      id:1,
      name: "Relaxed-fit cat show view",
      brand: 'zaza',
      type:"men",
      price: "$1,234.23",
      img: "images/item01.jpg",
      color: "black",
      size: "L",
      Qty: 100,
      sold:55,      
      sale: "50%",
      evaluate:1
    },
    {
      id:2,
      name: "Relaxed-fit cat show view",
      brand: 'zaza',
      type:"men",
      price: "$100.00",
      img: "images/img0102.jpg",
      color: "gray",
      size: "L",
      Qty: 100,
      sold:55,      
      sale: "0%",
      evaluate:5
    },
    {
      id:3,
      name: "Relaxed-Fit Cotton Shirt",
      brand: 'POLO',
      type:"women",
      price: "$100.00",
      img: "images/item02.jpg",
      color: "grey",
      size: "L",
      Qty: 100,
      sold:10,      
      sale: "0%",
      evaluate:4
    },
    {
      id:4,
      name: "Relaxed-Fit Cotton Shirt",
      brand: 'zaza',
      price: "$400.00",
      img: "images/item02-2.jpg",
      color: "grey",
      size: "L",
      Qty: 100,
      sold:10,      
      sale: "10%",
      evaluate:4
    },

    {
      id:5,
      name: "Tailored Fit Mesh-Panel Polo",
      brand: 'zaza',
      price: "$460.00",
      type:"women",
      img: "images/item03-2.jpg",
      color: "blue",
      size: "L",
      Qty: 100,
      sold:90,      
      sale: "0",
      evaluate:4
    },
    {
      id:6,
      name: "Tailored Fit Mesh-Panel Polo",
      brand: 'POLO',
      type:"women",
      price: "$460.00",
      img: "images/item03-1.jpg",
      color: "blue",
      size: "L",
      Qty: 100,
      sold:30,      
      sale: "13%",
      evaluate:4
    },
    {
      id:7,
      name: "Slim Fit Cotton Oxford Shirt",
      brand: 'Levis',
      type:"women",
      price: "$460.00",
      img: "images/item04-1.jpg",
      color: "blue",
      size: "L",
      Qty: 100,
      sold:90,      
      sale: "0%",
      evaluate:4
    },
    {
      id:8,
      name: "Slim Fit Cotton Oxford Shirt",
      brand: 'Levis',
      type:"women",
      price: "$560.00",
      img: "images/item04-2.jpg",
      color: "blue",
      size: "M",
      Qty: 100,
      sold:10,      
      sale: "0%",
      evaluate:4
    },
    {
      id:9,
      name: "Faxon Canvas Low-Top Sneaker",
      brand: 'Levis',
      type:"men",
      price: "$160.00",
      img: "images/item051.jpg",
      color: "blue",
      size: "42",
      Qty: 100,
      sold:0,      
      sale: "0%",
      evaluate:0
    },
    {
      id:10,
      name: "Faxon Canvas Low-Top Sneaker",
      brand: 'Levis',
      type:"men",
      price: "$170.00",
      img: "images/item052.jpg",
      color: "gray",
      size: "42",
      Qty: 100,
      sold:20,      
      sale: "0%",
      evaluate:5
    },
    {
      id:11,
      name: "Viscose-Cashmere Scarf",
      brand: 'LACOSTE',
      type:"men women",
      price: "$70.00",
      img: "images/item061.jpg",
      color: "gray",
      size: "42",
      Qty: 50,
      sold:20,      
      sale: "0%",
      evaluate:3
    },
    {
      id:12,
      name: "Viscose-Cashmere Scarf",
      brand: 'LACOSTE',
      type:"men women",
      price: "$70.00",
      img: "images/item06-2.jpg",
      color: "black",
      size: "42",
      Qty: 50,
      sold:40,      
      sale: "20%",
      evaluate:3
    },
    {
      id:13,
      name: "Plaid Cotton Oxford Shirt",
      brand: 'Levis',
      type:"men",
      price: "$730.00",
      img: "images/item071.jpg",
      color: "black",
      size: "42",
      Qty: 500,
      sold:43,      
      sale: "0%",
      evaluate:3
    },
    {
      id:14,
      name: "Rae Suede Sandal",
      brand: 'GUESS',
      type:"women",
      price: "$130.00",
      img: "images/item09.jpg",
      color: "brown",
      size: "42",
      Qty: 500,
      sold:1,      
      sale: "0%",
      evaluate:5
    },
    {
      id:15,
      name: "Relaxed Painted Oxford Shirt",
      brand: 'GUESS',
      type:"women",
      price: "$999.00",
      img: "images/item10.jpg",
      color: "brown",
      size: "42",
      Qty: 500,
      sold:32,      
      sale: "5%",
      evaluate:5
    },
    {
      id:16,
      name: "Rounded Cat Eye Sunglasses",
      brand: 'POLO',
      type:"women",
      price: "$600.00",
      img: "images/item11.jpg",
      color: "black",
      size: "42",
      Qty: 500,
      sold:2,      
      sale: "0%",
      evaluate:5
    },
    {
      id:17,
      name: "Rounded Cat Eye Sunglasses",
      brand: 'POLO',
      type:"women",
      price: "$300.00",
      img: "images/item12.jpg",
      color: "white",
      size: "42",
      Qty: 500,
      sold:1,      
      sale: "0%",
      evaluate:5
    },

]

var idx = 0;

$(document).click(function (e) { 
  
  if(e.target.classList.contains("abort__delete")){
    $(".abort").hide()
  }
 
});
var length = products__Abort.length

function renderAbort(){
  $(".abort").css("display","flex")
  $(".abort").empty()
  $(".abort").append(`
    <div class="left">
    <img src="${products__Abort[getRandomInt(length-1)]?.img}" alt="">
    </div>
     <div class="right"> 
      <div class="sub__right">
          <div class="someone">
            <span>Somwone purchsed a</span>
            <span class="abort__delete">X</span>
          </div>
          <p><a href="">${products__Abort[getRandomInt(length-1)]?.name}</a></p>
        </div>
  
     <p class="fromWhere">${getRandomInt(60)} minus ago from New York,USA</p>
    </div>
  `)
  idx++
}

setTimeout(function(){
  renderAbort()
  setInterval(renderAbort,80000)
},2000)




//sinh so ngau nhien tu 0 - 16

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}




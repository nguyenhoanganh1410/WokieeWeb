//thiet lap dong ho



let time = "september 5, 2021, 15:37:25"

// Thiết lập thời gian đích mà ta sẽ đếm
var countDownDate = new Date(time).getTime();

// cập nhập thời gian sau mỗi 1 giây
var x = setInterval(function() {

  // Lấy thời gian hiện tại
  var now = new Date().getTime();

  // Lấy số thời gian chênh lệch
  var distance = countDownDate - now;

  // Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // HIển thị chuỗi thời gian trong thẻ 
  $(".day").text(days);
  $(".hour").text(hours); 
  $(".min").text(minutes);
   $(".sec").text(seconds);


  // Nếu thời gian kết thúc, hiển thị chuỗi thông báo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Thời gian đếm ngược đã kết thúc";
  }
}, 1000);

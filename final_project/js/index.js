/* 乐舞 */
// var lis = document.querySelectorAll("li");
// var item1 = document.querySelectorAll(".item1");
// var renwu = document.querySelectorAll(".renwu");

// var item = document.querySelectorAll(".item");

// for (var i = 0; i < lis.length; i++) {
//   lis[i].setAttribute("index", i);
//   lis[i].onmouseover = function () {
//     for (var i = 0; i < lis.length; i++) {
//       lis[i].className = "";
//     }
//     this.className = "current";
//     var index = this.getAttribute("index");
//     setTimeout(function () {
//       for (var i = 0; i < item1.length; i++) {
//         item1[i].style.display = "none";
//         // item1[i].className = "zuo zuo-hover";
//       }

//       item1[index].style.display = "block";

//       // renwu.style.top = "-20%";
//     }, 1000);

//     for (var i = 0; i < item.length; i++) {
//       item[i].style.display = "none";
//     }
//     item[index].style.display = "block";
//   };
// }
$(".item:first").show().animate({ top: "97.5%" }, 700);
// $(".item1").find(".zi").show().animate({ top: "65%" }, 700);
$("li").mouseenter(function () {
  $(this).addClass("current").siblings().removeClass("current");
  var index = $(this).index();
  //   console.log(index);
  $(".item")
    .eq(index)
    .show()
    .animate({ top: "97.5%" }, 700)
    .siblings()
    .hide()
    .animate({ top: "-100%" });
  $(".item1")
    .eq(index)
    .fadeIn()
    .animate(100, function () {
      $(".beijing").fadeIn(2000, 0.2);
      $(".renwu").show().animate({ top: "-60%" }, 500);
      //   $(".dizuo").show().animate({ top: "65%" }, 400);
      //   $(".zi").show().animate({ top: "65%" }, 1000);
    })
    .siblings()
    .hide()
    .animate(100, function () {
      $(".beijing").fadeIn(2000, 0.2);
      $(".renwu").show().animate({ top: "-40%" }, 500);
      //   $(".dizuo").show().animate({ top: "69%" }, 400);
      //   $(".zi").show().animate({ top: "16%" }, 1000);
    });
});
// $(".renwu").animate({}, 1000, function () {
//   $(this).css({ transition: "all 0.50s ease-in-out" });
// });

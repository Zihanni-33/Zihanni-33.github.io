function onscroll(distance){
  //s滚动的距离，offset默认为元素距离顶部的距离
    var s = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
       dom = document.getElementById('studio'),
         offset= dom.offsetTop || distance;
     dom.style.position=s>offset?"fixed":"relative";
 };

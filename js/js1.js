
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
let xDown = null;
function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  xDown = firstTouch.clientX;
}


function handleTouchMove(event) {
  if (!xDown) {
    return;
  }

  const xUp = event.touches[0].clientX;
  const xDiff = xDown - xUp;

  if (xDiff > 0) { 
    document.querySelector('.sidebar').style.left = '-300px';
  } else { 
    document.querySelector('.sidebar').style.left = '0';
  }

 
  xDown = null;
}
function a(){
  let menu=document.querySelector('sidebar');
  menu.style.width='80%';
}
//个人页面的实现
var personalButton = document.getElementById('personalButton');
// 为按钮添加点击事件监听器
personalButton.addEventListener('click', function() {
    var personalPageURL = 'geren.html';
    window.location.href = personalPageURL;
});
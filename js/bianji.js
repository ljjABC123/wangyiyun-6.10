function f1(b){
  const a=prompt("请输入内容");
b.textContent = a;
}
// 改变图像
document.getElementById('changeAvatarBtn').addEventListener('click', function() {
  var a = document.getElementById('avatar');
  var u= ['images/51.png', 'images/52.png', 'images/53.png','images/54.png'];
  var c = avatarUrls.indexOf(a.src.split('/').pop().split('.')[0]);
  c = (c + 1) % u.length; // 
  a.src = u[c];
});
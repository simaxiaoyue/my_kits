//封装常用的js代码
var kits = {};
// 封装一个获取指定区间的随机整数的方法
kits.randonInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

// 封装一个获取当前时间的方法
kits.formateDate = function(){
  let date = new Date();
  let y = date.getFullYear();
  let M = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  M = M < 10 ? '0' + M : M;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
}
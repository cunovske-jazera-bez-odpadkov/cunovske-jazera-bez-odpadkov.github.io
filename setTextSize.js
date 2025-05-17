var jeMobil  =  Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
if(jeMobil){
 document.getElementsByTagName("html")[0].style.fontSize="2vmin";
 var stylX = document.createElement('style');
 stylX.type = 'text/css';
 stylX.innerHTML = '.img100 { width:100vw;}';
 document.getElementsByTagName('head')[0].appendChild(stylX);
 alert("mobil screen  "+screen.width);
}else{
  document.getElementsByTagName("html")[0].style.fontSize="10px";
  var stylX = document.createElement('style');
  stylX.type = 'text/css';
  stylX.innerHTML = '.img100 { width:100vh;}';
  document.getElementsByTagName('head')[0].appendChild(stylX);
}
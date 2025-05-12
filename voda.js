function testCheckboxZac(){
  if (document.getElementById('checkPred1999H').checked){
	document.getElementById("imgA1").src="PHO/do1999H.png";
  } else if (!document.getElementById('checkPred1999H').checked){
	document.getElementById("imgA1").src="";
  }

  if (document.getElementById('checkPred1999V').checked){
 	document.getElementById("imgA2").src="PHO/do1999V.png";
  } else if (!document.getElementById('checkPred1999V').checked){
   	document.getElementById("imgA2").src="";
  }

  if (document.getElementById('checkPo1999V').checked){
 	document.getElementById("imgA3").src="PHO/po1999H.png";
  } else if (!document.getElementById('checkPo1999H').checked){
 	document.getElementById("imgA3").src="";
  }

  if (document.getElementById('checkPo1999V').checked){
  	document.getElementById("imgA4").src="PHO/po1999V.png";
   } else if (!document.getElementById('checkPo1999V').checked){
  	document.getElementById("imgA4").src="";
  }
  if (document.getElementById('checkPo2007H').checked){
 	document.getElementById("imgA5").src="PHO/po2007H.png";
  } else if (!document.getElementById('checkPo2007H').checked){
 	document.getElementById("imgA5").src="";
  }
  if (document.getElementById('checkPo2007V').checked){
 	document.getElementById("imgA6").src="PHO/po2007V.png";
  } else if (!document.getElementById('checkPo2007V').checked){
 	document.getElementById("imgA6").src="";
  }
  if (document.getElementById('checkPHO1').checked){
 	document.getElementById("imgA7").src="PHO/PHO1.png";
  } else if (!document.getElementById('checkPHO1').checked){
 	document.getElementById("imgA7").src="";
  }
}

	function radioKlik(element){
  if (element.id==="radio2004"){
	document.getElementById("imgB").src="PHO/2004_03.jpeg";
  } else if (element.id==="radio2021"){
	document.getElementById("imgB").src="PHO/2021_06.jpeg";
  }

	}
function testRadioZac(){
  if (document.getElementById('radio2004').checked){
	document.getElementById("imgB").src="PHO/2004_03.jpeg";
  } else if (!document.getElementById('radio2021').checked){
	document.getElementById("imgB").src="PHO/2021_06.jpeg";
  }

     }
function checkboxKlik(element){
  if ((element.id==="checkPred1999H")&&(element.checked == true)){
	document.getElementById("imgA1").src="PHO/do1999H.png";
  } else if ((element.id==="checkPred1999H")&&(element.checked == false)){
	document.getElementById("imgA1").src="";
  }
  if ((element.id==="checkPred1999V")&&(element.checked == true)){
 	document.getElementById("imgA2").src="PHO/do1999V.png";
  } else if ((element.id==="checkPred1999V")&&(element.checked == false)){
   	document.getElementById("imgA2").src="";
  }
  if ((element.id==="checkPo1999H")&&(element.checked == true)){
 	document.getElementById("imgA3").src="PHO/po1999H.png";
  } else if ((element.id==="checkPo1999H")&&(element.checked == false)){
 	document.getElementById("imgA3").src="";
  }
  if ((element.id==="checkPo1999V")&&(element.checked == true)){
  	document.getElementById("imgA4").src="PHO/po1999V.png";
   } else if ((element.id==="checkPo1999V")&&(element.checked == false)){
  	document.getElementById("imgA4").src="";
  }
  if ((element.id==="checkPo2007H")&&(element.checked == true)){
 	document.getElementById("imgA5").src="PHO/po2007H.png";
  } else if ((element.id==="checkPo2007H")&&(element.checked == false)){
 	document.getElementById("imgA5").src="";
  }
  if ((element.id==="checkPo2007V")&&(element.checked == true)){
 	document.getElementById("imgA6").src="PHO/po2007V.png";
  } else if ((element.id==="checkPo2007V")&&(element.checked == false)){
 	document.getElementById("imgA6").src="";
  }
  if ((element.id==="checkPHO1")&&(element.checked == true)){
 	document.getElementById("imgA7").src="PHO/PHO1.png";
  } else if ((element.id==="checkPHO1")&&(element.checked == false)){
 	document.getElementById("imgA7").src="";
  }
  if ((element.id==="checkPopis")&&(element.checked == true)){
 	document.getElementById("imgA8").src="PHO/popis.png";
  } else if ((element.id==="checkPopis")&&(element.checked == false)){
 	document.getElementById("imgA8").src="";
  }

} 
   function loadDocument(menu) {
   	testMenu(menu);
	   testRadioZac();
      testCheckboxZac();
      document.getElementById("plusID").addEventListener("click",plus);
      document.getElementById("minusID").addEventListener("click",minus);

      document.getElementById("kont").addEventListener("mouseup",mouseDown); 
      document.getElementById("kont").addEventListener("contextmenu",contextMenu); 
      document.getElementById("kont").addEventListener("wheel",mouseWheel); 

      var obr2 = document.getElementById("imgB");
      document.getElementById("kont").style.width=obr2.width+'px';
      document.getElementById("kont").style.height=obr2.height+'px';
    }


 function plus(){
   var obr1 = document.getElementById("imgA1"); 
   var obr2 = document.getElementById("imgB");
   document.getElementById("kont").style.width=(obr2.width+100)+'px';
   document.getElementById("kont").style.height=obr2.height+'px';
   document.getElementById("kont").style.cursor="zoom-in";
   document.getElementById("kont").style.cursor="cursor: -webkit-zoom-in";
   document.getElementById("kont").style.cursor="cursor: -moz-zoom-in";


 }
 function minus(){
   var obr1 = document.getElementById("imgA1"); 
   var obr2 = document.getElementById("imgB");
   document.getElementById("kont").style.width=(obr2.width-50)+'px';
   document.getElementById("kont").style.height=obr2.height+'px';
   document.getElementById("kont").style.cursor="zoom-out";
   document.getElementById("kont").style.cursor="cursor: -webkit-zoom-out";
   document.getElementById("kont").style.cursor="cursor: -moz-zoom-out";

 }
 function mouseDown(e){
        e = e || window.event;
        e.preventDefault();
  if (event.detail === 1) {
        if(e.which==1){if(e.target.id==="minusID"){minus(e);}
           		  else{if(e.target.id==="plusID"){}
           			  else{if ((e.target.id==="radio2004")||(e.target.id==="radio2021")){}
             				  else plus(e);
						 }
                            }
                        }
          else if(e.which==3){minus(e);}//prava mys
    }
  }
  function contextMenu(e){
        e = e || window.event;
        e.preventDefault();

  }
  function noScroll() {
       window.scrollTo(0, 0);
  }
  function mouseWheel(e){
        window.addEventListener('scroll', noScroll);
        e = e || window.event;
        e.preventDefault();
        if(e.deltaY <=0)plus(e);
        else minus(e);
        window.removeEventListener('scroll', noScroll);
  }
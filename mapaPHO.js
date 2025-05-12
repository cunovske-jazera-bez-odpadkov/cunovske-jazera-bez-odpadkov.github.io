var popiskaPHO='<span class="cyan">Na interaktivnej mape sú zobrazené zmeny hraníc pásma hygienickej ochrany II. stupňa (<b>PHO 2</b>) vodného zdroja Rusovce-Ostrovné lúčky-Mokraď (VZ ROL-M).</span>\
<p>\
<span class="zelena" style="margin:0 0 5px 0;">Pred rokom 1999 sa Čunovské jazerá nachádzali v rozsiahlom pásme ochrany vodného zdroja.\
Toto PHO 2 pásmo vtedy zahŕňalo dokonca aj Rusovské jazero a Veľký Zemník.</span><br>\
<span class="cervena" style="margin:0 0 5px 0;">V roku 1999 bolo PHO 2 pásmo značne oklieštené ale Čunovské jazerá v ňom stále ešte ostali.</span>\
<span class="modra" style="margin:0 0 5px 0;">Nakoniec boli vyňaté z pásma ochrany vodného zdroja až v roku 2007.</span><br>\
<span class="zlta">Pásmo ochrany PHO1 zahŕňa priamo územie zdroja podzemnej vody - studne.</span>\
</p>\
<div class="mys inline-block-child">\
<img src="PHO/CB.gif" height="40px">\
<img src="PHO/zoom.gif" height="40px">&nbsp;\
<img src="PHO/LB.gif" height="40px">\
<img src="PHO/zoomIn.gif" height="40px">&nbsp;\
<img src="PHO/RB.gif" height="40px">\
<img src="PHO/zoomOut.gif" height="40px">';

var mapaPHO='<div class="ramik inline-flex-parent">\
<div class="ramik-PHO2">\
<span class="zelenaH zel">\
<input id="checkPred1999H" type="checkbox" onclick="checkboxKlik(this)" class="chcbox">\
<label>pred 1999</label>\
</span>\
<span class="zelena zel">\
<input id="checkPred1999V" type="checkbox" onclick="checkboxKlik(this)" class="chcbox">\
<label>pred 1999</label>\
</span>&nbsp;\
<span class="cervenaH cer">\
<input id="checkPo1999H" type="checkbox" onclick="checkboxKlik(this)" class="chcbox">\
<label>po 1999</label>\
</span>\
<span class="cervena cer">\
<input id="checkPo1999V" type="checkbox" onclick="checkboxKlik(this)" class="chcbox">\
<label>po 1999</label>\
</span>&nbsp;\
<span class="modraH mod">\
<input id="checkPo2007H" type="checkbox" checked="checked" onclick="checkboxKlik(this)" class="chcbox">\
<label>po 2007</label>\
</span>\
<span class="modra mod">\
<input id="checkPo2007V" type="checkbox" checked="checked" onclick="checkboxKlik(this)" class="chcbox">\
<label>po 2007</label>\
</span></div>&nbsp;&nbsp;\
<div class="ramik-PHO1">\
<span class="zltaH zlt">\
<input id="checkPHO1" type="checkbox" checked="checked" onclick="checkboxKlik(this)" class="chcbox">\
<label>PHO1</label>\
</span>\
</div>&nbsp;&nbsp;\
<div class="ramik-PHO1">\
<span class="cyanH cya">\
<input id="checkPopis" type="checkbox" checked="checked" onclick="checkboxKlik(this)" class="chcbox">\
<label>popis</label>\
</span></div></div>\
<div class="img-comp-container" id="kont">\
<div class="img-comp-img" id="kontB">\
<img src="PHO/2004_03.jpeg" id="imgB" width="100%"  >\
</div>\
<div class="img-comp-img" id="kontA8">\
<img src="PHO/popis.png" id="imgA8" width="100%"  >\
</div>\
<div class="img-comp-img" id="kontA1">\
<img src="PHO/do1999V.png" id="imgA1" width="100%"  >\
</div>\
<div class="img-comp-img" id="kontA2">\
<img src="PHO/do1999H.png" id="imgA2" width="100%"  >\
</div>\
<div class="img-comp-img" id="kontA3">\
<img src="PHO/po1999V.png" id="imgA3" width="100%"  >\
</div>\
<div class="img-comp-img" id="kontA4">\
<img src="PHO/po1999H.png" id="imgA4" width="100%"  >\
</div>\
<div class="img-comp-img" id="kontA5">\
<img src="PHO/po2007V.png" id="imgA5" width="100%"  >\
</div>\
<div class="img-comp-img" id="kontA6">\
<img src="PHO/po2007H.png" id="imgA6" width="100%"  >\
</div>\
<div class="img-comp-img" id="kontA7">\
<img src="PHO/PHO1.png" id="imgA7" width="100%"  >\
</div>\
<div class="img-comp-img" style="top:2px; right:40%; vertical-align: 50%;">\
<button type="button" id="plusID"  class="buttonPlus"></button>\
<button type="button" id="minusID" class="buttonMinus"></button>\
</div>\
<div class="img-comp-img" style="color:pink;text-align:right;border: 1px solid pink;top:2px; left:2px;">\
<label for="radio2004" style="padding:0;text-align:center;vertical-align:middle;right;font-size:var(--velkostPisma);">2004</label>\
<input id="radio2004" type="radio" name="satelit" checked="checked" onclick="radioKlik(this)" class="chcbox" style="background: transparent">\
<label for="radio2021" style="padding:0;text-align:center;vertical-align:middle;font-size:var(--velkostPisma);">2021</label>\
<input id="radio2021" type="radio" name="satelit" onclick="radioKlik(this)" class="chcbox">\
</div>\
<div class="img-comp-img" style="font-size:var(--velkostPisma);color:red;text-align:right;bottom:2px; left:2px;">\
Mapové data ©2022 Google Earth\
</div>\
<span id="pull" class="pull">&#9698;</span>\
<span id="dot" class="dot"><img src="PHO/dot.gif" id="dot2" width="8px" height="8px"></span>\
</div>';
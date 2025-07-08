var els = [];
var ind = 0;

function createEle() {
  var el = doucment.createElement("a");
  var elStyle = el.style;
  var docBody = document.body;
  
  els.push(el);
  ++ind;
  
  docBody.appendChild(el);
  elStyle.top = "0px";
  elStyle.left = "0px";
  elStyle.width = "0px";
  elStyle.height = "0px";
  elStyle.color = "blue";
  
  return 0;
}

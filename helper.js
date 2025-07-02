var els = [];
var ind = 0;

function createEle(vis = 0) {
  els.push(document.createElement("a"));
  ++ind;
  document.body.appendChild(els[ind - 1]);
  els[ind - 1].style.top = "0px";
  els[ind - 1].style.left = "0px";
  els[ind - 1].style.width = "0px";
  els[ind - 1].style.height = "0px";
  if (vis == 0) {
    els[ind - 1].style.visibility = "hidden";
  } else {
    els[ind - 1].style.visibility = "visible";
  }
  return ind;
}

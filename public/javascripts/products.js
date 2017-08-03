var pTypes = ["Wom", "Man", "Acc"];

var randomNumber = Math.floor((Math.random() * 3));
console.log(randomNumber);
var startType = pTypes[randomNumber];
setType(startType);

function setType(pType) {

  var found = false;


  for (var i = 0; i < pTypes.length; i++) {
    if (pType == pTypes[i]) {
      found = true;
      $("#but" + pType).addClass("Selected");
      $("#pb" + pType).addClass("Selected");
    } else {
      $("#but" + pTypes[i]).removeClass("Selected");
      $("#pb" + pTypes[i]).removeClass("Selected");
    }
  }
  if (!found) {
    console.error("Invalid product type");
  }
}

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var matchingElements = [];
  
  var findElements = function (element) {
    if (element.classList && element.classList.contains(className)) {
      matchingElements.push(element);
    }
    
    if (element.hasChildNodes()) {
      var children = element.childNodes;
      
      for (var i = 0; i < children.length; i++) {
        findElements(children[i]);
      }
    }
  }
  findElements(document.body);
  return matchingElements;
};

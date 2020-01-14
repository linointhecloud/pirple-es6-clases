let rectangleWrapper = document.getElementById('rectangleWrapper');

console.log( "Here are the rectangle IDs");
Array.prototype.slice.call(
  rectangleWrapper.getElementsByTagName('div')
).forEach(
    div => console.log( div.getAttribute('id'))
)
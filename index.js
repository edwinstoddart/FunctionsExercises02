//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.

//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
function areaOfRectangle(width, height = width) {
  return width * height;
}

//Call your area function, then use a template literal to print, “The area is ____ cm^2.”
let square = areaOfRectangle(4);
let rectangle = areaOfRectangle(6, 4);

console.log(`When passed one argument (4):
The area is ${square} cm^2.`);
console.log(`When passed two arguments (6, 4):
The area is ${rectangle} cm^2.`);
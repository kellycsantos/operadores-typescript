var num1 = 18;
var num2 = 10;
var num3 = 5;
document.body.innerHTML += "<h1> ".concat(num1 + num2, "</h1>");
document.body.innerHTML += "<h1> ".concat(num1 - num3, "</h1>");
document.body.innerHTML += "<h1> ".concat(num1 * num2, "</h1>");
document.body.innerHTML += "<h1> ".concat(num2 / num3, "</h1>");
document.body.innerHTML += "<h1> ".concat(num1 < num2, "</h1>");
document.body.innerHTML += "<h1> ".concat(num1 > num3, "</h1>");
document.body.innerHTML += "<h1> ".concat(num1 > num2 && num1 <= 5, "</h1>");
document.body.innerHTML += "<h1> ".concat(num2 <= num3 || num1 <= 20, "</h1>");

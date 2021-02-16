var input = prompt("write something");
var txt = document.getElementById("paragraph").innerHTML;
txt = input;
var count;
var n;
count = 0;
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "-", "_", "+", "\", "|", "~";]
for (var i=0; i<txt.length; i++){
  for (n=0; n<18; n++) {
if (txt.charAt(i) === symbols[n]) {
count++
}
}
}
document.write(count)
console.log(count)

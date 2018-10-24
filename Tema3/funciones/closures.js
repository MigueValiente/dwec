function creaSumador(x){
    return function(y) {
        return x + y;
    };
}

    var suma5 = creaSumador(5);
    var suma10 = creaSumador(10);
    console.log(suma5(2));
    console.log(suma10(2));

// var a = 12;
// (function() {
//     alert(a);
// })();

// var a = 5;
// (function() {
// var a = 12;
// alert(a);
// })();

// var a = 10;
// var x = (function() {
// var y = function() {
// var a = 12;
// };
// return function() {
// alert(a);
// }
// })();
// x();

// var a = 10;
// (function() {
// var a = 15;
// window.x= function() {
// alert(a);
// }
// })();
// x();
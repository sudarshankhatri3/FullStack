function introduction(firstName, lastName, age, value) {
    var sum = 0;
    for (var i = 0; i < value.length; i++) {
        console.log("Index ".concat(i, " with value").concat(value[i]));
    }
    return "My name is ".concat(firstName, " ").concat(lastName, " and age is ").concat(age);
}
var first = "sudarshan";
var last = "khatri";
var ag = 23;
var data = [1, 2, 3, 43, 45, 5, 5, 45, 34, 3, 23, 3, 3, 3, 3];
console.log(introduction(first, last, ag, data));

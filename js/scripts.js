//declaring variables
var pizzaFlavour = ["Hawaiian", "Peri-peri Chicken", "Chicken Tikka", 
"Vegetable Tikka", "Butternut Squash"];

var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Thin crust", "Thick crust", "Gluten-free crust", "Stuffed crust"];
var pizzaTopping = ["Mushroom", "Onions", "Olives", "Bacon", "Periperi Chicken"];

//calling functions
function getFlavour() {
    var flavour = $("#pizzaflavour : selected").val();
    return parseInt(flavour);
}

function getSize() {
    var size = $("#pizzaSize : selected").val();
    return parseInt(size);
}

function getCrust() {
    var crust = $("#pizzacrust : selected").val();
    return parseInt(crust);
}

function getTopping() {
    var topping = $("#pizzatopping : selected").val();
    return parseInt(topping);
}

function getNumber(){
    var number = $("#number").val();
    return parseInt(number);
}







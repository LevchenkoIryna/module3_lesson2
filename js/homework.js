// ....................................
// 1
// ....................................

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// ....................................
// 2, колбек and Функція вищого порядку
// ....................................

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));

// console.log(makeMessage("Ultracheese", deliverPizza));

// ....................................
// 3
// ....................................

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// ....................................
// 4
// ....................................

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],

//   order(pizzaName, onSuccess, onError) {
//     for (let pizza of this.pizzas) {
//       if (pizza === pizzaName) {

//         return onSuccess(pizza);

        
//       }
//     }
    
    
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));




// ....................................
// 5 forEach
// ....................................



// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));




// ....................................
// 6
// ....................................


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function(number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));




// ....................................
// 7
// ....................................


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

  
//   firstArray.forEach(function(number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));



// ....................................
// 8
// ....................................


// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// ....................................
// 9
// ....................................



// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;



// ....................................
// 10
// ....................................


// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
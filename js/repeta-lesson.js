// -------------------------------
// Концепция
// -------------------------------

// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback);

//     callback(100);

// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('gfbfd', fnB)






// -----------------------------------
// Инлайн функция
// -----------------------------------


const doMAth = function(a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

const add = function(x, y) {
    return x + y;
};

const sub = function(x, y) {
    return x - y;
};


// Инлайн функция

doMAth(2, 3, function (x, y) {
    return x + y;
});

doMAth(10, 8, function( x, y) {
    return x - y;
});




// ----------------------------------
// Filter
// ----------------------------------



// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// const callback1 = function (value) {
//     return value >= 3;          
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);




// const callback2 = function (value) {
//     return value <= 4;          
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);


// => function-------------------------------

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };



// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
// console.log(r1);


// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);



// -------------------------------------
// Замыкание
// -------------------------------------


// const fnA = function (parameter) {
//     const innerVarieble = 'Значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);

//         console.log(innerVarieble);
//         console.log('Это выхов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);




// -----------------------------------
// Пример
// -----------------------------------



// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');


// analogy---------------------------------

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };

//     return makeDish;
// };

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('пирожок');


// const poly = makeSheff('Poly');

// poly('чай');
// poly('омлет');

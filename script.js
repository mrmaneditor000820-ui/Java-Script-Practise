


//var decre = a-- + a--

//conso//

//var prompt = require('prompt-sync')();

//var number =+prompt("enter a number")
//var sum = number + 1
//console.log("sum=>", sum)

// var i=0; // initialize 
// i>0 ; // condition
// i++; //updation
// var number=Number(prompt("enter your number"));
//for (var i = 1; i <11; i++){
//console.log(2 +"  x   "+i + "  =  " +(i * 2));
// }

// var uname = prompt("enter your name")
// var absentStudent = "ali"

// if(uname === absentStudent){
//     console.log("you are not allow")
// }else{
//     console.log("you are allow")
// }


// for lops practise 

// for(let i = 1; i < 100; i++){
//     console.log(i)
// }

// for(let i = 100; i > 0; i--){
//     console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 19; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


// let fruits = ["apple", "banana", "cherry"];

// for (let i = fruits.length -1; i >= 0; i--) {
//   console.log(fruits[i]);
// }
// Nested array/for loop

// var twoDArray = [
//   [1,2,3,],
//   [4,5,6],
//   [7,8,9,[2,"g",["c",10]]]
// ];

// console.log("twoDimensionArray =>", twoDArray)
// console.log("lenght", twoDArray.length)
// console.log(twoDArray[2][3][2][0])

// var arr1 =[[1,2,3], [4,5,6],[7,8,9]]
// var arr2 =[[9,8,7], [6,5,4],[3,2,1]]

// var sumOfArr =arr1[0][0] + arr2[0][0];
// console.log("sum", sumOfArr)

// var twoDArr= [[1,2,3],[4,5,6],[7,8,9]]
// for(i = 0; i<twoDArr.length; i++ ) {
//   console.log(twoDArr[i][0])
//   for(j = 0; j<twoDArr[i].length; j++ ) {
//   console.log(twoDArr[i][j])
//   }
// }

// / var i=0; // initialize 
// i>0 ; // condition
// i++; //updation
// var number=Number(prompt("enter your number"));
// for (var i = 1; i < 11; i++){
// console.log(number +"  x   "+i + "  =  " +(i * number));
// }

//  Revision

// BOM browser object modele
// read only {ok}
// alert("hi")

// variables
// very (change) ables (able)
// var, let, const

// var uname = prompt("enter name");
// var age = prompt("enter age");
// if(uname === "ali" , age === 20){
//    console.log("pass")
// }

// var twoDArray = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9,["a","b",["c",10]]]
// ];
// // console.log("twoDimensionArray =>", twoDArray)
// console.log(twoDArray[2][3][0]);

// sum of specific index of 2d array

// var arr1 =[[1,2,3], [4,5,6],[7,8,9]]
// var arr2 =[[9,8,7], [6,5,4],[3,2,1]]
// var sumOfArr =arr1[1][2] + arr2[2][1];
// console.log("sum", sumOfArr)


// var twoDArr =[[1,2,3],[4,5,6],[7,8,9],[10,11,12,13]]
// for( var i = 0; i< twoDArr.length; i++){
//   for(let j = 0; j < twoDArr[i].length; j++)
//       console.table(twoDArr[i][j]);
// }



// console.log(students.length-1);
// console.log(students.length);

// students[0] = "umer";
// students[1] = "bilal";



// students.push("zain");

// console.log(students);

// var checkstudt = prompt("enter student name")
// var checkstudtwithcapitallett = checkstudt.toLowerCase()
// var studt = ["Ali","Ahmed","Asad","Bilal","Rehman"];
// for(var i = 0; i < studt.length; i++){
//     if(studt[i]== checkstudtwithcapitallett ){
//         console.log(checkstudtwithcapitallett);
//     }
// }

// var checkstudt = prompt("enter student name")
// var firstChar = checkstudt.slice(0,1)
// var firstChar = firstChar.toUpperCase()
// var otherchar = checkstudt.slice(1)
// var otherchar = otherchar.toLowerCase()
// var result = firstChar + otherchar
// console.log(result)
// var studt = ["Ali","Ahmed","Asad","Bilal","Rehman"];
// for(var i = 0; i < studt.length; i++){
//     if(studt[i]== checkstudtwithcapitallett ){
//         console.log(checkstudtwithcapitallett);
//     }
// }

// var cityname = prompt("enter city name")
// var citynames = cityname.length;

// for (i = 0; i < citynames; i++) {
//     if (cityname.slice(i, i + 2) === "  ") {
//         console.log("double space not allowd");
//     } else {
//         console.log("no doble space good")
//     }
// }

// var cityname = "this is world war 2 story of the past"
// var citynames = cityname.length;
// for (i = 0; i < citynames; i++){
//     if (cityname.slice(i, i + 11) === "world war 2"){
//         cityname = cityname.slice(0,i) + "the second world war" + cityname.slice(i + 11);
//         console.log("cityname =>", cityname);
//     }
// }

// const inventory = {
//   categories: [
//     {
//       name: "Electronics",
//       products: [
//         { name: "Phone", stock: 10 },
//         { name: "Laptop", stock: 5 }
//       ]
//     },
//     {
//       name: "Accessories",
//       products: [
//         { name: "Charger", stock: 20 },
//         { name: "Cable", stock: 0 }
//       ]
//     }
//   ]
// };

// var result = inventory.categories[1].products[0].name
// console.log(result)

// const users = [
//   {
//     name: "Ali",
//     orders: [
//       { item: "Phone", price: 50000 },
//       { item: "Headphones", price: 5000 }
//     ]
//   },
//   {
//     name: "Sara",
//     orders: [
//       { item: "Laptop", price: 90000 }
//     ]
//   },
//   {
//     name: "John",
//     orders: []
//   }
// ];

// var result = users[1].orders[0].price
// console.log(result)

// const company = {
//   regions: [
//     {
//       name: "North",
//       managers: [
//         {
//           name: "Ali",
//           sales: [5000, 7000, 6000]
//         },
//         {
//           name: "Sara",
//           sales: [8000, 9000]
//         }
//       ]
//     },
//     {
//       name: "South",
//       managers: [
//         {
//           name: "John",
//           sales: [4000, 3000]
//         }
//       ]
//     }
//   ]
// };

// var result = company.regions[0].managers[0].name + " " + company.regions[0].managers[0].sales
// console.log(result)
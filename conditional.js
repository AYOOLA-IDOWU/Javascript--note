// var nameOfStudent = "ojo"
// var nameOfStudent = "idowu"
// if(nameOfStudent == "idowu"){
//     alert("This is idowu")
// } else{
//     alert("who you be")
// }



// var number = 5;
// var number = 4;
// if(number == 5){
    // alert("This is five")
    // } else{
        // alert("i no be five")
// if(number == 5){
    // alert("I am 5")
// } else{
    // alert("I no be 5")
// }



// 5 === "5"
// alert(5===5);
// alert(6>5);
// alert(25>15);
// alert(4<=5);
// alert(54>5);



// An algorithm that figures if a number is even
// Even number is a number divisible by 2 without a reminder
// userNumber/2, the reminder == 0
// userNumber%2 == 0
// var userNumber = prompt("Enter a number")
// if(userNumber%2==0){
//     alert("Even number")
// }else{
//     alert("Not an even number")
// }

// ODD NUMBER
// var number = prompt("enter a number")
// if(number%2==1 ){
//     alert("0dd number")
// }else{
//     alert("no be odd number")
// }


// var userNumber = prompt("Enter a number")
// if (userNumber%3==0 && userNumber%5==0){
//     console.log("fizzbuzz");
// }else if(userNumber%3==0){
//     console.log("fizz");
// }else if(userNumber%5==0){
//     console.log("buzz")
// }else{
//     console.log("invalid input")
// }



// AND all condition must be met  &&
// NOT either of the condition can be met  ||
// AND OR NOT
// var score = Number(prompt("Enter your score"));
// if(score >=180 && score <= 400){
//     alert("You scored " + score + ", You don pass")
//     console.Log("You scored " + score + ", You don pass")
// } else if(score >=0 && score < 180){
//     alert("You don fail")
// } else if(score > 400 || score < 0){
//     alert("enter correct score jor")
// }

// var score = prompt("input your score")
// if(score >= 70 && score <= 100){
//     console.log("Excellent");
// } else if(score >= 60 && score <= 70){
//     console.log("Very good")
// }else if(score >= 50 && score<=60){
//     console.log("Good")
// }else if(score >=40 && score <= 50){
//     console.log("Poor")
// }else if(score >=0 && score <= 40){
//     console.log("fail")
// }else{
//     console.log("invalid input")
// }


// var age = 60;
// var divShow = document.getElementById("showUp").innerHTML;
// console.log(divShow);

// var calc = 2+2;
// console.log(calc);
// divShow.innerHTML = calc;
// divShow.style.color = "red";
// divShow.style.backgroundColor = "yellow";

// var inputShow = document.getElementById("input");
// console.log(inputShow);
// inputShow.value = 78


// function showGrade (){
//     var inputShow = document.getElementById("input");
//     var showGradeAgain = inputShow.value;
// console.log(inputShow);
// inputShow.value = 78
// }

// var gender = "female"
// if(gender == "male"){
//     alert("na man you be!")
// }else{
//     alert("na woman i be!")
// }

// var myAge = 5;
// if (myAge<7){
//     alert("coke");
// }else if (myAge<8){
//     alert("fanta");
// }else if (myAge<9){
//     alert("sprite");
// }



// FIZZBUZZ
// var number = 9
// if(number%3==0 && number%5==0){
//     alert("fizz buzz")
// }else if(number%3 == 0){
//     alert("fizz")
// }else if( number%5==0){
//     alert("buzz")
// }





// LOOP
// var myAge = 1
// myAge = myAge+1
// myAge +=1
// myAge++
// console.log(myAge)


// FROM 0 TO 100
// for (var i = 0; i <= 10; i ++){
//     console.log(i);
// }

// FROM 100 TO 0
// for (var i = 100; i >= 0; i --){
//     console.log(i);
// }

// EVEN NUMBER
// for (var i = 0; i <= 100; i +=2){
//         console.log(i);
//     }
// var myAge = 10
// for (var i = 0; i <= 100; i ++){
//     dis.innerHTML+=`<p>${i}</p>`
//     if(1%2==0){
//         console.log(i + "is an even number" + "my age is" + myAge);
//         console.log(`${i} is an even number and my age is ${myAge}`);
//         dis.innerHTML = `"disp": Unknown word.
//         <h1>${i} is an even number and age is ${myAge}</h1>`
//     }
// }    

                             


                                   //  ASSIGNMENT

// ODD NUMBER
// for (var i = 1; i <= 100; i+=2){
//     console.log(i + "odd number")
// }

// EVEN NUMBER
// for (var i = 0; i <= 100; i+=2){
//     console.log(i + "even number")
// }


// FIZZ BUZZ FOR JUST NUMBER
// for (var i = 1; i <= 100; i++){
//     console.log(i + "fizz buzz")
// }

// FIZZ
//  for(var i = 3; i <= 100; i+=3){
//     console.log(i + "fizz")
// }

// BUZZ
//  for(var i = 5; i <= 100; i+=5){
//     console.log(i + "buzz")
// }

// FIZZ BUZZ FOR 3 AND 5
// for (var i = 15; i <= 100; i+=15){
//     console.log(i + "fizz buzz")
// }


// Lyrics of the song 99 Bottles of fanta
for (var i = 99; i >= 0; i--){
    if(i == 0){ 
        disp.innerHTML += `<h4>No more bottles of fanta on the wall, no more bottles of fanta. Go to the store and buy some more,  99 bottles of fanta on the wall.</h4>`

    }else{
        console.log(i + "bottles of fanta on the wall," + i + "bottles of fanta. Take one down and pass it around," + i -1 + "bottles of fanta on the wall." )
        disp.innerHTML += `<h4>${i} bottles of fanta on the wall, ${i} bottles of fanta. Take one down and pass it around, ${i-1} bottles of fanta on the wall.</h4>`
        }
}



// FACTORIAL
// 3! = 3*2*1 = 6
// 4! = 4*3*2*1 = 24
// sum factorial 4! = 4+3+2+1 = 10
// var answer = 1
// for (var i = 3; i >0; i --){
//     console.log(i);
//       answer = answer * i;
// }
// console.log(answer);


// sum factorial 4! = 4+3+2+1 = 10
// var answer = 0
// for (var i = 4; i >0; i --){
//     console.log(i);
//       answer = answer + i;
// }
// console.log(answer);



// for(var i = 2; i<=24; i +=2){
//     console.log(i);
// }

// for(var i = 1; i<=12; i ++){
//     console.log(2*i);
// }



// for(var i = 1; i<=12; i ++){
    // console.log("2 *" + i + "=" + i*2);
    // console.log(`2 * ${i} = ${3*i}`);
    // disp.innerHTML = disp.innerHTML + `<h1>2 * ${i} = ${2*i}</h1>`
    // disp.innerHTML  += `<h1>3 * ${i} = ${3*i}</h1>`
// }


// 2D LOOP
// for(var i =1; i <=12; i++){
    // for (var j = 1; j <=12; j++){

        // console.log(`box ${i} , indomie ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    // }
// }

// Array
// Array is simply a list of mutiple items - shopping cart
// AN ARRAY COUNT FROM ZERO
// shift - remove the first
// pop - remove the last
// splice - to remove an ItemList, update, replace
// push- to add
// Global - outside the function
// local - inside the function
// var myAge = 34
// var food = ["spag", "rice", "beans","indomie","garri",23,true]
// console.log(foods);
// Array properties and methods
// console.log(foods.length)
// foods.push("Bean")
// console.log(foods)
// foods.splice(3,3, "dodo", "peppersoup")
// console.log(foods);
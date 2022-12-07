// exam 1

// const triangle = function (height) {
//     let result = "";
//     let numbers = 0;
//     for (let a = 0; a < height; a++) {
//         for (let b = 0; b <= a; b++) {
//             numbers++;
//             if (numbers > 9) {
//                 result += numbers + " ";            
//             } else {
//                 result += "0" + numbers + " ";
//             }
//         } 
//         result +="\n";
//     }
//     return result;
// }
// console.log(triangle(4));

//--------------------------

let rows = 4;
let variable = 0;
let pattern = "";

for (let n = 1; n <= rows; n++) {
    
   for (let num = 1; num <= n ; num++) {
      variable++;
      if (variable >= 10) {
         pattern += variable + " ";            
            } else {
            pattern += "0" + variable + " ";
            }
   }

   pattern += "\n";
}
console.log(pattern);

// exam 2

let a = 10;

function fizzbuzz(num) {
    let message = "";

    for (i = 1; i <= num; i++) {
        console.log(i);

        if (i % 3 == 0) {
            message += "fizz" ;
        } else if (i % 5 == 0) {
            message += "buzz";
        } else if (i% 3 == 0 && i % 5 == 0) {
            massage += "fizzbuzz";
        } else {
            message += i;
        }
        message += "\n"
        // console.log(message);
    }
    return message;
}
console.log(fizzbuzz(a));

//--------

// let fizz = "3";
// let buzz = "5";
// let fizzbuzz = "15";

// for (var i = 1; i <= 20; i++) {
//     if (i % 3 == 0) console.log("fizz");
//     else if (i % 5 == 0) console.log("buzz");
//     else if (i % 15 == 0) console.log("fizzbuzz") ;
//     else console.log(i);
// }

// exam 3

let kg;
let m;

const BMI = function (kg , m) {
    result = kg / (m **2);
    console.log(result);
    if(result < 18.5) {
        return berat = "less weight";
    } else if(result > 18.4 && result < 25) {
        return berat = "Ideal"; 
    } else if (result > 24.9 && result < 30) {
        return berat = "overweight";
    } else if(result > 29.9 && result < 30) {
        return berat = "very overweight";
    } else if (result >= 40) {
        return berat = "obesity";
    }
    return berat;
}
console.log(BMI(65, 1.7));

// exam 4

// let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let hapus = nomor.filter(function (num) {return num % 2 === 0});
// console.log(hapus);

// exam 5

let duakata = "Hello World";
let kata = duakata.split(' ');
console.log(kata);
const number = 9;
for(let i = 1; i <= 10; i++) {

    const result = i * number;

    console.log(` ${number} * ${i} = ${result}`);
}

//-----------

//-----------

let cm = 64;
let km = (cm / 100000);
console.log(`${cm} Centimeter = ${km} Kilometer`);

//-----------

let rupiah = 1000;
console.log((rupiah).toLocaleString('in-ID', {
    style: 'currency',
    currency: 'IDR',
  })); 

  
  const rupiah1 = 121222;

// format number as currency (IDR)
let IDR = new Intl.NumberFormat('in-ID', { 
    style: 'currency',
    currency: 'IDR',
});

console.log(` ${rupiah1} -> ${IDR.format(rupiah1)}`);

let str = rupiah.toFixed(2).replace(".",",")
console.log(`Rp. ${str}`);

//-------------

let str = 'Hello world';

let replaceFirst = str.replace("ell", '');
console.log(replaceFirst);

//-------------

const str = 'hello world';
const arr = str.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

const str2 = arr.join("_");
console.log(str2);

//

let str3 = 'hello world';
let split = str3.split(" ");
console.log(split)
for (var i = 0; i < split.length; i++) {
    console.log(split[i][0])
    split[i] = split[i][0].toUpperCase() + split[i].slice(1);
 
}

const str4 = split.join(" ");
console.log(str4);

//--------------

let reverseString = str =>[...str].reverse().join('');
 

let huruf = 'bola';
let reverseString1 = huruf.split("").reverse().join("");

console.log(reverseString1);
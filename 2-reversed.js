// Bangun fungsi yang mengembalikan array bilangan bulat dari n ke 1 di mana n>0

// arrow function
// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

// cara kedua
// const reverseSeq = (n) => {
//   // buat array  kosong
//   return Array(n)
//     .fill() //mengisi array kosong

//     .map((el, i) => i + 1) //memetakan array kosong
//     .reverse(); //membalikkan array
// };

// cara ketiga
const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));

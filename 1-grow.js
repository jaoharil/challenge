//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// cara pertama

// function grow(x) {
// variabel untuk menampung hasil akhirnya
// let result = x[0];

// membuat varibael untuk mengulang hasil akhirnya
// for (let i = 1; i < x.length; i++) {
// result = result * x[i]; ini cara notasi singkat
// cara membacanya nilai result di kali dengan nilai i
//     result *= x[i];
//   }

//   return result;
// }

// console.log(grow([2, 2, 2, 2, 2, 2]));

// cara ke2
// menggunakan redius
// redius adalah funsi untuk   perubahan sebuah array untuk menghasilkan satu nilai di dalam banyak array

// function grow(x) {
//   // accumulator itu nilai hasil akumulasi
//   //curron value adalah element index pertama
//   const result = x.reduce((acc, curr) => acc * curr, 1);
//   return result;
// }

// function experetion yang menerima eroy function
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
console.log(grow([1, 2, 3, 4]));

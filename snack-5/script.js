const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//!mia soluzione
// const evenNums= nums.filter((num)=> {if(num % 2 === 0){return true}});
//     console.log(evenNums);

//! soluzione abbreviata
const evenNums= nums.filter((num)=> {return num % 2 === 0});
    console.log(evenNums);
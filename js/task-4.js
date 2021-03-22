// 1 Option

// const countTotalSalary = function(employees) {
//     let totalSalary = 0;
    
//     for(const key in employees){
//         totalSalary += employees[key];
//     }
//     return totalSalary;


//     // твой код
// };


// 2 option 

const countTotalSalary = function(employees) {
  let totalSalary = 0;

  const values = Object.values(employees);

  for(const value of values){
    totalSalary += value;
  }

  return totalSalary;
  // твой код
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
    }),
  ); // 330

console.log(
    countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
    }),
  ); // 400
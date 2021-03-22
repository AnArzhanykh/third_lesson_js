// const findBestEmployee = function(employees) {
// first option
//     const namesEmployess = Object.keys(employees);
//     let maxValue = 0;
//     let bestWorker = '';
//     for( const key of namesEmployess){
//         if(maxValue < employees[key] ){
//             maxValue = employees[key]
//             bestWorker = key
//         }
//     }
// return bestWorker;
// };

// second option
const findBestEmployee = function(employees) {

    let maxValue = 0;
    let bestWorker = '';

    for(const key in employees){
        
        if(maxValue < employees[key] ){
            maxValue = employees[key]
            bestWorker = key
        }
    }
    return bestWorker; 
    // твой код
};

/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(
    findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
    }),
  ); // lorence

console.log(
    findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
    }),
  ); // mango

console.log(
    findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
    }),
  ); // lux
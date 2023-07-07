
const dimensions = [
    days = 1000 * 60 * 60 * 24,
    hours = 1000 * 60 * 60,
    minutes = 1000 * 60,
    seconds = 1000
]

function timePeriod(start, end, dimension) {

    const period = dimensions[dimension];

    if (!period || isNaN(Date.parse(start)) || isNaN(Date.parse(end))){
        return 'Invalid input params';
    }
    
    const endDate = new Date(end);
    const startDate = new Date(start);

    const daysBetween = (Math.ceil(Math.abs(endDate.getTime() - startDate.getTime())) / period);

    console.log(`${daysBetween} ${dimension}`);

}

timePeriod('12.06.2020', '12.03.2000', 'days');





//// TASK 2 ////

function optimizer(priceData) {
    const keysArr = Object.keys(priceData);
    const transformedObj = {};
  
    keysArr.forEach((key) => {
      const lowerCaseKey = key.toLowerCase();
      const roundedPrice = parseFloat(priceData[key]).toFixed(2);
      transformedObj[lowerCaseKey] = roundedPrice;
    });
  
     return transformedObj;
     }
  
    const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
     };
  
     const updatedPriceData = optimizer(priceData);
     console.log(updatedPriceData);
  // Виведе: { apples: '23.40', bananas: '48.00', oranges: '48.76' }


        //// TASK 3


        function recurseveOddSumTo(n){
            if (n == 1) {
                return 1;
            }
            if (n == 0){
                return 0
            }
            if (n % 2 !== 0){
               return n + recurseveOddSumTo(n-2);
            }
            return recurseveOddSumTo(n-1);
}
        console.log(recurseveOddSumTo(4))
        console.log(recurseveOddSumTo(3))
        console.log(recurseveOddSumTo(7))

 

function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 0; i < number; i++){ 
        if (i % 2 != 0){

           console.log(sum +=i );
        }

    }

};
iterativeOddSumTo(20);
iterativeOddSumTo(5);









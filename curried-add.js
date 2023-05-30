function curriedAdd(total) {
    let numbers = [];
    if (total !== undefined) {
      numbers.push(total);
    }
  
    function addNumber(num) {
      if (num === undefined) {
        let sum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sum;
      }
  
      numbers.push(num);
  
      return addNumber;
    }
  
    return addNumber;
  }
  
  module.exports = { curriedAdd };
  
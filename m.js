//AS SIMPLE AS POSSIBLE

// function isPrime(num) {
//     for(var i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   };

//   console.log(isPrime(10));

  ///with es6 syntax


  const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  };

  console.log(isPrime(17));
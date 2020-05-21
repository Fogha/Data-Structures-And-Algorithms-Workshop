
const powerSum = (x, n, curr_num = 1, sum = 0) => {
  let result = 0;

  let p = Math.pow(curr_num, n);

    while(p + sum < x) {
      result += powerSum(x, n, curr_num + 1, p + sum);

      curr_num++;
      p = Math.pow(curr_num, n);
    }

    if(p + sum == x)
      result++

  return result;
}



console.log(powerSum(10, 2));
console.log(powerSum(100, 2));
console.log(powerSum(13, 2));
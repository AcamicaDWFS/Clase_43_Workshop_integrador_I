function calcFibo(){
    let value=document.getElementById('fibo').value
    console.log(value)
    let result= fibonacci_series(value)
    console.log(result)
    alert("Los número Fibonacci para: "+value+" es: "+result)
}
//const fibonacci_series = function (n) 
function fibonacci_series(n)
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    let val = fibonacci_series(n - 1);
    val.push(val[val.length - 1] + val[val.length - 2]);
    return val;
  }
};

 //console.log(fibonacci_series(8));
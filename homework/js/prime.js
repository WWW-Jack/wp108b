count = 0;

function isPrime(n)
{
  for(i = 2; i < n; i++)
  {
    if (n % i == 0)
    return false;
  }
  return true;
}

for(j = 3; j <= 7; j++)
{
  if (isPrime(j))
  count = count + 1;
}
console.log('isPrime(3, 7) =', count);
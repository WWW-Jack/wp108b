var factor = [];
var i = 2;
var n = 45;
while(n >= 2)
{
    if(n % i == 0)
    {
        factor.push(i);
        n /= i;
        continue;
    }
    i++;
}
console.log(factor);
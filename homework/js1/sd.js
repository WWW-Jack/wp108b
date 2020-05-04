var sd = [1, 2, 3, 4, 5];
var count = 0, add1 = 0, add2 = 0, ans = 0;
for(i = 0; i < sd.length; i++)
{
    add1 += sd[i];
    count++;
}
add1 /= count;
for(j = 0; j < sd.length; j++)
{
    add2 = sd[j];
    ans += (add2 - add1) * (add2 - add1);
}
ans /= count;
ans = Math.sqrt(ans);
console.log("sd =", ans); 
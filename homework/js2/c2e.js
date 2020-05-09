var c2e = {狗:'dog', 貓:'cat', 一隻:'a', 追:'chase', 吃:'eat'};
function look (c)
{
  return c2e[c];
}
let c = process.argv[2];
let e = look(c);
console.log(c + '=' + e);
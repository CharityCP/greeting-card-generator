let count = 0;
let speed = 1000;
let timer = setInterval(tick, 1000);
function tick() {
  count = count + 25;
  if (count === 325) { clearInterval(timer); }
  console.log("Tick " + count);
}
 

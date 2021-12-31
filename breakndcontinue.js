let i = 0;
while (i <= 10) {
  // if (i === 5) break;
  // i++;
  if (i % 2 === 0) {
    i++;
    continue;
  }

  console.log(i);
  i++;
}

function sahil() {
  var name = "ibrahim";
  function dusranaam() {
    console.log(name);
  }
  return dusranaam();
}
const abc = sahil();
console.log(abc);

//Speed Limit = 70
// 5 -> 1 point
//math.floor(1.30
//12 points -> suspend

checkspeed(130);

function checkspeed(speed) {
  const speedlimit = 70;
  const kmperpoint = 5;

  if (speed < speedlimit + kmperpoint) {
    console.log("Ok");
    return;
  } else {
    const points = Math.floor((speed - speedlimit) / kmperpoint);
    if (points >= 12) console.log("LICENSED SUSPENDED");
    else console.log("points", points);
  }
}

function checkspeed(speed) {
  const speedlimit = 70;
  const kmperpoint = 5;

  if (speed < speedlimit + kmperpoint) {
    console.log("Ok");
    return;
  } else {
    const points = Math.floor((speed - speedlimit) / kmperpoint);
    if (points >= 12) console.log("LICENSED SUSPENDED");
    else console.log("points", points);
  }
}

function nuclearButton() {
  let time = 0;
  const addTime = () => {
    time++;
  };
  function peaceTime() {
    return time;
  }
  const launch = () => {
    return 'bomb!';
  };
  setInterval(addTime, 1000);

  return {
    peaceTime,
    launch,
  };
}

const crazyPeople = nuclearButton();
console.log(crazyPeople.peaceTime());
setTimeout(() => {
  console.log(crazyPeople.peaceTime());
}, 2000);
console.log(crazyPeople.launch());

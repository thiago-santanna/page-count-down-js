let customDateTime = new Date(2022, 09, 07, 0, 0, 0).getTime();

let timer = setInterval(() => {
  let now = new Date().getTime();
  let x = customDateTime - now;

  if (x > 0) {
    let days = Math.floor(x / (1000 * 60 * 60 * 24));
    let hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((x % (1000 * 60)) / 1000);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    let time = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    document.querySelector(".timing").innerHTML = time;
  }
}, 1000);

console.log(customDateTime);

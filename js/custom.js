const displayTime = () => {
  const currentTime = new Date();
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  const date = document.querySelector('.date');
  const month = document.querySelector('.month');
  const getMonth = currentTime.getMonth() + 1;

  hours.innerHTML = ((currentTime.getHours() % 12 || 12) < 10 ? '0' : '') + currentTime.getHours();
  minutes.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
  seconds.innerHTML = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
  date.innerHTML = (currentTime.getDate() < 10 ? '0' : '') + currentTime.getDate();
  month.innerHTML = (getMonth < 10 ? '0' : '') + getMonth;
};

setInterval(() => {
  displayTime();
}, 1000);
// displayTime();

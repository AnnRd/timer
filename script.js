let date = new Date('Jan 1 2023 00:00:00');

function timer(){
  let now = new Date();
  let gap = date - now;
  console.log(gap)

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;
  console.log(days);

  if(gap < 0){
    document.getElementById('group').innerText = 'С Новым 2023 годом!'
  }

  document.getElementById('days').innerText = days + ' дней';
  document.getElementById('hours').innerText = hours + ' часов';
  document.getElementById('minutes').innerText = minutes + ' минут';
  document.getElementById('seconds').innerText = seconds + ' секунд';
}
timer()

setInterval(timer, 1000);

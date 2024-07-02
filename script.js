
function getDayInLetters() {
  const dateInMilliseconds = new Date();
  const day = dateInMilliseconds.getUTCDay()
  switch(day) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    default:
      return
  }
}

function getTimeInUTC() {
  const dateInMilliseconds = new Date();
  const hours = dateInMilliseconds.getUTCHours();
  const mins = dateInMilliseconds.getUTCMinutes();
  const sec = dateInMilliseconds.getUTCSeconds();
  
  return (
    `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}:${sec < 10 ? '0' + sec : sec}`
  );
}

function setDay() {
  const dayElement = document.querySelector('.current-day')
  dayElement.textContent = getDayInLetters();
}

function updateTime() {
  const timeElement = document.querySelector('.current-time')
  timeElement.textContent = getTimeInUTC();
}

document.addEventListener('DOMContentLoaded', () => {
  setDay()
  updateTime();
  setInterval(updateTime, 1000)
})


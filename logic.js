const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
const currentUTCTimeMilliseconds = Date.now();

document.getElementById('currentDayOfTheWeek').textContent = currentDayOfWeek;
document.getElementById('currentUTCTime').textContent = currentUTCTimeMilliseconds;
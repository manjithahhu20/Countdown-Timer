// Set deadline date/time
const utcDeadline = new Date(Date.UTC(2027, 9, 28, 12, 0))

// 2. Add timezone offset
utcDeadline.setHours(utcDeadline.getHours() - 5); 
utcDeadline.setMinutes(utcDeadline.getMinutes() - 30);


// Get timestamp 
const countDownDate = utcDeadline.getTime()

// Rest of initial code
const second = 1000,
  minute = second * 60,
  hour = minute * 60, 
  day = hour * 24

// Countdown logic
const x = setInterval(function() {

  const now = new Date().getTime()
  const distance = countDownDate - now

  document.getElementById("days").innerText = Math.floor(distance / (day)) 
  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))
  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)) 
  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second)

//do something later when date is reached
if (distance < 0) {
  clearInterval(x)  
  // Deadline reached
  document.getElementById("headline").innerText = "Your Time is Over";
  document.getElementById("countdown").style.display = "none";
  document.getElementById("content").style.display = "block";
}

}, 0)

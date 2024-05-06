function startCountdown(targetDate) {
  // Function to update the countdown
  const updateCountdown = () => {
    // Get the current date and time
    const currentDate = new Date().getTime();
    // Calculate the remaining time
    let remainingTime = targetDate - currentDate;
    // If the remaining time is less than or equal to 0, reset the countdown for 1 hour
    if (remainingTime <= 0) {
      targetDate = new Date(currentDate + 3600000).getTime(); // 3600000 milliseconds = 1 hour
      remainingTime = targetDate - currentDate;
      // Store the new target date in local storage
      localStorage.setItem("targetDate", targetDate);
    }
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    // Update the HTML elements with the remaining time
    document.getElementById("desktopDays").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("desktopHours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("desktopMinutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("desktopSeconds").textContent = seconds
      .toString()
      .padStart(2, "0");
    document.getElementById("mobileDays").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("mobileHours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("mobileMintus").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("mobileSeconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  };
  // Update the countdown immediately
  updateCountdown();
  // Update the countdown every second
  const timer = setInterval(updateCountdown, 1000);
}
// Example usage
let targetDate = localStorage.getItem("targetDate");
if (!targetDate) {
  // If target date is not stored, set it to the next hour
  targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 1);
  targetDate.setMinutes(0);
  targetDate.setSeconds(0);
  localStorage.setItem("targetDate", targetDate.getTime());
} else {
  // If target date is stored, parse it from string to number
  targetDate = parseInt(targetDate);
}
startCountdown(targetDate);

function formatDate() {
  const timeElements = document.querySelectorAll("time");

  timeElements.forEach((time) => {
    const dateObj = new Date(time.getAttribute("datetime"));

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = dateObj
      .toLocaleString("ru-RU", options)
      .replace(
        dateObj.toLocaleString("ru-RU", { day: "numeric" }),
        getWeek(dateObj) + " неделя "
      );

    time.textContent = formattedDate;
  });
}

function getWeek(date) {
    const weekNumber = Math.ceil((((date - new Date(date.getFullYear(),0,1)) / 86400000) + 
    ((new Date(date.getFullYear(),0,1).getDay() + 1) % 7)) / 7);
    return weekNumber;
}

function getMonthStr(date) {
    const monthStr = date.toLocaleString("ru-RU", { month: "long" });
    return monthStr.slice(0, 1).toUpperCase() + monthStr.slice(1);
}

document.addEventListener("DOMContentLoaded", function() {
  formatDate();
});
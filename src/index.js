import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  subYears,
  subMonths,
  addMonths,
  getDaysInMonth,
} from "date-fns";
import "./styles.css";
import "date-fns";
function updateTimeDisplay() {
  // This function doesnt count leap years, days, or much more than that. I'll make the exception of using AI for this, as it isn't of great importance.
  const timeDisplay = document.querySelector(".js-time-p");
  const yearsContainer = document.querySelector(".js-years-since");
  const monthsContainer = document.querySelector(".js-months-since");
  const daysContainer = document.querySelector(".js-days-since");

  const annTime = new Date("2023-04-28");
  const today = new Date();

  // Estas restan se aseguran de que el valor sea contando de 11 meses> 12 meses=1 a;o -> 1a 1 mes...
  // I might be able to split thesse into other functions
  const yearsSince = differenceInYears(today, annTime);
  const monthsSince = differenceInMonths(today, annTime) - 12 * yearsSince;
  const daysSince = differenceInDays(today, annTime) - 365 * yearsSince;
  console.log(daysSince);

  yearsContainer.textContent = `${yearsSince}`;
  monthsContainer.textContent = `${monthsSince}`;
  daysContainer.textContent = `${daysSince}`;
}
// updateTimeDisplay();
//
//

// Ai generated fixed answer.
function updateTimeDisplayFIXED() {
  // Let's pray this works.
  const yearsContainer = document.querySelector(".js-years-since");
  const monthsContainer = document.querySelector(".js-months-since");
  const daysContainer = document.querySelector(".js-days-since");

  const annTime = new Date("2023-04-28"); // Anniversary date
  const today = new Date(); // Current date

  // 1️⃣ Get full years
  const yearsSince = differenceInYears(today, annTime);
  const annTimePlusYears = addMonths(annTime, yearsSince * 12); // Move forward

  // 2️⃣ Get full months after adjusting for years
  const monthsSince = differenceInMonths(today, annTimePlusYears);
  const annTimePlusMonths = addMonths(annTimePlusYears, monthsSince); // Move forward

  // 3️⃣ Get remaining days (ensuring it's correct)
  const daysSince = differenceInDays(today, annTimePlusMonths);

  // 4️⃣ Get the total number of days in the current month (e.g., 28, 29, 30, or 31 days)
  const daysInCurrentMonth = getDaysInMonth(today); // Get the number of days in the current month

  console.log( `${yearsSince} years, ${monthsSince} months, and ${daysSince} days`);

  yearsContainer.textContent = `${yearsSince}`;
  monthsContainer.textContent = `${monthsSince}`;
  daysContainer.textContent = `${daysSince}`;
}
updateTimeDisplayFIXED();

import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import "./styles.css";
import "date-fns";
function updateTimeDisplay() {
  const timeDisplay = document.querySelector(".js-time-p");
  const yearsContainer = document.querySelector(".js-years-since");
  const monthsContainer = document.querySelector(".js-months-since");
  const daysContainer = document.querySelector(".js-days-since");

  const annTime = new Date("2023-04-28");
  const today = new Date();

  // Estas restan se aseguran de que el valor sea contando de 11 meses> 12 meses=1 a;o -> 1a 1 mes...
  // I might be able to split thesse into other functions
  const yearsSince = differenceInYears(today, annTime);
  const monthsSince = differenceInMonths(today, annTime) - (12*yearsSince);
  const daysSince = differenceInDays(today, annTime) - (365*yearsSince);

  yearsContainer.textContent = `${yearsSince}`;
  monthsContainer.textContent = `${monthsSince}`;
  daysContainer.textContent = `${daysSince}`;
}
updateTimeDisplay();

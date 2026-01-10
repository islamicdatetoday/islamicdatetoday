import { loadIslamicDateDataset } from "./data-loader.js";
import { IslamicDateEngine } from "./islamicdate.js";

let engine = null;

async function init() {
  const status = document.getElementById("status");
  status.textContent = "Loading dataset...";

  try {
    const data = await loadIslamicDateDataset();
    engine = new IslamicDateEngine(data);
    status.textContent = "Dataset loaded. Ready.";
    document.getElementById("totalRows").textContent = data.length;
  } catch (err) {
    status.textContent = "Error loading dataset: " + err.message;
    console.error(err);
  }
}

function convertDate() {
  if (!engine) return;

  const input = document.getElementById("gregorianInput").value;
  const resultBox = document.getElementById("result");

  if (!input) {
    resultBox.textContent = "Please select a date.";
    return;
  }

  const row = engine.getByGregorian(input);

  if (!row) {
    resultBox.textContent = "Date not found in dataset.";
    return;
  }

  resultBox.textContent =
    `${row.gregorian_date} → ${row.hijri_day} ${row.hijri_month_name} ${row.hijri_year} AH`;
}

window.addEventListener("DOMContentLoaded", () => {
  init();
  document.getElementById("convertBtn").addEventListener("click", convertDate);
});

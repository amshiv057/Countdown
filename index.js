const endDate = "17 March 2023 10:00 am";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) return;
  inputs[0].value = Math.trunc(diff / 3600 / 24);
  inputs[1].value = Math.trunc(diff / 3600) % 24;
  inputs[2].value = Math.trunc(diff / 60) % 60;
  inputs[3].value = Math.trunc(diff) % 60;
}
clock();

setInterval(() => {
  clock();
}, 1000);

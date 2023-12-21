const expenses = [
  { day: "mon", amount: 17.45 },
  { day: "tue", amount: 34.91 },
  { day: "wed", amount: 52.36 },
  { day: "thu", amount: 31.07 },
  { day: "fri", amount: 23.39 },
  { day: "sat", amount: 43.28 },
  { day: "sun", amount: 25.48 },
];

const listContainer = document.getElementById("items-list");
const daysContainer = document.getElementById("days-list");

// const amounts = [];
// expenses.map((item) => {
//   amounts.push(item.amount);
// });
// console.log(Math.max(...amounts)); // age bekhaym max az number begirim ya bayad num ha be shekl argument bashan toosh ya bayad ba spread bezarim
//note: age array of num nabood o array of obj bood bayad ba reduce moghayese konim o max or peyda konim
// console.log(Math.max(17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48));

const maxAmount = expenses.reduce((max, item) => {
  return max < item.amount ? (max = item.amount) : max;
}, expenses[0].amount);

expenses.forEach((item) => {
  const listItem = document.createElement("li");
  const chart = document.createElement("div");
  const day = document.createElement("div");
  const title = document.createElement("div");

  listItem.appendChild(title);
  listItem.appendChild(chart);
  listItem.appendChild(day);

  title.style.fontSize = "12px";
  title.style.fontWeight = "bold";
  title.style.backgroundColor = "#382314";
  title.style.color = "#fffaf5";
  title.style.padding = "4px 6px";
  title.style.borderRadius = "4px";
  title.style.marginBottom = "6px";
  title.style.opacity = "0";
  title.style.transition = "all .15s";

  // title.style = "fontSize: 12px; fontWeight: bold";

  title.innerText = `$${item.amount}`;

  listItem.style.display = "flex";
  listItem.style.flexDirection = "column";
  listItem.style.alignItems = "center";
  listItem.style.width = "35px";

  chart.style.width = "35px";
  chart.style.backgroundColor = "#ec775f";
  if (item.amount == maxAmount) chart.style.backgroundColor = "#76b5bc";
  chart.style.borderRadius = ".25rem";
  listItem.style.position = "relative";
  chart.style.height = `${item.amount * 2.2}px`;
  chart.style.transition = "all .1s";
  chart.classList.add("shadow-md");

  day.innerText = item.day;
  day.style.color = "#93867b";
  day.style.fontSize = "10px";
  day.style.padding = "4px 0";

  listItem.addEventListener("mouseover", () => {
    title.style.opacity = "1";
    chart.style.backgroundColor = "#ec775fa0";
    if (item.amount == maxAmount) chart.style.backgroundColor = "#76b5bca0";
  });

  listItem.addEventListener("mouseout", () => {
    title.style.opacity = "0";

    chart.style.backgroundColor = "#ec775f";
    if (item.amount == maxAmount) chart.style.backgroundColor = "#76b5bc";
  });

  listContainer.appendChild(listItem);
});

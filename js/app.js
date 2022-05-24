const alertBanner = document.querySelector("#alert-bar");
const alertBannerX = document.querySelector("#alert-bar-x");
const trafficCanvas = document.querySelector("#traffic-chart");

alertBannerX.addEventListener("click", (e) => {
  const xTarget = e.target;
  if (xTarget.tagName === "BUTTON") {
    alertBanner.style.display = "none";
  }
});

const trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [
      {
        label: "Population",
        data: [750, 1200, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
        lineTension: 0.5,
        backgroundColor: "rgba(116,119,191,0.4)",
        fill: true,
      },
    ],
  },
  options: {
      radius: 3.5,
     plugins: {
      legend: {
        display: false,
      }
    }
  },
});

import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar, Doughnut } from "react-chartjs-2";

function Chart({ incomes, expenses }) {
  const allData = [...incomes, ...expenses];

  const labels = allData
    .map(({ month, year }) => `${month} / ${year}`) // Keep all month/year pairs
    .sort((a, b) => {
      const [monthA, yearA] = a.split(" / ").map(Number);
      const [monthB, yearB] = b.split(" / ").map(Number);
      return yearA - yearB || monthA - monthB;
    });

  console.log(labels);
  return (
    <div className="chartCont">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Incomes",
              data: labels.map((label) => {
                const [month, year] = label.split(" / ").map(Number);
                const income = incomes.find(
                  (income) => income.month === month && income.year === year
                );
                return income ? income.amount : 0;
              }),
              backgroundColor: "rgba(0, 128, 0, 0.3)", // Green with transparency

              borderColor: `green`,
              tension: 0.1,
              fill: true,
            },
            {
              label: "Expenses",
              data: labels.map((label) => {
                const [month, year] = label.split(" / ").map(Number);
                const expense = expenses.find(
                  (expense) => expense.month === month && expense.year === year
                );
                return expense ? expense.amount : 0;
              }),
              backgroundColor: "rgba(255, 0, 0, 0.3)", // Red with transparency

              borderColor: `red`,
              tension: 0.1,
              fill: true,
            },
          ],
        }}
      />
    </div>
  );
}

export default Chart;

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart({ incomes, expenses }) {
  //Combine all the incomes and expenses in a single array
  const allData = [...incomes, ...expenses];

  //Function to return an array of sum amounts per month/year pair
  function sumData(data) {
    return data.reduce((acc, { month, year, amount }) => {
      const key = `${month}/${year}`;
      acc[key] = (acc[key] || 0) + Number(amount);
      return acc;
    }, []);
  }

  const incomeData = sumData(incomes);
  const expenseData = sumData(expenses);

  //Extracts unique month/year labels and sorts them chronologically.
  const labels = allData
    .map(({ month, year }) => `${month}/${year}`) // Keep all month/year pairs
    .sort((a, b) => {
      const [monthA, yearA] = a.split("/").map(Number);
      const [monthB, yearB] = b.split("/").map(Number);
      //Sort first by year then by month
      return yearA - yearB || monthA - monthB;
    });

  return (
    <div className="chartCont">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Incomes",
              data: labels.map((label) => {
                return incomeData[label] || 0;
              }),
              backgroundColor: "rgba(0, 128, 0, 0.3)", // Green with transparency

              borderColor: `green`,
              tension: 0.1,
              fill: true,
            },
            {
              label: "Expenses",
              data: labels.map((label) => {
                return expenseData[label] || 0;
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

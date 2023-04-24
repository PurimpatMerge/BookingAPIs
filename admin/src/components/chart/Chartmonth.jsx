import "./chart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../hooks/useFetch";

const Chartmonth = ({ aspect, title }) => {
  const mockData = [
    { name: "January", income: 0 },
    { name: "February", income: 0 },
    { name: "March", income: 15700 },
    { name: "April", income: 4900 },
    { name: "May", income: 0 },
    { name: "June", income: 0 },
    { name: "July", income: 0 },
    { name: "August", income: 0 },
    { name: "September", income: 0 },
    { name: "October", income: 0 },
    { name: "November", income: 0 },
    { name: "December", income: 0 },
  ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={730}
          height={250}
          data={mockData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chartmonth;

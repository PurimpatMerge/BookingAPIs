import "./chart.scss";
import useFetch from "../../hooks/useFetch";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const List = ({ aspect, title }) => {
  const { data, loading, error } = useFetch(`/dashmerge/mostbook`);
  
const chartData = data
    .map((row) => {
        // Extract the number after "NO." using a regular expression
        const match = row.poolvillaName.match(/NO\.(\d+)/);
        const number = match ? match[1] : null;

        return {
            id: row._id,
            name: row.poolvillaName,
            number: number,
            views: row.views,
            count: row.count,
            photo: row.photo,
        };
    });
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="number" stroke="gray" />
          <YAxis />
          <Tooltip content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="tooltip">
                  <img src={payload[0].payload.photo} alt="" />
                  <p>{payload[0].payload.name} been views {payload[0].payload.views}</p>
                </div>
              );
            }
            return null;
          }} />
          <Line type="monotone" dataKey="views" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default List;

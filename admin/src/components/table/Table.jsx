import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "../../hooks/useFetch";
const List = () => {
  const { data, loading, error } = useFetch(`/dashmerge/mostbook`);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Top Booked ID</TableCell>
            <TableCell className="tableCell">Pool villa</TableCell>
            <TableCell className="tableCell">views</TableCell>
            <TableCell className="tableCell">count</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .sort((a, b) => b.count - a.count)
            .slice(0, 5)
            .map((row) => (
              <TableRow key={row._id}>
                <TableCell className="tableCell">{row._id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.photo} alt="" className="image" />
                    {row.poolvillaName}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.views}</TableCell>
                <TableCell className="tableCell">{row.count}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${"Approved"}`}>Hot</span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

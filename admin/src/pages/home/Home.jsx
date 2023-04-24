import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Chartmonth from "../../components/chart/Chartmonth";
import Chartview from "../../components/chart/Chartview";
import Table from "../../components/table/Table";
import Tableleast from "../../components/table/Tableleast";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="Booking" />
          <Widget type="Total" />
          <Widget type="Pool Villa" />
        </div>
        <div className="charts">
          <Chart title="Last 12 Months (Revenue)" aspect={4 / 1} />
        </div>
        <div className="charts">
          <Chartmonth title="This year income (Revenue)" aspect={4 / 1} />
        </div>
        <div className="charts">
          <Chartview title="Views in this 6 month " aspect={4 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Top 5 most booked</div>
          <Table />
        </div>
        <div className="listContainer">
          <div className="listTitle">Top 5 least booked</div>
          <Tableleast />
        </div>
      </div>
    </div>
  );
};

export default Home;

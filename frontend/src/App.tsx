import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <DonutChart />
        <BarChart />
        <h1 className="text-primary">Olá Mundo</h1>
      <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;

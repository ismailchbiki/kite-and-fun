import { Filters, WatersportList, Sort } from "./components";
import "./WatersportsPage.scss";

const WatersportsPage = () => {
  return (
    <main className="section">
      <div className="section-center watersports">
        <Filters className="watersports" />
        <div>
          <Sort />
          <WatersportList />
        </div>
      </div>
    </main>
  );
};

export default WatersportsPage;

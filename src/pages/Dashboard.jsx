import OverviewCard from "../components/cards/OverviewCard";
import StatisticsCard from "../components/cards/StatisticsCard";
import AnalyticsCard from "../components/cards/AnalyticsCard";
import SalesCard from "../components/cards/SalesCard";
import HorizontalStats from "../components/cards/HorizontalStats";
import LastOrders from "../components/tables/LastOrders";
import Transactions from "../components/cards/Transactions";

function Dashboard() {
  return (
    <div className="page-container space-y-6 overflow-x-hidden">

      {/* Heading */}
      <h1 className="text-[34px] font-semibold text-[#2F3442]">
        Overview
      </h1>

      {/* Top Cards */}
      <OverviewCard />

      {/* Statistics + Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <StatisticsCard />
        <AnalyticsCard />
      </div>

      {/* Sales + Horizontal Stats */}
      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6">
        <SalesCard />
        <HorizontalStats />
      </div>

      {/* Orders + Transactions */}
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
        <LastOrders />
        <Transactions />
      </div>

    </div>
  );
}

export default Dashboard;
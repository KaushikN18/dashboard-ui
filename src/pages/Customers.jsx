import CustomerHeader from "../components/customers/CustomerHeader";
import CustomerFilters from "../components/customers/CustomerFilters";
import CustomerTable from "../components/customers/CustomerTable";
import CustomerPagination from "../components/customers/CustomerPagination";

function Customers() {
  return (
    <div className="space-y-6">

      <CustomerHeader />

      <CustomerFilters />

      <CustomerTable />

      <CustomerPagination />

    </div>
  );
}

export default Customers;
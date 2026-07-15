import CustomerRow from "./CustomerRow";
import customers from "./customerData";

function CustomerTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#ECECEC] overflow-hidden">

      <table className="w-full">

        <thead className="bg-[#F8F9FB] border-b border-[#ECECEC]">

          <tr className="text-left text-[#98A2B3] text-sm uppercase">

            <th className="py-4 px-6">Customer</th>

            <th className="px-6">Email</th>

            <th className="px-6">Phone</th>

            <th className="px-6">Orders</th>

            <th className="px-6">Status</th>

            <th className="px-6">Actions</th>

          </tr>

        </thead>

        <tbody>

          {customers.map((customer) => (
            <CustomerRow
              key={customer.id}
              customer={customer}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CustomerTable;
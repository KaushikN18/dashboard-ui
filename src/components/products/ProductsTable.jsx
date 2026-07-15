import ProductRow from "./ProductRow";
import Pagination from "./Pagination";

const products = [
  {
    id: 1,
    checked: false,
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    number: "#790841",
    category: "Notebook",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: 2,
    checked: true,
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    number: "#790842",
    category: "Watch",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: 3,
    checked: true,
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    number: "#790843",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: 4,
    checked: true,
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    number: "#790844",
    category: "Watch",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: 5,
    checked: false,
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    number: "#790845",
    category: "Notebook",
    date: "12.09.20",
    price: "$2,500",
    status: "Disabled",
  },
  {
    id: 6,
    checked: false,
    name: "Apple iPhone 11 Pro Max 64GB Midnight Green",
    number: "#790846",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Disabled",
  },
  {
    id: 7,
    checked: false,
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    number: "#790847",
    category: "Notebook",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: 8,
    checked: false,
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    number: "#790848",
    category: "Watch",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
];

function ProductsTable() {
  return (
    <div className="w-full bg-white rounded-3xl border border-[#ECECEC] shadow-sm overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full min-w-[900px] table-auto border-collapse">

          <thead className="bg-[#FAFBFC] border-b border-[#ECECEC]">

            <tr className="h-16 text-[13px] font-semibold uppercase tracking-wide text-[#98A2B3]">

              <th className="w-16 px-6">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#2F9E44]"
                />
              </th>

              <th className="text-left px-4 whitespace-nowrap">
                Product Name
              </th>

              <th className="text-left px-4 whitespace-nowrap">
                Product No.
              </th>

              <th className="text-left px-4 whitespace-nowrap">
                Category
              </th>

              <th className="text-left px-4 whitespace-nowrap">
                Date
              </th>

              <th className="text-left px-4 whitespace-nowrap">
                Price
              </th>

              <th className="text-left px-4 whitespace-nowrap">
                Status
              </th>

              <th className="w-16"></th>

            </tr>

          </thead>

          <tbody>
                      {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
            />
          ))}

          </tbody>

        </table>

      </div>

      <Pagination />

    </div>
  );
}

export default ProductsTable;
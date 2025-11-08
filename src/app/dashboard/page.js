import Header from "@/components/Header";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-blue-50 font-poppins text-[#333]">
      <Header />

      <main className="p-6 max-w-6xl mx-auto">
        {/* Heading + Search bar layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold text-sky-900">Policies</h1>
          
          <input
            type="text"
            placeholder="Search policies..."
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
        </div>


        {/* Table */}
        <div className="overflow-x-auto bg-white shadow border border-gray-50">
          <table className="min-w-full text-sm">
            <thead className="bg-sky-100 bg-gray-200 text-left">
              <tr>
                <th className="px-6 py-3 font-semibold text-sky-900">Name</th>
                <th className="px-6 py-3 font-semibold text-sky-900">Policy</th>
                <th className="px-6 py-3 font-semibold text-sky-900">Date of Birth</th>
                <th className="px-6 py-3 font-semibold text-sky-900">Policy Number</th>
                <th className="px-6 py-3 font-semibold text-sky-900">Start Date</th>
                <th className="px-6 py-3 font-semibold text-sky-900">End Date</th>
                <th className="px-6 py-3 font-semibold text-sky-900">Sum Assured</th>
                <th className="px-6 py-3 font-semibold text-sky-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">Super Health Plan</td>
                <td className="px-6 py-4">1990-01-15</td>
                <td className="px-6 py-4">POL123456</td>
                <td className="px-6 py-4">2023-01-01</td>
                <td className="px-6 py-4">2024-12-31</td>
                <td className="px-6 py-4">₹5,00,000</td>
                <td className="px-6 py-4">
                  <button className="text-black rounded-md hover:underline bg-green-100 p-1">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">Jane Smith</td>
                <td className="px-6 py-4">Arogya Supreme</td>
                <td className="px-6 py-4">1985-07-23</td>
                <td className="px-6 py-4">POL654321</td>
                <td className="px-6 py-4">2022-05-10</td>
                <td className="px-6 py-4">2025-05-09</td>
                <td className="px-6 py-4">₹3,00,000</td>
                <td className="px-6 py-4">
                  <button className="text-black rounded-md hover:underline bg-green-100 p-1">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

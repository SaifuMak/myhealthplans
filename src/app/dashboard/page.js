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
                <th className="px-4 py-3 font-semibold text-sky-900">Name</th>
                <th className="px-4 py-3 font-semibold text-sky-900">Policy</th>
                <th className="px-4 py-3 font-semibold text-sky-900">Date of Birth</th>
                <th className="px-4 py-3 font-semibold text-sky-900">Start Date</th>
                <th className="px-4 py-3 font-semibold text-sky-900">End Date</th>
                <th className="px-4 py-3 font-semibold text-sky-900">Sum</th>
                <th className="px-4 py-3 font-semibold text-sky-900">Actions</th>
              </tr>
            </thead>
    <tbody className="divide-y divide-gray-200 align-top">

  {/* Rahul Menon */}
  <tr className="align-top">
    <td className="px-4 py-4 align-top font-medium">
      Rahul Menon
      <div className="mt-2 flex gap-2 flex-wrap">
        <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">PAN</a>
        <div className="flex gap-2 items-center">
          <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">Aadhar</a>
          <button className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded hover:underline cursor-pointer">PDF</button>
        </div>
      </div>
    </td>
    <td className="px-4 py-4 align-top">
      Arogya Supreme
      <div></div>
      <div className="inline-block mt-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
        Individual
      </div>
    </td>
    <td className="px-4 py-4 align-top">12-Apr-1992</td>
    <td className="px-4 py-4 align-top">01-May-2023</td>
    <td className="px-4 py-4 align-top">
      23-Nov-2025
      <div></div>
      <div className="inline-block mt-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
        120 days
      </div>
    </td>
    <td className="px-4 py-4 align-top">5 lakh</td>
    <td className="px-4 py-4 align-top">
      <div className="flex gap-2 flex-wrap">
        <button className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Edit</button>
        <button className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Delete</button>
      </div>
    </td>
  </tr>

  {/* Neha Ramesh */}
  <tr className="align-top">
    <td className="px-4 py-4 align-top font-medium">
      Neha Ramesh
      <div className="mt-2 flex gap-2 flex-wrap">
        <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">PAN</a>
        <div className="flex gap-2 items-center">
          <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">Aadhar</a>
          <button className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded hover:underline cursor-pointer">PDF</button>
        </div>
      </div>
    </td>
    <td className="px-4 py-4 align-top">
      Super Health
      <div></div>
      <div className="inline-block mt-2 bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
        Family
      </div>
    </td>
    <td className="px-4 py-4 align-top">08-Sep-1987</td>
    <td className="px-4 py-4 align-top">15-Dec-2022</td>
    <td className="px-4 py-4 align-top">
      23-Nov-2025
      <div></div>
      <div className="inline-block mt-2 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
        30 days
      </div>
    </td>
    <td className="px-4 py-4 align-top">7 lakh</td>
    <td className="px-4 py-4 align-top">
      <div className="flex gap-2 flex-wrap">
        <button className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Edit</button>
        <button className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Delete</button>
      </div>
    </td>
  </tr>

  {/* Akhil Dev */}
  <tr className="align-top">
    <td className="px-4 py-4 align-top font-medium">
      Akhil Dev
      <div className="mt-2 flex gap-2 flex-wrap">
        <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">PAN</a>
        <div className="flex gap-2 items-center">
          <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">Aadhar</a>
          <button className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded hover:underline cursor-pointer">PDF</button>
        </div>
      </div>
    </td>
    <td className="px-4 py-4 align-top">
      Super Health
      <div></div>
      <div className="inline-block mt-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
        Individual
      </div>
    </td>
    <td className="px-4 py-4 align-top">20-Jan-1990</td>
    <td className="px-4 py-4 align-top">10-Mar-2023</td>
    <td className="px-4 py-4 align-top">
      23-Nov-2025
      <div></div>
      <div className="inline-block mt-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
        90 days
      </div>
    </td>
    <td className="px-4 py-4 align-top">5 lakh</td>
    <td className="px-4 py-4 align-top">
      <div className="flex gap-2 flex-wrap">
        <button className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Edit</button>
        <button className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Delete</button>
      </div>
    </td>
  </tr>

  {/* Sneha Varma */}
  <tr className="align-top">
    <td className="px-4 py-4 align-top font-medium">
      Sneha Varma
      <div className="mt-2 flex gap-2 flex-wrap">
        <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">PAN</a>
        <div className="flex gap-2 items-center">
          <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">Aadhar</a>
          <button className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded hover:underline cursor-pointer">PDF</button>
        </div>
      </div>
    </td>
    <td className="px-4 py-4 align-top">
      Arogya Supreme
      <div></div>
      <div className="inline-block mt-2 bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
        Family
      </div>
    </td>
    <td className="px-4 py-4 align-top">04-Nov-1984</td>
    <td className="px-4 py-4 align-top">01-Jul-2021</td>
    <td className="px-4 py-4 align-top">
      23-Nov-2025
      <div></div>
      <div className="inline-block mt-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
        12 days
      </div>
    </td>
    <td className="px-4 py-4 align-top">10 lakh</td>
    <td className="px-4 py-4 align-top">
      <div className="flex gap-2 flex-wrap">
        <button className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Edit</button>
        <button className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Delete</button>
      </div>
    </td>
  </tr>

  {/* Ajay Kumar */}
  <tr className="align-top">
    <td className="px-4 py-4 align-top font-medium">
      Ajay Kumar
      <div className="mt-2 flex gap-2 flex-wrap">
        <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">PAN</a>
        <div className="flex gap-2 items-center">
          <a href="#" className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline">Aadhar</a>
          <button className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded hover:underline cursor-pointer">PDF</button>
        </div>
      </div>
    </td>
    <td className="px-4 py-4 align-top">
      Super Health
      <div></div>
      <div className="inline-block mt-2 bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
        Family
      </div>
    </td>
    <td className="px-4 py-4 align-top">30-Jun-1979</td>
    <td className="px-4 py-4 align-top">25-Dec-2020</td>
    <td className="px-4 py-4 align-top">
      23-Nov-2025
      <div></div>
      <div className="inline-block mt-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
        60 days
      </div>
    </td>
    <td className="px-4 py-4 align-top">6 lakh</td>
    <td className="px-4 py-4 align-top">
      <div className="flex gap-2 flex-wrap">
        <button className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Edit</button>
        <button className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded hover:underline cursor-pointer">Delete</button>
      </div>
    </td>
  </tr>

</tbody>



          </table>
        </div>
      </main>
    </div>
  );
}

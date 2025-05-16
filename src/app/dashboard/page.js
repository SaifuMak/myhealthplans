// src/app/dashboard/page.js
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Insurance Policy Dashboard</h1>
          <Link
            href="/dashboard/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add New Policy
          </Link>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow border">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-700">Name</th>
                <th className="px-6 py-3 font-medium text-gray-700">Policy Name</th>
                <th className="px-6 py-3 font-medium text-gray-700">Date of Birth</th>
                <th className="px-6 py-3 font-medium text-gray-700">Policy Number</th>
                <th className="px-6 py-3 font-medium text-gray-700">Start Date</th>
                <th className="px-6 py-3 font-medium text-gray-700">End Date</th>
                <th className="px-6 py-3 font-medium text-gray-700">Sum Assured</th>
                <th className="px-6 py-3 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-800">John Doe</td>
                <td className="px-6 py-4 text-gray-600">Super Health Plan</td>
                <td className="px-6 py-4 text-gray-600">1990-01-15</td>
                <td className="px-6 py-4 text-gray-600">POL123456</td>
                <td className="px-6 py-4 text-gray-600">2023-01-01</td>
                <td className="px-6 py-4 text-gray-600">2024-12-31</td>
                <td className="px-6 py-4 text-gray-600">₹5,00,000</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-800">Jane Smith</td>
                <td className="px-6 py-4 text-gray-600">Arogya Supreme</td>
                <td className="px-6 py-4 text-gray-600">1985-07-23</td>
                <td className="px-6 py-4 text-gray-600">POL654321</td>
                <td className="px-6 py-4 text-gray-600">2022-05-10</td>
                <td className="px-6 py-4 text-gray-600">2025-05-09</td>
                <td className="px-6 py-4 text-gray-600">₹3,00,000</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

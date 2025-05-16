
"use client";
import { useState } from 'react';

export default function AddPolicyPage() {
  const [form, setForm] = useState({});

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Add New Insurance Policy</h1>

        <form className="space-y-5">
          <input type="text" name="name" placeholder="Name" className="w-full border px-4 py-2 rounded" />
          <input type="text" name="policyName" placeholder="Policy Name" className="w-full border px-4 py-2 rounded" />
          <input type="date" name="dob" placeholder="Date of Birth" className="w-full border px-4 py-2 rounded" />
          <input type="text" name="policyNumber" placeholder="Policy Number" className="w-full border px-4 py-2 rounded" />
          <input type="date" name="startDate" placeholder="Start Date" className="w-full border px-4 py-2 rounded" />
          <input type="date" name="endDate" placeholder="End Date" className="w-full border px-4 py-2 rounded" />
          <input type="number" name="sumAssured" placeholder="Sum Assured" className="w-full border px-4 py-2 rounded" />

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Upload PDF (Policy Document)</label>
            <input type="file" name="document" accept="application/pdf" className="w-full" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Upload Policy Card</label>
            <input type="file" name="policycard" accept="application/pdf" className="w-full" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Upload Featured Image</label>
            <input type="file" name="image" accept="image/*" className="w-full" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

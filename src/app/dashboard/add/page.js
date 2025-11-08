"use client";
import { useState } from 'react';
import Header from "@/components/Header";

export default function AddPolicyPage() {
  const [form, setForm] = useState({});

  return (
    <div className="min-h-screen bg-sky-50 font-poppins text-[#333]">
      <Header />

      <div className="max-w-2xl mx-auto bg-white p-8 mt-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-sky-900">Add Policy</h1>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Policy name</label>
            <input type="text" name="policyName" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Policy type</label>
            <input type="text" name="policyName" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Date of Birth</label>
            <input type="date" name="dob" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Policy Number</label>
            <input type="text" name="policyNumber" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Phone number</label>
            <input type="text" name="phoneNumber" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" name="startDate" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">End Date</label>
            <input type="date" name="endDate" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Sum Assured</label>
            <input type="number" name="sumAssured" className="w-full border border-gray-300 px-4 py-2 rounded" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Upload Aadhar Card</label>
            <input type="file" name="aadhar" accept="application/pdf" className="w-full" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Upload PAN Card</label>
            <input type="file" name="pan" accept="application/pdf" className="w-full" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Upload Policy PDF</label>
            <input type="file" name="document" accept="application/pdf" className="w-full" />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

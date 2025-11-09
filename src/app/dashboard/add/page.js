"use client";
import { useState, useRef } from "react";
import Header from "@/components/Header";
import { toast } from "sonner"; // assuming you're using Sonner
import axios from "axios";
import AXIOS_INSTANCE from "@/app/lib/axios";

export default function AddPolicyPage() {
  const [form, setForm] = useState({
    name: "",
    policyName: "",
    policyType: "",
    dob: "",
    policyNumber: "",
    phoneNumber: "",
    startDate: "",
    endDate: "",
    sumAssured: "",
    details: ""
  });

  const [files, setFiles] = useState({
    aadhar: null,
    pan: null,
    document: null,
  });

  const fileInputRefs = {
    aadhar: useRef(null),
    pan: useRef(null),
    document: useRef(null),
  };


  const [loading, setLoading] = useState(false);

  // handle text input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // handle file upload
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    const file = selectedFiles[0];

    e.target.value = null;

    setFiles((prev) => ({
      ...prev,
      [name]: file,
    }));
  };
  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.dismiss();

    try {
      const formData = new FormData();

      const keyMap = {
        policyName: "policy_name",
        policyType: "policy_type",
        phoneNumber: "phone_number",
        policyNumber: "policy_number",
        startDate: "start_date",
        endDate: "end_date",
        sumAssured: "sum_assured",
        dob: "dob",
        name: "name",
        details:"details"
      };

      Object.entries(form).forEach(([key, value]) => {
        const backendKey = keyMap[key] || key;
        formData.append(backendKey, value);
      });
      Object.entries(files).forEach(([key, file]) => {
        if (file) formData.append(key, file);
      });

      const res = await AXIOS_INSTANCE.post("api/policies/actions/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Policy added successfully!");
      setForm({});
      setFiles({ aadhar: null, pan: null, document: null });
      Object.values(fileInputRefs).forEach((ref) => {
        if (ref.current) ref.current.value = null;
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to add policy");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 font-poppins text-[#333]">
      <Header />
      <div className="max-w-2xl mx-auto bg-white p-8 mt-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-sky-900">Add Policy</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* text fields */}
          {[
            ["name", "Name", "text"],
            ["policyName", "Policy Name", "text"],
            ["policyType", "Policy Type", "text"],
            ["dob", "Date of Birth", "date"],
            ["policyNumber", "Policy Number", "text"],
            ["phoneNumber", "Phone Number", "text"],
            ["startDate", "Start Date", "date"],
            ["endDate", "End Date", "date"],
            ["sumAssured", "Sum Assured", "number"],
          ].map(([name, label, type]) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={form[name] || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Additional Details
            </label>
            <textarea
              name="details"
              value={form.details || ""}
              onChange={handleChange}
              placeholder="Enter additional policy details..."
              rows={4}
              className="w-full border border-gray-300 px-4 py-2 rounded   "
            ></textarea>
          </div>

          {/* File inputs */}
          {[
            ["aadhar", "Upload Aadhar Card"],
            ["pan", "Upload PAN Card"],
            ["document", "Upload Policy PDF"],
          ].map(([name, label]) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                {label}
              </label>

              <div className="flex items-center gap-3">
                {/* Styled button */}
                <label
                  htmlFor={name}
                  className="cursor-pointer inline-block bg-gray-200 text-gray-900  px-4 py-1.5 rounded-lg transition text-sm"
                >
                  Choose File
                </label>

                {/* Display selected file name */}
                <span className="text-sm text-gray-600">
                  {files[name]?.name || "No file chosen"}
                </span>

                {/* Hidden actual file input */}
                <input
                  id={name}
                  type="file"
                  name={name}
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>
          ))}


          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition ${loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

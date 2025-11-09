"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import AXIOS_INSTANCE from "@/app/lib/axios";
import { toast } from "sonner";
import Pagination from "@/components/general-components/Pagination";
import { getPageNumber, getTotalPagesCount } from "../utils/PaginatonHelpers";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// 🧠 Helper: Renewal logic with Expired handling
const getRenewalStatus = (endDate) => {
  if (!endDate) return { color: "", text: "" };

  const today = new Date();
  const end = new Date(endDate);
  const diffDays = Math.ceil((end - today) / (1000 * 60 * 60 * 24));

  if (diffDays < 0)
    return { color: "bg-gray-200 text-gray-700", text: "Expired" };
  if (diffDays > 30)
    return { color: "bg-green-100 text-green-800", text: `${diffDays} days` };
  if (diffDays <= 30 && diffDays > 15)
    return { color: "bg-orange-100 text-orange-800", text: `${diffDays} days` };
  if (diffDays <= 15 && diffDays > 0)
    return { color: "bg-red-100 text-red-800", text: `${diffDays} days` };

  return { color: "", text: "" };
};

export default function DashboardPage() {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [nextPage, setNextPage] = useState(null); // Next page URL
  const [prevPage, setPrevPage] = useState(null); // Previous page URL
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)

  const [query, setQuery] = useState("");

  const fetchPolicies = async (page = 1, query = '') => {

    try {
      setLoading(true)
      const response = await AXIOS_INSTANCE.get(`api/policies/actions/?page=${page}&query=${query}`);
      setPolicies(response.data?.results);
      setCurrentPage(page)
      const nextpage = getPageNumber(response.data.next)
      const previous = getPageNumber(response.data.previous)
      setNextPage(nextpage)
      setPrevPage(previous)

      const totalPages = getTotalPagesCount(response.data.count, 10)
      setTotalPages(totalPages)
    } catch (err) {
      console.error(err);
      toast.error("Failed to load policies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPolicies(1, "");
  }, []);

  const onSearch = (query) => {
    setQuery(query);
    fetchPolicies(1, query);
  };

  return (
    <div className="min-h-screen bg-blue-50 font-poppins text-[#333]">
      <Header />

      <main className="p-6 max-w-6xl mx-auto">
        {/* Heading + Search box (UI only, no filtering) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold text-sky-900">Policies</h1>

          <input
            type="text"
            placeholder="Search policyholder..."
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
        </div>

        <div className="overflow-x-auto  bg-white shadow border border-gray-50">
          <table className="min-w-full text-sm">
            <thead className="bg-sky-100 text-left">
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
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-500">
                    Loading policies...
                  </td>
                </tr>
              ) : policies.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-6  text-gray-500">
                    No policies found
                  </td>
                </tr>
              ) : (
                policies.map((policy) => {
                  const renewal = getRenewalStatus(policy.end_date);
                  return (
                    <tr key={policy.id} className="align-top">
                      {/* Name + Files */}
                      <td className="px-4 py-4 align-top font-medium">
                        {policy.name}
                        <div className="mt-2 flex gap-2 flex-wrap">
                          {policy.pan_public_url && (
                            <a
                              href={policy.pan_public_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline"
                            >
                              PAN
                            </a>
                          )}
                          {policy.aadhar_public_url && (
                            <a
                              href={policy.aadhar_public_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full hover:underline"
                            >
                              Aadhar
                            </a>
                          )}
                          {policy.document_public_url && (
                            <button
                              onClick={() =>
                                window.open(policy.document_public_url, "_blank")
                              }
                              className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded hover:underline cursor-pointer"
                            >
                              PDF
                            </button>
                          )}
                        </div>
                      </td>

                      {/* Policy Name & Type */}
                      <td className="px-4 py-4 align-top flex flex-col">
                        {policy.policy_name}
                        {policy.policy_type && (
                          <div className="inline-block mt-2 w-fit bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {policy.policy_type}
                          </div>
                        )}
                      </td>

                      {/* DOB */}
                      <td className="px-4 py-4 align-top">{formatDate(policy.dob)}</td>

                      {/* Start Date */}
                      <td className="px-4 py-4 align-top">{formatDate(policy.start_date)}</td>

                      {/* End Date + Renewal */}
                      <td className="px-4 py-4 align-top flex flex-col ">
                        {formatDate(policy.end_date)}
                        {renewal.text && (
                          <div
                            className={`inline-block mt-2 ${renewal.color} w-fit text-xs px-2 py-1 rounded-full`}
                          >
                            {renewal.text}
                          </div>
                        )}
                      </td>

                      {/* Sum */}
                      <td className="px-4 py-4 align-top">
                        {parseFloat(policy.sum_assured).toLocaleString()}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-4 align-top">
                        <div className="flex gap-2 flex-wrap">
                          <button className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded hover:underline cursor-pointer">
                            Edit
                          </button>
                          <button className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded hover:underline cursor-pointer">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>


        </div>
        {policies?.length > 0 && (<Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          function_to_call={fetchPolicies}
          currentPage={currentPage}
          TotalPages={totalPages}
          queryParameter={query}
          buttonColor='bg-slate-500'
        />)}
      </main>
    </div>
  );
}

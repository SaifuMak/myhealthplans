"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import { toast } from "sonner";
import AXIOS_INSTANCE from "@/app/lib/axios";
import Loader from "@/components/general-components/Loader";

export default function EditPolicyPage() {
    const { id } = useParams();
    const router = useRouter();

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
        details:""
    });

    const [files, setFiles] = useState({
        aadhar: null,
        pan: null,
        document: null,
    });

    const [existingfileUrl, setExistingfileUrl] = useState({
        aadhar: null,
        pan: null,
        document: null,
    });

    const fileInputRefs = {
        aadhar: useRef(null),
        pan: useRef(null),
        document: useRef(null),
    };

    const [loading, setLoading] = useState(true);

    // Fetch policy by ID
    useEffect(() => {
        if (!id) return;

        const fetchPolicy = async () => {
            try {
                setLoading(true);
                const res = await AXIOS_INSTANCE.get(`api/policies/actions/${id}/`);
                const data = res.data;

                setForm({
                    name: data.name || "",
                    policyName: data.policy_name || "",
                    policyType: data.policy_type || "",
                    dob: data.dob || "",
                    policyNumber: data.policy_number || "",
                    phoneNumber: data.phone_number || "",
                    startDate: data.start_date || "",
                    endDate: data.end_date || "",
                    sumAssured: data.sum_assured || "",
                    details: data.details || ""
                });
                setExistingfileUrl({
                    aadhar: data?.aadhar_public_url || "No file chosen",
                    pan: data?.pan_public_url || "No file chosen",
                    document: data?.document_public_url || "No file chosen",
                })

            } catch (err) {
                console.error(err);
                toast.error("Failed to load policy");
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }
        };

        fetchPolicy();
    }, [id]);

    // Handle text input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Handle file upload
    const handleFileChange = (e) => {
        const { name, files: selectedFiles } = e.target;
        const file = selectedFiles[0];
        e.target.value = null;
        setFiles((prev) => ({ ...prev, [name]: file }));
    };

    // Submit update
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
                details : "details"
            };

            Object.entries(form).forEach(([key, value]) => {
                const backendKey = keyMap[key] || key;
                formData.append(backendKey, value);
            });

            Object.entries(files).forEach(([key, file]) => {
                if (file) formData.append(key, file);
            });

            await AXIOS_INSTANCE.patch(`api/policies/actions/${id}/`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Policy updated successfully!");
            router.push("/dashboard"); // redirect to list
        } catch (err) {
            console.error(err);
            toast.error("Failed to update policy");
        } finally {
            setLoading(false);
        }
    };
    if (loading) return <Loader />

    return (
        <div className="min-h-screen bg-sky-50 font-poppins text-[#333]">
            <Header />

            <div className="max-w-2xl mx-auto bg-white p-8 mt-8 rounded-xl shadow">
                <h1 className="text-2xl font-bold mb-6 text-sky-900">
                    Edit Policy
                </h1>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Text fields */}
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
                                <label
                                    htmlFor={name}
                                    className="cursor-pointer inline-block bg-gray-200 text-gray-900 px-4 py-1.5 rounded-lg transition text-sm"
                                >
                                    Choose File
                                </label>
                                {files[name] ? (
                                    <span className="text-sm text-gray-600">
                                        {files[name].name}
                                    </span>
                                ) : existingfileUrl[name] && existingfileUrl[name] !== "No file chosen" ? (
                                    <a
                                        href={existingfileUrl[name]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        View Uploaded File
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-500">No file chosen</span>
                                )}

                                <input
                                    id={name}
                                    type="file"
                                    name={name}
                                    accept="application/pdf"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    ref={fileInputRefs[name]}
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
                        {loading ? "Updating..." : "Update Policy"}
                    </button>
                </form>
            </div>
        </div>
    );
}

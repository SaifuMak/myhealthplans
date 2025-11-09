"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Loader from "@/components/general-components/Loader";
import AXIOS_INSTANCE from "../lib/axios";

export default function LoginPage() {
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // handle input
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.dismiss();

    try {
      const response = await AXIOS_INSTANCE.post(`login-admin/`, formData);
      toast.success("Logged in successfully!");
      router.replace("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.error || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  // check authentication
  const handleCheck = async () => {
    try {
      await AXIOS_INSTANCE.get(`check/`);
      router.replace("/dashboard");
    } catch (error) {
      console.log("Not authenticated:", error?.response?.status);
    } finally {
      setIsAuthenticating(false);
    }
  };

  useEffect(() => {
    handleCheck();
  }, []);

  // show loader while checking
  if (isAuthenticating) return <Loader />;

  // UI
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#7A1E7F" }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          LOGIN
        </h1>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email / Username */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
             Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email or username"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
              placeholder="Enter your password"
              required
            />

            {/* Toggle password visibility */}
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? (
                <IoEyeOffOutline size={20} />
              ) : (
                <IoEyeOutline size={20} />
              )}
            </button>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

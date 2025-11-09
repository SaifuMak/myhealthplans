"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { toast } from 'sonner';
import AXIOS_INSTANCE from "@/app/lib/axios";
import { useRouter } from 'next/navigation';


export default function Header() {
  const [open, setOpen] = useState(false);

  const router = useRouter()

  const [loading, setloading] = useState(false)

  const handleLogout = async () => {
    setloading(true)
    try {
      const response = await AXIOS_INSTANCE.post(`logout/`, {});
      toast.success('Logged out successfully')
      router.replace("/login");

    } catch (error) {
      toast.error(error?.response?.data?.error)

    } finally {
      setloading(false)
    }

  }
   // Optional: Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className="bg-white border-b border-gray-100 text-[#333] font-poppins relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/dashboard">
          <img
            src="https://myhealthplans.in/wp-content/uploads/2025/05/my-health-plans-logo.png"
            alt="My Health Plans Logo"
            className="h-10"
          />
        </Link>

        <nav className="hidden md:flex items-center font-medium text-[16px] gap-6 text-sm">
          <Link href="/dashboard" className="hover:underline">Policies</Link>
          <Link href="/renewals" className="hover:underline">Renewals</Link>
          <Link
            href="/dashboard/add"
            className="bg-[#1E7F2D] text-white px-4 py-2 rounded hover:bg-green-800"
          >
            + Add Policy
          </Link>
          <p onClick={handleLogout} className="hover:bg-slate-100 px-3 py-1.5 rounded-lg cursor-pointer">Logout</p>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform translate-x-0">
            <div className="flex justify-between items-center px-4 py-4 border-b">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 px-4 py-4 text-sm">
              <Link href="/dashboard" className="hover:underline" onClick={() => setOpen(false)}>
                Policies
              </Link>
              <Link href="/renewals" className="hover:underline" onClick={() => setOpen(false)}>
                Renewals
              </Link>
              <Link
                href="/dashboard/add"
                className="bg-[#1E7F2D] text-white px-4 py-2 rounded hover:bg-green-800"
                onClick={() => setOpen(false)}
              >
                + Add Policy
              </Link>
              <Link href="/logout" className="hover:underline" onClick={() => setOpen(false)}>
                Logout
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

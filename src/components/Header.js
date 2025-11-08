"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 text-[#333] font-poppins">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <img
            src="https://myhealthplans.in/wp-content/uploads/2025/05/my-health-plans-logo.png"
            alt="My Health Plans Logo"
            className="h-10"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/dashboard" className="hover:underline">
            Policies
          </Link>
          <Link href="/renewals" className="hover:underline">
            Renewals
          </Link>
          <Link
            href="/dashboard/add"
            className="bg-[#1E7F2D] text-white px-4 py-2 rounded hover:bg-green-800"
          >
            + Add Policy
          </Link>
          <Link href="/logout" className="hover:underline">
            Logout
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow text-black px-4 pb-4 space-y-2">
          <Link href="/dashboard" className="block">Policies</Link>
          <Link href="/renewals" className="block">Renewals</Link>
          <Link
            href="/dashboard/add"
            className="block bg-[#1E7F2D] text-white px-4 py-2 rounded"
          >
            + Add Policy
          </Link>
          <Link href="/logout" className="block">Logout</Link>
        </div>
      )}
    </header>
  );
}

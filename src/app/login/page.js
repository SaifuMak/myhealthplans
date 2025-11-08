// src/app/login/page.js
export default function LoginPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4" style={{ backgroundColor: '#7A1E7F' }}>
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">LOGIN</h1>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder=""
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none "
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          🔔
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="text-sm text-gray-700">Admin User</span>
        </div>
      </div>
    </header>
  );
}
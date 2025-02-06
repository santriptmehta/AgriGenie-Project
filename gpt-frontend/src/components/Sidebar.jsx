import { Plus, Menu } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 p-4 bg-gray-800 flex flex-col">
      <button className="flex items-center px-4 py-2 bg-gray-700 rounded-lg mb-4">
        <Plus size={18} className="mr-2" />
        New Chat
      </button>
      <div className="flex-1 overflow-y-auto">
        {/* Example Chat History */}
        <p className="p-2 text-gray-400 cursor-pointer hover:bg-gray-700 rounded">
          Previous Chat 1
        </p>
        <p className="p-2 text-gray-400 cursor-pointer hover:bg-gray-700 rounded">
          Previous Chat 2
        </p>
      </div>
      <button className="mt-auto flex items-center p-2 bg-gray-700 rounded-lg">
        <Menu size={18} className="mr-2" />
        Menu
      </button>
    </div>
  );
}

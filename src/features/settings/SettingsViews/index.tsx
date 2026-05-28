import { useState } from "react";
import { Button, Input } from "@heroui/react";
import SettingsHeader from "./SettingsHeader";

const SettingsView = () => {
  const [maxBooks, setMaxBooks] = useState<string>("");
  const [borrowDays, setBorrowDays] = useState<string>("");
  const [finePerDay, setFinePerDay] = useState<string>("");

  const handleSave = () => {
    alert("Settings successfully saved!");
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Bagian Header Fitur Settings */}
        <SettingsHeader />

      {/* Bagian Konten Form Pengaturan */}
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-6 max-w-2xl">
        <div className="text-lg font-bold text-gray-800 border-b pb-3 border-gray-100">
          Circulation Rules (Aturan Peminjaman)
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Maximum Books Borrowed per Member
            </label>
            <Input 
                type="number" 
                className="max-w-md"
                value={maxBooks} 
                onChange={(e) => setMaxBooks(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Borrowing Duration (Days)
            </label>
            <Input 
              type="number" 
              className="max-w-md"
              value={borrowDays} 
              onChange={(e) => setBorrowDays(e.target.value)} 
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Late Return Fine per Day (Rp)
            </label>
            <Input 
              type="number" 
              className="max-w-md"
              value={finePerDay} 
              onChange={(e) => setFinePerDay(e.target.value)} 
            />
          </div>
        </div>

        <div className="mt-4 border-t pt-5 border-gray-100 flex justify-end">
          <Button 
            className="bg-blue-500 text-white font-semibold rounded-lg px-6 h-11 hover:bg-blue-600 transition-colors"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
import { Button } from "@heroui/react";

// Tipe data item peminjaman yang akan diterima lewat props
export type BorrowingItem = {
  id: number;
  title: string;
  borrower: string;
  borrowDate: string;
  dueDate: string;
  status: "Active" | "Overdue";
};

type BorrowingTableProps = {
  data: BorrowingItem[];
};

const BorrowingTable = ({ data }: BorrowingTableProps) => {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100 text-sm font-semibold text-gray-600">
            <th className="p-4 pl-6">Book Title</th>
            <th className="p-4">Borrower</th>
            <th className="p-4">Borrow Date</th>
            <th className="p-4">Due Date</th>
            <th className="p-4">Status</th>
            <th className="p-4 pr-6 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700 divide-y divide-gray-50">
          {data.length === 0 ? (
            <tr>
              <td colSpan={6} className="p-6 text-center text-gray-400 font-medium">
                No active borrowing records found.
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 pl-6 font-bold text-gray-800 max-w-xs truncate">
                  {item.title}
                </td>
                <td className="p-4 font-medium">{item.borrower}</td>
                <td className="p-4 text-gray-500">{item.borrowDate}</td>
                <td className="p-4 text-gray-500">{item.dueDate}</td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${
                      item.status === "Active"
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-rose-700 bg-rose-50"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <Button 
                    className="bg-indigo-50 border border-indigo-200 text-indigo-600 h-8 px-3 text-xs rounded-lg font-semibold hover:bg-indigo-100 transition-colors"
                    onClick={() => alert(`Processing return for: ${item.title}`)}
                  >
                    Return Book
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowingTable;
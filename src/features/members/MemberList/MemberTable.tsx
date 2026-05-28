import { Button } from "@heroui/react";

// Definisikan tipe data item member yang dikirim lewat props
export type MemberItem = {
  id: number;
  nim: string;
  name: string;
  email: string;
  status: "Active" | "Inactive";
};

type MemberTableProps = {
  data: MemberItem[];
};

const MemberTable = ({ data }: MemberTableProps) => {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100 text-sm font-semibold text-gray-600">
            <th className="p-4 pl-6">NIM / Student ID</th>
            <th className="p-4">Full Name</th>
            <th className="p-4">Email Address</th>
            <th className="p-4">Status</th>
            <th className="p-4 pr-6 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700 divide-y divide-gray-50">
          {data.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-6 text-center text-gray-400 font-medium">
                No library members found.
              </td>
            </tr>
          ) : (
            data.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 pl-6 font-mono font-semibold text-indigo-600">
                  {member.nim}
                </td>
                <td className="p-4 font-bold text-gray-800">{member.name}</td>
                <td className="p-4 text-gray-500">{member.email}</td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${
                      member.status === "Active"
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-rose-700 bg-rose-50"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="p-4 pr-6 text-right">
                  <Button 
                    className="bg-gray-50 border border-gray-200 text-gray-600 h-8 px-3 text-xs rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    onClick={() => alert(`Viewing profile of: ${member.name}`)}
                  >
                    Edit Status
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

export default MemberTable;
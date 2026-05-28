import { useEffect, useState } from "react";
import MemberHeader from "./MemberHeader.tsx";
import MemberTable, { type MemberItem } from "./MemberTable.tsx";
import { fetchBooksFromAPI } from "../../../lib/books/getBookList.ts"; // Tetap andalkan helper API asli lu

const MemberList = () => {
  const [members, setMembers] = useState<MemberItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMembersData = async () => {
      try {
        setIsLoading(true);
        // 💡 Ambil data asli dari API
        const response = await fetchBooksFromAPI({ page: 1 });

        // Olah data author dari API menjadi data Member Mahasiswa
        const formattedMembers: MemberItem[] = response.results
          .filter((item) => item.authors.length > 0) // Ambil buku yang ada nama author-nya
          .slice(0, 8) // Kita batasi tampilkan 8 member biar pas di layar
          .map((item, index) => {
            const authorName = item.authors[0].name;
            
            // Format penulisan nama di API biasanya dibalik (Contoh: "Shakespeare, William"), kita rapihin dikit
            const cleanName = authorName.includes(",") 
              ? authorName.split(",").reverse().join(" ").trim() 
              : authorName;

            // Generate email dummy berbasis nama asli author dari API
            const emailHandle = cleanName.toLowerCase().replace(/[^a-z0-9]/g, "");

            return {
              id: item.id,
              nim: `221150${100 + index}`, // Generate NIM berurutan
              name: cleanName, // 💡 NAMA MAHASISWA ASLI BERBASIS DATA API LU
              email: `${emailHandle || "student"}@univ.ac.id`,
              status: index % 3 === 0 ? "Inactive" : "Active" // Kombinasi variasi status
            };
          });

        setMembers(formattedMembers);
      } catch (error) {
        console.error("Gagal mengambil data members dari API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMembersData();
  }, []);

  if (isLoading) return <div className="p-6 text-gray-500 font-medium">Loading members data...</div>;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* 1. Render Header Fitur Members */}
      <MemberHeader />

      {/* 2. Render Konten Tabel Members */}
      <MemberTable data={members} />
    </div>
  );
};

export default MemberList;
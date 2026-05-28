import { useEffect, useState } from "react";
import BorrowingHeader from "./BorrowingHeader.tsx";
import BorrowingTable, { type BorrowingItem } from "./BorrowingTable.tsx";
import { fetchBooksFromAPI } from "../../../lib/books/getBookList.ts";

const BorrowingList = () => {
  const [borrowingRecords, setBorrowingRecords] = useState<BorrowingItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBorrowingData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchBooksFromAPI({ page: 1 });

        const dummyBorrowers = [
          "Sri Wulan Maharani",
          "Muhammad Rehan",
          "Aditya Pratama",
          "Siti Aminah",
          "Rizky Fauzi"
        ];

        // Olah data API menjadi format Peminjaman
        const formattedRecords: BorrowingItem[] = response.results.slice(0, 5).map((item, index) => {
          // Buat simulasi tanggal acak
          const isOverdue = index === 1 || index === 4; // Bikin variasi status acak
          return {
            id: item.id,
            title: item.title, // 💡 Judul buku REAL dari API asli lu
            borrower: dummyBorrowers[index % dummyBorrowers.length],
            borrowDate: `2026-05-${10 + index}`,
            dueDate: isOverdue ? `2026-05-${15 + index}` : `2026-06-${2 + index}`,
            status: isOverdue ? "Overdue" : "Active",
          };
        });

        setBorrowingRecords(formattedRecords);
      } catch (error) {
        console.error("Gagal memuat data peminjaman dari API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBorrowingData();
  }, []);

  if (isLoading) return <div className="p-6 text-gray-500 font-medium">Loading borrowing records...</div>;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* 1. Manggil BorrowingHeader */}
      <BorrowingHeader />

      {/* 2. Manggil BorrowingTable Konten */}
      <BorrowingTable data={borrowingRecords} />
    </div>
  );
};

export default BorrowingList;
import { useEffect, useState } from "react";
import BookHeader from "./BookHeader.tsx";
import BookCard from "../../../components/BookCard.tsx"; // Manggil BookCard global sesuai struktur lu
import SearchBar from "../../../components/SearchBar.tsx"; // Langsung manggil SearchBar global di sini
import { fetchBooksFromAPI } from "../../../lib/books/getBookList.ts";
import type { BookWithStock } from "../../../lib/books/book.ts";

const BookList = () => {
  const [books, setBooks] = useState<BookWithStock[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // State pencarian teks dan filter kategori
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setIsLoading(true);
        const response = await fetchBooksFromAPI({ page: 1 });
        
        // Olah data API mentah
        const formattedBooks: BookWithStock[] = response.results.map((item) => ({
          id: item.id,
          title: item.title,
          authors: item.authors.map(a => a.name),
          coverImage: item.formats["image/jpeg"] || null,
          stock: Math.floor(Math.random() * 10) + 1,
          isAvailable: Math.random() > 0.4
        }));

        setBooks(formattedBooks);
      } catch (error) {
        console.error("Gagal mengambil data buku di Features:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, []);

  // Logika Filter: Gabungan input teks pencarian dan dropdown kategori HeroUI
  const filteredBooks = books.filter((book) => {
    // 1. Filter Text (Judul / Penulis)
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));

    // 2. Filter Dropdown Kategori Status Buku
    let matchesCategory = true;
    if (category === "available") {
      matchesCategory = book.isAvailable === true;
    } else if (category === "borrowed") {
      matchesCategory = book.isAvailable === false;
    }

    return matchesSearch && matchesCategory;
  });

  if (isLoading) return <div className="p-6">Loading koleksi buku...</div>;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* 1. Manggil BookHeader */}
      <BookHeader />

      {/* 2. Langsung pasang SearchBar global & oper state pengontrolnya */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={category}
        onCategoryChange={setCategory}
      />
      
      {/* 3. Map array data buku hasil filter ke komponen BookCard */}
      <div className="grid grid-cols-5 mr-auto justify-center gap-6">
        {filteredBooks.map((bookItem) => (
          <BookCard 
            key={bookItem.id}
            title={bookItem.title} 
            authors={bookItem.authors} 
            coverImage={bookItem.coverImage} 
            isAvailable={bookItem.isAvailable} 
            stock={bookItem.stock} 
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
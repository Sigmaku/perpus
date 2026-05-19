import { useState, useEffect } from 'react'
import { fetchBooksFromAPI } from '../features/books/data/books'
import { getStock } from '../features/books/types/stock'
import type { BookWithStock } from '../features/books/types/book'
import { Button } from '@heroui/react/button'


export default function BookCard() {
  const [books, setBooks] = useState<BookWithStock[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true)
        const data = await fetchBooksFromAPI(1)
        const booksWithStock: BookWithStock[] =
          data.map((book) => ({
            ...book,
            stock: getStock(1,20),
            isAvailable: Math.random() > 0.5
        }))
        setBooks(booksWithStock)
      } catch (error) {
        setError('GAGAL MEMUAT BUKU. SILAHKAN COBA LAGI.')
      } finally {
        setLoading(false)
      }
    }
    loadBooks()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-auto">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white w-55 rounded-lg shadow-lg overflow-hidden animate-pulse">
            <div className="h-64 bg-gray-300"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()} 
          className="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm"
        >
          Coba Lagi
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-auto">
      {books.map((book) => (
        <div key={book.id} className="bg-white flex flex-col rounded-lg w-55 h-100 p-5 gap-4 shadow-md overflow-hidden hover:scale-105 transition-transform">
          {/* Gambar */}
          {book.coverImage ? (
            <img
              src={book.coverImage} 
              alt={book.title}
              className="w-25 h-35"
            />
          ) : (
            <div className="w-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Tidak ada cover</span>
            </div>
          )}
          
          {/* Judul & Penulis */}
          <div className="flex flex-col gap-1 h-35">
            <div className="h-12 font-bold text-[16px] text-gray-800 mb-2 line-clamp-2">
              {book.title}
            </div>
            <div className="h-11 text-sm text-gray-600">
              {book.authors.length > 0 ? book.authors.join(", ") : "Tidak diketahui"}
            </div>
            <div className="">
              {book.isAvailable ? (
                <span className="px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg">
                  Available
                </span>
              ) : (
                <span className="px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50 rounded-lg">
                  Borrowed
                </span>
              )}
            </div>
          </div>

          <div className="border border-gray-300"></div>

          {/* Stok & Details */}
          <div className="flex flex-row justify-between">
            <div className="text-sm font-bold p-2">Stock :{book.stock}</div>
            <Button className="bg-indigo-100 border border-indigo-500 text-indigo-500 p-4 text-sm rounded-lg">Details</Button>
          </div>
        </div>
      ))}
    </div>
  )
}
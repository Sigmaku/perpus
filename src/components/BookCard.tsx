// components/BookCard.tsx
import { useState, useEffect } from 'react'
import { fetchBooksFromAPI } from '../features/books/data/books'
import type { Book } from '../features/books/types/book'

export default function BookCard() {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadBooks = async () => {
      try {
        setLoading(true)
        const data = await fetchBooksFromAPI(1)
        setBooks(data)
      } catch (error) {
        setError('Gagal memuat daftar buku')
      } finally {
        setLoading(false)
      }
    }
    
    loadBooks()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
          {/* Gambar */}
          {book.coverImage ? (
            <img 
              src={book.coverImage} 
              alt={book.title}
              className="w-full h-64 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=No+Cover"
              }}
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Tidak ada cover</span>
            </div>
          )}
          
          {/* Judul & Penulis */}
          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Penulis:</span>{' '}
              {book.authors.length > 0 ? book.authors.join(", ") : "Tidak diketahui"}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
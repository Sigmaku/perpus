// features/books/data/books.ts
import axios from 'axios'
import type { GutendexResponse, Book } from '../types/book'

const API_BASE_URL = 'https://gutendex.com/books'

export const fetchBooksFromAPI = async (page: number = 1): Promise<Book[]> => {
  try {
    const response = await axios.get<GutendexResponse>(`${API_BASE_URL}/?page=${page}`)
    
    const books: Book[] = response.data.results.map((book) => ({
      id: book.id,
      title: book.title,
      authors: book.authors.map((author) => author.name),
      coverImage: book.formats['image/jpeg'] || book.formats['image/png'] || null
    }))
    
    return books
  } catch (error) {
    console.error('Error fetching books:', error)
    throw error
  }
}
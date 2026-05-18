// features/books/types/book.ts
export interface Book {
  id: number
  title: string
  authors: string[]
  coverImage: string | null
}

export interface GutendexResponse {
  count: number
  next: string | null
  previous: string | null
  results: GutendexBook[]
}

export interface GutendexBook {
  id: number
  title: string
  authors: Array<{ name: string }>
  formats: {
    'image/jpeg'?: string
    'image/png'?: string
  }
}
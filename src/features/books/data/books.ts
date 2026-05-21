import api from '../../../lib/api'
import type {
   GutendexResponse,
   Book
} from '../types/book'

export const fetchBooksFromAPI = async (
  page:number=1
):Promise<Book[]> => {
    try{
      console.log("Mulai Request...")
      const response =
        await api.get<GutendexResponse>(
      `/books?page=${page}`
      )
      const books:Book[]=
        response.data.results.map(
          (book)=>({
            id:book.id,
            title:book.title,
            authors:book.authors.map(
              (author)=>author.name
            ),
            coverImage:
            book.formats['image/jpeg']
            ||
            null
          })
        )
      return books

    }catch(error){
      console.error(
      'Error fetching books:',
      error
      )
    throw error
    }
  }
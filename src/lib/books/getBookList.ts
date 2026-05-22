import api from '../../../lib/api'

type GetBookListRequest = {
    page?:number
}

type BookItem ={
    id: number
    title: string
    authors: {
        name: string
    }[]
    formats: {
        'image/jpeg'?: string
        'image/png'?: string
    }
}

type GetBookListResponse = {
    count: number
    next: string | null
    previous: string | null
    results: BookItem[]
}


export const fetchBooksFromAPI = async (
    params:GetBookListRequest
):Promise<GetBookListResponse> => {
    try{
        console.log("Mulai Request...")
        const response =
            await api.get<GetBookListResponse>(
                `/books/?page=${params.page}`
            )
        return response.data

    }catch(error){
        console.error(
            'Error fetching books:',
            error
        )
        throw error
    }
}
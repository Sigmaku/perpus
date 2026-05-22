import {Button} from "@heroui/react/button";
import type {BookWithStock} from "../types/book.ts";


type BookCardProps ={
    book: BookWithStock
}

const BookCard = ({book}:BookCardProps) =>{
    return (
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
    )
}

export default BookCard
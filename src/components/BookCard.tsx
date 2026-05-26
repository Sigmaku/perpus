import { Card, Button } from "@heroui/react";

type GlobalBookCardProps = {
  title: string;
  authors: string[];
  coverImage: string | null;
  stock: number;
  isAvailable: boolean;
};

const BookCard = ({ title, authors, coverImage, stock, isAvailable }: GlobalBookCardProps) => {
  return (
    <Card className="rounded-lg bg-white w-55 h-100 p-5 gap-4 shadow-md overflow-hidden hover:scale-105 transition-transform">
      <Card.Content className="p-0 flex flex-col gap-4 w-full h-full">
        
        {/* Gambar */}
        {coverImage ? (
          <img src={coverImage} alt={title} className="w-full h-40 object-cover rounded-md" />
        ) : (
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
            <span className="text-gray-400 text-xs">Tidak ada cover</span>
          </div>
        )}

        {/* Judul & Penulis */}
        <div className="flex flex-col gap-1 grow">
          <div className="font-bold text-[16px] text-gray-800 line-clamp-2">{title}</div>
          <div className="text-xs text-gray-500 line-clamp-1">
            {authors.length > 0 ? authors.join(", ") : "Tidak diketahui"}
          </div>

          {/* Status */}
          <div className="mt-2">
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${
              isAvailable ? "text-emerald-700 bg-emerald-50" : "text-rose-700 bg-rose-50"
            }`}>
              {isAvailable ? "Available" : "Borrowed"}
            </span>
          </div>
        </div>

        {/* Stock & details */}
        <div className="border-t border-gray-100 pt-3 flex flex-row justify-between items-center">
          <div className="text-xs font-medium text-gray-600">
            Stock: <span className="font-bold text-gray-900">{stock}</span>
          </div>
          <Button className="bg-indigo-50 border border-indigo-200 text-indigo-600 px-3 py-1.5 text-xs font-semibold rounded-lg hover:bg-indigo-100 transition-colors">
            Details
          </Button>
        </div>

      </Card.Content>
    </Card>
  );
};

export default BookCard;
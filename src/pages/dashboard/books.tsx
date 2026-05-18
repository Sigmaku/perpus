import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import SearchBar from "../../components/SearchBar"
import BookCard from "../../components/BookCard"


const books = () => {
  return (
    <div className="bg-slate-200 w-full h-full">
        <div className="flex flex-row min-h-screen gap-6">
            <Sidebar/>
            <div className="flex flex-col w-3/4 gap-6">
              <Header/>
              <SearchBar/>
              <BookCard/>
            </div>
        </div>
    </div>
  )
}

export default books
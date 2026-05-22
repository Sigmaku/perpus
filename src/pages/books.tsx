import DefaultLayout from "../features/layout/DefaultLayout.tsx";
import BookList from "../features/books/BookList";

const books = () => {
  return (
      <DefaultLayout currentMenu={"books"}>
        <BookList/>
      </DefaultLayout>

  )
}

export default books
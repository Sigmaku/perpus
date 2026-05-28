import DefaultLayout from "../features/layout/DefaultLayout.tsx";
import BorrowingList from "../features/borrowing/BorrowingList";

const BorrowingPage = () => {
  return (
    <DefaultLayout currentMenu={"borrowing"}>
      <BorrowingList />
    </DefaultLayout>
  );
};

export default BorrowingPage;
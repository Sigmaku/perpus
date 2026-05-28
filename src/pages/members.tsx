import DefaultLayout from "../features/layout/DefaultLayout.tsx";
import MemberList from "../features/members/MemberList";

const MembersPage = () => {
  return (
    <DefaultLayout currentMenu={"members"}>
      <MemberList />
    </DefaultLayout>
  );
};

export default MembersPage;
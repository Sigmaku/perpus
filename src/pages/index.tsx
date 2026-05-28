import DashboardPage from "../features/dashboard/DashboardPage/index.tsx";
import DefaultLayout from "../features/layout/DefaultLayout.tsx";

export default function Home() {
  return (
    <DefaultLayout currentMenu="dashboard">
      <DashboardPage/>
    </DefaultLayout>
  )
}

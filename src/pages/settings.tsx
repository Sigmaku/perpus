import DefaultLayout from "../features/layout/DefaultLayout"
import SettingsViews from "../features/settings/SettingsViews"

const settings = () => {
  return (
    <DefaultLayout currentMenu={"settings"}>
        <SettingsViews/>
    </DefaultLayout>
  )
}

export default settings

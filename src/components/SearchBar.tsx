import { SearchField, Select, ListBox} from "@heroui/react"

const SearchBar = () => {
  return (
    <div className="flex flex-row w-full gap-6 p-2">
        {/* Search */}
        <div>
            <SearchField name="search" >
                <SearchField.Group className="w-80 h-11 border border-[#D1D5DB] rounded-lg">
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        </div>
        {/* filter */}
        <div>
            <Select className="w-40 h-11 rounded-lg border border-[#D1D5DB]" placeholder="All">
                <Select.Trigger className="rounded-lg h-11">
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="rounded-lg">
                    <ListBox>
                        <ListBox.Item className="rounded-lg" id="all" textValue="All">
                            All
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item className="rounded-lg" id="available" textValue="Available">
                            Available
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item className="rounded-lg" id="borrowed" textValue="Borrowed">
                            Borrowed
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>
        </div>
    </div>
    
  )
}

export default SearchBar
import { SearchField, Select, ListBox } from "@heroui/react";

type GlobalSearchBarProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
};

const SearchBar = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: GlobalSearchBarProps) => {
  return (
    <div className="flex flex-row max-sm:flex max-sm:flex-col w-full gap-6 p-2">
      {/* Search */}
      <div>
        <SearchField name="search" value={searchQuery} onChange={onSearchChange}>
          <SearchField.Group className="w-80 max-sm:w-full h-11 border border-[#D1D5DB] rounded-lg">
            <SearchField.SearchIcon />
            <SearchField.Input className="w-70 max-sm:w-full" placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

      {/* Filter */}
      <div>
        <Select 
          className="w-40 max-sm:w-full h-11 rounded-lg border border-[#D1D5DB]"
          placeholder="All"
          selectedKey={selectedCategory}
          onSelectionChange={(key) => {
            if (key !== null) {
              onCategoryChange(key.toString());
            }
          }}
        >
          <Select.Trigger className="rounded-lg h-11">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover className="rounded-lg">
            <ListBox aria-label="Categories">
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
  );
};

export default SearchBar;
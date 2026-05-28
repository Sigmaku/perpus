const MemberHeader = () => {
  return (
    <div className="flex flex-row justify-between bg-white p-6 w-full h-32 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex flex-col">
        <div className="text-[30px] font-bold text-[#111827]">Library Members</div>
        <div className="text-[14px] font-medium text-[#6B7280] mt-1">
          Manage and monitor student library memberships
        </div>
      </div>
    </div>
  );
};

export default MemberHeader;
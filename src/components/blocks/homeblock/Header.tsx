const Header = () => {
  return (
    <div className=" w-[90%] h-[95%] flex items-start">
      {/* logo and name */}
      <div className="flex items-center gap-3 max-lg:hidden">
        <div className="py-4 px-5 border border-gray-400 text-xl  rounded-full">
          M
        </div>
        {/* name */}
        <p>Area name</p>
      </div>
    </div>
  );
};

export default Header;

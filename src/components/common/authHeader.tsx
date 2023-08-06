const AuthHeader = () => {
  return (
    <div className="w-[50%] h-[90vh] flex justify-end items-center max-md:hidden">
      <div className="w-[50%] h-[80%]  grid grid-rows-3 gap-4 max-lg:w-[310px]">
        {/* first box */}
        <div className=" rounded-xl flex justify-end overflow-hidden">
          <div className="w-[75%] rounded-xl h-full ">
            <img
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzdGUlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              loading="lazy"
              alt="hero image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        {/* second box */}
        <div className=" rounded-xl overflow-hidden">
          <div className="w-[75%] rounded-xl h-full bg-black">
            <img
              src="https://images.unsplash.com/photo-1574974671999-24b7dfbb0d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FzdGUlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="hero image"
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        {/* third box */}
        <div className=" rounded-xl flex justify-end overflow-hidden">
          <div className="w-[75%] rounded-xl h-full">
            <img
              src="https://images.unsplash.com/photo-1597668094841-6ed2b257d9d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdhc3RlJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="hero image"
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;

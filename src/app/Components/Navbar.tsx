const Navbar = () => {
  return (
    <div className="w-full border-b border-b-[#f1f1f1] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-5">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex gap-22 items-center">
            <div>
              <img
                src="globe.png"
                alt="Sarwar"
                draggable={false}
                className="w-9 h-9 object-cover"
              />
            </div>

            <div className="flex gap-18">
              <div className="text-[18px] leading-7 text-[#1f2937] font-medium">Projects</div>
              <div className="text-[18px] leading-7 text-[#1f2937] font-medium">Achievements</div>
              <div className="text-[18px] leading-7 text-[#1f2937] font-medium">Services</div>
            </div>
          </div>

          <div>right</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

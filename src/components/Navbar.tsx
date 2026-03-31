export default function Navbar() {
  return (
    <nav className="w-full h-16 backdrop-blur-lg bg-white/10 border border-white/20 text-white font-bold flex items-center justify-between px-6 shadow-lg sticky top-0 z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#306844] to-[#4CAF50] bg-clip-text text-transparent">NexHub</div>
        <div className="space-x-6">
            <a href="#" className="relative group transition-all duration-300 hover:text-[#4CAF50]">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#306844] to-[#4CAF50] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative group transition-all duration-300 hover:text-[#4CAF50]">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#306844] to-[#4CAF50] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative group transition-all duration-300 hover:text-[#4CAF50]">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#306844] to-[#4CAF50] group-hover:w-full transition-all duration-300"></span>
            </a>
        </div>
    </nav>
  );
}
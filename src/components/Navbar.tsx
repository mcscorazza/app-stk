import { LogOut } from "lucide-react";

const Navbar: React.FC = () =>
(
    <div className="h-12 bg-sky-900 text-white flex items-center  justify-between overflow-hidden relative">
        <div className="w-96 h-96 bg-amber-900 absolute top-[-60px] right-[-50px] rotate-[60deg]"></div>

    <div className='flex justify-between items-center h-14 w-full z-50'>
      <img className=" h-10 ml-3" src="generic-logo.svg" alt="" />
      <div className="w-72 flex items-center gap-5 h-full">
        <img src="miniatura.jpg" className="h-10 rounded-full shadow-sm" alt="" />
        <div className="mr-6">
            <div className="font-bold">Marcos Corazza</div>
            <div className="text-xs font-thin">Administrador</div>
        </div>
        <LogOut className="cursor-pointer"/>    
    </div>
    </div>

    </div>
);


export default Navbar;
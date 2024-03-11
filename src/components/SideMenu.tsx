<<<<<<< HEAD
const SideMenu: React.FC = () =>
  <div className='bg-slate-50 text-slate-600 w-64'>
    <div className='border-l-8 w-56 h-10 pl-4 pt-2 font-medium flex items-center cursor-pointer border-orange-800 hover:bg-white'>Produto</div>
    <div>
      <div className='border-r-4 text-sm h-8 pl-8 font-regular flex items-center cursor-pointer hover:border-orange-800 hover:bg-white'>Cadastro</div>
      <div className='border-r-4 text-sm h-8 pl-8 font-regular flex items-center cursor-pointer hover:border-orange-800 hover:bg-white'>Unidades</div>
      <div className='border-r-4 text-sm h-8 pl-8 font-regular flex items-center cursor-pointer hover:border-orange-800 hover:bg-white'>Tipos</div>
      <div className='border-r-4 text-sm h-8 pl-8 font-regular flex items-center cursor-pointer hover:border-orange-800 hover:bg-white'>Códigos</div>
    </div>
    <div className='border-l-8 h-10 pl-4  pt-2 mt-4 font-medium flex items-center cursor-pointer hover:border-orange-800 hover:bg-white'>Produção</div>
    <div>
      <div className='border-r-4 text-sm h-8 pl-8 font-regular flex items-center cursor-pointer hover:border-orange-800 hover:bg-white'>Ordem de Produção</div>
    </div>
    <div className='border-l-8 h-10 pl-4 pt-2 mt-4 font-medium flex items-center cursor-pointer hover:border-orange-800 hover:bg-white'>Movimentação</div>
    <div>
      <div className='border-r-4 text-sm h-8 pl-8 font-regular flex items-center cursor-pointer hover:border-orange-800 hover:bg-white'>Entrada de NF</div>
      <div className='border-r-4 text-sm h-8 pl-8 font-regular flex items-center cursor-pointer hover:border-orange-800 hover:bg-white'>Faturamento</div>
    </div>
=======
import { LocateFixed, Menu, Projector, Settings, User, X } from 'lucide-react';

interface SideMenuProps {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isSideMenuOpen, toggleSideMenu }) => {
  return (
    <div className={'bg-slate-600 p-2 text-white '}>
      <button onClick={toggleSideMenu} className="text-green-600">
        {isSideMenuOpen ? <X size="40" /> : <Menu size="40" />}
      </button>
      <div className={`${isSideMenuOpen ? 'w-52' : 'w-10'} space-y-4 transition-all duration-1000 overflow-hidden`}>
        
        <div className='w-72 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><User size="40" /><span>Usuário</span></div>
        <div className='w-72 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><Settings size="40" /><span>Configurações</span></div>
        <div className='w-72 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><LocateFixed size="40" /><span>Relatórios</span></div>
        <div>
          <ul className='ml-12 text-slate-300 text-sm mb-8'>
            <li className=' cursor-pointer hover:text-slate-500'>000001</li>
            <li className=' cursor-pointer hover:text-slate-500'>000002</li>
            <li className=' cursor-pointer hover:text-slate-500'>000003</li>
            <li className=' cursor-pointer hover:text-slate-500'>000004</li>
            <li className=' cursor-pointer hover:text-slate-500'>000005</li>
          </ul>
        </div>
        <div className='w-72 flex items-center gap-2 text-xl font-semibold cursor-pointer hover:opacity-50'><Projector size="40" /><span>Outros</span></div>
      </div>
    </div>
  );
}
>>>>>>> c93ea040de65c37bbb1c9eb6e2c11826d91e8341

  </div>
export default SideMenu
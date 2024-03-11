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

  </div>
export default SideMenu
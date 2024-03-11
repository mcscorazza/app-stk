<<<<<<< HEAD
import { Check, ChevronDown, ChevronLeft, ChevronRight, PencilLine, Search, Square, Trash2 } from 'lucide-react';
import React from 'react';

const MainContent: React.FC = () => {
    return (
        <>
            <div className='h-full bg-slate-100 p-2'>
                <div className='p-2 pb-6 flex items-end text-gray-500 gap-4'>
                    <div className='flex flex-col'>
                        <label className='text-sm font-bold' htmlFor="">Buscar por Descrição, código, tipo, etc</label>
                        <div className='flex'>
                            <input className='w-96 outline outline-1 outline-gray-200 rounded-l-sm h-7' type="text" />
                            <button className='flex h-7 w-16 outline-1 border-sky-900 border rounded-r bg-sky-900 hover:bg-sky-800 justify-center items-center text-slate-50'><Search size='20' /></button>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-bold' htmlFor="">Tipo de Produto</label>
                        <select className='h-7 w-52 text-sm text-gray-400 outline outline-1 outline-gray-200 rounded-sm p-1'>
                            <option>...</option>
                            <option>VD | Frasco de Vidro</option>
                            <option>VD | Frasco de Vidro</option>
                            <option>VD | Frasco de Vidro</option>
                            <option>VD | Frasco de Vidro</option>
                            <option>VD | Frasco de Vidro</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm font-bold' htmlFor="">Codigo SPED</label>
                        <select className='h-7 w-52 text-sm text-gray-400 outline outline-1 outline-gray-200 rounded-sm p-1'>
                            <option>...</option>
                            <option>01 | Matéria Prima</option>
                            <option>02 | Embalagem</option>
                            <option>03 | Material de Consumo</option>
                            <option>04 | Produto Acabado</option>
                            <option>05 | Produto Intermediário</option>
                        </select>
                    </div>
                    <div className='flex flex-row items-center'>
                        <input type="checkbox" name="chk01" id="chk01" />
                        <label className='ml-1 text-sm font-bold' htmlFor="chk01">Com Estoque</label>
                    </div>
                    <div className='flex flex-row items-center'>
                        <input type="checkbox" name="chk02" id="chk02" />
                        <label className='ml-1 text-sm font-bold' htmlFor="chk02">Itens de Venda</label>
                    </div>
                </div>

                <div className='w-full min-h-52 bg-slate-50 rounded-md shadow-md p-2'>
                    <div className='flex gap-2 pb-3 justify-between'>
                        <div className='flex gap-2'>
                            <button className='flex gap-2 h-8 w-44 outline-1 border-sky-900 border rounded bg-sky-900 hover:bg-sky-800 justify-center items-center text-slate-50'><Check size='20' /> Cadastrar Novo</button>
                            <button className='flex gap-2 h-8 w-32 outline-1 border-sky-900 border rounded bg-sky-900 hover:bg-sky-800 justify-center items-center text-slate-50'><PencilLine size='20' /> Editar</button>
                            <button className='flex gap-2 h-8 w-32 outline-1 border-orange-800 border rounded bg-orange-800 hover:bg-sky-800 justify-center items-center text-slate-50'><Trash2 size='20' /> Excluir</button>
                        </div>
                        <div className='flex items-center gap-2'>
                        <button className='inline h-8 bg-gray-100 hover:bg-gray-200 px-4 rounded-l-md text-sm text-slate-400 border border-gray-200'><ChevronLeft /></button>
                        <p className='p-2 text-sm font-bold inline'>
                            <input className='w-5 text-center text-gray-500 outline outline-1 outline-gray-200 rounded-sm h-5' type="text" name="" id="" value="1" /> de 3</p>
                        <button className='inline h-8 bg-gray-100 hover:bg-gray-200 px-4 rounded-r-md text-sm text-slate-400 border border-gray-200'><ChevronRight /></button>
                        <select className='h-7 w-28 text-sm text-gray-400 outline outline-1 outline-gray-200 rounded-sm p-1' name="" id="">
                            <option value="">10/página</option>
                        </select>
                        </div>
                    </div>

                    <table className='w-full table-fixed text-left p-2'>
                        <thead>
                            <tr className='border-b-4 border-t-4 bg-gray-100 border-gray-100 text-slate-400 text-sm h-8'>
                                <th className='w-6 pl-3 border-r-2 border-slate-300'><Square className='inline' size='15' /><ChevronDown className='inline' size='15' /></th>
                                <th className='w-10 px-2 border-r-2 border-slate-300'>ID</th>
                                <th className='w-10 px-2 border-r-2 border-slate-300'>Código</th>
                                <th className='w-40 px-2 border-r-2 border-slate-300'>Descrição</th>
                                <th className='w-20 px-2 border-r-2 border-slate-300'>Tipo</th>
                                <th className='w-20 px-2 border-r-2 border-slate-300'>SPED</th>
                                <th className='w-8 px-2 border-r-2 border-slate-300 text-right'>Estoque</th>
                                <th className='w-8 px-2 border-r-2 border-slate-300  text-center'>U.M.</th>
                                <th className='w-10 px-2'>R$ Valor</th>
                            </tr>
                        </thead>
                        <tbody className='border-b-2 border-gray-200'>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                            <tr className='text-xs border-b border-slate-200 text-slate-400 cursor-pointer hover:bg-sky-50 hover:text-sky-800'>
                                <td className='h-8 text-center pt-1'><input className='text-slate-400' type="checkbox" name="" id="" /></td>
                                <td className='h-8 px-2 pt-1'>000005</td>
                                <td className='h-8 px-2 pt-1'>E04VD0005</td>
                                <td className='h-8 px-2 pt-1'>Frasco de Vidro 200ml Elegance Rosê</td>
                                <td className='h-8 px-2 pt-1'>VD | Frasco de Vidro</td>
                                <td className='h-8 px-2 pt-1'>01 | Matéria Prima</td>
                                <td className='h-8 px-2 pt-1 text-right'>4,000</td>
                                <td className='h-8 px-2 pt-1 text-center'>PC</td>
                                <td className='h-8 px-2 pt-1 text-right'>R$ 17,00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex items-center pt-2'>
                        <p className='p-2 text-sm font-bold inline'>1-10 de 32</p>
                        <button className='inline h-8 bg-gray-100 hover:bg-gray-200 px-4 rounded-l-md text-sm text-slate-400 border border-gray-200'><ChevronLeft /></button>
                        <button className='inline h-8 bg-gray-100 hover:bg-gray-200 px-4 rounded-r-md text-sm text-slate-400 border border-gray-200'><ChevronRight /></button>
                    </div>


                </div>
            </div>
            <div className='top-24 left-52 right-0 bottom-6 absolute bg-gray-900/75 flex items-center justify-center'>
                <div className='bg-slate-50 w-[600px] h-[400px] rounded-md overflow-hidden tracking-widest font-semibold'>
                    <div className='w-full text-center bg-sky-950 text-slate-300 py-1'>CADASTRO DE PRODUTO</div>
                    <div className='p-4'>
                        <div className='flex flex-col mt-2'>
                            <label className='text-xs font-light text-gray-400' htmlFor="desc">Descrição</label>
                            <input className='w-full outline outline-1 outline-gray-200 rounded-l-sm h-7 px-2 text-gray-600' type="text" />
                        </div>
                        <div className='flex flex-col mt-2'>
                            <label className='text-xs font-light text-gray-400' htmlFor="desc">Descrição</label>
                            <input className='w-1/2 outline outline-1 outline-gray-200 rounded-l-sm h-7 px-2 text-gray-600' type="text" />
                        </div>
                        <div className='flex flex-col mt-2'>
                            <label className='text-xs font-light text-gray-400' htmlFor="desc">Descrição</label>
                            <input className='w-1/2 outline outline-1 outline-gray-200 rounded-l-sm h-7 px-2 text-gray-600' type="text" />
                        </div>

                    </div>
                </div>

=======
import { ArrowDown, ArrowDownFromLine, ArrowUp, ArrowUpFromLine, Hash, LocateFixed } from 'lucide-react';
import React from 'react';

const MainContent: React.FC = () => {
  return (
    <>
      <div className='grid w-full bg-slate-500 p-4' >
        <div className='grid grid-cols-[560px_minmax(500px,_1fr)] grid-rows-1 gap-3'>
          <div className="grid items-center">
            <div className='h-full bg-slate-600 rounded shadow p-2 text-slate-300'>
              <div className="container mx-auto p-4">
                <div className="mb-4">
                  <h2 className="text-2xl bg-slate-700 font-semibold p-2 rounded-md mb-2 w-full border border-slate-800 flex justify-center">Vagão de Monitoramento</h2>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       Relatório:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          000001                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       ID Trem:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          HTT 98765-4                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       Qtde vagões na composição:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          135 vgs                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       # Vagão de Monitoramento:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          02                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       Início da Viagem:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          06.03.2024 08h57                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md'>                       Conclusão da Viagem:              </div>
                    <div className='font-light text-md text-teal-300 font-mono'>          08.03.2024 14h18                  </div>
                  </div>

                  <h2 className="text-2xl bg-slate-700 font-semibold p-2 rounded-md mt-6 mb-2 w-full border border-slate-800 flex justify-center">Condução do Trem</h2>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><ArrowUp />                      Máximo valor de Tração:              </div>
                    <div className='font-light text-md text-cyan-300 font-mono'>          50 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><LocateFixed />                      Localização:              </div>
                    <div className='font-light text-md text-cyan-300 font-mono'>          Batente Traseiro AE                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><ArrowDown />                      Máximo valor de Compressão:              </div>
                    <div className='font-light text-md text-red-300 font-mono'>          -150 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><LocateFixed />                     Localização:              </div>
                    <div className='font-light text-md text-red-300 font-mono'>          Viga Central Cab. B                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><ArrowUpFromLine />                      P95 Tração:              </div>
                    <div className='font-light text-md text-cyan-300 font-mono'>          50 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><ArrowDownFromLine />                      P95 Compressão:              </div>
                    <div className='font-light text-md text-red-300 font-mono'>          -80 [tf]                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><Hash />                      Picos de Tração acima do P95:              </div>
                    <div className='font-light text-md text-cyan-300 font-mono'>          4                  </div>
                  </div>
                  <div className='w-full flex flex-row justify-between border-b border-gray-500 py-2'>
                    <div className='font-extralight text-md inline-flex gap-2'><Hash />                      Picos de Compressão acima do p95:              </div>
                    <div className=' font-light text-md text-red-300 font-mono'>          2                  </div>
                  </div>
                </div>
              </div>
>>>>>>> c93ea040de65c37bbb1c9eb6e2c11826d91e8341
            </div>

          </div>
          <div className="grid h-full items-center grid-cols-4 grid-rows-[130px_280px_minmax(320px,_1fr)] gap-3 text-slate-300">
            <div className='h-full bg-slate-700 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>Tração</h1>
              <div className='flex flex-row w-full justify-around p-2 text-teal-300'>
                <ArrowUp className='border rounded-md bg-teal-900 border-teal-800 p-1' size="60" />
                <span className='text-5xl font-bold'>50 <small className='font-medium'>[tf]</small></span>
              </div>
            </div>
            <div className='h-full bg-slate-700 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>Compressão</h1>
              <div className='flex flex-row w-full justify-around p-2 text-red-300'>
                <ArrowDown className='border rounded-md bg-red-900 border-red-800 p-1' size="60" />
                <span className='text-5xl font-bold'>-150 <small className='font-medium'>[tf]</small></span>
              </div>
            </div>
            <div className='h-full bg-slate-700 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>95% Tração</h1>
              <div className='flex flex-row w-full justify-around p-2 text-teal-300'>
                <ArrowUpFromLine className='border rounded-md bg-teal-900 border-teal-800 p-1' size="60" />
                <span className='text-5xl font-bold'>40 <small className='font-medium'>[tf]</small></span>
              </div>
            </div>
            <div className='h-full bg-slate-700 rounded shadow p-2'>
              <h1 className='text-2xl w-full text-center mb-2 font-bold'>95% Compressão</h1>
              <div className='flex flex-row w-full justify-around p-2 text-red-300'>
                <ArrowDownFromLine className='border rounded-md bg-red-900 border-red-800 p-1' size="60" />
                <span className='text-5xl font-bold'>-80 <small className=' font-medium'>[tf]</small></span>
              </div>
            </div>
            <div className='h-full bg-slate-600 rounded shadow p-1 col-span-2'>
              <div className='rounded-md w-full h-full  flex justify-between p-2 gap-1'>
                <img src="plot01.png" alt="" className='rounded-md w-1/2 bg-slate-700 p-2' />
                <img src="plot02.png" alt="" className='rounded-md w-1/2 bg-slate-700 p-2' />
              </div>

            </div>
            <div className='h-full bg-slate-600 rounded shadow p-1 col-span-2'>
              <div className='rounded-md w-full h-full  flex justify-between p-2 gap-1'>
                <img src="plot03.png" alt="" className='rounded-md w-1/2 bg-slate-700 p-2' />
                <img src="plot04.png" alt="" className='rounded-md w-1/2 bg-slate-700 p-2' />
              </div>

            </div>

            <div className='h-full bg-slate-600 rounded shadow p-2 col-span-4 overflow-hidden flex items-center justify-center'>
              <img src="map.jpg" alt="" className='h-full rounded-md' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;

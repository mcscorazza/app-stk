import { Home } from "lucide-react"

function Topbar() {
  return (
    <div className="bg-white h-12 border-b-2 flex flex-col w-full">
        <div className="h-16 w-56 text-md text-orange-800 font-bold flex items-center justify-center gap-2">
            <Home  className="h-5" size="20" />
            <div className="h-5">Cadastro</div>
        </div>
        <div className="text-center text-xs text-gray-500 w-56">Produto: Cadastro</div>
    </div>
  )
}

export default Topbar
import Image from "next/image";
import logoDrop from "../../public/logo.svg";

export function Header() {
  return (
    <header className="w-full bg-gray-500 px-10 py-7 flex justify-between items-center">
      <Image src={logoDrop} alt="logo do DropMain" />
      <button className="text-gray-100 rounded-sm p-3 hover:bg-blue-500/50 border border-blue-500">Receber notificações</button>
    </header>
  )
}

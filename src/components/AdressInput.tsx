import {Copy, RefreshCw} from 'lucide-react';

export function AdressInput() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h3 className='font-semibold text-xl'>Seu email temporário é</h3>
      <form className="flex">
        <input type="text" className="w-full rounded-l bg-white border border-gray-300 focus:outline-none px-8"/>
        <button className="flex items-center gap-2 border p-2 rounded-r border-gray-300 before:content-copy before:align-middle"> 
       <Copy size={20}/>
        Copiar</button>
      </form>
      <div className="flex items-center gap-4">
        <h4>
          Atualização de emails em <span className='border border-blue-500 rounded-[50%] p-2'>15</span>
        </h4>
        <button className='flex items-center border border-gray-300 p-2 gap-2'>
          <RefreshCw size={20}/>
          Atualizar
        </button>
      </div>
    </div>
  );
}

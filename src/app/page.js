"use client"
import Image from "next/image";
import Inicio from "./components/page";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className=" bg-[rgb(22,22,22)] text-white h-screen flex flex-col justify-between p-5 w-[239px]">
        <div className="">
          
              <div className="login pb-[25px] border-b-[1px] border-b-[rgb(50,50,50)] w-full flex flex-row items-center">
                <img className="h-[54px] w-[54px] rounded-[12px] mr-[10px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLhRvQJLAibJV6tC5qU7eShOsXHQ5inRK9g&s" />

                <div className="">
                <h4>Jade</h4>
                <p className="text-[10px] text-gray-500">Jadeuser@gmail.com</p>
                </div>
              </div>
            

          <div className="pt-12 w-full">
            <a className="pb-[10px] pt-[10px] flex items-center cursor-pointer">
            <Image
            src="/img/icons8-casa-24.png"
            alt="Ícone"
            className="w-[27px] pr-[5px]"
            width={36}
            height={36}
            />
              <p>Página Inicial</p>
            </a>

            <a className="pb-[10px] pt-[10px] flex items-center cursor-pointer">
              <Image
              src="/img/icons8-tabela-50.png"
              alt="Ícone"
              className="w-[27px] pr-[5px]"
              width={36}
              height={36}
              />
              <p>Criação de Tarefas</p>
            </a>

            <a className="pb-[10px] pt-[10px] flex items-center cursor-pointer">
              <Image
              src="/img/icons8-caixa-de-selecção-seleccionada-2-24.png"
              alt="Ícone"
              className="w-[27px] pr-[5px]"
              width={36}
              height={36}
              />
              <p>Edição de Tarefas</p>
            </a>

            <a className="pb-[10px] pt-[10px] flex items-center cursor-pointer">
              <Image
              src="/img/icons8-hoje-24.png"
              alt="Ícone"
              className="w-[27px] pr-[5px]"
              width={36}
              height={36}
              />
              <p>Calendário</p>
            </a>
        </div>
        </div>
        
      
      <div>
        <a className="pb-[10px] pt-[10px]p-y-[10px] flex items-center cursor-pointer">
            <Image
            src="/img/icons8-informações-50.png"
            alt="Ícone"
            className="w-[27px] pr-[5px]"
            width={36}
            height={36}
          />
          <p>Ajuda</p>
        </a>
        <a className="pb-[10px] pt-[10px] flex items-center cursor-pointer">
            <Image
            src="/img/icons8-config-50.png"
            alt="Ícone"
            className="w-[27px] pr-[5px]"
            width={20}
            height={20}
            />
          <p>Configurações</p>
        </a>
      </div>
      </div>
      <Inicio/>
    </div>
  );
}

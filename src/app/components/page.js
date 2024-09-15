import Image from "next/image";
import styles from '../components/page.css';

export default function Inicio() {
  return (
    <div className="container p-[25px_20px_0_25px] h-screen box-border">
        <div class="search flex items-center justify-between">
            <div class="search-bar bg-[rgba(221,221,221,1)] w-[481px] rounded-[12px] h-[50px] p-[0_10px] flex items-center justify-between">
                <input type="text" class="searchTerm bg-[rgba(221,221,221,1)]" className="bg-[rgba(221,221,221,1)]" placeholder="Busque aqui..."/>
                <button>
                    <Image
                    src="/img/icons8-pesquisar-50.png"
                    alt="Ícone"
                    width={36}
                    height={36}
                /></button>
            </div>
            <h1 className="text-[50px] font-semibold">Achievo</h1> 
        </div>
      <div className="">
        <h1 className="text-[30px] font-medium">Suas principais tarefas.</h1>
        <p className="text-[13px] text-gray-500 pb-[10px]">De acordo com o seu calendário.</p>     
      </div>
      <div className="tarefa-box bg-[rgba(18,18,18,1)] rounded-[12px] p-[20px] grid grid-cols-3 grid-rows-[239px_220px] gap-[15px]">

        <div className="tarefa bg-[rgba(242,242,242,1)] rounded-[6px] pt-[10px] flex flex-col justify-between 
        " >
            <div className="flex flex-col ml-[10px] mr-[10px]">

                <div className="tags flex gap-[10px] pb-[20px]">
                    <div className="importante tag border-2  bg-[rgba(242,242,242,1)] border-black rounded-[12px] flex items-center gap-[5px] p-[5px] text-sm">
                        <p>Importante</p>
                        <div class="circle w-[11px] h-[11px] rounded-full bg-red-500"></div>
                    </div>
                    <div className="aniversario tag border-2  flex items-center gap-[5px]  bg-[rgba(242,242,242,1)] border-black rounded-[12px] p-[5px] text-sm">
                        <p>Aniversário</p>
                        <div class="circle w-[11px] h-[11px] rounded-full bg-yellow-500"></div>
                    </div>
                </div>

                <div className="">
                    <h4 className="text-[20px]">Aniversário De Ben</h4>
                    <p className="text-gray-500">Preciso comprar algo para ben em comemoração aos seus 3 anos. Talvez uma cama nova ou arranhador de novo... </p>
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between pb-[2px] ml-[10px] mr-[10px]"> 
                    <p className="text-gray-500 text-[10px]">30/06 00:00</p>
                    <Image
                    src="/img/icons8-menu-2-50.png"
                    alt="Ícone"
                    width={20}
                    height={20}
                    />
                </div>   
                <div className="">
                    <div className=" bg-gradient-to-r from-purple-500 via-blue-500 to-white w-full h-[8px]"></div>
                </div>
            </div>
        </div>


        <div className="tarefa bg-[rgba(242,242,242,1)] rounded-[6px] pt-[10px] flex flex-col justify-between 
        two">

            
            <div className="flex flex-col ml-[10px] mr-[10px]">

                <div className="tags flex gap-[10px] pb-[20px]">
                    <div className="trabalho tag border-2 flex items-center gap-[5px]  bg-[rgba(242,242,242,1)] border-black rounded-[12px] p-[5px] text-sm">
                        <p>Trabalho</p>
                        <div class="circle w-[11px] h-[11px] rounded-full  flex items-center gap-[5px] bg-cyan-500"></div>
                    </div>
                    <div className="reunião tag border-2  flex items-center gap-[5px] bg-[rgba(242,242,242,1)] border-black rounded-[12px] p-[5px] text-sm">
                        <p>Reunião</p>
                        <div class="circle w-[11px] h-[11px] rounded-full flex items-center gap-[5px] bg-blue-500"></div>
                    </div>
                </div>


                <div className="">
                    <h4 className="text-[20px]">reunião com a equipe</h4>
                    <p className="text-gray-500">Reunião para conhecer o novo projeto </p>
                </div>
            </div>

            <div className="tarefa-opt tarefa-opt w-full">

            <div className="flex justify-between pb-[2px] ml-[10px] mr-[10px]"> 
                <p className="text-gray-500 text-[10px]">03/07 13:35</p>
                <Image
                src="/img/icons8-menu-2-50.png"
                alt="Ícone"
                width={20}
                height={20}
                />
            </div>
            <div className="">
                <div className=" bg-gradient-to-r from-cyan-100 via-white to-cyan-100 h-[8px]"></div>
            </div>
            </div>
        </div>


        <div className="tarefa bg-[rgba(242,242,242,1)] rounded-[6px] pt-[10px] flex flex-col justify-between 
        three">

            <div className="flex flex-col ml-[10px] mr-[10px]">

                <div className="tags flex gap-[10px] pb-[20px]">
                    <div className="diversão tag border-2  flex items-center gap-[5px] bg-[rgba(242,242,242,1)] border-black rounded-[12px] p-[5px] text-sm">
                        <p>Diversão</p>
                        <div class="circle w-[11px] h-[11px] rounded-full bg-green-500"></div>
                    </div>
                </div>

                <div className="">
                    <h4>Cinema</h4>
                    <p className="text-gray-500">Lançamento da sequencia de meu filme favorito. Prioridade ser o primeiro da fila 😅 </p>
                </div>

            </div>

            <div className="w-full">

                <div className="flex justify-between pb-[2px] ml-[10px] mr-[10px]"> 
                    <p className="text-gray-500 text-[10px]">05/07 19:00</p>
                    <Image
                    src="/img/icons8-menu-2-50.png"
                    alt="Ícone"
                    width={20}
                    height={20}
                    />
                </div>
                <div className="">
                    <div className="bg-gradient-to-r from-purple-950 to-amber-300 w-full h-[8px]"></div>
                </div>
            </div>
        </div>


        <div className="tarefa bg-[rgba(242,242,242,1)] rounded-[6px] pt-[10px] flex flex-col justify-between 
        col-start-1 col-span-2 row-start-2">

            <div className="flex flex-col ml-[10px] mr-[10px]">

                <div className="tags flex gap-[10px] pb-[20px]">
                    <div className="importante tag border-2  flex items-center gap-[5px] bg-[rgba(242,242,242,1)] border-black rounded-[12px] p-[5px] text-sm">
                        <p>Importante</p>
                        <div class="circle w-[11px] h-[11px] rounded-full bg-red-500"></div>
                    </div>
                    <div className="trabalho tag border-2  flex items-center gap-[5px]  bg-[rgba(242,242,242,1)] border-black rounded-[12px] p-[5px] text-sm">
                        <p>Trabalho</p>
                        <div class="circle w-[11px] h-[11px] rounded-full bg-cyan-500"></div>
                    </div>
                    <div className="desenvolvimento tag border-2  flex items-center gap-[5px] bg-[rgba(242,242,242,1)] border-black rounded-[12px] p-[5px] text-sm">
                        <p>Desenvolvimento</p>
                        <div class="circle w-[11px] h-[11px] rounded-full bg-blue-500"></div>
                    </div>
                </div>

                <div className="">
                    <h4 className="text-[20px]">Começo do desenvolvimento</h4>
                    <p className="text-gray-500">Depois de unir informações começar a pensar em possiveis erros futuros e soluções. Dar sugestões de inovações talvez e apresentar primeiras ideias de meu home office.</p>
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between pb-[2px] ml-[10px] mr-[10px]"> 
                    <p className="text-gray-500 text-[10px]">08/07 13:30</p>
                    <Image
                    src="/img/icons8-menu-2-50.png"
                    alt="Ícone"
                    width={20}
                    height={20}
                    />
                </div>
                <div className="">
                    <div className="bg-gradient-to-r from-yellow-200 via-teal-900 to-cyan-100 h-[8px]"></div>
                </div>
            </div>
        </div>


        <div className="tarefa bg-[rgba(242,242,242,1)] rounded-[6px] pt-[10px] flex flex-col justify-between 
        five">

            <div className="flex flex-col ml-[10px] mr-[10px]">
                <div className="tags flex gap-[10px] pb-[20px]">
                    <div className="importante tag border-2  flex items-center gap-[5px]  bg-[rgba(242,242,242,1)] border-black rounded-[12px] p-[5px] text-sm">
                        <p>Importante</p>
                        <div class="circle w-[11px] h-[11px] rounded-full bg-red-500"></div>
                    </div>
                    <div className="folga tag border-2  flex items-center gap-[5px]  bg-[rgba(242,242,242,1)] border-black rounded-[12px] p-[5px] text-sm">
                        <p>Folga</p>
                        <div class="circle w-[11px] h-[11px] rounded-full bg-lime-500"></div>
                    </div>
                </div>

                <div className="">
                    <h4 className="text-[20px]">Chek-Up Medico</h4>
                    <p className="text-gray-500">Exame de verificação médica</p>
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between pb-[2px] ml-[10px] mr-[10px]"> 
                    <p className="text-gray-500 text-[10px]">11/07 13:30</p>
                    <Image
                    src="/img/icons8-menu-2-50.png"
                    alt="Ícone"
                    width={20}
                    height={20}
                    />
                </div>
                <div className="">
                    <div className=" bg-gradient-to-r from-purple-900 via-blue-950 to-white w-full h-[8px]"></div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}

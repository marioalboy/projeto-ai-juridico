import { useState } from "react";
import { Plus, BarChart3, Home, HelpCircle, User, Search, Eye, Edit2, Trash2, Download } from "lucide-react";
import svgPaths from "../imports/svg-hactrv7b31";
import imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1 from "figma:asset/32856126515766caf7703006a552bfeab3814738.png";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface TextInputProps {
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  isSelect?: boolean;
  options?: string[];
}

function TextInput({ placeholder, label, value = "", onChange = () => {}, isSelect = false, options = [] }: TextInputProps) {
  if (isSelect) {
    return (
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[199px]">
        <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[14px] text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">{label}</p>
          </div>
        </div>
        <div className="h-[44px] relative rounded-[8px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
              <select 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="basis-0 bg-transparent border-none outline-none flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[16px] cursor-pointer appearance-none"
              >
                <option value="">{placeholder}</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
              <div className="relative shrink-0 size-[24px] pointer-events-none">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #5F5F5F)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[231px]">
      <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[14px] text-center text-nowrap">
          <p className="leading-[24px] whitespace-pre">{label}</p>
        </div>
      </div>
      <div className="h-[44px] relative rounded-[8px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="basis-0 bg-transparent border-none outline-none flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[16px] placeholder:text-[#8e8e8e]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Filtragem({ filters, onFilterChange, onSearch, onClear }: {
  filters: any;
  onFilterChange: (key: string, value: string) => void;
  onSearch: () => void;
  onClear: () => void;
}) {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative size-full">
      <TextInput
        label="Processo"
        placeholder="Insira o número do processo"
        value={filters.processo}
        onChange={(value) => onFilterChange('processo', value)}
      />
      <TextInput
        label="Nome do procurador"
        placeholder="Insira o nome do procurador"
        value={filters.procurador}
        onChange={(value) => onFilterChange('procurador', value)}
      />
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[232px]">
        <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[14px] text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Nome do impetrante </p>
          </div>
        </div>
        <div className="h-[44px] relative rounded-[8px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
              <input
                type="text"
                placeholder="Insira o nome do impetrante"
                value={filters.impetrante}
                onChange={(e) => onFilterChange('impetrante', e.target.value)}
                className="basis-0 bg-transparent border-none outline-none flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[16px] placeholder:text-[#8e8e8e]"
              />
            </div>
          </div>
        </div>
      </div>
      <TextInput
        label="Status"
        placeholder="Selecione um status"
        value={filters.status}
        onChange={(value) => onFilterChange('status', value)}
        isSelect={true}
        options={["Concluída", "Pendente"]}
      />
      <button 
        onClick={onSearch}
        className="bg-black box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-gray-800 transition-colors"
      >
        <Search className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={onClear}
        className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[104px] border border-[#5f5f5f] hover:bg-gray-50 transition-colors"
      >
        <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[16px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Limpar</p>
        </div>
      </button>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="bg-neutral-50 h-[73px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d9e2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[73px] items-center justify-between px-[24px] py-0 relative w-full">
          <div className="h-[41.919px] relative shrink-0 w-[229px]">
            <div className="absolute bottom-0 left-[-2.37%] right-[-2.03%] top-0">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[220.17%] left-[-12.22%] max-w-none top-[-60.08%] w-[124.44%]" src={imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1} />
              </div>
            </div>
            <div className="absolute inset-[22.22%_46.1%_22.22%_43.73%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p28204e80} fill="var(--fill-0, #FF161F)" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
              <rect fill="var(--fill-0, #EAEAEA)" height="35.5" rx="17.75" width="35.5" x="0.25" y="0.25" />
              <rect height="35.5" rx="17.75" stroke="var(--stroke-0, #8E8E8E)" strokeWidth="0.5" width="35.5" x="0.25" y="0.25" />
              <path d={svgPaths.p254c070} fill="var(--fill-0, #8E8E8E)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ currentView, onNavigate }: { currentView: string; onNavigate: (view: string) => void }) {
  const menuItems = [
    { icon: Home, label: "Painel de controle", active: currentView === "dashboard", view: "dashboard" },
    { icon: Plus, label: "Gerar minuta", active: currentView === "criar-minuta", view: "criar-minuta" },
    { icon: BarChart3, label: "Gestão de minutas", active: currentView === "gestao-minutas", view: "gestao-minutas" },
    { icon: HelpCircle, label: "Central de ajuda", active: currentView === "ajuda", view: "ajuda" },
  ];

  return (
    <div className="bg-white content-stretch flex flex-col h-[951px] items-start relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#d1d9e2] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col h-[906px] items-start relative shrink-0 w-[226px]">
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[4px] relative w-full">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => onNavigate(item.view)}
                  className={`h-[44px] relative rounded-[8px] shrink-0 w-full ${
                    item.active ? "bg-black" : ""
                  }`}
                >
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative w-full">
                      <item.icon className={`w-6 h-6 ${item.active ? "text-white" : "text-[#5f5f5f]"}`} />
                      <div className={`basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] ${
                        item.active ? "text-white" : "text-[#5f5f5f]"
                      }`}>
                        <p className="leading-[normal]">{item.label}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-0 translate-x-[-50%] w-[225px]" style={{ left: "calc(50% - 0.5px)" }}>
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225 1">
            <line stroke="var(--stroke-0, #EAEAEA)" x2="225" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

interface MinutaData {
  id: string;
  processo: string;
  dataEntrada: string;
  impetrante: string;
  procurador: string;
  status: "Concluída" | "Pendente";
}

function StatusChip({ status }: { status: "Concluída" | "Pendente" }) {
  const isCompleted = status === "Concluída";
  
  return (
    <div className={`box-border content-stretch flex gap-[100px] items-center px-[8px] py-[4px] relative rounded-[1440px] shrink-0 ${
      isCompleted ? "bg-[#e1f3d4]" : "bg-[#fff8e1]"
    }`}>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <div className={`flex flex-col font-['Roboto_Flex:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap ${
          isCompleted ? "text-[#1b5e20]" : "text-[#bf360c]"
        }`}>
          <p className="leading-[18px] whitespace-pre">{status}</p>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon: Icon, tooltip, onClick }: { icon: any; tooltip: string; onClick: () => void }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button 
            onClick={onClick}
            className="relative shrink-0 size-[24px] hover:bg-gray-100 rounded transition-colors p-1"
          >
            <Icon className="w-4 h-4 text-black" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-white">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function TableRow({ minuta, showPdf = false }: { minuta: MinutaData; showPdf?: boolean }) {
  const handleView = () => console.log("Visualizar minuta:", minuta.id);
  const handleEdit = () => console.log("Editar minuta:", minuta.id);
  const handleDelete = () => console.log("Excluir minuta:", minuta.id);
  const handleDownloadPdf = () => console.log("Baixar PDF:", minuta.id);

  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[56px] items-center px-[8px] py-0 relative w-full">
          {/* ID */}
          <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[82px]">
            <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="basis-0 font-['Roboto_Flex:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#757575] text-[14px] text-nowrap">
                <p className="leading-[18px] overflow-ellipsis overflow-hidden">{minuta.id}</p>
              </div>
            </div>
          </div>
          
          {/* Processo */}
          <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]">
            <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap">
                <p className="leading-[18px] whitespace-pre">{minuta.processo}</p>
              </div>
            </div>
          </div>
          
          {/* Data de entrada */}
          <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[129px]">
            <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap">
                <p className="leading-[18px] whitespace-pre">{minuta.dataEntrada}</p>
              </div>
            </div>
          </div>
          
          {/* Nome do impetrante */}
          <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
                <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap">
                    <p className="leading-[18px] whitespace-pre">{minuta.impetrante}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Procurador */}
          <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
                <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap">
                    <p className="leading-[18px] whitespace-pre">{minuta.procurador}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Status */}
          <div className="box-border content-stretch flex h-full items-center px-[8px] py-[16px] relative shrink-0 w-[96px]">
            <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col h-[26px] items-start justify-between relative shrink-0 w-[140px]">
                <StatusChip status={minuta.status} />
              </div>
            </div>
          </div>
          
          {/* Ações */}
          <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]">
            <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
              <ActionButton icon={Eye} tooltip="Visualizar" onClick={handleView} />
              <ActionButton icon={Edit2} tooltip="Editar" onClick={handleEdit} />
              {minuta.status === "Pendente" && (
                <ActionButton icon={Trash2} tooltip="Excluir" onClick={handleDelete} />
              )}
              {minuta.status === "Concluída" && showPdf && (
                <ActionButton icon={Download} tooltip="Baixar PDF" onClick={handleDownloadPdf} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#e6e8f0]" />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-0 relative w-full">
          {/* ID */}
          <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[82px]">
            <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap">
                <p className="leading-[18px] whitespace-pre">ID</p>
              </div>
            </div>
          </div>
          
          {/* Processo */}
          <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]">
            <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap">
                <p className="leading-[18px] whitespace-pre">Processo</p>
              </div>
            </div>
          </div>
          
          {/* Data de entrada */}
          <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[129px]">
            <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap">
                <p className="leading-[18px] whitespace-pre">Data de entrada</p>
              </div>
            </div>
          </div>
          
          {/* Nome do impetrante */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
                <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap">
                    <p className="leading-[18px] whitespace-pre">Nome do impetrante </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Procurador */}
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
                <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap">
                    <p className="leading-[18px] whitespace-pre">Procurador</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Status */}
          <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[96px]">
            <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
              <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap">
                <p className="leading-[18px] whitespace-pre">Status</p>
              </div>
            </div>
          </div>
          
          {/* Ações */}
          <div className="box-border content-stretch flex items-center justify-center px-[8px] py-[16px] relative shrink-0 w-[150px]">
            <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
              <div className="basis-0 font-['Roboto_Flex:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-neutral-700">
                <p className="leading-[18px]">Ações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#e6e8f0]" />
    </div>
  );
}

export default function GestaoDeMinutas({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [filters, setFilters] = useState({
    processo: "",
    procurador: "",
    impetrante: "",
    status: ""
  });

  const [filteredData, setFilteredData] = useState<MinutaData[]>([]);

  // Mock data
  const mockData: MinutaData[] = [
    {
      id: "0000001",
      processo: "2025.0001.1234",
      dataEntrada: "18/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Concluída"
    },
    {
      id: "0000002",
      processo: "2025.0001.1235",
      dataEntrada: "17/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Pendente"
    },
    {
      id: "0000003",
      processo: "2025.0001.1236",
      dataEntrada: "16/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Pendente"
    },
    {
      id: "0000004",
      processo: "2025.0001.1237",
      dataEntrada: "15/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Concluída"
    },
    {
      id: "0000005",
      processo: "2025.0001.1238",
      dataEntrada: "14/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Concluída"
    },
    {
      id: "0000006",
      processo: "2025.0001.1239",
      dataEntrada: "13/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Concluída"
    },
    {
      id: "0000007",
      processo: "2025.0001.1240",
      dataEntrada: "12/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Concluída"
    },
    {
      id: "0000008",
      processo: "2025.0001.1241",
      dataEntrada: "11/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Concluída"
    },
    {
      id: "0000009",
      processo: "2025.0001.1242",
      dataEntrada: "10/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Concluída"
    },
    {
      id: "0000010",
      processo: "2025.0001.1243",
      dataEntrada: "09/09/2025",
      impetrante: "Nome do impetrante",
      procurador: "Nome do procurador",
      status: "Concluída"
    }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    let filtered = mockData;

    if (filters.processo) {
      filtered = filtered.filter(item => 
        item.processo.toLowerCase().includes(filters.processo.toLowerCase())
      );
    }

    if (filters.procurador) {
      filtered = filtered.filter(item => 
        item.procurador.toLowerCase().includes(filters.procurador.toLowerCase())
      );
    }

    if (filters.impetrante) {
      filtered = filtered.filter(item => 
        item.impetrante.toLowerCase().includes(filters.impetrante.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter(item => item.status === filters.status);
    }

    setFilteredData(filtered);
  };

  const handleClear = () => {
    setFilters({
      processo: "",
      procurador: "",
      impetrante: "",
      status: ""
    });
    setFilteredData(mockData);
  };

  // Initialize with all data
  useState(() => {
    setFilteredData(mockData);
  });

  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
      <DashboardHeader />
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <Sidebar currentView="gestao-minutas" onNavigate={onNavigate} />
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
            <div className="relative size-full">
              <div className="box-border content-stretch flex gap-[10px] items-start p-[24px] relative size-full">
                <div className="basis-0 content-stretch flex flex-col gap-[24px] grow h-full items-start min-h-px min-w-px relative shrink-0">
                  {/* Header */}
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[24px] w-full">
                        <p className="leading-[normal]">Gestão de minutas</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => onNavigate("criar-minuta")}
                      className="bg-[#0c8341] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 hover:bg-[#0a6d35] transition-colors"
                    >
                      <Plus className="w-6 h-6 text-white" />
                      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                        <p className="leading-[normal] whitespace-pre">Gerar minuta</p>
                      </div>
                    </button>
                  </div>
                  
                  {/* Divider */}
                  <div className="h-0 relative shrink-0 w-full">
                    <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1166 1">
                        <line stroke="var(--stroke-0, #EAEAEA)" x2="1166" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Filters */}
                  <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                    <Filtragem
                      filters={filters}
                      onFilterChange={handleFilterChange}
                      onSearch={handleSearch}
                      onClear={handleClear}
                    />
                  </div>
                  
                  {/* Table */}
                  <div className="relative rounded-[8px] shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative w-full">
                      <TableHeader />
                      {filteredData.map((minuta, index) => (
                        <TableRow 
                          key={index} 
                          minuta={minuta} 
                          showPdf={minuta.status === "Concluída"} 
                        />
                      ))}
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Download, Plus, Settings, BarChart3, Home, HelpCircle, User } from "lucide-react";
import imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1 from "figma:asset/32856126515766caf7703006a552bfeab3814738.png";
import svgPaths from "../imports/svg-hactrv7b31";
import CriarMinutaWrapper from "./CriarMinutaWrapper";
import CentralDeAjuda from "./CentralDeAjuda";
import GestaoDeMinutas from "./GestaoDeMinutas";

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

function StatCard({ number, title, subtitle, icon: Icon, color }: {
  number: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
}) {
  return (
    <div className="bg-white border border-[#e5e5e5] rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-['Inter:Bold',_sans-serif] font-bold text-[32px] text-[#2d2d2d] leading-none">
            {number}
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-[#2d2d2d] mt-1">
            {title}
          </div>
          <div className="font-['Inter:Regular',_sans-serif] font-normal text-[12px] text-[#5f5f5f] mt-1">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressChart() {
  const completedPercentage = 92.6; // 25 out of 27 total
  
  return (
    <div>
      <h3 className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-[#2d2d2d] mb-4">
        Progresso mensal
      </h3>
      <div className="flex items-center justify-start">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#e5e5e5"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="#22c55e"
              strokeWidth="8"
              fill="none"
              strokeDasharray={351.86}
              strokeDashoffset={351.86 - (351.86 * completedPercentage) / 100}
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-['Inter:Bold',_sans-serif] font-bold text-[18px] text-[#2d2d2d]">
              {completedPercentage.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
          <span className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#5f5f5f]">
            Minutas concluídas
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
          <span className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#5f5f5f]">
            Minutas pendentes
          </span>
        </div>
      </div>
    </div>
  );
}

function MonthSelector() {
  return (
    <div className="flex items-center gap-4">
      <button className="p-1 hover:bg-gray-100 rounded">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <span className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-[#2d2d2d] min-w-[120px] text-center">
        Janeiro 2026
      </span>
      <button className="p-1 hover:bg-gray-100 rounded">
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}

function RecentMinutes({ handleNavigate }: { handleNavigate: (view: string) => void }) {
  const minutes = [
    "000000",
    "000000", 
    "000000",
    "000000",
    "000000",
    "000000",
    "000000"
  ];

  return (
    <div className="bg-white border border-[#e5e5e5] rounded-lg p-6">
      <h3 className="font-['Inter:Medium',_sans-serif] font-medium text-[18px] text-[#2d2d2d] mb-4">
        Recentemente criadas
      </h3>
      <div className="space-y-3">
        {minutes.map((minute, index) => (
          <div key={index} className="flex items-center justify-between border-b border-[#f5f5f5] last:border-b-0 py-[8px] mt-[0px] mr-[0px] mb-[8px] ml-[0px] py-[13px] px-[0px]">
            <div>
              <div className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-[#2d2d2d]">
                {minute}
              </div>
              <div className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#5f5f5f]">
                Nome completo do procurador
              </div>
            </div>
            <button className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#5f5f5f] underline hover:text-[#2d2d2d]">
              Acessar
            </button>
          </div>
        ))}
      </div>
      <button 
        onClick={() => handleNavigate("gestao-minutas")}
        className="w-full bg-[#1a1a1a] text-white font-['Inter:Medium',_sans-serif] font-medium text-[16px] py-3 px-6 rounded-lg mt-6 hover:bg-[#2a2a2a] transition-colors"
      >
        Acessar gestão de minutas
      </button>
    </div>
  );
}

export default function Dashboard() {
  const [currentView, setCurrentView] = useState("dashboard");

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  if (currentView === "criar-minuta") {
    return <CriarMinutaWrapper onNavigate={handleNavigate} />;
  }

  if (currentView === "ajuda") {
    return <CentralDeAjuda onNavigate={handleNavigate} />;
  }

  if (currentView === "gestao-minutas") {
    return <GestaoDeMinutas onNavigate={handleNavigate} />;
  }

  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
      <DashboardHeader />
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <Sidebar currentView={currentView} onNavigate={handleNavigate} />
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <div className="basis-0 bg-[#f8f9fa] grow h-full min-h-px min-w-px relative shrink-0">
            <div className="relative size-full">
              <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[32px] text-[#121212] mb-2">
                  Painel de controle
                </h1>
                <p className="font-['Inter:Regular',_sans-serif] font-normal text-[16px] text-[#5f5f5f]">
                  Acompanhe o andamento das ações realizadas.
                </p>
              </div>
              <button 
                onClick={() => handleNavigate("criar-minuta")}
                className="bg-[#22c55e] text-white font-['Inter:Medium',_sans-serif] font-medium text-[16px] py-3 px-6 rounded-lg hover:bg-[#16a34a] transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Gerar minuta
              </button>
            </div>

            {/* Main Content Grid - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Resumo Mensal Complete */}
              <div className="space-y-6">
                {/* Resumo Mensal Section */}
                <div className="bg-white border border-[#e5e5e5] rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-['Inter:Bold',_sans-serif] font-bold text-[18px] text-[#121212]">
                      Resumo mensal
                    </h2>
                    <MonthSelector />
                  </div>
                  
                  {/* Stats Cards Side by Side */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <StatCard
                      number="02"
                      title="Minutas pendentes"
                      subtitle="Criadas ainda sem revisão"
                      icon={Calendar}
                      color="bg-[#f59e0b]"
                    />
                    <StatCard
                      number="25"
                      title="Minutas concluídas"
                      subtitle="Criadas, revisadas e salvas"
                      icon={BarChart3}
                      color="bg-[#22c55e]"
                    />
                  </div>
                  
                  {/* Progress Chart */}
                  <ProgressChart />
                </div>

                {/* Report Generation Section */}
                <div className="bg-white border border-[#e5e5e5] rounded-lg p-6">
                  <h3 className="font-['Inter:Bold',_sans-serif] font-bold text-[18px] text-[#121212] mb-4">
                    Gerar relatório
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#5f5f5f] mb-2 block">
                        Mês de referência *
                      </label>
                      <select className="w-full border border-[#d6d6d6] rounded-lg px-4 py-3 font-['Inter:Regular',_sans-serif] font-normal text-[16px] text-[#2d2d2d]">
                        <option>Selecione um mês</option>
                        <option>Janeiro 2026</option>
                        <option>Dezembro 2025</option>
                      </select>
                    </div>
                    <button className="w-full bg-[#1a1a1a] text-white font-['Inter:Medium',_sans-serif] font-medium text-[16px] py-3 px-6 rounded-lg hover:bg-[#2a2a2a] transition-colors flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      Baixar relatório
                    </button>
                  </div>
                  </div>
                </div>

                {/* Right Column - Recentemente Criadas */}
                <RecentMinutes handleNavigate={handleNavigate} />
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
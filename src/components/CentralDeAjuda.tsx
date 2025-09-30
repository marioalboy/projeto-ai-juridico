import { useState } from "react";
import { ChevronDown, Plus, BarChart3, Home, HelpCircle, User } from "lucide-react";
import svgPaths from "../imports/svg-i2dx6mu6bj";
import svgPathsHeader from "../imports/svg-hactrv7b31";
import imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1 from "figma:asset/32856126515766caf7703006a552bfeab3814738.png";

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
                <path d={svgPathsHeader.p28204e80} fill="var(--fill-0, #FF161F)" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
              <rect fill="var(--fill-0, #EAEAEA)" height="35.5" rx="17.75" width="35.5" x="0.25" y="0.25" />
              <rect height="35.5" rx="17.75" stroke="var(--stroke-0, #8E8E8E)" strokeWidth="0.5" width="35.5" x="0.25" y="0.25" />
              <path d={svgPathsHeader.p254c070} fill="var(--fill-0, #8E8E8E)" />
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

interface AccordionItemProps {
  question: string;
  answer?: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col relative w-full">
          {/* Linha do título com ícone fixo - Clicável em toda área */}
          <button 
            onClick={onToggle}
            className="flex gap-[10px] items-start justify-between w-full p-[16px] text-left bg-transparent border-none cursor-pointer"
          >
            <div className="flex-1">
              <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#474747] text-[16px]">
                <p className="leading-[normal]">{question}</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[24px] mt-0 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <ChevronDown 
                className={`w-6 h-6 text-[#474747] transition-transform duration-300 ease-in-out ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </button>
          
          {/* Conteúdo expandido com animação suave */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-[16px] pb-[16px]">
              <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f] text-[14px]">
                <p className="leading-[normal]">{answer || ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function CentralDeAjuda({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqItems = [
    {
      question: "Quem devo procurar em caso de falhas ou dúvidas?",
      answer: "Em caso de falhas técnicas ou dúvidas sobre o sistema, entre em contato com o suporte técnico através do email suporte@educacao.sp.gov.br ou pelo telefone (11) 3218-2000."
    },
    {
      question: "O que é o sistema faz?",
      answer: "O sistema de geração de minutas jurídicas utiliza inteligência artificial para criar documentos jurídicos padronizados a partir de informações de processos do SEI, agilizando o trabalho dos procuradores."
    },
    {
      question: "Quais tipos de documentos podem ser gerados?",
      answer: "O sistema pode gerar diversos tipos de minutas jurídicas, incluindo manifestações, pareceres, contestações, recursos e outros documentos processuais necessários para a atuação da Procuradoria."
    },
    {
      question: "O sistema garante que os textos estejam juridicamente corretos?",
      answer: "O sistema utiliza modelos padronizados e revisados juridicamente, mas é sempre necessária a revisão final por parte do procurador responsável antes da conclusão do documento."
    },
    {
      question: "Como a IA aprende a gerar os textos?",
      answer: "A inteligência artificial foi treinada com base em modelos de documentos jurídicos aprovados pela Procuradoria e utiliza informações específicas dos processos para personalizar cada minuta."
    },
    {
      question: "Posso personalizar os modelos de minuta?",
      answer: "Atualmente o sistema utiliza modelos padronizados, mas você pode solicitar ajustes ao texto gerado através da funcionalidade de chat durante o processo de criação."
    },
    {
      question: "O sistema funciona offline ou precisa de internet?",
      answer: "O sistema requer conexão com a internet para acessar as informações do SEI e processar as minutas através da inteligência artificial."
    },
    {
      question: "Como é garantida a segurança dos dados?",
      answer: "Todos os dados são processados seguindo os protocolos de segurança do Governo do Estado de São Paulo, com criptografia e acesso restrito apenas a usuários autorizados."
    }
  ];

  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
      <DashboardHeader />
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <Sidebar currentView="ajuda" onNavigate={onNavigate} />
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <div className="basis-0 bg-[#f8f9fa] grow h-full min-h-px min-w-px relative shrink-0">
            <div className="relative size-full">
              <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[24px] text-[#121212] mb-2">
                  Central de ajuda
                </h1>
                <p className="font-['Inter:Regular',_sans-serif] font-normal text-[16px] text-[#5f5f5f]">
                  Encontre respostas para suas dúvidas.
                </p>
              </div>
              <button 
                onClick={() => onNavigate("criar-minuta")}
                className="bg-[#0c8341] text-white font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[16px] py-3 px-6 rounded-lg hover:bg-[#0a6d35] transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Gerar minuta
              </button>
            </div>

            {/* FAQ Section */}
            <div className="space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItems[index] || false}
                  onToggle={() => toggleItem(index)}
                />
                ))}
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
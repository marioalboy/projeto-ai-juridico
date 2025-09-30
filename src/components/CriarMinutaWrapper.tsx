import { useState, useEffect } from "react";
import { ArrowLeft, Plus, BarChart3, Home, HelpCircle, User, Send } from "lucide-react";
import svgPaths from "../imports/svg-9y3m02h6xl";
import svgPathsJow from "../imports/svg-jowrof0704";
import svgPathsMinuta from "../imports/svg-7pec7mh1r2";
import svgPathsModal from "../imports/svg-zmxnrf7n7z";
import svgPathsHeader from "../imports/svg-hactrv7b31";
import imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1 from "figma:asset/32856126515766caf7703006a552bfeab3814738.png";
import imgRectangle6 from "figma:asset/d7cd690616d306a6dd239cd36a8ef96a058d9629.png";
import imgMinuta1Bf68596D6D04Cde89C8E55535C63E0C21DocxPage0001 from "figma:asset/d92cc14e7e9636215dfc0006c3f5e4f279ef09b1.png";
import imgMinuta1Bf68596D6D04Cde89C8E55535C63E0C21DocxPage0002 from "figma:asset/4f9491c2a661c8b5cc21b6d7d725a6ba8b5f5ec8.png";
import imgMinuta1Bf68596D6D04Cde89C8E55535C63E0C21DocxPage0003 from "figma:asset/048b0391e94106e52072ba8a450c571809cdda79.png";
import imgMinuta1Bf68596D6D04Cde89C8E55535C63E0C21DocxPage0004 from "figma:asset/5021d7e3aeb246ec16b3d2a7b6a2109a4b2d5170.png";
import { imgCloseSmall, imgCloseSmall1 } from "../imports/svg-kwhne";
import AprovarDialogDeConfirmacao from "../imports/AprovarDialogDeConfirmacao";

interface TextInputProps {
  clearButton?: boolean;
  placeholder?: boolean;
  placeholderText?: string;
  labelText?: string;
  label?: boolean;
  required?: boolean;
  textHelperCounter?: boolean;
  counter?: boolean;
  counter1?: string;
  textHelper?: string;
  textHelper1?: boolean;
  textInput?: string;
  type?: "Filled" | "Enabled" | "Error-unfilled" | "Error-filled" | "Disabled";
  value?: string;
  onChange?: (value: string) => void;
  hasError?: boolean;
  errorMessage?: string;
}

function TextInput({ 
  clearButton = true, 
  placeholder = true, 
  placeholderText = "Placeholder text", 
  labelText = "Label", 
  label = true, 
  required = true, 
  textHelperCounter = true, 
  counter = true, 
  counter1 = "0/0", 
  textHelper = "Text helper", 
  textHelper1 = true, 
  textInput = "Entrada de texto", 
  type = "Enabled",
  value = "",
  onChange = () => {},
  hasError = false,
  errorMessage = ""
}: TextInputProps) {
  const element = label && (
    <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-nowrap">
      <p className="leading-[24px] whitespace-pre">{labelText}</p>
    </div>
  );

  const element1 = required && (
    <div className="flex flex-col font-['Open_Sans:Regular',_sans-serif] h-full justify-center relative shrink-0 w-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
      <p className="leading-[24px] text-red-500">*</p>
    </div>
  );

  if (type === "Filled") {
    return (
      <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Type=Filled">
        <div className="content-stretch flex font-normal gap-[4px] h-[17px] items-center leading-[0] relative shrink-0 text-[#5f5f5f] text-[14px] text-center w-full">
          {element}
          {element1}
        </div>
        <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Entrada de texto">
          <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
              <input
                type="text"
                value={textInput}
                className="basis-0 bg-transparent border-none outline-none flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f] text-[16px]"
              />
              {clearButton && (
                <button className="relative shrink-0 size-[24px] bg-transparent border-none cursor-pointer" data-name="close_small">
                  <img alt="" className="block max-w-none size-full" src={imgCloseSmall} />
                </button>
              )}
            </div>
          </div>
        </div>
        {textHelperCounter && (
          <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[4px] h-[17px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[12px] w-full">
            {textHelper1 && (
              <div className="basis-0 flex flex-col grow h-full justify-center min-h-px min-w-px relative shrink-0">
                <p className="leading-[24px]">{textHelper}</p>
              </div>
            )}
            {counter && (
              <div className="flex flex-col h-full justify-center relative shrink-0 text-right w-[40px]">
                <p className="leading-[24px]">{counter1}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Type=Enabled">
      <div className="content-stretch flex font-normal gap-[4px] h-[17px] items-center leading-[0] relative shrink-0 text-[#5f5f5f] text-[14px] text-center w-full">
        {element}
        {element1}
      </div>
      <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Entrada de texto">
        <div aria-hidden="true" className={`absolute border ${hasError ? 'border-red-500' : 'border-[#5f5f5f]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
            <input
              type="text"
              placeholder={placeholderText}
              value={value}
              maxLength={14}
              onChange={(e) => {
                let inputValue = e.target.value.replace(/\D/g, '');
                if (inputValue.length >= 4) {
                  inputValue = inputValue.slice(0, 4) + '.' + inputValue.slice(4);
                }
                if (inputValue.length >= 9) {
                  inputValue = inputValue.slice(0, 9) + '.' + inputValue.slice(9);
                }
                if (inputValue.length > 14) {
                  inputValue = inputValue.slice(0, 14);
                }
                onChange(inputValue);
              }}
              className="basis-0 bg-transparent border-none outline-none flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2d2d2d] text-[16px] placeholder:text-[#8e8e8e]"
            />
          </div>
        </div>
      </div>
      {textHelperCounter && (
        <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[4px] h-[17px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[12px] w-full">
          {textHelper1 && (
            <div className="basis-0 flex flex-col grow h-full justify-center min-h-px min-w-px relative shrink-0">
              <p className={`leading-[24px] ${hasError ? 'text-red-500' : 'text-[#5f5f5f]'}`}>
                {hasError ? errorMessage : textHelper}
              </p>
            </div>
          )}
          {counter && (
            <div className="flex flex-col h-full justify-center relative shrink-0 text-right w-[40px]">
              <p className="leading-[24px] text-[#5f5f5f]">{counter1}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PassoAPasso() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative size-full" data-name="Passo a passo">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
        <div className="bg-[#034ea2] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[36px]">
          <div className="basis-0 flex flex-col font-['Inter:Bold',_sans-serif] font-bold grow h-[48px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-white">
            <p className="leading-[16px]">1</p>
          </div>
        </div>
        <div className="bg-[#034ea2] h-[17px] shrink-0 w-[2px]" />
        <div className="bg-[#034ea2] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[36px]">
          <div className="basis-0 flex flex-col font-['Inter:Bold',_sans-serif] font-bold grow h-[48px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-white">
            <p className="leading-[16px]">2</p>
          </div>
        </div>
        <div className="bg-[#034ea2] h-[17px] shrink-0 w-[2px]" />
        <div className="bg-[#034ea2] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[36px]">
          <div className="basis-0 flex flex-col font-['Inter:Bold',_sans-serif] font-bold grow h-[48px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-white">
            <p className="leading-[16px]">3</p>
          </div>
        </div>
        <div className="bg-[#034ea2] h-[17px] shrink-0 w-[2px]" />
        <div className="bg-[#034ea2] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[36px]">
          <div className="basis-0 flex flex-col font-['Inter:Bold',_sans-serif] font-bold grow h-[48px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-white">
            <p className="leading-[16px]">4</p>
          </div>
        </div>
        <div className="bg-[#034ea2] h-[17px] shrink-0 w-[2px]" />
        <div className="bg-[#034ea2] content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[36px]">
          <div className="basis-0 flex flex-col font-['Inter:Bold',_sans-serif] font-bold grow h-[48px] justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-white">
            <p className="leading-[16px]">5</p>
          </div>
        </div>
      </div>
      <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
        <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap w-full">
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2d2d2d]">
            <p className="leading-[16px] text-nowrap whitespace-pre">Informe o número do processo</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f]">
            <p className="leading-[16px] text-nowrap whitespace-pre">Digite o número do processo que deseja transformar em minuta.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap w-full">
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2d2d2d]">
            <p className="leading-[16px] text-nowrap whitespace-pre">A inteligência artificial acessa o SEI e analisa os dados</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f]">
            <p className="leading-[16px] text-nowrap whitespace-pre">O sistema localiza automaticamente as informações.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[14px] w-full">
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2d2d2d] text-center text-nowrap">
            <p className="leading-[16px] whitespace-pre">Revise o conteúdo gerado</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#5f5f5f]" style={{ width: "min-content" }}>
            <p className="leading-[16px]">Analise e, se necessário, solicite os ajustes desejados.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap w-full">
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2d2d2d]">
            <p className="leading-[16px] text-nowrap whitespace-pre">Realize a conclusão do documento gerado</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f]">
            <p className="leading-[16px] text-nowrap whitespace-pre">Se o conteúdo estiver conforme esperado, conclua a minuta.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap w-full">
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[#2d2d2d]">
            <p className="leading-[16px] text-nowrap whitespace-pre">Baixe a minuta finalizada</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f]">
            <p className="leading-[16px] text-nowrap whitespace-pre">Agora é só fazer o download do arquivo.</p>
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

function DialogCriarMinuta({ onStartGeneration }: { onStartGeneration: () => void }) {
  const [processNumber, setProcessNumber] = useState("");
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleGenerateMinuta = (onStartGeneration: () => void) => {
    // Reset error state
    setError("");
    setHasError(false);

    // Validation 1: Empty field
    if (!processNumber.trim()) {
      setError("Preenchimento obrigatório");
      setHasError(true);
      return;
    }

    // Validation 2: All zeros pattern
    if (/^0{4}\.0{4}\.0{4}$/.test(processNumber)) {
      setError("Número de processo inválido. Digite um número válido.");
      setHasError(true);
      return;
    }

    // Validation 3: Non-existing process
    if (processNumber === "2025.9999.0001") {
      setError("O número inserido não está vinculado a um processo existente.");
      setHasError(true);
      return;
    }

    // Validation 4: Already exists
    if (processNumber === "2025.2025.2025") {
      setError('Já existe uma minuta criada para o número de processo informado, consulte em "Gestão de minutas".');
      setHasError(true);
      return;
    }

    // If all validations pass, proceed with generation
    onStartGeneration();
  };

  return (
    <div className="relative rounded-[8px] size-full" data-name="Dialog - Criar minuta">
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] leading-[0] not-italic relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#121212] text-[24px]">
                    <p className="leading-[normal]">Gerar minuta</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f] text-[16px] w-full">
                    <p className="leading-[normal]">Vamos começar? Informe o número do processo para gerar a minuta.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text input">
              <TextInput 
                labelText="Número do processo" 
                counter={false} 
                placeholderText="Insira o número do processo" 
                textHelper="Exemplo: 2025.0000.0000" 
                textInput=""
                value={processNumber}
                onChange={(value) => {
                  setProcessNumber(value);
                  // Clear error when user starts typing
                  if (hasError) {
                    setError("");
                    setHasError(false);
                  }
                }}
                hasError={hasError}
                errorMessage={error}
              />
            </div>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Passo a passo">
              <PassoAPasso />
            </div>
          </div>
          <button 
            onClick={() => handleGenerateMinuta(onStartGeneration)}
            className="bg-[#0c8341] h-[44px] relative rounded-[8px] shrink-0 w-full border-none cursor-pointer hover:bg-[#0a6d35] transition-colors" 
            data-name="Button"
          >
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative w-full">
                <div className="relative shrink-0 size-[24px]" data-name="play_arrow">
                  <div className="absolute inset-[20.83%_20.83%_20.83%_33.33%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                      <path d="M0 14V0L11 7L0 14Z" fill="white" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                  <p className="leading-[normal] whitespace-pre">Gerar minuta</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function LoadingModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-[32px] p-12 flex flex-col items-center gap-6 w-[353px]">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 animate-spin" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="#EAEAEA"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="#2D2D2D"
              strokeWidth="8"
              fill="none"
              strokeDasharray="50.27"
              strokeDashoffset="37.7"
              className="transition-all duration-300"
            />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-[#5f5f5f] text-[16px] leading-[24px] font-['Roboto_Flex:Regular',_sans-serif]">
            A minuta está sendo gerada, isso pode levar alguns minutos.
          </p>
          <p className="text-[#5f5f5f] text-[16px] leading-[24px] font-['Roboto_Flex:Regular',_sans-serif]">
            Por favor, aguarde.
          </p>
        </div>
      </div>
    </div>
  );
}

function MessageChat({ children, time = "13:05:45" }: { children: React.ReactNode; time?: string }) {
  return (
    <div className="flex items-end w-full max-w-[670px]">
      <div className="bg-neutral-100 rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] flex-1">
        <div className="p-4">
          <div className="flex flex-col gap-1">
            <div className="text-[#474747] text-[14px] leading-normal font-['Inter:Regular',_sans-serif]">
              {children}
            </div>
            <div className="text-[#5f5f5f] text-[10px] leading-normal">
              {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-[10px] py-[4px] rounded-[1000px] w-[75px] font-['Inter:Medium',_sans-serif] font-medium text-[16px] leading-[24px] flex items-center justify-center text-center ${
        active 
          ? "bg-[#474747] text-white" 
          : "text-[#949494] hover:text-[#474747]"
      }`}
    >
      {children}
    </button>
  );
}

function VisualizarMinutaModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(117,117,117,0.4)] flex items-center justify-center z-50">
      <div className="bg-white rounded-[16px] p-[32px] flex flex-col gap-[24px] h-[966px] w-[1367px] max-w-[95vw] max-h-[95vh]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-['Inter:Bold',_sans-serif] font-bold text-[24px] text-[#121212]">
            Visualizar com formatação
          </h2>
          <button 
            onClick={onClose}
            className="p-[10px] rounded-[96px] hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsModal.p2edaeb50} fill="var(--fill-0, #5F5F5F)" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0">
          <div className="bg-[#f1f1f1] border border-[#d1d9e2] rounded-[8px] p-[16px] h-full overflow-auto">
            <div className="flex flex-col gap-[40px] items-center">
              <img 
                alt="Página 1 da minuta" 
                className="w-[1275px] h-[1650px] object-cover pointer-events-none" 
                src={imgMinuta1Bf68596D6D04Cde89C8E55535C63E0C21DocxPage0001} 
              />
              <img 
                alt="Página 2 da minuta" 
                className="w-[1275px] h-[1650px] object-cover pointer-events-none" 
                src={imgMinuta1Bf68596D6D04Cde89C8E55535C63E0C21DocxPage0002} 
              />
              <img 
                alt="Página 3 da minuta" 
                className="w-[1275px] h-[1650px] object-cover pointer-events-none" 
                src={imgMinuta1Bf68596D6D04Cde89C8E55535C63E0C21DocxPage0004} 
              />
              <img 
                alt="Página 4 da minuta" 
                className="w-[1275px] h-[1650px] object-cover pointer-events-none" 
                src={imgMinuta1Bf68596D6D04Cde89C8E55535C63E0C21DocxPage0003} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinutaContent({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <div className="flex flex-col gap-[24px] h-full">
      {/* Minuta Info Card */}
      <div className="border border-[#d1d9e2] rounded-[8px] p-[16px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPathsMinuta.p13700c80} fill="var(--fill-0, #5F5F5F)" />
              </svg>
              <span className="font-['Inter:Bold',_sans-serif] font-bold text-[16px] text-[#5f5f5f]">
                Minuta: 000000000
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPathsMinuta.p256d7f80} fill="var(--fill-0, #5F5F5F)" />
            </svg>
            <span className="font-['Inter:Regular',_sans-serif] font-normal text-[12px] text-[#5f5f5f]">
              Rascunho salvo automaticamente
            </span>
          </div>
        </div>
        
        <div className="flex gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-['Inter:Regular',_sans-serif] font-normal text-[10px] text-[#5f5f5f]">
              Status
            </span>
            <div className="bg-[#fff8e1] px-2 py-1 rounded-full inline-flex items-center w-fit">
              <span className="font-['Roboto_Flex:Regular',_sans-serif] text-[14px] text-[#bf360c]">
                Pendente
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-['Inter:Regular',_sans-serif] font-normal text-[10px] text-[#5f5f5f]">
              Data de criação
            </span>
            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-[#5f5f5f]">
              18/09/2025
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-['Inter:Regular',_sans-serif] font-normal text-[10px] text-[#5f5f5f]">
              Processo
            </span>
            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-[#5f5f5f]">
              2023.0001.1234
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-['Inter:Regular',_sans-serif] font-normal text-[10px] text-[#5f5f5f]">
              Responsável
            </span>
            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-[#5f5f5f]">
              Nome completo do procurador
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-['Inter:Regular',_sans-serif] font-normal text-[10px] text-[#5f5f5f]">
              Nome do impetrante
            </span>
            <span className="font-['Inter:Medium',_sans-serif] font-medium text-[16px] text-[#5f5f5f]">
              Nome completo do procurador
            </span>
          </div>
        </div>
      </div>

      {/* Actions and Content */}
      <div className="flex flex-col gap-4 flex-1">
        {/* Action Buttons Row */}
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white border border-[#5f5f5f] text-[#5f5f5f] px-4 py-2 rounded-[8px] font-['Inter:Semi_Bold',_sans-serif] font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsMinuta.pf86d200} fill="var(--fill-0, #5F5F5F)" />
            </svg>
            Visualizar com formatação
          </button>
          <button className="border border-[#5f5f5f] text-[#5f5f5f] px-4 py-2 rounded-[8px] font-['Inter:Semi_Bold',_sans-serif] font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsMinuta.p3cb76280} fill="var(--fill-0, #5F5F5F)" />
            </svg>
            Preciso de ajustes
          </button>
        </div>

        {/* Document Content */}
        <div className="border border-[#d1d9e2] rounded-[8px] flex-1 relative">
          <div className="h-[400px] p-4 overflow-y-auto max-w-full">
            <div className="font-['Inter:Regular',_sans-serif] font-normal text-[14px] text-[#474747] leading-normal whitespace-pre-wrap max-w-none w-full break-words">
              {`EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA VARA DA FAZENDA PÚBLICA DA COMARCA DE SÃO PAULO/SP

PROCESSO Nº 2023.0001.1234

MANDADO DE SEGURANÇA

O MINISTÉRIO PÚBLICO DO ESTADO DE SÃO PAULO, por seu representante legal, vem respeitosamente à presença de Vossa Excelência, apresentar MANIFESTAÇÃO nos autos do MANDADO DE SEGURANÇA impetrado por [NOME DO IMPETRANTE], contra ato do [AUTORIDADE COATORA], pelos fatos e fundamentos a seguir expostos:

I - DOS FATOS

Trata-se de Mandado de Segurança impetrado por [NOME DO IMPETRANTE] contra ato do [AUTORIDADE COATORA], alegando, em síntese, que [RESUMO DAS ALEGAÇÕES DO IMPETRANTE].

O impetrante sustenta que [ARGUMENTOS PRINCIPAIS DO IMPETRANTE].

Foi concedida liminar determinando que [CONTEÚDO DA LIMINAR].

É o relatório do necessário.

II - DO MÉRITO

Após análise dos autos, verifica-se que o presente mandado de segurança não merece prosperar, pelos motivos que passamos a expor.

Conforme o art. 5º, LXIX, da Constituição Federal e Lei nº 12.016/2009, o mandado de segurança exige prova pré-constituída de direito líquido e certo, o que não se verifica no presente caso.

[ANÁLISE DOS REQUISITOS DO MANDADO DE SEGURANÇA]

[ARGUMENTAÇÃO CONTRÁRIA AOS PONTOS LEVANTADOS PELO IMPETRANTE]

III - DO PEDIDO

Ante o exposto, o Ministério Público manifesta-se pela DENEGAÇÃO DA SEGURANÇA pleiteada, mantendo-se o ato administrativo impugnado.

São Paulo, 18/09/2025

[NOME DO PROMOTOR]
Promotor de Justiça`}
            </div>
          </div>
          {/* Background watermark image */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-full h-8 opacity-20 pointer-events-none">
            <img alt="" className="w-full h-full object-cover" src={imgRectangle6} />
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex justify-between items-center">
        <button className="border border-[#cb2525] text-[#cb2525] px-4 py-3 rounded-[8px] font-['Inter:Semi_Bold',_sans-serif] font-semibold hover:bg-red-50 transition-colors flex items-center justify-center gap-2 w-[210px]">
          <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsMinuta.p10859900} fill="var(--fill-0, #CB2525)" />
          </svg>
          Excluir minuta
        </button>
        <div className="flex gap-2">
          <button 
            onClick={() => onNavigate("dashboard")}
            className="border border-[#5f5f5f] text-[#5f5f5f] px-4 py-3 rounded-[8px] font-['Inter:Semi_Bold',_sans-serif] font-semibold hover:bg-gray-50 transition-colors w-[210px] flex items-center justify-center"
          >
            Fechar
          </button>
          <button 
            onClick={() => setShowConfirmModal(true)}
            className="bg-[#0c8341] text-white px-4 py-3 rounded-[8px] font-['Inter:Semi_Bold',_sans-serif] font-semibold hover:bg-[#0a6d35] transition-colors flex items-center justify-center gap-2 w-[210px]"
          >
            <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsMinuta.pfbfd380} fill="var(--fill-0, white)" />
            </svg>
            Concluir minuta
          </button>
        </div>
      </div>

      {/* Modal de Visualização */}
      <VisualizarMinutaModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      {/* Modal de Confirmação para Concluir Minuta */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50">
          <AprovarDialogDeConfirmacao />
          {/* Overlay Controls */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto">
              {/* Interceptar cliques nos botões do modal */}
              <div 
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  const buttonText = target.textContent?.trim();
                  
                  if (buttonText === "Cancelar") {
                    setShowConfirmModal(false);
                  } else if (buttonText === "Confirmar") {
                    setShowConfirmModal(false);
                    // Aqui você pode adicionar a lógica para concluir a minuta
                    // Por exemplo: atualizar status, salvar no banco, etc.
                    console.log("Minuta concluída!");
                  }
                }}
                className="absolute inset-0 z-10"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MinutaGenerationScreen({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [activeTab, setActiveTab] = useState("Chat");
  const [showLoading, setShowLoading] = useState(true);
  const [messages, setMessages] = useState<Array<{ text: string; time: string }>>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const simulatedMessages = [
    { text: "Olá! Estou processando o processo afaa. Por favor, aguarde enquanto busco as informações no SEI...", time: "13:05:45", delay: 800 },
    { text: "Encontrei os documentos relacionados ao processo 2023.0001.1234. Estou analisando o mandado de segurança e os documentos de intimação...", time: "13:06:42", delay: 2000 },
    { text: "Minuta gerada com sucesso! Você pode visualizá-la na aba 'Minuta'.", time: "13:10:05", delay: 4000 }
  ];

  useEffect(() => {
    // Start adding messages immediately when component mounts (background loading)
    simulatedMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, { text: msg.text, time: msg.time }]);
        
        // Auto redirect to Minuta tab after third message
        if (index === 2) {
          setTimeout(() => {
            setActiveTab("Minuta");
          }, 1000);
        }
      }, msg.delay);
    });

    // Hide loading modal after 3 seconds
    const hideLoadingTimer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(hideLoadingTimer);
  }, []);

  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
      <DashboardHeader />
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <Sidebar currentView="criar-minuta" onNavigate={onNavigate} />
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
            <div className="relative size-full">
          <div className="p-8 h-[calc(100vh-73px)] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <h1 className="font-['Inter:Bold',_sans-serif] font-bold text-[24px] text-[#121212]">
                Gerar minuta
              </h1>
            </div>

            {/* Tabs */}
            <div className="bg-[#eaeaea] rounded-[1000px] p-0.5 inline-flex mb-6 w-fit">
              <TabButton active={activeTab === "Chat"} onClick={() => setActiveTab("Chat")}>
                Chat
              </TabButton>
              <TabButton active={activeTab === "Minuta"} onClick={() => setActiveTab("Minuta")}>
                Minuta
              </TabButton>
            </div>

            {/* Content Based on Active Tab */}
            {activeTab === "Chat" ? (
              <>
                {/* Chat Content */}
                <div className="border border-[#d1d9e2] rounded-[8px] h-[500px] flex flex-col">
                  <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((message, index) => (
                      <MessageChat key={index} time={message.time}>
                        {message.text}
                      </MessageChat>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="mt-4 flex gap-4">
                  <div className="flex-1 border border-[#5f5f5f] rounded-[8px] p-2">
                    <input
                      type="text"
                      placeholder="Digite sua mensagem"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      className="w-full bg-transparent border-none outline-none text-[16px] font-['Inter:Regular',_sans-serif] text-[#2d2d2d] placeholder:text-[#8e8e8e]"
                    />
                  </div>
                  <button className="bg-black text-white p-3 rounded-[8px] hover:bg-gray-800 transition-colors">
                    <Send className="w-6 h-6" />
                  </button>
                </div>

                {/* Close Button */}
                <div className="mt-4 flex justify-end">
                  <button 
                    onClick={() => onNavigate("dashboard")}
                    className="border border-[#5f5f5f] text-[#5f5f5f] px-4 py-2 rounded-[8px] font-['Inter:Semi_Bold',_sans-serif] font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    Fechar
                  </button>
                </div>
              </>
            ) : (
              <MinutaContent onNavigate={onNavigate} />
            )}
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Modal - Overlays the entire chat screen */}
      {showLoading && <LoadingModal />}
    </div>
  );
}

export default function CriarMinutaWrapper({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [showInitialDialog, setShowInitialDialog] = useState(true);
  const [showChat, setShowChat] = useState(false);

  const handleStartGeneration = () => {
    // Show chat immediately and hide dialog
    setShowInitialDialog(false);
    setShowChat(true);
  };

  // If chat should be shown, render it (it will handle its own loading modal)
  if (showChat) {
    return <MinutaGenerationScreen onNavigate={onNavigate} />;
  }

  // Otherwise show the initial dialog
  if (showInitialDialog) {
    return (
      <div className="content-stretch flex flex-col items-start justify-center relative size-full">
        <DashboardHeader />
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <Sidebar currentView="criar-minuta" onNavigate={onNavigate} />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <div className="basis-0 bg-[#f8f9fa] grow h-full min-h-px min-w-px relative shrink-0">
              <div className="relative size-full">
                <div className="flex-1 p-6 overflow-auto">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center h-full">
                      <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative rounded-[8px] shrink-0 w-[771px]" data-name="Dialog - Criar minuta">
                        <DialogCriarMinuta onStartGeneration={handleStartGeneration} />
                      </div>
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

  return null;
}
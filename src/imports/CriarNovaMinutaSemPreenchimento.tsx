import svgPaths from "./svg-9y3m02h6xl";
import imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1 from "figma:asset/32856126515766caf7703006a552bfeab3814738.png";
import { imgCloseSmall, imgCloseSmall1 } from "./svg-kwhne";

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
}

function TextInput({ clearButton = true, placeholder = true, placeholderText = "Placeholder text", labelText = "Label", label = true, required = true, textHelperCounter = true, counter = true, counter1 = "0/0", textHelper = "Text helper", textHelper1 = true, textInput = "Entrada de texto", type = "Enabled" }: TextInputProps) {
  const element = { label } && (
    <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-nowrap">
      <p className="leading-[24px] whitespace-pre">{labelText}</p>
    </div>
  );
}
const element1 = { required } && (
  <div className="flex flex-col font-['Open_Sans:Regular',_sans-serif] h-full justify-center relative shrink-0 w-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
    <p className="leading-[24px]">*</p>
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
            <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f] text-[16px]">
              <p className="leading-[24px]">{textInput}</p>
            </div>
            {clearButton && (
              <div className="relative shrink-0 size-[24px]" data-name="close_small">
                <img alt="" className="block max-w-none size-full" src={imgCloseSmall} />
              </div>
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
if (type === "Error-unfilled") {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Type=Error-unfilled">
      <div className="content-stretch flex font-normal gap-[4px] h-[17px] items-center leading-[0] relative shrink-0 text-[#5f5f5f] text-[14px] text-center w-full">
        {element}
        {element1}
      </div>
      <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Entrada de texto">
        <div aria-hidden="true" className="absolute border border-[#cb2525] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
            <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8e8e8e] text-[16px]">
              <p className="leading-[24px]">{placeholderText}</p>
            </div>
            {clearButton && (
              <div className="relative shrink-0 size-[24px]" data-name="close_small">
                <img alt="" className="block max-w-none size-full" src={imgCloseSmall1} />
              </div>
            )}
          </div>
        </div>
      </div>
      {textHelperCounter && (
        <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[4px] h-[17px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[#cb2525] text-[12px] w-full">
          {textHelper1 && (
            <div className="basis-0 flex flex-col grow h-full justify-center min-h-px min-w-px relative shrink-0">
              <p className="leading-[24px]">Preenchimento obrigatório.</p>
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
if (type === "Error-filled") {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Type=Error-filled">
      <div className="content-stretch flex font-normal gap-[4px] h-[17px] items-center leading-[0] relative shrink-0 text-[#5f5f5f] text-[14px] text-center w-full">
        {element}
        {element1}
      </div>
      <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Entrada de texto">
        <div aria-hidden="true" className="absolute border border-[#cb2525] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
            <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f] text-[16px]">
              <p className="leading-[24px]">{textInput}</p>
            </div>
            {clearButton && (
              <div className="relative shrink-0 size-[24px]" data-name="close_small">
                <img alt="" className="block max-w-none size-full" src={imgCloseSmall} />
              </div>
            )}
          </div>
        </div>
      </div>
      {textHelperCounter && (
        <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[4px] h-[17px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[#cb2525] text-[12px] w-full">
          {textHelper1 && (
            <div className="basis-0 flex flex-col grow h-full justify-center min-h-px min-w-px relative shrink-0">
              <p className="leading-[24px]">Preenchimento obrigatório.</p>
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
if (type === "Disabled") {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Type=Disabled">
      <div className="content-stretch flex font-normal gap-[4px] h-[17px] items-center leading-[0] relative shrink-0 text-[#8e8e8e] text-[14px] text-center w-full">
        {element}
        {element1}
      </div>
      <div className="bg-[#eaeaea] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Entrada de texto">
        <div aria-hidden="true" className="absolute border border-[#8e8e8e] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
            {placeholder && (
              <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8e8e8e] text-[16px]">
                <p className="leading-[24px]">{placeholderText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {textHelperCounter && (
        <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[4px] h-[17px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[#8e8e8e] text-[12px] w-full">
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
      <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
          {placeholder && (
            <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8e8e8e] text-[16px]">
              <p className="leading-[24px]">{placeholderText}</p>
            </div>
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

function DialogCriarMinuta() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Dialog - Criar minuta">
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#121212] text-[24px] w-full">
                    <p className="leading-[normal]">Gerar minuta</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f] text-[16px] w-full">
                    <p className="leading-[normal]">Vamos começar? Informe o número do processo para gerar a minuta.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text input">
                <TextInput labelText="Número do processo" counter={false} placeholderText="Insira o número do processo" textHelper="Exemplo: 2025.0000.0000" textInput="Todos os procuradores" />
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Passo a passo">
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
            </div>
          </div>
          <div className="bg-[#0c8341] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative w-full">
                <div className="relative shrink-0 size-[24px]" data-name="play_arrow">
                  <div className="absolute inset-[20.83%_20.83%_20.83%_33.33%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                      <path d="M0 14V0L11 7L0 14Z" fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                  <p className="leading-[normal] whitespace-pre">Gerar minuta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoSecretariaDaEducacao() {
  return (
    <div className="h-[41.919px] relative shrink-0 w-[229px]" data-name="Logo - Secretaria da educação">
      <div className="absolute bottom-0 left-[-2.37%] right-[-2.03%] top-0" data-name="gov_logo-2023_secretaria-educacao_versao-principal-colorida_horizontal 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[220.17%] left-[-12.22%] max-w-none top-[-60.08%] w-[124.44%]" src={imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1} />
        </div>
      </div>
      <div className="absolute inset-[22.22%_46.1%_22.22%_43.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p28204e80} fill="var(--fill-0, #FF161F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Avatar">
          <rect fill="var(--fill-0, #EAEAEA)" height="35.5" rx="17.75" width="35.5" x="0.25" y="0.25" />
          <rect height="35.5" rx="17.75" stroke="var(--stroke-0, #8E8E8E)" strokeWidth="0.5" width="35.5" x="0.25" y="0.25" />
          <path d={svgPaths.p254c070} fill="var(--fill-0, #8E8E8E)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-neutral-50 h-[73px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#d1d9e2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[73px] items-center justify-between px-[24px] py-0 relative w-full">
          <LogoSecretariaDaEducacao />
          <Avatar />
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dashboard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dashboard">
          <path d={svgPaths.p10816fa0} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuItem() {
  return (
    <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="sidebar-menu-item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative w-full">
          <Dashboard />
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f] text-[16px]">
            <p className="leading-[normal]">Painel de controle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add_circle">
          <path d={svgPaths.p17247a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuItem1() {
  return (
    <div className="bg-black h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="sidebar-menu-item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative w-full">
          <AddCircle />
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
            <p className="leading-[normal]">Gerar minuta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileCopy() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="file_copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file_copy">
          <path d={svgPaths.p27a09a00} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuItem2() {
  return (
    <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="sidebar-menu-item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative w-full">
          <FileCopy />
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f] text-[16px]">
            <p className="leading-[normal]">Gestão de minutas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Help() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="help">
          <path d={svgPaths.p3194b100} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuItem3() {
  return (
    <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="sidebar-menu-item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative w-full">
          <Help />
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f] text-[16px]">
            <p className="leading-[normal]">Central de ajuda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[4px] relative w-full">
          <SidebarMenuItem />
          <SidebarMenuItem1 />
          <SidebarMenuItem2 />
          <SidebarMenuItem3 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col h-[906px] items-start relative shrink-0 w-[226px]">
      <Frame3 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute bottom-0 h-0 translate-x-[-50%] w-[225px]" style={{ left: "calc(50% - 0.5px)" }}>
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225 1">
          <g id="Frame 67">
            <rect fill="white" height="0" transform="translate(0 1)" width="225" />
            <line id="Line 1" stroke="var(--stroke-0, #EAEAEA)" x2="225" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[951px] items-start relative shrink-0" data-name="Sidebar menu">
      <div aria-hidden="true" className="absolute border-[#d1d9e2] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame7 />
      <Frame67 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[36px] py-[32px] relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative rounded-[8px] shrink-0 w-[771px]" data-name="Dialog - Criar minuta">
            <DialogCriarMinuta />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start justify-between min-h-px min-w-px relative shrink-0">
      <SidebarMenu />
      <Frame48 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame74 />
    </div>
  );
}

export default function CriarNovaMinutaSemPreenchimento() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Criar nova minuta - Sem preenchimento">
      <Header />
      <Frame51 />
    </div>
  );
}
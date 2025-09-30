import svgPaths from "./svg-hactrv7b31";
import imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1 from "figma:asset/32856126515766caf7703006a552bfeab3814738.png";
import { imgCloseSmall, imgCloseSmall1 } from "./svg-rs4i0";

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
  const element = { required } && (
    <div className="flex flex-col font-['Open_Sans:Regular',_sans-serif] h-full justify-center relative shrink-0 w-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
      <p className="leading-[24px]">*</p>
    </div>
  );
}
if (type === "Filled") {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Type=Filled">
      <div className="content-stretch flex font-normal gap-[4px] h-[17px] items-center leading-[0] relative shrink-0 text-[#5f5f5f] text-[14px] text-center w-full">
        {label && (
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-nowrap">
            <p className="leading-[24px] whitespace-pre">{labelText}</p>
          </div>
        )}
        {element}
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
        {label && (
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-nowrap">
            <p className="leading-[24px] whitespace-pre">{labelText}</p>
          </div>
        )}
        {element}
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
        {label && (
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-nowrap">
            <p className="leading-[24px] whitespace-pre">{labelText}</p>
          </div>
        )}
        {element}
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
        {label && (
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-nowrap">
            <p className="leading-[24px] whitespace-pre">{labelText}</p>
          </div>
        )}
        {element}
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
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] justify-center not-italic relative shrink-0 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Label</p>
      </div>
      {element}
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

function Filtragem() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative size-full" data-name="Filtragem">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[231px]" data-name="Text input">
        <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[14px] text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Processo</p>
          </div>
        </div>
        <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Entrada de texto">
          <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
              <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8e8e8e] text-[16px]">
                <p className="leading-[24px]">Insira o número do processo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[231px]" data-name="Text input">
        <TextInput labelText="Nome do procurador" textHelperCounter={false} placeholderText="Insira o nome do procurador" required={false} />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[232px]" data-name="Text input">
        <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[14px] text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Nome do impetrante </p>
          </div>
        </div>
        <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Entrada de texto">
          <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
              <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8e8e8e] text-[16px]">
                <p className="leading-[24px]">Insira o nome do impetrante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[199px]" data-name="Select input">
        <div className="content-stretch flex gap-[4px] h-[17px] items-center relative shrink-0 w-full">
          <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[14px] text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Status</p>
          </div>
        </div>
        <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Entrada de texto">
          <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex h-[44px] items-center justify-between p-[8px] relative w-full">
              <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8e8e8e] text-[16px]">
                <p className="leading-[24px]">Selecione um status</p>
              </div>
              <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="arrow_drop_down">
                    <mask height="24" id="mask0_11961_7532" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                      <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
                    </mask>
                    <g mask="url(#mask0_11961_7532)">
                      <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #5F5F5F)" id="arrow_drop_down_2" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="relative shrink-0 size-[24px]" data-name="search">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p16b4a380} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[104px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[16px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Limpar</p>
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
          <path d={svgPaths.p17247a80} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuItem1() {
  return (
    <div className="h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="sidebar-menu-item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative w-full">
          <AddCircle />
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f] text-[16px]">
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
          <path d={svgPaths.p27a09a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuItem2() {
  return (
    <div className="bg-black h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="sidebar-menu-item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative w-full">
          <FileCopy />
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
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

function Frame49() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[24px] w-full">
        <p className="leading-[normal]">Gestão de minutas</p>
      </div>
    </div>
  );
}

function AddCircle1() {
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

function Button() {
  return (
    <div className="bg-[#0c8341] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <AddCircle1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Gerar minuta</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame49 />
      <Button />
    </div>
  );
}

function BodyCellContent() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">ID</p>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[82px]" data-name="Cell">
      <BodyCellContent />
    </div>
  );
}

function BodyCellContent1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Processo</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent1 />
    </div>
  );
}

function BodyCellContent2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Data de entrada</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="Cell">
      <BodyCellContent2 />
    </div>
  );
}

function BodyCellContent3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome do impetrante `}</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent3 />
        </div>
      </div>
    </div>
  );
}

function BodyCellContent4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Procurador</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent4 />
        </div>
      </div>
    </div>
  );
}

function BodyCellContent5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-700 text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Status</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[96px]" data-name="Cell">
      <BodyCellContent5 />
    </div>
  );
}

function BodyCellContent6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="basis-0 font-['Roboto_Flex:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-neutral-700" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px]">Ações</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent6 />
    </div>
  );
}

function TabelaConcluidas() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tabela - Concluídas">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-0 relative w-full">
          <Cell />
          <Cell1 />
          <Cell2 />
          <Cell3 />
          <Cell4 />
          <Cell5 />
          <Cell6 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#e6e8f0]" />
    </div>
  );
}

function BodyCellContent7() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="basis-0 font-['Roboto_Flex:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">0000000</p>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[82px]" data-name="Cell">
      <BodyCellContent7 />
    </div>
  );
}

function BodyCellContent8() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`2025.0001.1234	`}</p>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent8 />
    </div>
  );
}

function BodyCellContent9() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">00/00/0000</p>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="Cell">
      <BodyCellContent9 />
    </div>
  );
}

function BodyCellContent10() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome do impetrante `}</p>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent10 />
        </div>
      </div>
    </div>
  );
}

function BodyCellContent11() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome do procurador `}</p>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent11 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Roboto_Flex:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b5e20] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Concluída</p>
      </div>
    </div>
  );
}

function ChipsStatus() {
  return (
    <div className="bg-[#e1f3d4] box-border content-stretch flex gap-[100px] items-center px-[8px] py-[4px] relative rounded-[1440px] shrink-0" data-name="Chips-status">
      <Frame2 />
    </div>
  );
}

function Frame1751() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-between relative shrink-0 w-[140px]">
      <ChipsStatus />
    </div>
  );
}

function BodyCellContent12() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <Frame1751 />
    </div>
  );
}

function Cell12() {
  return (
    <div className="box-border content-stretch flex h-full items-center px-[8px] py-[16px] relative shrink-0 w-[96px]" data-name="Cell">
      <BodyCellContent12 />
    </div>
  );
}

function Visibility() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="visibility">
          <path d={svgPaths.pf86d200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-black bottom-[30px] box-border content-stretch flex flex-col items-center justify-center left-1/2 p-[4px] rounded-[4px] translate-x-[-50%]" data-name="Text">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Visualizar</p>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Visibility />
      <Text />
    </div>
  );
}

function Edit() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p3cb76280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Edit />
    </div>
  );
}

function BodyCellContent13() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <Tooltip />
      <Tooltip1 />
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent13 />
    </div>
  );
}

function TabelaConcluidas1() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full" data-name="Tabela - Concluídas">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[56px] items-center px-[8px] py-0 relative w-full">
          <Cell7 />
          <Cell8 />
          <Cell9 />
          <Cell10 />
          <Cell11 />
          <Cell12 />
          <Cell13 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#e6e8f0]" />
    </div>
  );
}

function BodyCellContent14() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="basis-0 font-['Roboto_Flex:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">0000000</p>
      </div>
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[82px]" data-name="Cell">
      <BodyCellContent14 />
    </div>
  );
}

function BodyCellContent15() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`2025.0001.1234	`}</p>
      </div>
    </div>
  );
}

function Cell15() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent15 />
    </div>
  );
}

function BodyCellContent16() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome `}</p>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="Cell">
      <BodyCellContent16 />
    </div>
  );
}

function BodyCellContent17() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome do impetrante `}</p>
      </div>
    </div>
  );
}

function Cell17() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent17 />
        </div>
      </div>
    </div>
  );
}

function BodyCellContent18() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome do procurador `}</p>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent18 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Roboto_Flex:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bf360c] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Pendente</p>
      </div>
    </div>
  );
}

function ChipsStatus1() {
  return (
    <div className="bg-[#fff8e1] box-border content-stretch flex gap-[100px] items-center px-[8px] py-[4px] relative rounded-[1440px] shrink-0" data-name="Chips-status">
      <Frame8 />
    </div>
  );
}

function Frame1752() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-between relative shrink-0 w-[140px]">
      <ChipsStatus1 />
    </div>
  );
}

function BodyCellContent19() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <Frame1752 />
    </div>
  );
}

function Cell19() {
  return (
    <div className="box-border content-stretch flex h-full items-center px-[8px] py-[16px] relative shrink-0 w-[96px]" data-name="Cell">
      <BodyCellContent19 />
    </div>
  );
}

function Visibility1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="visibility">
          <path d={svgPaths.pf86d200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Visibility1 />
    </div>
  );
}

function Edit1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p3cb76280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-black bottom-[30px] box-border content-stretch flex flex-col items-center justify-center left-1/2 p-[4px] rounded-[4px] translate-x-[-50%]" data-name="Text">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Editar</p>
      </div>
    </div>
  );
}

function Tooltip3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Edit1 />
      <Text3 />
    </div>
  );
}

function Delete() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="delete">
          <path d={svgPaths.p10859900} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Delete />
    </div>
  );
}

function BodyCellContent20() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <Tooltip2 />
      <Tooltip3 />
      <Tooltip4 />
    </div>
  );
}

function Cell20() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent20 />
    </div>
  );
}

function TabelaConcluidas2() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full" data-name="Tabela - Concluídas">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[56px] items-center px-[8px] py-0 relative w-full">
          <Cell14 />
          <Cell15 />
          <Cell16 />
          <Cell17 />
          <Cell18 />
          <Cell19 />
          <Cell20 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#e6e8f0]" />
    </div>
  );
}

function BodyCellContent21() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="basis-0 font-['Roboto_Flex:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">0000000</p>
      </div>
    </div>
  );
}

function Cell21() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[82px]" data-name="Cell">
      <BodyCellContent21 />
    </div>
  );
}

function BodyCellContent22() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`2025.0001.1234	`}</p>
      </div>
    </div>
  );
}

function Cell22() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent22 />
    </div>
  );
}

function BodyCellContent23() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome `}</p>
      </div>
    </div>
  );
}

function Cell23() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="Cell">
      <BodyCellContent23 />
    </div>
  );
}

function BodyCellContent24() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome do impetrante `}</p>
      </div>
    </div>
  );
}

function Cell24() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent24 />
        </div>
      </div>
    </div>
  );
}

function BodyCellContent25() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome do procurador `}</p>
      </div>
    </div>
  );
}

function Cell25() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent25 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Roboto_Flex:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bf360c] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Pendente</p>
      </div>
    </div>
  );
}

function ChipsStatus2() {
  return (
    <div className="bg-[#fff8e1] box-border content-stretch flex gap-[100px] items-center px-[8px] py-[4px] relative rounded-[1440px] shrink-0" data-name="Chips-status">
      <Frame9 />
    </div>
  );
}

function Frame1753() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-between relative shrink-0 w-[140px]">
      <ChipsStatus2 />
    </div>
  );
}

function BodyCellContent26() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <Frame1753 />
    </div>
  );
}

function Cell26() {
  return (
    <div className="box-border content-stretch flex h-full items-center px-[8px] py-[16px] relative shrink-0 w-[96px]" data-name="Cell">
      <BodyCellContent26 />
    </div>
  );
}

function Visibility2() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="visibility">
          <path d={svgPaths.pf86d200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Visibility2 />
    </div>
  );
}

function Edit2() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p3cb76280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Edit2 />
    </div>
  );
}

function Delete1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="delete">
          <path d={svgPaths.p10859900} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-black bottom-[30px] box-border content-stretch flex flex-col items-center justify-center left-1/2 p-[4px] rounded-[4px] translate-x-[-50%]" data-name="Text">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Excluir</p>
      </div>
    </div>
  );
}

function Tooltip7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Delete1 />
      <Text7 />
    </div>
  );
}

function BodyCellContent27() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <Tooltip5 />
      <Tooltip6 />
      <Tooltip7 />
    </div>
  );
}

function Cell27() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent27 />
    </div>
  );
}

function TabelaConcluidas3() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full" data-name="Tabela - Concluídas">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[56px] items-center px-[8px] py-0 relative w-full">
          <Cell21 />
          <Cell22 />
          <Cell23 />
          <Cell24 />
          <Cell25 />
          <Cell26 />
          <Cell27 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#e6e8f0]" />
    </div>
  );
}

function BodyCellContent28() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="basis-0 font-['Roboto_Flex:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">0000000</p>
      </div>
    </div>
  );
}

function Cell28() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[82px]" data-name="Cell">
      <BodyCellContent28 />
    </div>
  );
}

function BodyCellContent29() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`2025.0001.1234	`}</p>
      </div>
    </div>
  );
}

function Cell29() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent29 />
    </div>
  );
}

function BodyCellContent30() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">00/00/0000</p>
      </div>
    </div>
  );
}

function Cell30() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[129px]" data-name="Cell">
      <BodyCellContent30 />
    </div>
  );
}

function BodyCellContent31() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome do impetrante `}</p>
      </div>
    </div>
  );
}

function Cell31() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent31 />
        </div>
      </div>
    </div>
  );
}

function BodyCellContent32() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <div className="font-['Roboto_Flex:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">{`Nome do procurador `}</p>
      </div>
    </div>
  );
}

function Cell32() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center px-[8px] py-[16px] relative w-full">
          <BodyCellContent32 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Roboto_Flex:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b5e20] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Concluída</p>
      </div>
    </div>
  );
}

function ChipsStatus3() {
  return (
    <div className="bg-[#e1f3d4] box-border content-stretch flex gap-[100px] items-center px-[8px] py-[4px] relative rounded-[1440px] shrink-0" data-name="Chips-status">
      <Frame10 />
    </div>
  );
}

function Frame1754() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-between relative shrink-0 w-[140px]">
      <ChipsStatus3 />
    </div>
  );
}

function BodyCellContent33() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <Frame1754 />
    </div>
  );
}

function Cell33() {
  return (
    <div className="box-border content-stretch flex h-full items-center px-[8px] py-[16px] relative shrink-0 w-[96px]" data-name="Cell">
      <BodyCellContent33 />
    </div>
  );
}

function Visibility3() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="visibility">
          <path d={svgPaths.pf86d200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Visibility3 />
    </div>
  );
}

function Edit3() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p3cb76280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Tooltip">
      <Edit3 />
    </div>
  );
}

function BodyCellContent34() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Body-Cell-Content">
      <Tooltip8 />
      <Tooltip9 />
    </div>
  );
}

function Cell34() {
  return (
    <div className="bg-white box-border content-stretch flex items-center px-[8px] py-[16px] relative shrink-0 w-[150px]" data-name="Cell">
      <BodyCellContent34 />
    </div>
  );
}

function TabelaConcluidas4() {
  return (
    <div className="bg-white h-[56px] relative shrink-0 w-full" data-name="Tabela - Concluídas">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-[56px] items-center px-[8px] py-0 relative w-full">
          <Cell28 />
          <Cell29 />
          <Cell30 />
          <Cell31 />
          <Cell32 />
          <Cell33 />
          <Cell34 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#e6e8f0]" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start overflow-clip relative w-full">
        <TabelaConcluidas />
        <TabelaConcluidas1 />
        <TabelaConcluidas2 />
        <TabelaConcluidas3 />
        {[...Array(7).keys()].map((_, i) => (
          <TabelaConcluidas4 key={i} />
        ))}
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Frame52 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(234, 234, 234, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1166 1">
            <line id="Line 1" stroke="var(--stroke-0, #EAEAEA)" x2="1166" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-end relative shrink-0" data-name="Filtragem">
        <Filtragem />
      </div>
      <Frame63 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start p-[24px] relative size-full">
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <SidebarMenu />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame48 />
      </div>
    </div>
  );
}

export default function GestaoDeMinutas() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Gestão de minutas">
      <Header />
      <Frame51 />
    </div>
  );
}
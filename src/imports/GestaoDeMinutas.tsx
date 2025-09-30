import svgPaths from "./svg-i2dx6mu6bj";
import imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1 from "figma:asset/32856126515766caf7703006a552bfeab3814738.png";

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
          <path d={svgPaths.p3194b100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMenuItem3() {
  return (
    <div className="bg-black h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="sidebar-menu-item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[44px] items-center px-[16px] py-[8px] relative w-full">
          <Help />
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
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

function Frame147() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#121212] text-[24px] w-[490.5px]">
        <p className="leading-[normal]">Central de ajuda</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#5f5f5f] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Encontre respostas para suas dúvidas.</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <Frame147 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame49 />
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

function Frame163() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame52 />
      <Button />
    </div>
  );
}

function Frame149() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#474747] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Quem devo procurar em caso de falhas ou dúvidas?</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #474747)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame155() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Frame149 />
          <KeyboardArrowDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame157() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#474747] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">O que é o sistema faz?</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #474747)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PainelExpansivel() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Painel expansível">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Frame157 />
          <KeyboardArrowDown1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame158() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#474747] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Quais tipos de documentos podem ser gerados?</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #474747)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame159() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Frame158 />
          <KeyboardArrowDown2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame160() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#474747] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">O sistema garante que os textos estejam juridicamente corretos?</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #474747)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame150() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Frame160 />
          <KeyboardArrowDown3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame161() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#474747] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Como a IA aprende a gerar os textos?</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #474747)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame151() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Frame161 />
          <KeyboardArrowDown4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame162() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#474747] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Posso personalizar os modelos de minuta?</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #474747)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame152() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Frame162 />
          <KeyboardArrowDown5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame164() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#474747] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">O sistema funciona offline ou precisa de internet?</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #474747)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame153() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Frame164 />
          <KeyboardArrowDown6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame165() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#474747] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[normal]">Como é garantida a segurança dos dados?</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #474747)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame154() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center p-[16px] relative w-full">
          <Frame165 />
          <KeyboardArrowDown7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame155 />
      <PainelExpansivel />
      <Frame159 />
      <Frame150 />
      <Frame151 />
      <Frame152 />
      <Frame153 />
      <Frame154 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Frame163 />
      <Frame156 />
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
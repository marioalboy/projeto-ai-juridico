import svgPaths from "./svg-jowrof0704";
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

function Frame49() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[24px] w-full">
        <p className="leading-[normal]">Gerar minuta</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-[#474747] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 w-[75px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Chat</p>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0 w-[75px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Minuta</p>
      </div>
    </div>
  );
}

function Abas() {
  return (
    <div className="bg-[#eaeaea] box-border content-stretch flex items-center p-[4px] relative rounded-[1000px] shrink-0" data-name="Abas">
      <Frame118 />
      <Frame119 />
    </div>
  );
}

function Frame427319369() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[4px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[#474747] text-[14px] w-full">
        <p className="leading-[normal]">Olá! Estou processando o processo afaa. Por favor, aguarde enquanto busco as informações no SEI...</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#5f5f5f] text-[10px] w-full">
        <p className="leading-[normal]">13:05:45</p>
      </div>
    </div>
  );
}

function Frame427319366() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <Frame427319369 />
        </div>
      </div>
    </div>
  );
}

function Frame427319367() {
  return (
    <div className="basis-0 bg-neutral-100 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <Frame427319366 />
    </div>
  );
}

function MessageChat() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[670px]" data-name="Message-chat">
      <Frame427319367 />
    </div>
  );
}

function Frame427319370() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[4px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f]">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">Encontrei os documentos relacionados ao processo 2023.0001.1234. Estou analisando o mandado de segurança e os documentos de intimação...</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">13:05:45</p>
      </div>
    </div>
  );
}

function Frame427319368() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <Frame427319370 />
        </div>
      </div>
    </div>
  );
}

function Frame427319371() {
  return (
    <div className="basis-0 bg-neutral-100 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <Frame427319368 />
    </div>
  );
}

function MessageChat1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[670px]" data-name="Message-chat">
      <Frame427319371 />
    </div>
  );
}

function Frame427319372() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[4px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f]">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal]">{`Minuta gerada com sucesso! Você pode visualizá-la na aba 'Minuta'.`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">13:10:45</p>
      </div>
    </div>
  );
}

function Frame427319373() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[16px] relative w-full">
          <Frame427319372 />
        </div>
      </div>
    </div>
  );
}

function Frame427319374() {
  return (
    <div className="basis-0 bg-neutral-100 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0">
      <Frame427319373 />
    </div>
  );
}

function MessageChat2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[670px]" data-name="Message-chat">
      <Frame427319374 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <MessageChat />
      <MessageChat1 />
      <MessageChat2 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
          <Frame81 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame122() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Abas />
      <Frame117 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame122 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bottom-[4px] h-[14px] right-[5px] w-[10px]">
      <div className="absolute bottom-0 left-[-3.54%] right-[-3.54%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
          <g id="Frame 35">
            <path d="M1 12L11 2M6 12L11 7" id="Vector" stroke="var(--stroke-0, #5F5F5F)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function EntradaDeTexto() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Entrada de texto">
      <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-between p-[8px] relative size-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#8e8e8e] text-[16px]">
            <p className="leading-[24px]">Digite sua mensagem</p>
          </div>
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function TextAreaInput() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[76px] items-start min-h-px min-w-px relative shrink-0" data-name="Text area input">
      <EntradaDeTexto />
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="send">
          <path d={svgPaths.p30d71600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Send />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <TextAreaInput />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[16px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Fechar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[235px]">
      <Button1 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
      <Frame78 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame121 />
      <Frame127 />
      <Frame79 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame123 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Frame52 />
      <Frame124 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shrink-0">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start px-[36px] py-[32px] relative size-full">
          <Frame50 />
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

function LoaderCircle() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Loader-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Loader-circle">
          <path d={svgPaths.p39ced780} fill="var(--fill-0, #EAEAEA)" id="Ellipse 4" />
          <path d={svgPaths.p124a5000} fill="var(--fill-0, #2D2D2D)" id="Ellipse 5" />
        </g>
      </svg>
    </div>
  );
}

function Frame427319335() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Frame-427319335">
      <div className="basis-0 flex flex-col font-['Roboto_Flex:Regular',_sans-serif] font-normal grow justify-center leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5f5f5f] text-[16px] text-center" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="mb-0">A minuta está sendo gerada, isso pode levar alguns minutos.</p>
        <p>Por favor, aguarde.</p>
      </div>
    </div>
  );
}

function Inbox() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0 w-full" data-name="inbox">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[48px] relative w-full">
          <LoaderCircle />
          <Frame427319335 />
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-0 top-0 translate-x-[-50%] translate-y-[-50%] w-[353px]" data-name="Loading">
      <Inbox />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 0.296px)", left: "calc(50% + 0.5px)" }}>
      <Loading />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 0.296px)" }}>
      <div className="absolute bg-[rgba(117,117,117,0.4)] h-[1024px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1440px]" data-name="Blur" style={{ top: "calc(50% - 0.296px)" }} />
      <Group1 />
    </div>
  );
}

export default function CriarMinuta() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Criar minuta">
      <Header />
      <Frame51 />
      <Group2 />
    </div>
  );
}
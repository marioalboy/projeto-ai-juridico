import svgPaths from "./svg-7pec7mh1r2";
import imgGovLogo2023SecretariaEducacaoVersaoPrincipalColoridaHorizontal1 from "figma:asset/32856126515766caf7703006a552bfeab3814738.png";
import imgRectangle6 from "figma:asset/d7cd690616d306a6dd239cd36a8ef96a058d9629.png";

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
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame49 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame52 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative shrink-0 w-[75px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#949494] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Chat</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-[#474747] box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 w-[75px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Minuta</p>
      </div>
    </div>
  );
}

function Abas() {
  return (
    <div className="bg-[#eaeaea] box-border content-stretch flex items-center p-[4px] relative rounded-[1000px] shrink-0" data-name="Abas">
      <Frame119 />
      <Frame118 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Abas />
    </div>
  );
}

function Description() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="description">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="description">
          <path d={svgPaths.p13700c80} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Minuta: 000000000</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative self-stretch shrink-0">
      <Frame80 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Description />
      <Frame83 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame90 />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="info">
          <path d={svgPaths.p256d7f80} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Info />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Rascunho salvo automaticamente</p>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame112 />
      <Frame128 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Roboto_Flex:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bf360c] text-[14px] text-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Pendente</p>
      </div>
    </div>
  );
}

function Chips() {
  return (
    <div className="bg-[#fff8e1] box-border content-stretch flex gap-[100px] items-center px-[8px] py-[2px] relative rounded-[1440px] shrink-0" data-name="Chips">
      <Frame2 />
    </div>
  );
}

function Frame1751() {
  return (
    <div className="content-stretch flex flex-col h-[26px] items-start justify-between relative shrink-0">
      <Chips />
    </div>
  );
}

function BodyCellContent() {
  return (
    <div className="content-stretch flex h-[22px] items-center relative shrink-0" data-name="Body-Cell-Content">
      <Frame1751 />
    </div>
  );
}

function StatusMinuta() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Status-minuta">
      <BodyCellContent />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[80px]">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Status</p>
      </div>
      <StatusMinuta />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[45px] items-start leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-nowrap">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Data de criação</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">00/00/0000</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-nowrap">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Processo</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">00000000000</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[45px] items-start leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-nowrap">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Responsável</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">Nome completo do procurador</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[45px] items-start leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-nowrap">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[10px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">{`Nome do impetrante `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[16px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">Nome completo do procurador</p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[24px] h-[41px] items-start relative shrink-0">
      <Frame93 />
      <Frame88 />
      <Frame91 />
      <Frame89 />
      <Frame92 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame131 />
      <Frame94 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame85 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <Frame84 />
        </div>
      </div>
    </div>
  );
}

function Visibility() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="visibility">
          <path d={svgPaths.pf86d200} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-0 py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Visibility />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Visualizar com formatação</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0">
      <Button />
    </div>
  );
}

function Frame136() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame82 />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p3cb76280} fill="var(--fill-0, #5F5F5F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Edit />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Preciso de ajustes</p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full">
      <Frame136 />
      <Button1 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[10px] grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto pb-[48px] pt-0 px-0 relative shrink-0 w-full">
      <p className="font-['Inter:Regular',_sans-serif] font-normal h-full leading-[normal] not-italic relative shrink-0 text-[#474747] text-[14px] w-[1086px] whitespace-pre-wrap">
        EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA VARA DA FAZENDA PÚBLICA DA COMARCA DE SÃO PAULO/SP
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        PROCESSO Nº 00000000000
        <br aria-hidden="true" /> <br aria-hidden="true" />
        MANDADO DE SEGURANÇA
        <br aria-hidden="true" /> <br aria-hidden="true" />O MINISTÉRIO PÚBLICO DO ESTADO DE SÃO PAULO, por seu representante legal, vem respeitosamente à presença de Vossa Excelência, apresentar MANIFESTAÇÃO nos autos do MANDADO DE SEGURANÇA impetrado por [NOME DO IMPETRANTE], contra ato do [AUTORIDADE COATORA], pelos fatos e fundamentos a seguir expostos:
        <br aria-hidden="true" />
        <br aria-hidden="true" />I - DOS FATOS
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Trata-se de Mandado de Segurança impetrado por [NOME DO IMPETRANTE] contra ato do [AUTORIDADE COATORA], alegando, em síntese, que [RESUMO DAS ALEGAÇÕES DO IMPETRANTE].
        <br aria-hidden="true" />
        <br aria-hidden="true" />O impetrante sustenta que [ARGUMENTOS PRINCIPAIS DO IMPETRANTE].
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Foi concedida liminar determinando que [CONTEÚDO DA LIMINAR].
        <br aria-hidden="true" />
        <br aria-hidden="true" />É o relatório do necessário.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        II - DO MÉRITO
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Após análise dos autos, verifica-se que o presente mandado de segurança não merece prosperar, pelos motivos que passamos a expor.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Conforme o art. 5º, LXIX, da Constituição Federal e Lei nº 12.016/2009, o mandado de segurança exige prova pré-constituída de direito líquido e certo, o que não se verifica no presente caso.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        [ANÁLISE DOS REQUISITOS DO MANDADO DE SEGURANÇA]
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        [ARGUMENTAÇÃO CONTRÁRIA AOS PONTOS LEVANTADOS PELO IMPETRANTE]
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        III - DO PEDIDO
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Ante o exposto, o Ministério Público manifesta-se pela DENEGAÇÃO DA SEGURANÇA pleiteada, mantendo-se o ato administrativo impugnado.
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        São Paulo, 18/09/2025
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        [NOME DO PROMOTOR]
        <br aria-hidden="true" />
        Promotor de Justiça
      </p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame129 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-[1072px]">
      <Frame130 />
    </div>
  );
}

function ThumbSize25() {
  return (
    <div className="basis-0 bg-neutral-100 content-stretch flex flex-col grow items-center min-h-px min-w-px relative rounded-[1440px] shrink-0" data-name=".Thumb Size / 25%">
      <div className="bg-[#9e9e9e] h-[100.462px] rounded-[3px] shrink-0 w-[6px]" data-name="Thumb" />
      <div className="basis-0 grow min-h-px min-w-px shrink-0 w-[6px]" data-name="Track Spacer" />
      <div className="basis-0 grow min-h-px min-w-px shrink-0 w-[6px]" data-name="Track Spacer" />
      <div className="basis-0 grow min-h-px min-w-px shrink-0 w-[6px]" data-name="Track Spacer" />
    </div>
  );
}

function ScrollBar() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-center px-[4px] py-0 relative shrink-0" data-name="Scroll Bar">
      <ThumbSize25 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[24px] items-start justify-center p-[16px] relative size-full">
          <Frame145 />
          <ScrollBar />
          <div className="absolute h-[33px] left-[11px] top-[463px] w-[1096px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle6} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d9e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame135() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame117 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame132 />
      <Frame135 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame100 />
      <Frame133 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame126 />
      <Frame134 />
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

function Delete() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="delete">
          <path d={svgPaths.p10859900} fill="var(--fill-0, #CB2525)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cb2525] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Delete />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cb2525] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Excluir minuta</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5f5f5f] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Fechar</p>
      </div>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_circle">
          <path d={svgPaths.pfbfd380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0c8341] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Button">
      <CheckCircle />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Concluir minuta</p>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1142px]">
      <Button2 />
      <Frame138 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Frame116 />
      <Frame121 />
      <Frame139 />
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

export default function CriarMinuta() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Criar minuta">
      <Header />
      <Frame51 />
    </div>
  );
}
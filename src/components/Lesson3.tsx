import React, { useState } from 'react';
import { 
  ShieldCheck, 
  RefreshCcw, 
  Activity, 
  AlertTriangle, 
  Map, 
  ListChecks, 
  TrendingUp,
  Server,
  UserX,
  Unlock
} from 'lucide-react';

// --- DEFINICIONES DE TIPOS ---

type DiagramType = 
  | 'cycle-audit' 
  | 'dashboard-status' 
  | 'access-control' 
  | 'emergency-plan' 
  | 'compliance-checklist' 
  | 'risk-matrix' 
  | 'continuous-improvement';

interface LessonSection {
  id: number;
  tabLabel: string;
  title: string;
  description: string;
  diagramTitle: string;
  diagramType: DiagramType;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  title: string;
  sections: LessonSection[];
  activeTab: number;
  onTabChange: (id: number) => void;
}

interface DiagramRenderProps {
  type: DiagramType;
}

// --- DATOS DE LA LECCIÓN ---

const LESSON_DATA: LessonSection[] = [
  {
    id: 1,
    tabLabel: "1. Delimitación",
    title: "Delimitación del concepto de auditoría en seguridad",
    description: "La auditoría en seguridad es un proceso sistemático de revisión y evaluación de las medidas implementadas para proteger los activos físicos y humanos de una organización. Su propósito es determinar si los controles existentes son adecuados, efectivos y se aplican correctamente.",
    diagramTitle: "Ciclo de Auditoría de Seguridad",
    diagramType: 'cycle-audit'
  },
  {
    id: 2,
    tabLabel: "2. Evaluación",
    title: "Evaluación del estado de la seguridad",
    description: "La auditoría permite obtener una visión clara y objetiva del estado actual de la seguridad. A través de la recopilación y análisis de información, se identifican fortalezas y debilidades en los sistemas de protección física y en la gestión del personal.",
    diagramTitle: "Tablero de Control de Cumplimiento",
    diagramType: 'dashboard-status'
  },
  {
    id: 3,
    tabLabel: "3. Detección",
    title: "Detección de fallas en los controles",
    description: "Uno de los aportes clave de la auditoría es identificar fallas en los controles de acceso y otros mecanismos de seguridad. Estas fallas pueden incluir vulnerabilidades técnicas, errores humanos o deficiencias en los procedimientos.",
    diagramTitle: "Vulnerabilidades en el Control de Acceso",
    diagramType: 'access-control'
  },
  {
    id: 4,
    tabLabel: "4. Preparación",
    title: "Evaluación de la preparación ante emergencias",
    description: "La auditoría también analiza el nivel de preparación de la organización frente a situaciones de emergencia, como incendios, desastres naturales o incidentes de seguridad. Esto incluye la revisión de planes de respuesta y la capacitación del personal.",
    diagramTitle: "Diagrama de Plan de Emergencia",
    diagramType: 'emergency-plan'
  },
  {
    id: 5,
    tabLabel: "5. Verificación",
    title: "Verificación del cumplimiento normativo",
    description: "Otro aspecto esencial es comprobar que las políticas internas y las normativas externas se cumplan adecuadamente. Esto garantiza que la organización opere dentro de los estándares legales y de seguridad establecidos.",
    diagramTitle: "Checklist de Cumplimiento Normativo",
    diagramType: 'compliance-checklist'
  },
  {
    id: 6,
    tabLabel: "6. Identificación",
    title: "Identificación y prevención de riesgos",
    description: "La auditoría permite identificar riesgos tanto operativos como humanos antes de que se materialicen. Este enfoque preventivo contribuye a reducir la probabilidad de incidentes y a minimizar sus posibles impactos.",
    diagramTitle: "Matriz de Evaluación de Riesgos",
    diagramType: 'risk-matrix'
  },
  {
    id: 7,
    tabLabel: "7. Mejora Continua",
    title: "Mejora continua de la seguridad",
    description: "Finalmente, la auditoría genera recomendaciones que permiten fortalecer los sistemas de seguridad de manera continua. Este proceso de mejora constante asegura que la organización se adapte a nuevos riesgos y mantenga altos niveles de protección.",
    diagramTitle: "Evolución y Optimización Permanente",
    diagramType: 'continuous-improvement'
  }
];

// --- COMPONENTES UI BASE ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- COMPONENTES DE DIAGRAMAS ---

const CycleAuditDiagram = () => (
  <div className="grid place-items-center p-8 h-full w-full">
    <div className="relative w-64 h-64">
      {/* SVG Circular Arrows */}
      <svg className="absolute inset-0 w-full h-full text-blue-200" viewBox="0 0 100 100">
        <path d="M 50 10 A 40 40 0 0 1 85 30" fill="none" stroke="currentColor" strokeWidth="4" markerEnd="url(#arrow)" />
        <path d="M 90 50 A 40 40 0 0 1 65 85" fill="none" stroke="currentColor" strokeWidth="4" markerEnd="url(#arrow)" />
        <path d="M 50 90 A 40 40 0 0 1 15 70" fill="none" stroke="currentColor" strokeWidth="4" markerEnd="url(#arrow)" />
        <path d="M 10 50 A 40 40 0 0 1 35 15" fill="none" stroke="currentColor" strokeWidth="4" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
      {/* Nodes using Grid for positioning */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-2">
        <div className="grid place-items-center col-span-2">
          <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md grid place-items-center gap-1 z-10 w-28">
            <RefreshCcw size={20} />
            <span className="text-xs font-bold">Revisión</span>
          </div>
        </div>
        <div className="grid place-items-center justify-self-start self-end ml-4">
           <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md grid place-items-center gap-1 z-10 w-28">
            <Activity size={20} />
            <span className="text-xs font-bold">Evaluación</span>
          </div>
        </div>
        <div className="grid place-items-center justify-self-end self-end mr-4">
           <div className="bg-emerald-500 text-white p-3 rounded-lg shadow-md grid place-items-center gap-1 z-10 w-28">
            <TrendingUp size={20} />
            <span className="text-xs font-bold">Mejora</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardStatusDiagram = () => (
  <div className="grid gap-4 p-6 w-full h-full content-center">
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 grid gap-2 text-center">
        <div className="w-4 h-4 rounded-full bg-emerald-500 mx-auto animate-pulse"></div>
        <span className="text-sm font-semibold text-slate-700">Perímetro Físico</span>
        <span className="text-2xl font-bold text-emerald-600">95%</span>
        <span className="text-xs text-slate-500">Óptimo</span>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 grid gap-2 text-center">
        <div className="w-4 h-4 rounded-full bg-amber-400 mx-auto"></div>
        <span className="text-sm font-semibold text-slate-700">Gestión Personal</span>
        <span className="text-2xl font-bold text-amber-500">72%</span>
        <span className="text-xs text-slate-500">En Revisión</span>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 grid gap-2 text-center">
        <div className="w-4 h-4 rounded-full bg-rose-500 mx-auto animate-bounce"></div>
        <span className="text-sm font-semibold text-slate-700">Sistemas CCTV</span>
        <span className="text-2xl font-bold text-rose-600">45%</span>
        <span className="text-xs text-slate-500">Crítico</span>
      </div>
    </div>
    <div className="bg-slate-800 rounded-lg p-4 grid grid-cols-[1fr_auto] items-center text-white">
      <span className="text-sm">Estado Global de Seguridad Organizacional</span>
      <span className="font-bold text-amber-400">Moderado (70.6%)</span>
    </div>
  </div>
);

const AccessControlDiagram = () => (
  <div className="grid place-items-center p-6 w-full h-full">
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 w-full max-w-lg bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
      <div className="grid gap-2 text-center">
        <div className="bg-blue-100 p-4 rounded-full text-blue-600 mx-auto relative">
          <UserX size={32} />
          {/* Falla Humana */}
          <div className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1 animate-pulse">
            <AlertTriangle size={14} />
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-600">Usuario sin ID</span>
      </div>

      <div className="grid grid-rows-3 gap-2 relative">
        <div className="h-2 bg-slate-200 rounded-full w-full"></div>
        <div className="grid place-items-center">
          <div className="bg-slate-200 p-2 rounded-md border-2 border-slate-300 relative">
            <Unlock size={24} className="text-slate-500" />
            {/* Falla Técnica */}
            <div className="absolute -bottom-3 -right-3 bg-amber-500 text-white rounded-full p-1">
               <AlertTriangle size={14} />
            </div>
          </div>
        </div>
        <div className="h-2 bg-slate-200 rounded-full w-full"></div>
      </div>

      <div className="grid gap-2 text-center">
        <div className="bg-slate-800 p-4 rounded-lg text-emerald-400 mx-auto relative">
          <Server size={32} />
          {/* Falla Procedimental */}
          <div className="absolute -top-2 -left-2 bg-rose-500 text-white rounded-full p-1">
             <AlertTriangle size={14} />
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-600">Servidor Central</span>
      </div>
      
      <div className="col-span-3 grid grid-cols-3 gap-2 mt-4 text-xs">
        <div className="text-rose-600 font-medium grid grid-flow-col gap-1 items-center justify-start"><AlertTriangle size={12}/> Error Humano</div>
        <div className="text-amber-600 font-medium grid grid-flow-col gap-1 items-center justify-center"><AlertTriangle size={12}/> Brecha Técnica</div>
        <div className="text-rose-600 font-medium grid grid-flow-col gap-1 items-center justify-end"><AlertTriangle size={12}/> Falla de Proceso</div>
      </div>
    </div>
  </div>
);

const EmergencyPlanDiagram = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 w-full h-full content-center bg-slate-50">
    <div className="grid gap-4 border-r-2 border-dashed border-slate-300 pr-4">
      <div className="bg-rose-100 text-rose-800 p-3 rounded-lg grid grid-cols-[auto_1fr] gap-3 items-center border border-rose-200">
         <AlertTriangle size={24} />
         <span className="font-semibold text-sm">1. Detección de Incidente</span>
      </div>
      <div className="grid justify-items-center">
        <div className="w-1 h-6 bg-slate-300"></div>
      </div>
      <div className="bg-amber-100 text-amber-800 p-3 rounded-lg grid grid-cols-[auto_1fr] gap-3 items-center border border-amber-200">
         <Activity size={24} />
         <span className="font-semibold text-sm">2. Activación de Alarma</span>
      </div>
    </div>
    <div className="grid gap-4 pl-4">
      <div className="bg-blue-100 text-blue-800 p-3 rounded-lg grid grid-cols-[auto_1fr] gap-3 items-center border border-blue-200">
         <Map size={24} />
         <span className="font-semibold text-sm">3. Rutas de Evacuación</span>
      </div>
      <div className="grid justify-items-center">
        <div className="w-1 h-6 bg-slate-300"></div>
      </div>
      <div className="bg-emerald-100 text-emerald-800 p-3 rounded-lg grid grid-cols-[auto_1fr] gap-3 items-center border border-emerald-200">
         <ShieldCheck size={24} />
         <span className="font-semibold text-sm">4. Punto de Encuentro Seguro</span>
      </div>
    </div>
  </div>
);

const ComplianceChecklistDiagram = () => (
  <div className="grid p-6 w-full h-full content-start gap-3">
    {[
      { task: "Política de control de acceso físico actualizada", status: true },
      { task: "Capacitación semestral en seguridad a empleados", status: true },
      { task: "Auditoría de sistemas CCTV (Últimos 30 días)", status: false },
      { task: "Revisión de normativas locales contra incendios", status: true },
      { task: "Simulacro de evacuación anual realizado", status: false }
    ].map((item, idx) => (
      <div key={idx} className={`grid grid-cols-[auto_1fr] gap-4 items-center p-3 rounded-lg border ${item.status ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
        <div className={`grid place-items-center w-6 h-6 rounded-full text-white ${item.status ? 'bg-emerald-500' : 'bg-rose-500'}`}>
          {item.status ? '✓' : '✗'}
        </div>
        <span className={`text-sm font-medium ${item.status ? 'text-emerald-900' : 'text-rose-900'}`}>{item.task}</span>
      </div>
    ))}
  </div>
);

const RiskMatrixDiagram = () => (
  <div className="grid p-6 w-full h-full place-items-center bg-slate-50">
    <div className="grid grid-cols-[auto_1fr_1fr_1fr] grid-rows-[auto_1fr_1fr_1fr] gap-1 w-full max-w-md">
      {/* Headers */}
      <div className="col-start-2 text-center text-xs font-bold text-slate-500 p-2">Impacto Bajo</div>
      <div className="col-start-3 text-center text-xs font-bold text-slate-500 p-2">Impacto Medio</div>
      <div className="col-start-4 text-center text-xs font-bold text-slate-500 p-2">Impacto Alto</div>
      
      {/* Row 1 */}
      <div className="row-start-2 grid items-center text-right pr-2 text-xs font-bold text-slate-500">Prob. Alta</div>
      <div className="bg-amber-400 p-4 rounded text-center font-bold text-white shadow-sm">R1</div>
      <div className="bg-rose-500 p-4 rounded text-center font-bold text-white shadow-sm">R3</div>
      <div className="bg-rose-700 p-4 rounded text-center font-bold text-white shadow-sm">R5</div>
      
      {/* Row 2 */}
      <div className="row-start-3 grid items-center text-right pr-2 text-xs font-bold text-slate-500">Prob. Media</div>
      <div className="bg-emerald-400 p-4 rounded text-center font-bold text-white shadow-sm">R2</div>
      <div className="bg-amber-400 p-4 rounded text-center font-bold text-white shadow-sm"></div>
      <div className="bg-rose-500 p-4 rounded text-center font-bold text-white shadow-sm">R4</div>

      {/* Row 3 */}
      <div className="row-start-4 grid items-center text-right pr-2 text-xs font-bold text-slate-500">Prob. Baja</div>
      <div className="bg-emerald-500 p-4 rounded text-center font-bold text-white shadow-sm"></div>
      <div className="bg-emerald-400 p-4 rounded text-center font-bold text-white shadow-sm"></div>
      <div className="bg-amber-400 p-4 rounded text-center font-bold text-white shadow-sm"></div>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-4 text-xs font-medium w-full max-w-md text-slate-600 text-center">
      <span>R1: Falla CCTV</span>
      <span>R3: Intrusión</span>
      <span>R5: Desastre Nat.</span>
    </div>
  </div>
);

const ContinuousImprovementDiagram = () => (
  <div className="grid place-items-center p-8 w-full h-full">
    <div className="grid grid-cols-3 gap-4 w-full max-w-lg items-end">
      {/* Evaluar */}
      <div className="grid gap-3 text-center">
        <div className="bg-slate-100 p-4 rounded-xl border-2 border-blue-400 h-24 grid place-items-center shadow-md">
           <ListChecks className="text-blue-600" size={32} />
        </div>
        <span className="font-bold text-blue-800 text-sm bg-blue-100 py-1 rounded">Evaluar</span>
      </div>
      
      {/* Corregir */}
      <div className="grid gap-3 text-center relative bottom-6">
        <div className="bg-slate-100 p-4 rounded-xl border-2 border-amber-400 h-32 grid place-items-center shadow-md">
           <AlertTriangle className="text-amber-600" size={32} />
        </div>
        <span className="font-bold text-amber-800 text-sm bg-amber-100 py-1 rounded">Corregir</span>
      </div>

      {/* Optimizar */}
      <div className="grid gap-3 text-center relative bottom-12">
        <div className="bg-slate-100 p-4 rounded-xl border-2 border-emerald-400 h-40 grid place-items-center shadow-md">
           <TrendingUp className="text-emerald-600" size={32} />
        </div>
        <span className="font-bold text-emerald-800 text-sm bg-emerald-100 py-1 rounded">Optimizar</span>
      </div>
    </div>
    <div className="mt-8 text-center text-sm font-semibold text-slate-500 max-w-sm">
      El ciclo evoluciona constantemente, elevando la madurez del sistema de seguridad en cada iteración.
    </div>
  </div>
);

const DiagramRender: React.FC<DiagramRenderProps> = ({ type }) => {
  switch (type) {
    case 'cycle-audit': return <CycleAuditDiagram />;
    case 'dashboard-status': return <DashboardStatusDiagram />;
    case 'access-control': return <AccessControlDiagram />;
    case 'emergency-plan': return <EmergencyPlanDiagram />;
    case 'compliance-checklist': return <ComplianceChecklistDiagram />;
    case 'risk-matrix': return <RiskMatrixDiagram />;
    case 'continuous-improvement': return <ContinuousImprovementDiagram />;
    default: return <div className="p-4 bg-gray-100 text-gray-500 text-center">Diagrama no encontrado</div>;
  }
};

// --- COMPONENTE LAYOUT PRINCIPAL ---

const LessonLayout: React.FC<LessonLayoutProps> = ({ title, sections, activeTab, onTabChange }) => {
  const currentSection = sections.find(s => s.id === activeTab) || sections[0];

  return (
    // CONTENEDOR PRINCIPAL - GRID ESTRICTO
    <div className="min-h-screen bg-slate-100 text-slate-800 grid grid-rows-[auto_1fr] w-full font-sans">
      
      {/* HEADER Y NAVEGACIÓN */}
      <header className="bg-slate-900 text-white shadow-md grid gap-0">
        <div className="p-6 pb-4">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight grid grid-cols-[auto_1fr] items-center gap-3">
            <ShieldCheck className="text-blue-400" size={36} />
            {title}
          </h1>
        </div>
        
        {/* SISTEMA DE PESTAÑAS - GRID ESTRICTO */}
        <nav className="px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1 bg-slate-800 p-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onTabChange(section.id)}
              className={`
                text-sm font-semibold py-3 px-2 rounded-md transition-colors duration-200
                grid place-items-center text-center
                ${activeTab === section.id 
                  ? 'bg-blue-600 text-white shadow-inner' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'}
              `}
            >
              {section.tabLabel}
            </button>
          ))}
        </nav>
      </header>

      {/* ÁREA DE CONTENIDO PRINCIPAL - GRID ESTRICTO */}
      <main className="p-4 md:p-8 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* PANEL DE DESCRIPCIÓN */}
        <div className="lg:col-span-5 grid gap-4 h-full">
          <Card className="h-full grid grid-rows-[auto_1fr]">
            <div className="bg-slate-50 border-b border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-800 leading-tight">
                {currentSection.title}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-slate-600 leading-relaxed text-lg">
                {currentSection.description}
              </p>
            </div>
          </Card>
        </div>

        {/* PANEL DE DIAGRAMA */}
        <div className="lg:col-span-7 grid gap-4 h-full min-h-[400px]">
          <Card className="h-full grid grid-rows-[auto_1fr]">
            <div className="bg-blue-50 border-b border-blue-100 p-4 grid grid-cols-[auto_1fr] items-center gap-3">
               <Activity className="text-blue-600" size={24} />
               <h3 className="text-lg font-bold text-blue-900">
                {currentSection.diagramTitle}
               </h3>
            </div>
            <div className="bg-white overflow-hidden relative">
              <DiagramRender type={currentSection.diagramType} />
            </div>
          </Card>
        </div>

      </main>
    </div>
  );
};

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <LessonLayout
      title="Importancia de la Auditoría en Seguridad"
      sections={LESSON_DATA}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}
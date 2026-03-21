import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Search, 
  UserCheck, 
  Lock, 
  IdCard, 
  BookOpen, 
  GraduationCap, 
  ClipboardCheck, 
  Eye, 
  Network,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Types & Interfaces ---
interface LessonData {
  id: string;
  title: string;
  description: string;
  visualHint: string;
}

// --- Data ---
const lessonContent: LessonData[] = [
  {
    id: 'delimitacion',
    title: 'Delimitación del concepto',
    description: 'La seguridad del personal se refiere al conjunto de políticas, prácticas y controles orientados a proteger a los empleados y colaboradores dentro de una organización, así como a garantizar su confiabilidad. Este enfoque abarca tanto la integridad física de las personas como su comportamiento dentro del entorno laboral.',
    visualHint: 'Esquema central con el término "Seguridad del personal" conectado a "Protección física" y "Confiabilidad".'
  },
  {
    id: 'evaluacion',
    title: 'Evaluación de confiabilidad',
    description: 'Una de las bases de la seguridad del personal es la verificación de antecedentes laborales y referencias. Este proceso permite identificar posibles riesgos asociados al historial del individuo y asegurar que cumple con los estándares éticos y profesionales requeridos por la organización.',
    visualHint: 'Diagrama de proceso secuencial: Solicitud -> Verificación de referencias -> Evaluación.'
  },
  {
    id: 'control-acceso',
    title: 'Control de acceso',
    description: 'El control de acceso consiste en regular la entrada y permanencia de las personas en áreas específicas mediante credenciales, tarjetas o identificaciones. Este mecanismo limita el acceso solo a personal autorizado, reduciendo riesgos de intrusión o uso indebido de recursos.',
    visualHint: 'Ilustración conceptual de un punto de acceso con un lector de credenciales y persona autorizada.'
  },
  {
    id: 'capacitacion',
    title: 'Capacitación en seguridad',
    description: 'La formación del personal en normas y procedimientos de seguridad es fundamental para prevenir incidentes. A través de la capacitación, los empleados adquieren conocimientos sobre cómo actuar ante riesgos, cumplir protocolos y contribuir activamente a la protección organizacional.',
    visualHint: 'Esquema de capacitación con un instructor y participantes, símbolos de normas o reglas.'
  },
  {
    id: 'supervision',
    title: 'Supervisión y cumplimiento',
    description: 'La supervisión implica verificar que el personal cumpla con las políticas y procedimientos establecidos. Este control continuo permite detectar desviaciones, corregir conductas y reforzar las normas de seguridad dentro de la organización.',
    visualHint: 'Supervisor observa/evalúa a un grupo de empleados, con indicadores de cumplimiento.'
  },
  {
    id: 'cultura',
    title: 'Cultura de seguridad',
    description: 'Una adecuada gestión de la seguridad del personal fomenta una cultura organizacional basada en la responsabilidad, la prevención y el compromiso colectivo. En este contexto, cada individuo se convierte en un agente activo de la seguridad, contribuyendo al bienestar general.',
    visualHint: 'Diagrama circular de empleados conectados bajo el concepto de "cultura de seguridad".'
  }
];

// --- UI Components ---

// Componente Card genérico estructurado con CSS Grid
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden grid ${className}`}>
    {children}
  </div>
);

// --- Diagram Components ---

const Diagram1Delimitacion = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center w-full h-full p-8 min-h-[300px]">
    <div className="grid place-items-center bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center h-full">
      <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
      <span className="font-semibold text-blue-900">Protección Física</span>
      <p className="text-xs text-blue-700 mt-2">Integridad del empleado</p>
    </div>
    
    <div className="grid place-items-center relative">
      {/* Arrows (Grid based positioning) */}
      <div className="hidden md:grid absolute inset-0 place-items-center">
        <div className="grid grid-cols-[1fr_auto_1fr] w-full items-center gap-2">
           <div className="h-0.5 bg-slate-300 w-full"></div>
           <div className="grid place-items-center bg-slate-800 text-white p-4 rounded-lg z-10 font-bold shadow-lg">
             <Users className="w-8 h-8 mb-2" />
             Seguridad del Personal
           </div>
           <div className="h-0.5 bg-slate-300 w-full"></div>
        </div>
      </div>
      {/* Mobile view fallback */}
      <div className="md:hidden grid place-items-center bg-slate-800 text-white p-4 rounded-lg w-full font-bold shadow-lg my-4">
        Seguridad del Personal
      </div>
    </div>

    <div className="grid place-items-center bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 text-center h-full">
      <UserCheck className="w-12 h-12 text-emerald-600 mb-4" />
      <span className="font-semibold text-emerald-900">Confiabilidad</span>
      <p className="text-xs text-emerald-700 mt-2">Comportamiento e historial</p>
    </div>
  </div>
);

const Diagram2Evaluacion = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center w-full h-full p-8 min-h-[300px]">
    <div className="grid grid-rows-[auto_1fr] gap-3 place-items-center text-center bg-slate-50 p-6 rounded-xl border border-slate-200 h-full">
      <div className="grid place-items-center w-16 h-16 bg-white rounded-full shadow-sm border border-slate-100">
        <IdCard className="w-8 h-8 text-slate-600" />
      </div>
      <span className="font-bold text-slate-800">1. Solicitud</span>
      <span className="text-sm text-slate-500">Recopilación de datos del candidato</span>
    </div>
    
    <div className="grid place-items-center rotate-90 md:rotate-0">
      <ArrowRight className="w-8 h-8 text-slate-300" />
    </div>

    <div className="grid grid-rows-[auto_1fr] gap-3 place-items-center text-center bg-indigo-50 p-6 rounded-xl border border-indigo-200 h-full">
      <div className="grid place-items-center w-16 h-16 bg-white rounded-full shadow-sm border border-indigo-100">
        <Search className="w-8 h-8 text-indigo-600" />
      </div>
      <span className="font-bold text-indigo-900">2. Verificación</span>
      <span className="text-sm text-indigo-600">Revisión de antecedentes y referencias</span>
    </div>

    <div className="grid place-items-center rotate-90 md:rotate-0">
      <ArrowRight className="w-8 h-8 text-slate-300" />
    </div>

    <div className="grid grid-rows-[auto_1fr] gap-3 place-items-center text-center bg-emerald-50 p-6 rounded-xl border border-emerald-200 h-full">
      <div className="grid place-items-center w-16 h-16 bg-white rounded-full shadow-sm border border-emerald-100">
        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
      </div>
      <span className="font-bold text-emerald-900">3. Evaluación</span>
      <span className="text-sm text-emerald-600">Decisión basada en estándares</span>
    </div>
  </div>
);

const Diagram3Acceso = () => (
  <div className="grid place-items-center w-full h-full p-8 min-h-[300px]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl bg-slate-50 rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

      <div className="grid place-items-center z-10 border-r-0 md:border-r-2 border-dashed border-slate-300 pb-8 md:pb-0 md:pr-12">
        <div className="grid place-items-center w-32 h-40 bg-white border border-slate-200 shadow-sm rounded-xl relative">
          <div className="w-full h-8 bg-blue-600 rounded-t-xl absolute top-0 grid place-items-center">
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Acceso Permitido</span>
          </div>
          <IdCard className="w-16 h-16 text-blue-600 mt-6" />
          <div className="grid grid-cols-[auto_1fr] gap-2 items-center mt-4 w-full px-4">
             <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
             <div className="h-2 bg-slate-100 rounded w-full"></div>
          </div>
        </div>
        <p className="mt-4 font-semibold text-slate-700 text-center">Credencial Autorizada</p>
      </div>

      <div className="grid place-items-center z-10">
        <div className="grid grid-rows-[auto_auto] place-items-center bg-white p-6 rounded-2xl shadow-lg border border-slate-100 w-full max-w-[200px]">
          <div className="w-16 h-16 bg-slate-100 rounded-full grid place-items-center mb-4">
            <Lock className="w-8 h-8 text-slate-700" />
          </div>
          <div className="grid grid-flow-col gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          </div>
          <div className="grid place-items-center w-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold py-2 rounded-lg">
            Desbloqueado
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Diagram4Capacitacion = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 w-full h-full p-8 min-h-[300px]">
    <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center bg-amber-50 rounded-2xl p-6 border border-amber-200">
      <div className="bg-white p-4 rounded-full shadow-sm">
        <GraduationCap className="w-12 h-12 text-amber-600" />
      </div>
      <div className="grid gap-2 text-center w-full">
        <span className="font-bold text-amber-900">Instructor</span>
        <div className="bg-amber-100 rounded p-2 text-xs text-amber-800 font-medium">Normas de Seguridad</div>
        <div className="bg-amber-100 rounded p-2 text-xs text-amber-800 font-medium">Protocolos de Riesgo</div>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center bg-slate-50 rounded-2xl p-6 border border-slate-200">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="grid grid-rows-[auto_auto] gap-2 place-items-center w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <BookOpen className="w-6 h-6 text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">Participante {i}</span>
        </div>
      ))}
      <div className="col-span-full mt-4 text-center w-full">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full">
          Adquisición de conocimientos y prevención
        </span>
      </div>
    </div>
  </div>
);

const Diagram5Supervision = () => (
  <div className="grid place-items-center w-full h-full p-8 min-h-[300px]">
    <div className="grid grid-rows-[auto_1fr] gap-8 w-full max-w-3xl relative">
      <div className="grid place-items-center">
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center bg-indigo-600 text-white p-4 rounded-xl shadow-lg w-fit z-10">
          <Eye className="w-8 h-8" />
          <div>
            <span className="block font-bold">Supervisor</span>
            <span className="block text-xs text-indigo-200">Verificación continua</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 relative">
        {/* Connection Lines (Grid simulation) */}
        <div className="hidden md:block absolute top-0 left-1/6 right-1/6 h-0.5 bg-indigo-200 z-0"></div>
        <div className="hidden md:block absolute top-0 left-1/6 w-0.5 h-4 bg-indigo-200 z-0"></div>
        <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-4 bg-indigo-200 z-0"></div>
        <div className="hidden md:block absolute top-0 right-1/6 w-0.5 h-4 bg-indigo-200 z-0"></div>

        {[
          { task: 'Uso de EPP', status: true },
          { task: 'Control de accesos', status: false },
          { task: 'Protocolo de emergencia', status: true },
        ].map((item, idx) => (
          <div key={idx} className="grid grid-rows-[auto_1fr] gap-3 bg-white border border-slate-200 rounded-xl p-5 shadow-sm z-10">
            <div className="grid grid-cols-[1fr_auto] items-center pb-2 border-b border-slate-100">
               <span className="font-semibold text-slate-700 text-sm">Operador {idx + 1}</span>
               <Users className="w-4 h-4 text-slate-400" />
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
              <ClipboardCheck className={`w-5 h-5 ${item.status ? 'text-emerald-500' : 'text-rose-500'}`} />
              <span className="text-sm text-slate-600">{item.task}</span>
            </div>
            <div className="grid mt-2">
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded w-fit ${item.status ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {item.status ? 'Cumple' : 'Desviación Detectada'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Diagram6Cultura = () => (
  <div className="grid place-items-center w-full h-full p-8 min-h-[350px] bg-slate-900 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none overflow-hidden relative">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #3b82f6 0%, transparent 70%)' }}></div>
    
    <div className="grid relative w-64 h-64 place-items-center z-10">
      {/* Central Node */}
      <div className="grid place-items-center w-28 h-28 bg-blue-600 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] border-4 border-slate-900 z-20 absolute">
        <Network className="w-10 h-10 text-white mb-1" />
        <span className="text-[10px] font-bold text-white uppercase text-center leading-tight">Cultura<br/>Organizacional</span>
      </div>

      {/* Orbiting Nodes via SVG for exact positioning without flex */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#334155" strokeWidth="0.5" strokeDasharray="2,2" />
        <line x1="50" y1="50" x2="50" y2="5" stroke="#475569" strokeWidth="1" />
        <line x1="50" y1="50" x2="93" y2="65" stroke="#475569" strokeWidth="1" />
        <line x1="50" y1="50" x2="7" y2="65" stroke="#475569" strokeWidth="1" />
        
        {/* Nodes mapped precisely on the circle */}
        <circle cx="50" cy="5" r="4" fill="#10b981" />
        <circle cx="93" cy="65" r="4" fill="#f59e0b" />
        <circle cx="7" cy="65" r="4" fill="#8b5cf6" />
      </svg>

      {/* Node Labels using Grid absolute positioning */}
      <div className="absolute -top-6 grid place-items-center text-xs font-medium text-emerald-400">Prevención</div>
      <div className="absolute -right-12 bottom-6 grid place-items-center text-xs font-medium text-amber-400">Responsabilidad</div>
      <div className="absolute -left-12 bottom-6 grid place-items-center text-xs font-medium text-purple-400">Compromiso</div>
    </div>
  </div>
);

// Switch principal de renderizado
const DiagramRender: React.FC<{ activeTab: number }> = ({ activeTab }) => {
  switch (activeTab) {
    case 0: return <Diagram1Delimitacion />;
    case 1: return <Diagram2Evaluacion />;
    case 2: return <Diagram3Acceso />;
    case 3: return <Diagram4Capacitacion />;
    case 4: return <Diagram5Supervision />;
    case 5: return <Diagram6Cultura />;
    default: return <div className="grid place-items-center p-8 text-slate-500">Diagrama no encontrado</div>;
  }
};

// --- Layout Principal (Grid estricto) ---
const LessonLayout: React.FC<{ activeData: LessonData; activeIndex: number }> = ({ activeData, activeIndex }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-7xl mx-auto p-4 md:p-8">
      {/* Panel de Texto */}
      <div className="grid lg:col-span-4 grid-rows-[auto_1fr_auto] gap-6">
        <Card className="p-8 h-full">
          <div className="grid grid-rows-[auto_auto_1fr] gap-6 h-full">
            <div className="grid gap-2">
             
              <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                {activeData.title}
              </h2>
            </div>
            
            <div className="h-1 w-12 bg-slate-200 rounded-full"></div>
            
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {activeData.description}
            </p>
          </div>
        </Card>
      </div>

      {/* Panel de Diagrama */}
      <div className="grid lg:col-span-8">
        <Card className="h-full grid grid-rows-[auto_1fr]">
         
          <div className="grid relative overflow-hidden bg-white min-h-[400px]">
             <DiagramRender activeTab={activeIndex} />
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- App Principal ---
export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100 font-sans grid grid-rows-[auto_1fr]">
      {/* Header & Tabs */}
      <header className="bg-white border-b border-slate-200 shadow-sm top-0 z-50">
        <div className="max-w-7xl mx-auto grid grid-rows-[auto_auto] gap-0">
          
          {/* Header Title */}
          <div className="p-4 md:p-6 border-b border-slate-100 grid grid-cols-[auto_1fr] items-center gap-4">
            <div className="bg-blue-600 w-10 h-10 rounded-xl grid place-items-center shadow-inner">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="grid">
              <h1 className="text-lg md:text-xl font-bold text-slate-900">Concepto de Seguridad del Personal</h1>
            </div>
          </div>

          {/* Navigation Tabs (Strict Grid Flow) */}
          <nav className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-1 px-4 md:px-6 pt-2">
            {lessonContent.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => setActiveTab(idx)}
                className={`grid grid-cols-[auto_1fr] items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors outline-none whitespace-nowrap
                  ${activeTab === idx 
                    ? 'border-blue-600 text-blue-700 bg-blue-50/50 rounded-t-lg' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
              >
                <span className={`grid place-items-center w-5 h-5 rounded-full text-[10px] ${activeTab === idx ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {idx + 1}
                </span>
                {lesson.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="grid place-items-start pb-12">
        <LessonLayout 
          activeData={lessonContent[activeTab]} 
          activeIndex={activeTab} 
        />
      </main>

      {/* Global styles inject for hide-scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
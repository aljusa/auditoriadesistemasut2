import React from 'react';
import { Shield, Database, Layout, FileText, CheckCircle, AlertTriangle, ArrowRight, Lock, Eye, Activity } from 'lucide-react';

// --- Componentes Visuales (Diagramas) ---

const ScopeDiagram = () => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-slate-50 rounded-xl border border-slate-200">
    <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-sm w-32">
      <Database className="text-blue-600 mb-2" size={32} />
      <span className="font-semibold text-blue-800">Datos</span>
    </div>
    <div className="flex flex-col items-center text-slate-400">
      <ArrowRight className="rotate-90 md:rotate-0 mb-2 md:mb-0" size={24} />
      <span className="text-xs font-medium uppercase tracking-wider">Revisa</span>
    </div>
    <div className="flex flex-col items-center bg-indigo-600 p-6 rounded-full shadow-md w-36 h-36 justify-center text-white ring-4 ring-indigo-200 relative">
      <Shield className="mb-2" size={40} />
      <span className="font-bold text-center leading-tight">Proceso de<br/>Auditoría</span>
    </div>
    <div className="flex flex-col items-center text-slate-400">
      <ArrowRight className="rotate-90 md:rotate-0 mb-2 md:mb-0" size={24} />
      <span className="text-xs font-medium uppercase tracking-wider">Revisa</span>
    </div>
    <div className="flex flex-col items-center bg-emerald-100 p-4 rounded-lg shadow-sm w-32">
      <Layout className="text-emerald-600 mb-2" size={32} />
      <span className="font-semibold text-emerald-800">Aplicaciones</span>
    </div>
  </div>
);

const ProcessFlowchart = () => (
  <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
    <div className="flex-1 bg-white border border-blue-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
      <div className="bg-blue-100 p-3 rounded-full mb-3"><Layout className="text-blue-600" size={24}/></div>
      <h4 className="font-bold text-slate-800 mb-1">Entrada</h4>
      <p className="text-sm text-slate-600">Sistemas y Datos</p>
    </div>
    <div className="flex items-center justify-center">
      <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" size={32} />
    </div>
    <div className="flex-1 bg-indigo-50 border border-indigo-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
      <div className="bg-indigo-100 p-3 rounded-full mb-3"><Activity className="text-indigo-600" size={24}/></div>
      <h4 className="font-bold text-slate-800 mb-1">Evaluación</h4>
      <p className="text-sm text-slate-600">Revisión de controles y políticas</p>
    </div>
    <div className="flex items-center justify-center">
      <ArrowRight className="text-slate-400 rotate-90 md:rotate-0" size={32} />
    </div>
    <div className="flex-1 bg-white border border-emerald-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm">
      <div className="bg-emerald-100 p-3 rounded-full mb-3"><FileText className="text-emerald-600" size={24}/></div>
      <h4 className="font-bold text-slate-800 mb-1">Salida</h4>
      <p className="text-sm text-slate-600">Informe con hallazgos y recomendaciones</p>
    </div>
  </div>
);

const CiaTriangle = () => (
  <div className="flex justify-center p-8 bg-slate-50 rounded-xl border border-slate-200 relative h-80">
    {/* SVG Triangle */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
      <polygon points="200,60 100,240 300,240" fill="none" stroke="#cbd5e1" strokeWidth="4" strokeLinejoin="round" />
      <line x1="200" y1="60" x2="200" y2="160" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"/>
      <line x1="100" y1="240" x2="200" y2="160" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"/>
      <line x1="300" y1="240" x2="200" y2="160" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4"/>
    </svg>
    
    <div className="relative w-full max-w-md h-full">
      {/* Top Node */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center bg-white border-2 border-amber-400 p-3 rounded-xl shadow-md w-40 z-10">
        <Lock className="text-amber-500 mb-1" size={24} />
        <span className="font-bold text-slate-800 text-sm">Confidencialidad</span>
      </div>
      {/* Bottom Left Node */}
      <div className="absolute bottom-4 left-0 flex flex-col items-center bg-white border-2 border-blue-400 p-3 rounded-xl shadow-md w-40 z-10">
        <CheckCircle className="text-blue-500 mb-1" size={24} />
        <span className="font-bold text-slate-800 text-sm">Integridad</span>
      </div>
      {/* Bottom Right Node */}
      <div className="absolute bottom-4 right-0 flex flex-col items-center bg-white border-2 border-emerald-400 p-3 rounded-xl shadow-md w-40 z-10">
        <Activity className="text-emerald-500 mb-1" size={24} />
        <span className="font-bold text-slate-800 text-sm">Disponibilidad</span>
      </div>
      
      {/* Center Label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400 font-semibold tracking-widest text-sm z-0">
        MODELO CIA
      </div>
    </div>
  </div>
);

const AppLayers = () => (
  <div className="flex flex-col gap-2 p-6 bg-slate-50 rounded-xl border border-slate-200 max-w-2xl mx-auto">
    {/* Capa de Entrada */}
    <div className="flex bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
      <div className="bg-blue-500 text-white p-4 flex items-center justify-center w-32 font-bold shrink-0">
        Entrada
      </div>
      <div className="p-4 flex-1">
        <h5 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
          <Eye size={16} className="text-blue-500"/> Validación de entradas
        </h5>
        <p className="text-sm text-slate-600">Previene ataques mediante el filtrado de datos maliciosos.</p>
      </div>
    </div>
    
    <div className="flex justify-center -my-1 relative z-10"><ArrowRight className="rotate-90 text-slate-300" size={20}/></div>

    {/* Capa de Procesamiento */}
    <div className="flex bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
      <div className="bg-indigo-500 text-white p-4 flex items-center justify-center w-32 font-bold shrink-0">
        Procesamiento
      </div>
      <div className="p-4 flex-1">
        <h5 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
          <Lock size={16} className="text-indigo-500"/> Control de accesos
        </h5>
        <p className="text-sm text-slate-600">Limita quién puede usar ciertas funciones o acceder a los datos internos.</p>
      </div>
    </div>

    <div className="flex justify-center -my-1 relative z-10"><ArrowRight className="rotate-90 text-slate-300" size={20}/></div>

    {/* Capa de Salida */}
    <div className="flex bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
      <div className="bg-emerald-500 text-white p-4 flex items-center justify-center w-32 font-bold shrink-0">
        Salida
      </div>
      <div className="p-4 flex-1">
        <h5 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
          <AlertTriangle size={16} className="text-emerald-500"/> Gestión de errores
        </h5>
        <p className="text-sm text-slate-600">Evita que los fallos revelen información sensible al exterior.</p>
      </div>
    </div>
  </div>
);

const BeforeAfterChart = () => (
  <div className="flex flex-col sm:flex-row items-end justify-center gap-12 p-8 bg-slate-50 rounded-xl border border-slate-200 h-72">
    {/* Antes */}
    <div className="flex flex-col items-center gap-3 w-32">
      <div className="text-rose-600 font-bold text-2xl">Riesgo Alto</div>
      <div className="w-full bg-rose-500 rounded-t-md h-32 flex items-center justify-center shadow-lg transition-all hover:opacity-90">
        <AlertTriangle className="text-white opacity-80" size={32} />
      </div>
      <div className="text-slate-700 font-semibold text-center leading-tight">Antes de la<br/>Auditoría</div>
    </div>

    {/* Flecha */}
    <div className="flex flex-col items-center justify-center h-32 text-slate-400 mb-8">
      <span className="text-xs uppercase tracking-widest font-bold mb-2">Intervención</span>
      <ArrowRight className="hidden sm:block" size={32} />
      <ArrowRight className="block sm:hidden rotate-90" size={32} />
    </div>

    {/* Después */}
    <div className="flex flex-col items-center gap-3 w-32">
      <div className="text-emerald-600 font-bold text-2xl">Riesgo Bajo</div>
      <div className="w-full bg-emerald-500 rounded-t-md h-12 flex items-center justify-center shadow-lg transition-all hover:opacity-90">
        <CheckCircle className="text-white opacity-80" size={24} />
      </div>
      <div className="text-slate-700 font-semibold text-center leading-tight">Después de la<br/>Auditoría</div>
    </div>
  </div>
);

const IntegrationSchema = () => (
  <div className="p-8 bg-indigo-900 rounded-xl border border-indigo-800 text-white relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

    <div className="relative z-10 flex flex-col items-center">
      <div className="bg-indigo-600/50 backdrop-blur-sm border border-indigo-400/30 p-4 rounded-xl mb-8 flex items-center gap-3">
        <Shield className="text-amber-400" size={32} />
        <h3 className="text-xl font-bold">Auditoría de Seguridad</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white/10 p-5 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
          <Database className="text-blue-300 mb-3" size={28} />
          <h4 className="font-semibold text-lg mb-2">Activos: Datos</h4>
          <p className="text-sm text-indigo-200">Protección de la información frente a accesos y pérdidas.</p>
        </div>
        
        <div className="bg-white/10 p-5 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
          <Layout className="text-emerald-300 mb-3" size={28} />
          <h4 className="font-semibold text-lg mb-2">Activos: Aplicaciones</h4>
          <p className="text-sm text-indigo-200">Garantía de funcionamiento correcto y prevención de vulnerabilidades.</p>
        </div>

        <div className="bg-white/10 p-5 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
          <Lock className="text-amber-300 mb-3" size={28} />
          <h4 className="font-semibold text-lg mb-2">Principios CIA</h4>
          <p className="text-sm text-indigo-200">Mantenimiento de la Confidencialidad, Integridad y Disponibilidad.</p>
        </div>
      </div>

      <div className="mt-8 text-center max-w-2xl">
        <p className="text-indigo-100 italic">"Una herramienta clave para proteger los activos de información, mejorar la postura de seguridad y asegurar el funcionamiento confiable de los sistemas."</p>
      </div>
    </div>
  </div>
);

// --- Componentes de Estructura ---
type ListItem = {
  term: string;
  desc: string;
};

type SectionProps = {
  title: string;
  content?: string;
  children?: React.ReactNode;
  listItems?: ListItem[];
};

const Section: React.FC<SectionProps> = ({
  title,
  content,
  children,
  listItems,
}) => (
  <section className="mb-16">
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-3 pb-2 border-b-2 border-indigo-100 flex items-center gap-2">
        <div className="w-2 h-6 bg-indigo-600 rounded-full"></div>
        {title}
      </h2>
      <p className="text-slate-600 leading-relaxed text-lg">
        {content}
      </p>
      {listItems && (
        <ul className="mt-4 space-y-3">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <CheckCircle className="text-indigo-600 shrink-0 mt-0.5" size={20} />
              <div>
                <span className="font-bold text-slate-800">{item.term}:</span> <span className="text-slate-600">{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="mt-8">
      
      {children}
    </div>
  </section>
);

// --- Aplicación Principal ---

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="bg-slate-900 text-white py-12 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
         
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Fundamentos de la auditoría en <span className="text-indigo-400">datos</span> y <span className="text-emerald-400">software de aplicación</span>
          </h1>
         
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-6 lg:px-12">
        
        <Section 
          title="Introducción al alcance de la auditoría de seguridad"
          content="La auditoría de seguridad en datos y software de aplicación es un proceso sistemático orientado a evaluar cómo una organización protege su información y sus sistemas. Su alcance incluye la revisión de controles, prácticas y tecnologías que garantizan la confiabilidad, integridad y disponibilidad de los activos digitales."
        >
          <ScopeDiagram />
        </Section>

        <Section 
          title="Concepto de auditoría de seguridad"
          content="La auditoría de seguridad consiste en una revisión estructurada de políticas, controles y mecanismos implementados para proteger los sistemas de información. Su objetivo principal es identificar vulnerabilidades, riesgos potenciales y desviaciones respecto a estándares o normativas establecidas."
        >
          <ProcessFlowchart />
        </Section>

        <Section 
          title="Seguridad en los datos: principios fundamentales"
          content="La seguridad en los datos se enfoca en proteger la información frente a accesos no autorizados, modificaciones indebidas o pérdidas. Se basa en tres principios clave:"
          listItems={[
            { term: "Confidencialidad", desc: "solo las personas autorizadas pueden acceder a la información." },
            { term: "Integridad", desc: "los datos se mantienen completos y sin alteraciones no autorizadas." },
            { term: "Disponibilidad", desc: "la información está accesible cuando se necesita." }
          ]}
        >
          <CiaTriangle />
        </Section>

        <Section 
          title="Seguridad en el software de aplicación: elementos clave"
          content="La seguridad en el software de aplicación busca asegurar que los sistemas funcionen correctamente y estén protegidos contra vulnerabilidades. Para ello se consideran varios mecanismos:"
          listItems={[
            { term: "Control de accesos", desc: "limita quién puede usar ciertas funciones o datos." },
            { term: "Validación de entradas", desc: "previene ataques mediante datos maliciosos." },
            { term: "Gestión de errores", desc: "evita que los fallos revelen información sensible." },
            { term: "Actualizaciones y parches", desc: "corrigen vulnerabilidades conocidas." }
          ]}
        >
          <AppLayers />
        </Section>

        <Section 
          title="Importancia de la auditoría de seguridad"
          content="La auditoría de seguridad es fundamental porque permite detectar debilidades antes de que sean explotadas, prevenir incidentes y garantizar el cumplimiento de normas y estándares. Además, contribuye a fortalecer la confianza en los sistemas de información dentro de la organización."
        >
          <BeforeAfterChart />
        </Section>

        <Section 
          title="Cierre"
          content="La auditoría de seguridad en datos y software de aplicación es una herramienta clave para proteger los activos de información. A través de la evaluación sistemática de controles y prácticas, las organizaciones pueden mejorar su postura de seguridad y asegurar el funcionamiento confiable de sus sistemas."
        >
          <IntegrationSchema />
        </Section>

      </main>

    </div>
  );
}
import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  FileSearch, 
  Database, 
  Target, 
  Wrench, 
  Clock,
  ArrowRight
} from 'lucide-react';

// --- Visual Components ---

// 1. Diagrama de flujo: Plan central
const PlanCentralDiagram = () => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border-2 border-blue-500 w-48 text-center z-10">
      <Target className="w-8 h-8 text-blue-600 mb-2" />
      <span className="font-bold text-blue-900">Plan Central</span>
      <span className="text-xs text-blue-600">Programa de Trabajo</span>
    </div>
    
    <div className="hidden md:block w-8 border-t-2 border-dashed border-blue-300"></div>
    <div className="md:hidden h-8 border-l-2 border-dashed border-blue-300"></div>

    <div className="flex flex-col gap-3">
      {['Planificación', 'Ejecución', 'Reporte'].map((etapa, idx) => (
        <div key={idx} className="flex items-center gap-3 bg-white px-4 py-2 rounded-md shadow-sm border border-gray-200 w-48">
          <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
            {idx + 1}
          </div>
          <span className="text-sm font-medium text-gray-700">{etapa}</span>
        </div>
      ))}
    </div>
  </div>
);

// 2. Representación de documento
const DocumentRepresentation = () => (
  <div className="flex justify-center p-6 bg-gray-50 rounded-xl">
    <div className="bg-white w-full max-w-sm rounded-lg shadow-md border border-gray-200 p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500"></div>
      <div className="flex items-center gap-2 mb-6 border-b pb-4">
        <FileText className="text-indigo-600 w-6 h-6" />
        <h3 className="font-bold text-gray-800">Documento Formal</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-bold text-indigo-500 uppercase mb-1">1. Objetivos</h4>
          <div className="h-2 bg-gray-100 rounded w-3/4 mb-1"></div>
          <div className="h-2 bg-gray-100 rounded w-1/2"></div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-indigo-500 uppercase mb-1">2. Procedimientos</h4>
          <div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
          <div className="h-2 bg-gray-100 rounded w-5/6"></div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-indigo-500 uppercase mb-1">3. Recursos</h4>
          <div className="h-2 bg-gray-100 rounded w-2/3 mb-1"></div>
        </div>
      </div>
    </div>
  </div>
);

// 3. Checklist de componentes
const ChecklistDiagram = () => {
  const items = [
    { icon: Search, title: 'Alcance', desc: 'Qué sistemas o datos se evalúan' },
    { icon: Target, title: 'Objetivos', desc: 'Qué se busca lograr' },
    { icon: Wrench, title: 'Procedimientos', desc: 'Acciones del auditor' },
    { icon: Database, title: 'Recursos', desc: 'Herramientas y personal' },
    { icon: Clock, title: 'Cronograma', desc: 'Tiempos de ejecución' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start gap-3 transition-transform hover:-translate-y-1 hover:shadow-md">
          <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
            <item.icon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// 4. Diagrama por capas
const LayeredDiagram = () => (
  <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-xl border border-indigo-100">
    <div className="w-full max-w-md space-y-2">
      <div className="bg-indigo-600 text-white p-3 rounded-t-xl text-center shadow-sm relative overflow-hidden">
        <span className="relative z-10 font-bold text-sm">Validación (Integridad de datos)</span>
      </div>
      <div className="bg-indigo-500 text-white p-4 text-center shadow-sm w-[95%] mx-auto relative overflow-hidden">
        <span className="relative z-10 font-bold text-sm">Monitoreo (Análisis de logs)</span>
      </div>
      <div className="bg-indigo-400 text-white p-5 text-center shadow-sm w-[90%] mx-auto relative overflow-hidden">
        <span className="relative z-10 font-bold text-sm">Políticas (Normas de seguridad)</span>
      </div>
      <div className="bg-indigo-300 text-indigo-900 p-6 rounded-b-xl text-center shadow-sm w-[85%] mx-auto relative overflow-hidden">
        <span className="relative z-10 font-bold text-sm">Acceso (Controles a sistemas)</span>
      </div>
    </div>
  </div>
);

// 5. Esquema Hallazgos -> Evidencia
const EvidenceDiagram = () => (
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-orange-50 rounded-xl border border-orange-100">
    <div className="bg-white p-5 rounded-lg border-2 border-orange-300 shadow-sm w-48 text-center">
      <Search className="w-8 h-8 text-orange-500 mx-auto mb-2" />
      <h4 className="font-bold text-gray-800">Hallazgo</h4>
      <p className="text-xs text-gray-500 mt-1">Observación durante la auditoría</p>
    </div>
    
    <div className="flex flex-col items-center">
      <ArrowRight className="text-orange-400 w-8 h-8 hidden md:block" />
      <span className="text-xs text-orange-600 font-semibold uppercase tracking-wider hidden md:block">Respaldado por</span>
    </div>

    <div className="grid grid-cols-2 gap-2">
      <div className="bg-white p-3 rounded shadow-sm border border-gray-200 text-center flex flex-col items-center">
        <FileText className="w-5 h-5 text-gray-400 mb-1" />
        <span className="text-xs text-gray-600">Reportes</span>
      </div>
      <div className="bg-white p-3 rounded shadow-sm border border-gray-200 text-center flex flex-col items-center">
        <FileSearch className="w-5 h-5 text-gray-400 mb-1" />
        <span className="text-xs text-gray-600">Logs</span>
      </div>
      <div className="bg-white p-3 rounded shadow-sm border border-gray-200 text-center flex flex-col items-center col-span-2">
        <CheckCircle2 className="w-5 h-5 text-green-500 mb-1" />
        <span className="text-xs text-gray-600">Pruebas verificables</span>
      </div>
    </div>
  </div>
);

// 6. Esquema Integrador
const IntegratorDiagram = () => (
  <div className="relative flex items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 overflow-hidden">
    {/* Central Node */}
    <div className="relative z-10 bg-blue-600 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white">
      <ShieldCheck className="w-8 h-8 mb-1" />
      <span className="font-bold text-center text-sm leading-tight px-2">Programa de Trabajo</span>
    </div>

    {/* Orbiting Nodes */}
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow border border-gray-200 z-10">
      <span className="text-sm font-bold text-gray-700">Planificación</span>
    </div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow border border-gray-200 z-10">
      <span className="text-sm font-bold text-gray-700">Resultados</span>
    </div>
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow border border-gray-200 z-10">
      <span className="text-sm font-bold text-gray-700">Orden</span>
    </div>
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow border border-gray-200 z-10">
      <span className="text-sm font-bold text-gray-700">Confiabilidad</span>
    </div>

    {/* Connecting lines (SVG) */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  </div>
);

// --- Main Layout Component ---
type SectionProps = {
  title: string;
  explanation?: React.ReactNode;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  title,
  explanation,
  children,
}) =>(
  <section className="mb-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="p-6 md:p-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-100">
        {title}
      </h2>
      <div className="prose prose-slate max-w-none text-slate-600 mb-8 leading-relaxed">
        {explanation}
      </div>
      <div className="bg-slate-50 p-4 rounded-xl">
  
        {children}
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
        
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Programas de Trabajo de Auditoría
          </h1>
       
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 -mt-8 relative z-10">
        
        <Section 
          title="Introducción al programa de trabajo de auditoría" 
          explanation={
            <p>
              Un <strong>programa de trabajo de auditoría</strong> es la herramienta que organiza y guía todas las actividades del auditor. Permite estructurar el proceso de revisión de manera lógica, asegurando que se cubran todos los aspectos relevantes de la seguridad en datos y software de aplicación.
            </p>
          }
        >
          <PlanCentralDiagram />
        </Section>

        <Section 
          title="Definición del programa de trabajo" 
          explanation={
            <p>
              El programa de trabajo es un documento formal que detalla los procedimientos, técnicas y pasos que se seguirán durante la auditoría. Su función principal es servir como una <strong>guía operativa</strong> para garantizar consistencia y profundidad en la evaluación.
            </p>
          }
        >
          <DocumentRepresentation />
        </Section>

        <Section 
          title="Componentes del programa de trabajo" 
          explanation={
            <>
              <p className="mb-4">Un programa de auditoría bien estructurado incluye elementos clave que definen el alcance y la ejecución del proceso:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li><strong>Alcance de la auditoría:</strong> delimita qué sistemas, datos o procesos serán evaluados.</li>
                <li><strong>Objetivos específicos:</strong> establecen lo que se busca lograr.</li>
                <li><strong>Procedimientos a ejecutar:</strong> detallan las acciones que realizará el auditor.</li>
                <li><strong>Recursos necesarios:</strong> incluyen herramientas, personal y tiempo.</li>
                <li><strong>Cronograma:</strong> organiza las actividades en el tiempo.</li>
              </ul>
            </>
          }
        >
          <ChecklistDiagram />
        </Section>

        <Section 
          title="Procedimientos de auditoría en seguridad" 
          explanation={
            <>
              <p className="mb-4">
                Los procedimientos son las acciones concretas que permiten evaluar los controles de seguridad. Estos deben seleccionarse cuidadosamente de acuerdo con los objetivos definidos previamente. Entre los más comunes se encuentran:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-indigo-500">
                <li>Revisión de controles de acceso a sistemas y datos.</li>
                <li>Evaluación de políticas y normas de seguridad.</li>
                <li>Análisis de registros de actividad (logs).</li>
                <li>Pruebas de integridad de los datos.</li>
              </ul>
            </>
          }
        >
          <LayeredDiagram />
        </Section>

        <Section 
          title="Documentación y recopilación de evidencia" 
          explanation={
            <p>
              Durante la auditoría, es fundamental <strong>documentar cada hallazgo</strong> y respaldarlo con evidencia suficiente y verificable. Esta evidencia puede incluir reportes del sistema, capturas de pantalla, registros de actividad o resultados de pruebas. La calidad y el éxito de la auditoría dependen en gran medida de la solidez de esta documentación.
            </p>
          }
        >
          <EvidenceDiagram />
        </Section>

        <Section 
          title="Cierre" 
          explanation={
            <p>
              El programa de trabajo es esencial para asegurar que la auditoría se realice de manera <strong>ordenada, sistemática y confiable</strong>. Su correcta elaboración permite obtener resultados consistentes y sumamente útiles para la mejora continua de la seguridad en los datos y el software de aplicación de cualquier organización.
            </p>
          }
        >
          <IntegratorDiagram />
        </Section>

      </main>
    </div>
  );
}
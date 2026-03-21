import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// --- Types & Interfaces ---
interface LessonStep {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  visualType: 'timeline' | 'org-chart' | 'collection' | 'comparison' | 'report' | 'cycle';
}

interface LayoutProps {
  title: string;
  tabs: LessonStep[];
  activeTab: number;
  onTabChange: (index: number) => void;
  children: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// --- Data ---
const lessonData: LessonStep[] = [
  {
    id: 'delimitacion',
    tabLabel: '1. Delimitación',
    title: 'Delimitación de las etapas del programa',
    description: 'El programa de auditoría se estructura en etapas secuenciales que permiten desarrollar el proceso de manera ordenada, desde la preparación inicial hasta la presentación de resultados. Esta secuencia garantiza coherencia y facilita el control de cada fase.',
    visualType: 'timeline',
  },
  {
    id: 'planeacion',
    tabLabel: '2. Planeación',
    title: 'Etapa de planeación',
    description: 'En la planeación se definen los objetivos, el alcance, los recursos y los criterios de auditoría. Además, se diseña el programa de trabajo que guiará todo el proceso. Esta etapa es fundamental porque establece las bases y dirección del análisis.',
    visualType: 'org-chart',
  },
  {
    id: 'ejecucion',
    tabLabel: '3. Ejecución',
    title: 'Etapa de ejecución',
    description: 'La ejecución consiste en aplicar técnicas de recolección de información, como inspecciones, entrevistas y observación directa. En esta fase se obtiene la evidencia necesaria para sustentar los hallazgos de la auditoría.',
    visualType: 'collection',
  },
  {
    id: 'evaluacion',
    tabLabel: '4. Evaluación',
    title: 'Etapa de evaluación',
    description: 'En esta etapa se analizan los datos obtenidos para identificar desviaciones, riesgos y oportunidades de mejora. La evaluación se realiza comparando la información con los criterios previamente establecidos.',
    visualType: 'comparison',
  },
  {
    id: 'informe',
    tabLabel: '5. Informe',
    title: 'Etapa de informe',
    description: 'Finalmente, se documentan los hallazgos, conclusiones y recomendaciones en un informe formal. Este documento sirve como base para la toma de decisiones y la implementación de acciones correctivas dentro de la organización.',
    visualType: 'report',
  },
  {
    id: 'secuencia',
    tabLabel: '6. Secuencia Lógica',
    title: 'Secuencia lógica del proceso de auditoría',
    description: 'La correcta articulación de estas etapas asegura un proceso lógico y sistemático. Cada fase depende de la anterior y contribuye a la siguiente, formando un ciclo completo de análisis y mejora.',
    visualType: 'cycle',
  }
];

// --- Components ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <article className={`grid grid-cols-1 bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </article>
);

const LessonLayout: React.FC<LayoutProps> = ({ title, tabs, activeTab, onTabChange, children }) => {
  return (
    <div className="grid grid-cols-1 min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header with CSS Grid ONLY */}
      <header className="grid grid-cols-1 gap-6 p-6 md:p-8 bg-white border-b border-slate-200 shadow-sm top-0 z-20">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
          {title}
        </h1>
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(index)}
              className={`grid place-items-center p-3 rounded-lg text-sm font-semibold transition-all duration-200 border-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                ${activeTab === index 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-[1.02]' 
                  : 'bg-slate-100 text-slate-600 border-transparent hover:bg-slate-200 hover:text-slate-900'
                }`}
            >
              {tab.tabLabel}
            </button>
          ))}
        </nav>
      </header>
      
      {/* Main Content Area */}
      <main className="grid grid-cols-1 p-4 md:p-8 max-w-6xl mx-auto w-full gap-8">
        {children}
      </main>
    </div>
  );
};

// --- Visualization Sub-Components (Grid Based) ---

const TimelineDiagram = () => {
  const stages = ['Planeación', 'Ejecución', 'Evaluación', 'Informe'];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto place-items-center">
      {stages.map((stage, idx) => (
        <div key={idx} className="grid grid-cols-1 gap-4 place-items-center w-full relative">
          <div className="grid place-items-center w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-4 border-blue-500 shadow-lg text-blue-700 font-bold text-center p-2 z-10">
            {stage}
          </div>
          {/* Arrow connector for Desktop */}
          {idx < stages.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-10 transform -translate-y-1/2 z-0">
              <svg className="w-12 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          )}
          {/* Arrow connector for Mobile */}
          {idx < stages.length - 1 && (
            <div className="md:hidden grid place-items-center py-2 text-slate-300">
               <svg className="w-6 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const OrgChartDiagram = () => {
  const elements = ['Objetivos', 'Alcance', 'Recursos', 'Criterios'];
  return (
    <div className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 place-items-center">
        <div className="grid place-items-center bg-blue-800 text-white font-bold px-8 py-4 rounded-lg shadow-md w-64 text-center z-10">
          Programa de Auditoría
        </div>
        {/* Vertical Line */}
        <div className="w-1 h-8 bg-blue-300"></div>
        {/* Horizontal Line Connector */}
        <div className="h-1 bg-blue-300 w-full max-w-2xl"></div>
        {/* Vertical tick lines for children */}
        <div className="grid grid-cols-4 w-full max-w-2xl place-items-center">
            <div className="w-1 h-6 bg-blue-300"></div>
            <div className="w-1 h-6 bg-blue-300"></div>
            <div className="w-1 h-6 bg-blue-300"></div>
            <div className="w-1 h-6 bg-blue-300"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center max-w-3xl mx-auto w-full">
        {elements.map((el, idx) => (
          <div key={idx} className="grid place-items-center bg-white border-2 border-blue-200 text-blue-900 font-semibold p-4 rounded-md shadow-sm w-full text-center hover:bg-blue-50 transition-colors">
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

const CollectionDiagram = () => {
  const methods = ['Inspecciones', 'Entrevistas', 'Observación Directa'];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto items-center relative">
      <div className="grid grid-cols-1 gap-6 md:col-span-1">
        {methods.map((method, idx) => (
          <div key={idx} className="grid grid-cols-[auto_1fr] items-center gap-4 bg-white p-4 rounded-lg shadow border border-slate-200">
            <div className="grid place-items-center w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full font-bold">
              {idx + 1}
            </div>
            <span className="font-medium text-slate-700">{method}</span>
          </div>
        ))}
      </div>
      
      {/* Central Connector Area */}
      <div className="grid grid-cols-1 place-items-center md:col-span-1">
         <div className="grid place-items-center w-20 h-20 bg-blue-100 rounded-full text-blue-600 mb-2">
           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
           </svg>
         </div>
         <span className="font-bold text-slate-500 uppercase tracking-widest text-sm">Auditor</span>
      </div>

      <div className="grid grid-cols-1 place-items-center md:col-span-1 bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-500">
         <svg className="w-16 h-16 text-indigo-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
         </svg>
         <h3 className="text-xl font-bold text-indigo-900 text-center">Registro / Base de Datos</h3>
         <p className="text-sm text-slate-500 text-center mt-2">Evidencia Sustentada</p>
      </div>
    </div>
  );
};

const ComparisonDiagram = () => {
  // Datos simulados para demostrar una comparación de auditoría
  const data = [
    { name: 'Normativa A', Criterio: 100, Resultado: 85, fill: '#3b82f6' },
    { name: 'Proceso B', Criterio: 100, Resultado: 100, fill: '#10b981' },
    { name: 'Seguridad C', Criterio: 100, Resultado: 60, fill: '#ef4444' },
    { name: 'Calidad D', Criterio: 100, Resultado: 95, fill: '#f59e0b' },
  ];

  return (
    <div className="grid grid-cols-1 w-full max-w-4xl mx-auto h-80 bg-white p-6 rounded-lg shadow-inner border border-slate-100">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
          <Tooltip 
            cursor={{fill: '#f1f5f9'}}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }}/>
          <Bar dataKey="Criterio" fill="#cbd5e1" radius={[4, 4, 0, 0]} name="Criterio Establecido" />
          <Bar dataKey="Resultado" radius={[4, 4, 0, 0]} name="Resultado Obtenido">
          
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const ReportDiagram = () => {
  const sections = [
    { title: 'Hallazgos', color: 'bg-red-50 text-red-700 border-red-200' },
    { title: 'Conclusiones', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { title: 'Recomendaciones', color: 'bg-green-50 text-green-700 border-green-200' }
  ];

  return (
    <div className="grid grid-cols-1 place-items-center w-full">
      <div className="grid grid-cols-1 w-full max-w-md bg-white border border-slate-300 shadow-2xl rounded-sm overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="grid grid-cols-1 bg-slate-800 p-6 border-b-4 border-blue-500">
          <h3 className="text-white text-xl font-bold uppercase tracking-widest text-center">Informe de Auditoría</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 p-8">
          {sections.map((sec, idx) => (
            <div key={idx} className={`grid grid-cols-1 p-4 rounded border-l-4 shadow-sm ${sec.color}`}>
               <h4 className="font-bold text-lg mb-2">{sec.title}</h4>
               {/* Skeleton text for document visual */}
               <div className="grid grid-cols-1 gap-2">
                 <div className="h-2 bg-current opacity-20 rounded w-full"></div>
                 <div className="h-2 bg-current opacity-20 rounded w-5/6"></div>
                 <div className="h-2 bg-current opacity-20 rounded w-4/6"></div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CycleDiagram = () => {
  const steps = [
    { id: 1, label: 'Planeación' },
    { id: 2, label: 'Ejecución' },
    { id: 3, label: 'Evaluación' },
    { id: 4, label: 'Informe' }
  ];

  return (
    <div className="grid grid-cols-2 gap-8 md:gap-16 max-w-lg mx-auto w-full place-items-center relative p-8">
      {/* Visual background cycle hints */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="w-48 h-48 md:w-64 md:h-64 border-8 border-slate-200 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
      </div>
      
      {steps.map((step, idx) => (
        <div key={idx} className="grid place-items-center z-10 w-full">
          <div className="grid place-items-center bg-white border-2 border-indigo-600 text-indigo-900 font-bold w-24 h-24 md:w-32 md:h-32 rounded-xl shadow-lg transform transition-transform hover:scale-110">
            <span className="text-slate-400 text-xs mb-1">Fase {step.id}</span>
            <span className="text-center text-sm md:text-base">{step.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Main Application ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentStep = lessonData[activeTab];

  const renderVisual = (type: LessonStep['visualType']) => {
    switch (type) {
      case 'timeline': return <TimelineDiagram />;
      case 'org-chart': return <OrgChartDiagram />;
      case 'collection': return <CollectionDiagram />;
      case 'comparison': return <ComparisonDiagram />;
      case 'report': return <ReportDiagram />;
      case 'cycle': return <CycleDiagram />;
      default: return null;
    }
  };

  return (
    <LessonLayout
      title="Programa de Auditoría"
      tabs={lessonData}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <Card>
        {/* Text Section strictly mapped with Grid */}
        <div className="grid grid-cols-1 gap-4 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4">
            {currentStep.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mt-2 md:pl-5">
            {currentStep.description}
          </p>
        </div>
        
        {/* Diagram Render Section */}
        <div className="grid grid-cols-1 bg-slate-100 border-t border-slate-200 p-6 md:p-12 min-h-[400px] place-items-center">
          {renderVisual(currentStep.visualType)}
        </div>
      </Card>
    </LessonLayout>
  );
}
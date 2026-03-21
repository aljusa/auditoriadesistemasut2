import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  FileText, 
  Building2, 
  Landmark, 
  Globe, 
  CheckCircle, 
  ShieldCheck, 
  GitCommit,
  
} from 'lucide-react';

// --- TYPES & INTERFACES ---

interface Section {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  diagramId: number;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  title: string;
  sections: Section[];
  activeTabIndex: number;
  onTabChange: (index: number) => void;
  children: React.ReactNode;
}

interface DiagramRenderProps {
  diagramId: number;
}

// --- DATA ---

const LESSON_SECTIONS: Section[] = [
  {
    id: 'delimitacion',
    tabLabel: '1. Delimitación',
    title: 'Delimitación del concepto de criterios de auditoría',
    description: 'Los criterios de auditoría son los parámetros, normas o referencias que se utilizan para evaluar la situación actual de la seguridad en una organización. Funcionan como un punto de comparación que permite determinar si los controles y prácticas existentes son adecuados o requieren mejoras.',
    diagramId: 1,
  },
  {
    id: 'normas',
    tabLabel: '2. Normas Internas',
    title: 'Normas internas de seguridad',
    description: 'Las normas internas son lineamientos definidos por la propia organización para regular sus prácticas de seguridad. Estas normas reflejan las necesidades específicas del entorno operativo y establecen expectativas claras para el comportamiento y uso de los recursos.',
    diagramId: 2,
  },
  {
    id: 'regulaciones',
    tabLabel: '3. Regulaciones',
    title: 'Regulaciones legales aplicables',
    description: 'Las regulaciones legales son disposiciones obligatorias establecidas por autoridades externas. Su cumplimiento es esencial para evitar sanciones y garantizar que la organización opere dentro del marco jurídico vigente.',
    diagramId: 3,
  },
  {
    id: 'estandares',
    tabLabel: '4. Estándares',
    title: 'Estándares internacionales de seguridad',
    description: 'Los estándares internacionales son marcos de referencia reconocidos globalmente que establecen buenas prácticas en seguridad. Su adopción permite a las organizaciones alinearse con niveles de calidad y protección ampliamente aceptados.',
    diagramId: 4,
  },
  {
    id: 'politicas',
    tabLabel: '5. Políticas',
    title: 'Políticas y procedimientos organizacionales',
    description: 'Las políticas y procedimientos son documentos formales que describen cómo deben ejecutarse las actividades dentro de la organización. Sirven como guía operativa para asegurar consistencia y control en las acciones relacionadas con la seguridad.',
    diagramId: 5,
  },
  {
    id: 'importancia',
    tabLabel: '6. Importancia',
    title: 'Importancia de criterios bien definidos',
    description: 'El uso de criterios claros y bien establecidos permite que la auditoría sea objetiva, consistente y verificable. Esto facilita la identificación precisa de desviaciones y la formulación de recomendaciones fundamentadas.',
    diagramId: 6,
  }
];

// --- COMPONENTS ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const LessonLayout: React.FC<LessonLayoutProps> = ({ 
  title, 
  sections, 
  activeTabIndex, 
  onTabChange, 
  children 
}) => {
  return (
    // Main layout using strictly CSS Grid
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header with Title and Nav */}
      <header className="grid grid-rows-[auto_auto] bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="grid place-items-center p-6 bg-slate-900 text-white">
          <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
        </div>
        
        {/* Tab Navigation (Grid-based responsive layout) */}
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-slate-200">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onTabChange(index)}
              className={`
                grid place-items-center text-sm font-semibold p-4 transition-colors duration-200 border-b-4
                ${activeTabIndex === index 
                  ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
                  : 'border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                ${index !== 0 ? 'border-l border-slate-200/50' : ''}
              `}
            >
              {section.tabLabel}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="grid place-items-center p-4 md:p-8 overflow-y-auto">
        <div className="grid w-full max-w-5xl">
          {children}
        </div>
      </main>
    </div>
  );
};

// --- DIAGRAM COMPONENTS (Strictly Grid-based) ---

const Diagram1: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 place-items-center p-8 bg-slate-50 rounded-lg w-full">
    <div className="grid grid-rows-[auto_auto] gap-4 place-items-center bg-white p-6 rounded-lg shadow border border-slate-200 w-full max-w-xs text-center">
      <div className="grid place-items-center w-12 h-12 rounded-full bg-slate-100 text-slate-600">
        <Building2 size={24} />
      </div>
      <h3 className="font-bold text-slate-700">Situación Actual</h3>
      <p className="text-xs text-slate-500">Controles y prácticas existentes</p>
    </div>
    
    <div className="grid place-items-center">
      <ArrowRight className="hidden md:block text-blue-500 w-10 h-10" />
      <ArrowDown className="block md:hidden text-blue-500 w-10 h-10" />
      <span className="text-xs font-semibold text-blue-600 mt-2">Evaluación</span>
    </div>

    <div className="grid grid-rows-[auto_auto] gap-4 place-items-center bg-white p-6 rounded-lg shadow border border-blue-200 w-full max-w-xs text-center border-t-4 border-t-blue-500">
      <div className="grid place-items-center w-12 h-12 rounded-full bg-blue-50 text-blue-600">
        <ShieldCheck size={24} />
      </div>
      <h3 className="font-bold text-blue-800">Criterios de Auditoría</h3>
      <p className="text-xs text-slate-500">Parámetros, normas y referencias</p>
    </div>
  </div>
);

const Diagram2: React.FC = () => (
  <div className="grid place-items-center p-8 bg-slate-50 rounded-lg w-full">
    <div className="grid grid-rows-[auto_1fr] gap-4 bg-white p-6 rounded-lg shadow-md border border-slate-300 w-64 h-80 relative">
      <div className="grid grid-cols-[auto_1fr] gap-3 items-center border-b border-slate-200 pb-4">
        <FileText className="text-indigo-600" size={28} />
        <h3 className="font-bold text-indigo-900 text-sm">Manual de Seguridad Org.</h3>
      </div>
      <div className="grid grid-rows-4 gap-3 mt-2">
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
          <div className="h-2 bg-slate-200 rounded w-full"></div>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
          <div className="h-2 bg-slate-200 rounded w-4/5"></div>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
          <div className="h-2 bg-slate-200 rounded w-full"></div>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
          <div className="h-2 bg-slate-200 rounded w-3/4"></div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 grid place-items-center w-10 h-10 bg-indigo-50 rounded-full border border-indigo-100 text-indigo-500">
        <CheckCircle size={20} />
      </div>
    </div>
  </div>
);

const Diagram3: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 place-items-center p-8 bg-slate-50 rounded-lg w-full">
    <div className="grid grid-rows-[auto_auto] gap-2 place-items-center text-center p-6">
      <div className="grid place-items-center w-16 h-16 rounded-2xl bg-slate-800 text-white shadow-lg">
        <Building2 size={32} />
      </div>
      <span className="font-bold text-slate-800">Organización</span>
    </div>
    
    <div className="grid grid-rows-[auto_auto] gap-1 place-items-center px-4">
      <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Cumplimiento Obligatorio</span>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-[150px]">
        <div className="h-[2px] w-full bg-red-300"></div>
        <GitCommit className="text-red-500 mx-1" size={16} />
        <div className="h-[2px] w-full bg-red-300"></div>
      </div>
    </div>

    <div className="grid grid-rows-[auto_auto] gap-2 place-items-center text-center p-6 bg-red-50 rounded-xl border border-red-100 shadow-sm">
      <div className="grid place-items-center w-16 h-16 rounded-full bg-red-600 text-white shadow-lg">
        <Landmark size={32} />
      </div>
      <span className="font-bold text-red-900">Entidad Reguladora</span>
      <span className="text-xs text-red-700">Leyes y Decretos</span>
    </div>
  </div>
);

const Diagram4: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 place-items-center p-8 bg-slate-50 rounded-lg w-full">
    <div className="grid place-items-center w-40 h-40 bg-blue-100 rounded-full border-4 border-blue-200 text-blue-600 relative shadow-inner">
      <Globe size={80} strokeWidth={1.5} />
      <div className="absolute -top-2 -right-2 grid place-items-center w-12 h-12 bg-amber-400 rounded-full border-4 border-white shadow text-amber-900 font-bold text-xs">
        ISO
      </div>
      <div className="absolute -bottom-2 -left-2 grid place-items-center w-12 h-12 bg-emerald-400 rounded-full border-4 border-white shadow text-emerald-900 font-bold text-xs">
        NIST
      </div>
    </div>
    
    <div className="grid grid-rows-3 gap-4 w-full">
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <CheckCircle className="text-emerald-500" />
        <span className="text-sm font-semibold text-slate-700">Adopción de buenas prácticas globales</span>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <CheckCircle className="text-emerald-500" />
        <span className="text-sm font-semibold text-slate-700">Alineación con niveles de calidad</span>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200">
        <CheckCircle className="text-emerald-500" />
        <span className="text-sm font-semibold text-slate-700">Certificaciones y prestigio internacional</span>
      </div>
    </div>
  </div>
);

const Diagram5: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 place-items-center p-8 bg-slate-50 rounded-lg w-full">
    <div className="grid grid-rows-[auto_1fr] gap-2 bg-white border border-slate-300 shadow-sm rounded-lg p-4 w-full text-center">
      <div className="grid place-items-center bg-slate-800 text-white rounded w-8 h-8 mx-auto font-bold">1</div>
      <p className="text-sm font-semibold text-slate-700 mt-2">Definir Política</p>
    </div>
    
    <ArrowRight className="hidden md:block text-slate-400" />
    <ArrowDown className="block md:hidden text-slate-400" />

    <div className="grid grid-rows-[auto_1fr] gap-2 bg-white border border-slate-300 shadow-sm rounded-lg p-4 w-full text-center">
      <div className="grid place-items-center bg-slate-800 text-white rounded w-8 h-8 mx-auto font-bold">2</div>
      <p className="text-sm font-semibold text-slate-700 mt-2">Crear Procedimiento</p>
    </div>

    <ArrowRight className="hidden md:block text-slate-400" />
    <ArrowDown className="block md:hidden text-slate-400" />

    <div className="grid grid-rows-[auto_1fr] gap-2 bg-white border border-slate-300 shadow-sm rounded-lg p-4 w-full text-center">
      <div className="grid place-items-center bg-slate-800 text-white rounded w-8 h-8 mx-auto font-bold">3</div>
      <p className="text-sm font-semibold text-slate-700 mt-2">Ejecutar Acción</p>
    </div>
  </div>
);

const Diagram6: React.FC = () => (
  <div className="grid grid-rows-[auto_auto] gap-8 place-items-center p-8 bg-slate-50 rounded-lg w-full">
    <div className="grid place-items-center bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg font-bold text-lg relative">
      Criterios de Auditoría Definidos
      
      {/* Connector Lines (Grid-based approximation for aesthetics) */}
      <div className="absolute -bottom-6 grid grid-cols-3 w-3/4">
        <div className="border-l-2 border-b-2 border-indigo-300 h-6"></div>
        <div className="border-b-2 border-indigo-300 h-6 grid place-items-center"><div className="w-0.5 h-6 bg-indigo-300"></div></div>
        <div className="border-r-2 border-b-2 border-indigo-300 h-6"></div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl mt-4">
      <div className="grid grid-rows-[auto_1fr] gap-2 place-items-center text-center bg-white p-4 rounded-lg shadow border border-indigo-100 border-t-4 border-t-indigo-400">
        <span className="font-bold text-indigo-900">Objetividad</span>
        <p className="text-xs text-slate-600">Evaluación sin sesgos basada en hechos concretos.</p>
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-2 place-items-center text-center bg-white p-4 rounded-lg shadow border border-indigo-100 border-t-4 border-t-indigo-400">
        <span className="font-bold text-indigo-900">Consistencia</span>
        <p className="text-xs text-slate-600">Mismos resultados ante situaciones idénticas repetidas.</p>
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-2 place-items-center text-center bg-white p-4 rounded-lg shadow border border-indigo-100 border-t-4 border-t-indigo-400">
        <span className="font-bold text-indigo-900">Verificabilidad</span>
        <p className="text-xs text-slate-600">Evidencia demostrable que respalda los hallazgos.</p>
      </div>
    </div>
  </div>
);

const DiagramRender: React.FC<DiagramRenderProps> = ({ diagramId }) => {
  switch (diagramId) {
    case 1: return <Diagram1 />;
    case 2: return <Diagram2 />;
    case 3: return <Diagram3 />;
    case 4: return <Diagram4 />;
    case 5: return <Diagram5 />;
    case 6: return <Diagram6 />;
    default: return <div className="grid place-items-center h-48 bg-slate-100 rounded text-slate-500">Diagrama no encontrado</div>;
  }
};

// --- MAIN APPLICATION ---

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const currentSection = LESSON_SECTIONS[activeTab];

  return (
    <LessonLayout 
      title="Criterios de auditoría en seguridad" 
      sections={LESSON_SECTIONS}
      activeTabIndex={activeTab}
      onTabChange={setActiveTab}
    >
      <Card className="grid grid-rows-[auto_auto_1fr] min-h-[500px]">
        {/* Panel Header */}
        <div className="grid grid-cols-1 border-b border-slate-100 bg-slate-50/50 p-8">
          <h2 className="text-2xl font-bold text-slate-800">
            {currentSection.title}
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            {currentSection.description}
          </p>
        </div>


        {/* Diagram Render Area */}
        <div className="grid place-items-center p-8 pt-0">
          <DiagramRender diagramId={currentSection.diagramId} />
        </div>
      </Card>
    </LessonLayout>
  );
}
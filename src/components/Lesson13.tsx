import React, { useState } from 'react';
import { 
  Network, 
  Eye, 
  MessageSquare, 
  FileCheck, 
  Wrench, 
  Scale, 
  PieChart,
  CheckCircle2,
  AlertCircle,
  ArrowRightLeft,
  FileText,
  User,
  ClipboardList
} from 'lucide-react';

// --- Types & Interfaces ---
interface LessonSection {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  sections: LessonSection[];
  activeTab: number;
  setActiveTab: (index: number) => void;
  children: React.ReactNode;
}

// --- Data ---
const lessonData: LessonSection[] = [
  {
    id: 'delimitacion',
    shortTitle: 'Delimitación',
    title: 'Delimitación de las técnicas de auditoría',
    description: 'Las técnicas de auditoría son los métodos utilizados para obtener información relevante durante el proceso de evaluación. Su aplicación permite recopilar evidencia que sustenta los hallazgos y conclusiones. El uso combinado de distintas técnicas favorece una visión integral y más precisa.',
    icon: <Network className="w-5 h-5" />
  },
  {
    id: 'observacion',
    shortTitle: 'Observación',
    title: 'Observación directa',
    description: 'La observación directa consiste en analizar visualmente las instalaciones, procesos y comportamientos del personal en su entorno real. Permite identificar situaciones que pueden no estar documentadas, como prácticas inadecuadas o condiciones inseguras.',
    icon: <Eye className="w-5 h-5" />
  },
  {
    id: 'entrevistas',
    shortTitle: 'Entrevistas',
    title: 'Entrevistas',
    description: 'Las entrevistas permiten obtener información directamente del personal. A través de preguntas estructuradas o abiertas, se evalúa el conocimiento, la percepción y el cumplimiento de procedimientos por parte de los colaboradores.',
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    id: 'revision',
    shortTitle: 'Revisión Doc.',
    title: 'Revisión documental',
    description: 'Esta técnica implica analizar documentos como políticas, manuales, registros y procedimientos. Su objetivo es verificar la existencia, actualización y coherencia de la información formal de la organización.',
    icon: <FileCheck className="w-5 h-5" />
  },
  {
    id: 'inspeccion',
    shortTitle: 'Inspección',
    title: 'Inspección física',
    description: 'La inspección física se centra en verificar el estado, funcionamiento y condiciones de equipos, instalaciones y dispositivos de seguridad. Permite identificar fallas materiales o deficiencias en la infraestructura.',
    icon: <Wrench className="w-5 h-5" />
  },
  {
    id: 'pruebas',
    shortTitle: 'Cumplimiento',
    title: 'Pruebas de cumplimiento',
    description: 'Las pruebas de cumplimiento evalúan si las normas, políticas y controles establecidos se aplican correctamente en la práctica. Permiten detectar desviaciones entre lo documentado y lo ejecutado.',
    icon: <Scale className="w-5 h-5" />
  },
  {
    id: 'integracion',
    shortTitle: 'Integración',
    title: 'Integración de técnicas y evidencia',
    description: 'El uso conjunto de estas técnicas permite obtener evidencia tanto cualitativa (percepciones, comportamientos) como cuantitativa (registros, mediciones). Esta combinación facilita una evaluación más completa y fundamentada.',
    icon: <PieChart className="w-5 h-5" />
  }
];

// --- Components ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const LessonLayout: React.FC<LessonLayoutProps> = ({ sections, activeTab, setActiveTab, children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-slate-50 font-sans text-slate-800">
      {/* Header & Navigation */}
      <header className="grid gap-6 p-6 bg-white border-b border-slate-200 shadow-sm z-10">
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Técnicas de Auditoría</h1>
        </div>
        
        {/* Tab Navigation (Strict CSS Grid) */}
        <nav className="grid grid-flow-col auto-cols-fr gap-2 bg-slate-100 p-1.5 rounded-lg overflow-x-auto">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(index)}
              className={`grid grid-flow-col place-items-center gap-2 py-2.5 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === index 
                  ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200/50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <span className="grid place-items-center">{section.icon}</span>
              <span className="hidden md:grid">{section.shortTitle}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="grid p-6 md:p-8 overflow-y-auto place-content-start gap-8">
        {children}
      </main>
    </div>
  );
};

const DiagramRender: React.FC<{ activeTabId: string }> = ({ activeTabId }) => {
  // Renderizado condicional del diagrama basado en la pestaña activa utilizando CSS Grid
  const renderDiagramContent = () => {
    switch (activeTabId) {
      case 'delimitacion':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 w-full max-w-2xl mx-auto p-4 place-items-center">
            <div className="grid place-items-center p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium w-full text-center">Revisión Documental</div>
            <div className="grid place-items-center p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium w-full text-center">Entrevistas</div>
            <div className="grid place-items-center p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium w-full text-center">Pruebas Físicas</div>
            
            <div className="grid place-items-center p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium w-full text-center">Análisis de Datos</div>
            <div className="grid place-items-center p-6 bg-indigo-600 text-white rounded-xl shadow-md font-bold text-center w-full z-10 transform scale-110">Técnicas de<br/>Auditoría</div>
            <div className="grid place-items-center p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium w-full text-center">Observación</div>
            
            <div className="grid place-items-center p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium w-full text-center">Confirmación</div>
            <div className="grid place-items-center p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium w-full text-center">Cálculos</div>
            <div className="grid place-items-center p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm font-medium w-full text-center">Inspección</div>
          </div>
        );
      case 'observacion':
        return (
          <div className="grid grid-cols-[auto_1fr] gap-8 place-items-center w-full max-w-2xl mx-auto bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="grid place-items-center gap-2">
              <div className="grid place-items-center w-16 h-16 bg-indigo-100 text-indigo-700 rounded-full border-2 border-indigo-300">
                <Eye className="w-8 h-8" />
              </div>
              <span className="text-sm font-bold text-slate-700">Auditor</span>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full relative">
               <div className="absolute top-1/2 -left-8 w-6 border-t-2 border-dashed border-slate-400"></div>
               <div className="grid gap-2 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Área 1</span>
                  <div className="grid grid-flow-col auto-cols-max gap-2 place-items-center text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Práctica Segura
                  </div>
               </div>
               <div className="grid gap-2 p-4 bg-white rounded-lg border border-rose-200 shadow-sm ring-1 ring-rose-50">
                  <span className="text-xs font-bold text-slate-500 uppercase">Área 2</span>
                  <div className="grid grid-flow-col auto-cols-max gap-2 place-items-center text-sm text-slate-700">
                    <AlertCircle className="w-4 h-4 text-rose-500" /> Riesgo detectado
                  </div>
               </div>
               <div className="grid gap-2 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-500 uppercase">Área 3</span>
                  <div className="grid grid-flow-col auto-cols-max gap-2 place-items-center text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Proceso Estándar
                  </div>
               </div>
               <div className="grid gap-2 p-4 bg-white rounded-lg border border-amber-200 shadow-sm ring-1 ring-amber-50">
                  <span className="text-xs font-bold text-slate-500 uppercase">Área 4</span>
                  <div className="grid grid-flow-col auto-cols-max gap-2 place-items-center text-sm text-slate-700">
                    <AlertCircle className="w-4 h-4 text-amber-500" /> Falta EPP
                  </div>
               </div>
            </div>
          </div>
        );
      case 'entrevistas':
        return (
          <div className="grid grid-cols-[1fr_auto_1fr] gap-6 place-items-center w-full max-w-xl mx-auto p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="grid place-items-center gap-3">
               <div className="grid place-items-center w-14 h-14 bg-indigo-100 text-indigo-700 rounded-full">
                  <User className="w-6 h-6" />
               </div>
               <div className="grid gap-2 text-center">
                  <span className="font-bold text-sm text-slate-800">Auditor</span>
                  <div className="grid bg-white p-2 rounded-lg border border-slate-200 text-xs text-slate-600 shadow-sm relative">
                    ¿Conoce el procedimiento X?
                    <div className="absolute top-1/2 -right-2 w-2 h-2 bg-white border-r border-t border-slate-200 transform rotate-45 -translate-y-1/2"></div>
                  </div>
               </div>
            </div>
            <div className="grid place-items-center gap-2">
              <ArrowRightLeft className="w-6 h-6 text-slate-400" />
            </div>
            <div className="grid place-items-center gap-3">
               <div className="grid place-items-center w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full">
                  <User className="w-6 h-6" />
               </div>
               <div className="grid gap-2 text-center">
                  <span className="font-bold text-sm text-slate-800">Colaborador</span>
                  <div className="grid bg-emerald-50 p-2 rounded-lg border border-emerald-200 text-xs text-slate-700 shadow-sm relative">
                    Sí, aquí están los registros.
                    <div className="absolute top-1/2 -left-2 w-2 h-2 bg-emerald-50 border-b border-l border-emerald-200 transform rotate-45 -translate-y-1/2"></div>
                  </div>
               </div>
            </div>
          </div>
        );
      case 'revision':
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mx-auto p-6">
             {[1, 2, 3, 4].map((item) => (
                <div key={item} className="grid place-items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className={`absolute top-0 w-full h-1 ${item % 2 === 0 ? 'bg-emerald-500' : 'bg-indigo-500'}`}></div>
                  <FileText className={`w-8 h-8 ${item % 2 === 0 ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <div className="grid gap-1 text-center w-full">
                    <div className="h-2 bg-slate-200 rounded w-3/4 mx-auto"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/2 mx-auto"></div>
                  </div>
                  {item % 2 === 0 && (
                    <div className="absolute bottom-2 right-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                  )}
                </div>
             ))}
          </div>
        );
      case 'inspeccion':
        return (
          <div className="grid gap-6 w-full max-w-2xl mx-auto p-6 bg-slate-50 rounded-xl border border-slate-200">
             <div className="grid grid-cols-[1fr_auto] gap-4 items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="grid grid-cols-[auto_1fr] gap-4 place-items-center place-content-start">
                   <div className="w-10 h-10 bg-slate-100 rounded-md grid place-items-center"><Wrench className="w-5 h-5 text-slate-600"/></div>
                   <div className="grid place-items-start">
                      <span className="font-bold text-slate-800 text-sm">Maquinaria Industrial A</span>
                      <span className="text-xs text-slate-500">Inspección de calibración</span>
                   </div>
                </div>
                <div className="grid grid-flow-col place-items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
                   <CheckCircle2 className="w-4 h-4"/> Estado Correcto
                </div>
             </div>
             <div className="grid grid-cols-[1fr_auto] gap-4 items-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="grid grid-cols-[auto_1fr] gap-4 place-items-center place-content-start">
                   <div className="w-10 h-10 bg-slate-100 rounded-md grid place-items-center"><AlertCircle className="w-5 h-5 text-slate-600"/></div>
                   <div className="grid place-items-start">
                      <span className="font-bold text-slate-800 text-sm">Extintores Sector B</span>
                      <span className="text-xs text-slate-500">Revisión de vigencia</span>
                   </div>
                </div>
                <div className="grid grid-flow-col place-items-center gap-2 px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold border border-rose-200">
                   <AlertCircle className="w-4 h-4"/> Deficiente (Caducado)
                </div>
             </div>
          </div>
        );
      case 'pruebas':
        return (
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 place-items-center w-full max-w-3xl mx-auto p-6">
             <div className="grid gap-4 w-full p-6 bg-indigo-50 border border-indigo-200 rounded-xl relative">
                <div className="absolute -top-3 left-4 bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200">
                  Teoría
                </div>
                <div className="grid place-items-center gap-2 text-center">
                  <ClipboardList className="w-8 h-8 text-indigo-600" />
                  <h3 className="font-bold text-slate-800">Procedimiento Establecido</h3>
                  <div className="grid gap-2 w-full mt-2">
                    <div className="h-8 bg-white border border-indigo-100 rounded-md grid place-items-center text-xs text-slate-600 font-medium">Paso 1: Validación</div>
                    <div className="h-8 bg-white border border-indigo-100 rounded-md grid place-items-center text-xs text-slate-600 font-medium">Paso 2: Registro</div>
                    <div className="h-8 bg-white border border-indigo-100 rounded-md grid place-items-center text-xs text-slate-600 font-medium">Paso 3: Aprobación</div>
                  </div>
                </div>
             </div>

             <div className="grid place-items-center text-slate-400 rotate-90 md:rotate-0">
               <ArrowRightLeft className="w-8 h-8" />
               <span className="text-xs font-bold uppercase tracking-widest mt-2">Comparativa</span>
             </div>

             <div className="grid gap-4 w-full p-6 bg-slate-50 border border-slate-200 rounded-xl relative">
                <div className="absolute -top-3 left-4 bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full border border-slate-300">
                  Práctica
                </div>
                <div className="grid place-items-center gap-2 text-center">
                  <Eye className="w-8 h-8 text-slate-600" />
                  <h3 className="font-bold text-slate-800">Procedimiento Real</h3>
                  <div className="grid gap-2 w-full mt-2">
                    <div className="h-8 bg-white border border-emerald-200 rounded-md grid grid-cols-[1fr_auto] px-3 items-center text-xs text-slate-600 font-medium">Paso 1: Validación <CheckCircle2 className="w-4 h-4 text-emerald-500"/></div>
                    <div className="h-8 bg-white border border-emerald-200 rounded-md grid grid-cols-[1fr_auto] px-3 items-center text-xs text-slate-600 font-medium">Paso 2: Registro <CheckCircle2 className="w-4 h-4 text-emerald-500"/></div>
                    <div className="h-8 bg-white border border-rose-200 bg-rose-50 rounded-md grid grid-cols-[1fr_auto] px-3 items-center text-xs text-slate-600 font-medium">Paso 3: Omitido <AlertCircle className="w-4 h-4 text-rose-500"/></div>
                  </div>
                </div>
             </div>
          </div>
        );
      case 'integracion':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mx-auto bg-slate-50 p-6 rounded-xl border border-slate-200">
             <div className="grid gap-4 place-items-center place-content-start">
               <div className="grid place-items-center w-12 h-12 bg-purple-100 rounded-lg border border-purple-200">
                 <MessageSquare className="w-6 h-6 text-purple-600" />
               </div>
               <h3 className="font-bold text-slate-800 text-center">Evidencia Cualitativa</h3>
               <p className="text-xs text-slate-500 text-center mb-2">Percepciones, comportamientos y entornos.</p>
               <div className="grid gap-2 w-full">
                 <div className="grid bg-white p-3 rounded border border-slate-200 text-sm font-medium text-slate-700 text-center shadow-sm">Entrevistas</div>
                 <div className="grid bg-white p-3 rounded border border-slate-200 text-sm font-medium text-slate-700 text-center shadow-sm">Observación Directa</div>
               </div>
             </div>

             <div className="grid gap-4 place-items-center place-content-start">
               <div className="grid place-items-center w-12 h-12 bg-blue-100 rounded-lg border border-blue-200">
                 <PieChart className="w-6 h-6 text-blue-600" />
               </div>
               <h3 className="font-bold text-slate-800 text-center">Evidencia Cuantitativa</h3>
               <p className="text-xs text-slate-500 text-center mb-2">Registros, mediciones y datos físicos.</p>
               <div className="grid gap-2 w-full">
                 <div className="grid bg-white p-3 rounded border border-slate-200 text-sm font-medium text-slate-700 text-center shadow-sm">Revisión Documental</div>
                 <div className="grid bg-white p-3 rounded border border-slate-200 text-sm font-medium text-slate-700 text-center shadow-sm">Inspección Física</div>
                 <div className="grid bg-white p-3 rounded border border-slate-200 text-sm font-medium text-slate-700 text-center shadow-sm">Pruebas de Cumplimiento</div>
               </div>
             </div>
          </div>
        );
      default:
        return <div className="grid place-items-center p-8 text-slate-400">Seleccione una técnica</div>;
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr] gap-6 w-full min-h-[400px]">
  
      <div className="grid place-items-center w-full h-full bg-white rounded-xl border border-slate-200 shadow-inner p-6">
        {renderDiagramContent()}
      </div>
    </div>
  );
};

// --- Main Application Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentSection = lessonData[activeTab];

  return (
    <LessonLayout sections={lessonData} activeTab={activeTab} setActiveTab={setActiveTab}>
      <Card className="max-w-5xl mx-auto w-full grid-rows-[auto_auto_1fr]">
        
        {/* Panel Header */}
        <div className="grid grid-cols-[auto_1fr] gap-4 place-items-center place-content-start p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="grid place-items-center w-12 h-12 bg-indigo-600 text-white rounded-xl shadow-sm">
             {currentSection.icon}
          </div>
          <div className="grid gap-1 place-items-start">
           
             <h2 className="text-xl font-bold text-slate-900">
               {currentSection.title}
             </h2>
          </div>
        </div>

        {/* Panel Description */}
        <div className="grid p-6 text-slate-700 leading-relaxed text-base border-b border-slate-100">
          <p>{currentSection.description}</p>
        </div>

        {/* Diagram Area */}
        <div className="grid p-6 bg-slate-50/30">
          <DiagramRender activeTabId={currentSection.id} />
        </div>

      </Card>
    </LessonLayout>
  );
}
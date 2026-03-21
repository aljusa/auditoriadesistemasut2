import React, { useState } from 'react';
import { 
  
  Focus, 
  Map, 
  Users, 
  Wrench, 
  Search, 
  FileText, 
  CheckSquare, 
  MessageCircle,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

// --- DEFINICIÓN DE TIPOS ---

interface LessonSection {
  id: number;
  tabLabel: string;
  title: string;
  description: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  sections: LessonSection[];
}

interface DiagramRenderProps {
  activeId: number;
}

// --- DATOS DE LA LECCIÓN ---

const LESSON_DATA: LessonSection[] = [
  {
    id: 1,
    tabLabel: "1. Programa",
    title: "Delimitación del programa de trabajo",
    description: "El programa de trabajo en una auditoría es el documento que organiza y estructura todas las actividades necesarias para llevar a cabo el proceso de evaluación. Su función es asegurar que la auditoría se realice de manera sistemática, ordenada y completa."
  },
  {
    id: 2,
    tabLabel: "2. Alcance",
    title: "Alcance de la auditoría",
    description: "El alcance define los límites del proceso de auditoría, estableciendo qué áreas, procesos o instalaciones serán evaluadas. Permite evitar ambigüedades y enfocar los esfuerzos en aspectos previamente definidos."
  },
  {
    id: 3,
    tabLabel: "3. Áreas",
    title: "Áreas a evaluar",
    description: "Este elemento identifica los espacios físicos y los aspectos relacionados con el personal que serán objeto de revisión. Facilita la organización del trabajo y asegura que no se omitan componentes relevantes."
  },
  {
    id: 4,
    tabLabel: "4. Cronograma",
    title: "Cronograma de actividades",
    description: "El cronograma establece la secuencia y los tiempos en los que se desarrollarán las actividades de auditoría. Permite planificar de forma ordenada y optimizar el uso del tiempo disponible."
  },
  {
    id: 5,
    tabLabel: "5. Recursos",
    title: "Recursos humanos y materiales",
    description: "Este componente define el personal asignado a la auditoría, así como las herramientas y equipos necesarios para su ejecución. Garantiza que se cuente con los medios adecuados para realizar el proceso."
  },
  {
    id: 6,
    tabLabel: "6. Métodos",
    title: "Métodos de recolección de información",
    description: "Incluyen las técnicas utilizadas para obtener datos relevantes durante la auditoría, como la observación directa, entrevistas, revisión documental y listas de verificación. Estos métodos permiten sustentar los hallazgos de manera objetiva."
  },
  {
    id: 7,
    tabLabel: "7. Integración",
    title: "Importancia de la integración de los elementos",
    description: "La correcta integración de todos estos componentes permite una ejecución organizada, coherente y eficiente de la auditoría. Esto facilita la obtención de resultados claros y útiles para la toma de decisiones."
  }
];

// --- COMPONENTES BASE ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// --- RENDERIZADOR DE DIAGRAMAS ---

const DiagramRender: React.FC<DiagramRenderProps> = ({ activeId }) => {
  // Implementación basada en CSS Grid para representaciones visuales
  const renderVisual = () => {
    switch (activeId) {
      case 1:
        // Mapa mental/Esquema del Programa
        return (
          <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full min-h-[300px] place-items-center w-full max-w-lg mx-auto">
            <div className="col-start-2 row-start-2 grid place-items-center bg-blue-600 text-white p-4 rounded-lg shadow-md w-full text-center font-bold z-10">
              Programa de Trabajo
            </div>
            {/* Conectores simulados mediante grid */}
            <div className="col-start-2 row-start-1 grid place-items-center border-b-2 border-dashed border-blue-400 w-full h-full pb-2">Objetivos</div>
            <div className="col-start-1 row-start-2 grid place-items-center border-r-2 border-dashed border-blue-400 w-full h-full pr-2 text-right">Alcance</div>
            <div className="col-start-3 row-start-2 grid place-items-center border-l-2 border-dashed border-blue-400 w-full h-full pl-2 text-left">Recursos</div>
            <div className="col-start-2 row-start-3 grid place-items-center border-t-2 border-dashed border-blue-400 w-full h-full pt-2">Cronograma</div>
          </div>
        );
      case 2:
        // Diagrama de delimitación (Alcance)
        return (
          <div className="grid place-items-center h-full min-h-[300px]">
            <div className="grid place-items-center w-64 h-64 border-4 border-slate-200 rounded-3xl bg-slate-50 relative">
              <span className="absolute top-2 left-4 text-sm text-slate-400 font-semibold">Entorno General</span>
              <div className="grid place-items-center w-40 h-40 border-4 border-blue-500 rounded-2xl bg-blue-50 shadow-inner">
                <Focus className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-blue-700 font-bold text-center leading-tight">Alcance<br/>Definido</span>
              </div>
            </div>
          </div>
        );
      case 3:
        // Plano de instalaciones (Áreas a evaluar)
        return (
          <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full min-h-[300px] w-full max-w-md mx-auto p-4 bg-slate-100 rounded-xl border border-slate-300">
            <div className="grid place-items-center bg-white border-2 border-slate-200 rounded-lg"><Map className="w-6 h-6 text-slate-400"/></div>
            <div className="grid place-items-center bg-blue-100 border-2 border-blue-500 rounded-lg shadow-sm"><span className="text-xs font-bold text-blue-700 text-center">Área<br/>Evaluada</span></div>
            <div className="grid place-items-center bg-white border-2 border-slate-200 rounded-lg"><Map className="w-6 h-6 text-slate-400"/></div>
            
            <div className="grid place-items-center bg-blue-100 border-2 border-blue-500 rounded-lg shadow-sm col-span-2"><span className="text-xs font-bold text-blue-700">Zona de Producción (En Revisión)</span></div>
            <div className="grid place-items-center bg-white border-2 border-slate-200 rounded-lg"><Map className="w-6 h-6 text-slate-400"/></div>
            
            <div className="grid place-items-center bg-white border-2 border-slate-200 rounded-lg"><Map className="w-6 h-6 text-slate-400"/></div>
            <div className="grid place-items-center bg-white border-2 border-slate-200 rounded-lg"><Map className="w-6 h-6 text-slate-400"/></div>
            <div className="grid place-items-center bg-blue-100 border-2 border-blue-500 rounded-lg shadow-sm"><span className="text-xs font-bold text-blue-700 text-center">Almacén<br/>(Auditoría)</span></div>
          </div>
        );
      case 4:
        // Cronograma de actividades (Línea de tiempo)
        return (
           <div className="grid grid-cols-1 grid-rows-4 gap-4 h-full min-h-[300px] w-full max-w-lg mx-auto py-4">
              {[
                { time: "Semana 1", task: "Planeación y Delimitación", color: "bg-indigo-500", w: "w-1/3" },
                { time: "Semana 2", task: "Ejecución y Recolección", color: "bg-blue-500", w: "w-2/3" },
                { time: "Semana 3", task: "Análisis de Resultados", color: "bg-cyan-500", w: "w-1/2" },
                { time: "Semana 4", task: "Elaboración de Informe", color: "bg-teal-500", w: "w-full" }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-[100px_1fr] gap-4 items-center">
                  <div className="text-sm font-bold text-slate-600 text-right">{item.time}</div>
                  <div className="bg-slate-100 rounded-r-full h-10 grid items-center w-full relative">
                    <div className={`h-full rounded-r-full absolute left-0 top-0 grid items-center px-4 ${item.color} ${item.w} shadow-md`}>
                       <span className="text-xs font-bold text-white whitespace-nowrap">{item.task}</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        );
      case 5:
        // Recursos Humanos y Materiales
        return (
          <div className="grid grid-cols-2 gap-8 h-full min-h-[300px] w-full max-w-lg mx-auto p-4">
            <div className="grid grid-rows-[auto_1fr] gap-4 bg-orange-50 border-2 border-orange-200 p-4 rounded-xl items-start">
              <div className="grid place-items-center text-orange-700 font-bold text-lg border-b border-orange-200 pb-2">
                <Users className="w-8 h-8 mb-1" />
                Recursos Humanos
              </div>
              <div className="grid grid-cols-2 gap-2 place-content-start">
                 {[1,2,3,4].map(i => <div key={i} className="grid place-items-center bg-white p-2 rounded shadow-sm"><Users className="w-5 h-5 text-orange-400"/></div>)}
              </div>
            </div>
            <div className="grid grid-rows-[auto_1fr] gap-4 bg-purple-50 border-2 border-purple-200 p-4 rounded-xl items-start">
              <div className="grid place-items-center text-purple-700 font-bold text-lg border-b border-purple-200 pb-2">
                <Wrench className="w-8 h-8 mb-1" />
                Recursos Materiales
              </div>
              <div className="grid grid-cols-2 gap-2 place-content-start">
                <div className="grid place-items-center bg-white p-2 rounded shadow-sm" title="Listas"><CheckSquare className="w-5 h-5 text-purple-400"/></div>
                <div className="grid place-items-center bg-white p-2 rounded shadow-sm" title="Documentos"><FileText className="w-5 h-5 text-purple-400"/></div>
                <div className="grid place-items-center bg-white p-2 rounded shadow-sm" title="Equipos"><Wrench className="w-5 h-5 text-purple-400"/></div>
              </div>
            </div>
          </div>
        );
      case 6:
        // Métodos de recolección
        return (
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 h-full min-h-[300px] w-full max-w-2xl mx-auto place-items-center">
            <div className="grid grid-rows-2 gap-4 w-full">
               <div className="grid grid-cols-[auto_1fr] items-center gap-3 bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                 <Search className="text-emerald-500 w-6 h-6"/> <span className="font-semibold text-sm">Observación Directa</span>
               </div>
               <div className="grid grid-cols-[auto_1fr] items-center gap-3 bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                 <MessageCircle className="text-emerald-500 w-6 h-6"/> <span className="font-semibold text-sm">Entrevistas</span>
               </div>
            </div>
            <div className="grid place-items-center px-2">
               <ArrowRight className="w-8 h-8 text-slate-300" />
            </div>
            <div className="grid place-items-center bg-emerald-600 text-white font-bold p-6 rounded-full w-32 h-32 text-center shadow-lg border-4 border-emerald-200">
               Datos e<br/>Hallazgos
            </div>
            <div className="grid grid-rows-2 gap-4 w-full col-start-1 row-start-2">
               <div className="grid grid-cols-[auto_1fr] items-center gap-3 bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                 <FileText className="text-emerald-500 w-6 h-6"/> <span className="font-semibold text-sm">Revisión Documental</span>
               </div>
               <div className="grid grid-cols-[auto_1fr] items-center gap-3 bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                 <CheckSquare className="text-emerald-500 w-6 h-6"/> <span className="font-semibold text-sm">Listas de Verificación</span>
               </div>
            </div>
            <div className="grid place-items-center px-2 col-start-2 row-start-2">
               <ArrowRight className="w-8 h-8 text-slate-300" />
            </div>
          </div>
        );
      case 7:
        // Integración de los elementos
        return (
          <div className="grid grid-rows-[1fr_auto_1fr] gap-2 h-full min-h-[300px] w-full max-w-lg mx-auto place-items-center">
             <div className="grid grid-cols-6 gap-2 w-full">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="grid place-items-center bg-slate-800 text-white text-xs font-bold py-2 rounded shadow-sm">
                    E{i}
                  </div>
                ))}
             </div>
             <div className="grid grid-cols-6 gap-2 w-full place-items-center h-12">
                {[1,2,3,4,5,6].map(i => <ArrowDown key={i} className="text-slate-300 w-5 h-5"/>)}
             </div>
             <div className="grid place-items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold p-6 rounded-xl w-full text-center shadow-xl">
                Ejecución Organizada y Eficiente (Auditoría Integral)
             </div>
          </div>
        );
      default:
        return <div>Seleccione un diagrama</div>;
    }
  };

  return (
    <div className="grid w-full h-full bg-slate-50 p-6">
      {renderVisual()}
    </div>
  );
};

// --- LAYOUT PRINCIPAL ---

const LessonLayout: React.FC<LessonLayoutProps> = ({ sections }) => {
  const [activeTabId, setActiveTabId] = useState<number>(sections[0].id);

  const activeSection = sections.find(sec => sec.id === activeTabId) || sections[0];

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 font-sans text-slate-800 p-4 md:p-8 gap-6">
      
      {/* HEADER Y NAVEGACIÓN */}
      <header className="grid gap-6">
        <div className="grid place-items-center text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Elementos del programa de trabajo en auditoría
          </h1>
        </div>

        {/* NAVEGACIÓN POR PESTAÑAS (USANDO GRID) */}
        <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2 bg-slate-200/50 p-2 rounded-xl">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTabId(section.id)}
              className={`
                grid place-items-center text-sm font-semibold py-3 px-2 rounded-lg transition-all duration-200
                ${activeTabId === section.id 
                  ? 'bg-white text-blue-700 shadow-md ring-1 ring-slate-200' 
                  : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'}
              `}
            >
              {section.tabLabel}
            </button>
          ))}
        </nav>
      </header>

      {/* ÁREA DE CONTENIDO (PANEL ACTIVO) */}
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 items-start h-full">
        
        {/* PANEL DE INFORMACIÓN */}
        <Card className="grid grid-rows-[auto_1fr] gap-4 h-full">
          <div className="grid gap-2 border-b border-slate-100 pb-4">
         
            <h2 className="p-2 text-2xl font-bold text-slate-800 leading-tight">
              {activeSection.title}
            </h2>
          </div>
          <div className="grid content-start">
            <p className="p-2 text-slate-600 text-lg leading-relaxed">
              {activeSection.description}
            </p>
          </div>
        </Card>

        {/* PANEL DEL DIAGRAMA */}
        <Card className="grid grid-rows-[auto_1fr] h-full overflow-hidden border-blue-100">

           <DiagramRender activeId={activeSection.id} />
        </Card>

      </main>
    </div>
  );
};

// --- COMPONENTE RAÍZ ---

export default function App() {
  return <LessonLayout sections={LESSON_DATA} />;
}
import React, { useState } from 'react';
import { 
  ClipboardList, 
  UserCheck, 
  FileText, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  TrendingUp, 
  Database,
  Search,
  Activity
} from 'lucide-react';

// --- DEFINICIÓN DE TIPOS ---

interface TabData {
  id: number;
  label: string;
  title: string;
  description: string;
  diagram: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  children: React.ReactNode;
}

interface HeaderProps {
  title: string;
  tabs: { id: number; label: string }[];
  activeTab: number;
  onTabChange: (id: number) => void;
}

// --- COMPONENTES BASE DE MAQUETACIÓN ---

/**
 * Componente Card utilizando CSS Grid
 */
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`grid bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

/**
 * Layout principal de la lección basado estrictamente en CSS Grid
 */
const LessonLayout: React.FC<LessonLayoutProps> = ({ children }) => (
  <main className="grid grid-cols-1 max-w-6xl mx-auto w-full p-4 md:p-8 gap-8">
    {children}
  </main>
);

/**
 * Header que incluye el Título y la Navegación por pestañas (Grid)
 */
const Header: React.FC<HeaderProps> = ({ title, tabs, activeTab, onTabChange }) => (
  <header className="grid grid-rows-[auto_auto] gap-6 bg-slate-900 text-white p-6 md:p-10 shadow-md">
    <div className="grid gap-2 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-[auto_1fr] items-center gap-3">
        <Activity className="w-8 h-8 text-emerald-400" />
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
      </div>
    </div>
    
    {/* Navegación por Pestañas (CSS Grid) */}
    <nav className="grid max-w-6xl mx-auto w-full pb-2 custom-scrollbar">
      <div className="grid grid-cols-4 auto-cols-max gap-2 border-b border-slate-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`grid truncate place-items-center px-4 py-3 text-sm font-semibold transition-colors duration-200 border-b-2 
              ${activeTab === tab.id 
                ? 'border-emerald-400 text-emerald-400 bg-slate-800/50' 
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  </header>
);

// --- COMPONENTES DE DIAGRAMAS (VISUALIZACIONES) ---

const Diagram1 = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center p-8 bg-slate-50 rounded-lg border border-slate-100 min-h-[300px]">
    <div className="grid grid-rows-2 gap-4">
      <div className="grid grid-cols-[auto_1fr] items-center gap-4 bg-blue-100 border border-blue-200 p-4 rounded-lg shadow-sm">
        <Search className="text-blue-600" />
        <span className="font-semibold text-blue-900">Técnicas</span>
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-4 bg-indigo-100 border border-indigo-200 p-4 rounded-lg shadow-sm">
        <Database className="text-indigo-600" />
        <span className="font-semibold text-indigo-900">Herramientas</span>
      </div>
    </div>
    <div className="grid place-items-center rotate-90 md:rotate-0">
      <ArrowRight className="w-8 h-8 text-slate-400" />
    </div>
    <div className="grid grid-cols-[auto_1fr] items-center gap-4 bg-emerald-100 border border-emerald-200 p-6 rounded-lg shadow-md h-full place-content-center">
      <ShieldCheck className="w-10 h-10 text-emerald-600" />
      <span className="font-bold text-lg text-emerald-900">Evidencia de auditoría</span>
    </div>
  </div>
);

const Diagram2 = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center p-8 bg-slate-50 rounded-lg border border-slate-100 min-h-[300px]">
    <div className="grid gap-2 place-items-center bg-white p-6 rounded-lg shadow border border-slate-200 text-center">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full grid place-items-center mb-2">1</div>
      <span className="font-bold text-slate-800">Técnicas</span>
      <span className="text-xs text-slate-500">Recolección de datos</span>
    </div>
    <div className="grid place-items-center rotate-90 md:rotate-0">
      <ArrowRight className="w-6 h-6 text-slate-400" />
    </div>
    <div className="grid gap-2 place-items-center bg-white p-6 rounded-lg shadow border border-slate-200 text-center">
      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full grid place-items-center mb-2">2</div>
      <span className="font-bold text-slate-800">Herramientas</span>
      <span className="text-xs text-slate-500">Registro y análisis</span>
    </div>
    <div className="grid place-items-center rotate-90 md:rotate-0">
      <ArrowRight className="w-6 h-6 text-slate-400" />
    </div>
    <div className="grid gap-2 place-items-center bg-white p-6 rounded-lg shadow border border-emerald-200 border-2 text-center">
      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full grid place-items-center mb-2"><CheckCircle /></div>
      <span className="font-bold text-slate-800">Resultados</span>
      <span className="text-xs text-slate-500">Auditoría Efectiva</span>
    </div>
  </div>
);

const Diagram3 = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 bg-slate-50 rounded-lg border border-slate-100 min-h-[300px]">
    <div className="grid place-items-center relative">
      <div className="absolute inset-0 bg-blue-100 rounded-full opacity-50 blur-3xl w-48 h-48 m-auto"></div>
      <UserCheck className="w-32 h-32 text-blue-600 relative z-10" />
      <span className="mt-4 font-bold text-slate-700 relative z-10">Auditor observando</span>
    </div>
    <div className="grid gap-4 bg-white p-6 rounded-lg shadow-lg border border-slate-200 relative">
      <div className="grid grid-cols-[auto_1fr] items-center gap-3 border-b border-slate-100 pb-3">
        <ClipboardList className="text-indigo-600 w-6 h-6" />
        <h3 className="font-bold text-slate-800">Checklist de Evaluación</h3>
      </div>
      <div className="grid gap-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-[auto_1fr] gap-3 items-center">
            <div className="w-5 h-5 rounded border-2 border-emerald-500 bg-emerald-100 grid place-items-center">
              <CheckCircle className="w-3 h-3 text-emerald-600" />
            </div>
            <div className="h-4 bg-slate-100 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Diagram4 = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center p-8 bg-slate-50 rounded-lg border border-slate-100 min-h-[300px]">
    <div className="grid gap-4 place-items-center bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center h-full">
      <Users className="w-16 h-16 text-blue-500 mb-2" />
      <h3 className="font-bold text-slate-800">Entrevista al Personal</h3>
      <p className="text-sm text-slate-500">Información verbal proporcionada</p>
    </div>
    <div className="grid gap-2 place-items-center">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contraste</span>
      <div className="grid grid-cols-2 gap-1 rotate-90 md:rotate-0">
        <ArrowRight className="w-5 h-5 text-indigo-400 rotate-180" />
        <ArrowRight className="w-5 h-5 text-indigo-400" />
      </div>
    </div>
    <div className="grid gap-4 place-items-center bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center h-full">
      <FileText className="w-16 h-16 text-amber-500 mb-2" />
      <h3 className="font-bold text-slate-800">Revisión Documental</h3>
      <p className="text-sm text-slate-500">Registros formales</p>
    </div>
  </div>
);

const Diagram5 = () => (
  <div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] gap-2 p-6 bg-slate-50 rounded-lg border border-slate-100 w-full max-w-2xl mx-auto">
    {/* Eje Y */}
    <div className="grid place-items-center p-2">
      <span className="font-bold text-slate-500 -rotate-90 whitespace-nowrap tracking-widest text-sm">PROBABILIDAD</span>
    </div>
    
    {/* Matriz 3x3 */}
    <div className="grid grid-cols-3 grid-rows-3 gap-1 h-64 w-full">
      {/* Fila 1 (Probabilidad Alta) */}
      <div className="bg-yellow-200 hover:bg-yellow-300 transition-colors grid place-items-center rounded-tl-md shadow-sm border border-yellow-300"><span className="font-semibold text-yellow-800 text-sm">Medio</span></div>
      <div className="bg-orange-300 hover:bg-orange-400 transition-colors grid place-items-center shadow-sm border border-orange-400"><span className="font-semibold text-orange-900 text-sm">Alto</span></div>
      <div className="bg-red-400 hover:bg-red-500 transition-colors grid place-items-center rounded-tr-md shadow-sm border border-red-500"><span className="font-bold text-white text-sm">Crítico</span></div>
      
      {/* Fila 2 (Probabilidad Media) */}
      <div className="bg-green-200 hover:bg-green-300 transition-colors grid place-items-center shadow-sm border border-green-300"><span className="font-semibold text-green-800 text-sm">Bajo</span></div>
      <div className="bg-yellow-200 hover:bg-yellow-300 transition-colors grid place-items-center shadow-sm border border-yellow-300 relative">
        <span className="font-semibold text-yellow-800 text-sm">Medio</span>
        {/* Marcador de hallazgo */}
        <div className="absolute w-4 h-4 bg-slate-800 rounded-full animate-pulse border-2 border-white"></div>
      </div>
      <div className="bg-orange-300 hover:bg-orange-400 transition-colors grid place-items-center shadow-sm border border-orange-400"><span className="font-semibold text-orange-900 text-sm">Alto</span></div>
      
      {/* Fila 3 (Probabilidad Baja) */}
      <div className="bg-emerald-300 hover:bg-emerald-400 transition-colors grid place-items-center rounded-bl-md shadow-sm border border-emerald-400"><span className="font-semibold text-emerald-900 text-sm">Muy Bajo</span></div>
      <div className="bg-green-200 hover:bg-green-300 transition-colors grid place-items-center shadow-sm border border-green-300"><span className="font-semibold text-green-800 text-sm">Bajo</span></div>
      <div className="bg-yellow-200 hover:bg-yellow-300 transition-colors grid place-items-center rounded-br-md shadow-sm border border-yellow-300"><span className="font-semibold text-yellow-800 text-sm">Medio</span></div>
    </div>

    {/* Esquina inferior izquierda (vacía) */}
    <div></div>
    
    {/* Eje X */}
    <div className="grid place-items-center p-2">
      <span className="font-bold text-slate-500 tracking-widest text-sm">IMPACTO</span>
    </div>
  </div>
);

const Diagram6 = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center p-8 bg-slate-50 rounded-lg border border-slate-100 min-h-[300px]">
    <div className="grid grid-rows-3 gap-4">
      <div className="grid grid-cols-[auto_1fr] items-center gap-4 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
        <div className="bg-blue-100 p-2 rounded-full"><Database className="w-5 h-5 text-blue-600" /></div>
        <div>
          <h4 className="font-bold text-slate-800">Suficiencia</h4>
          <p className="text-xs text-slate-500">Cantidad adecuada</p>
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-4 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
        <div className="bg-indigo-100 p-2 rounded-full"><Activity className="w-5 h-5 text-indigo-600" /></div>
        <div>
          <h4 className="font-bold text-slate-800">Relevancia</h4>
          <p className="text-xs text-slate-500">Relacionada con objetivos</p>
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-4 bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
        <div className="bg-amber-100 p-2 rounded-full"><ShieldCheck className="w-5 h-5 text-amber-600" /></div>
        <div>
          <h4 className="font-bold text-slate-800">Confiabilidad</h4>
          <p className="text-xs text-slate-500">Verificable y consistente</p>
        </div>
      </div>
    </div>
    
    <div className="grid place-items-center relative bg-emerald-600 text-white p-8 rounded-full w-48 h-48 mx-auto shadow-xl border-4 border-emerald-200">
      <div className="grid place-items-center text-center">
        <CheckCircle className="w-10 h-10 mb-2 opacity-80" />
        <span className="font-bold text-lg leading-tight">Evidencia<br/>Válida</span>
      </div>
    </div>
  </div>
);

const Diagram7 = () => (
  <div className="grid grid-rows-[auto_auto_auto] gap-6 place-items-center p-8 bg-slate-50 rounded-lg border border-slate-100 min-h-[300px]">
    <div className="grid place-items-center text-center bg-white px-8 py-4 rounded-full shadow-md border border-slate-200">
      <span className="font-bold text-slate-700">Integración de Técnicas y Herramientas</span>
    </div>
    <div className="grid place-items-center">
      <ArrowRight className="w-6 h-6 text-emerald-500 rotate-90" />
    </div>
    <div className="grid place-items-center text-center bg-emerald-100 px-8 py-4 rounded-lg shadow-md border border-emerald-200 w-full max-w-sm">
      <TrendingUp className="w-8 h-8 text-emerald-600 mb-2" />
      <span className="font-bold text-emerald-900 text-lg">Resultados Sólidos</span>
      <p className="text-sm text-emerald-700 mt-1">Decisiones fundamentadas y reducción de subjetividad</p>
    </div>
  </div>
);

// --- DATOS DE LA LECCIÓN ---

const lessonData: TabData[] = [
  {
    id: 1,
    label: "1. Delimitación",
    title: "Delimitación del uso combinado",
    description: "El uso combinado de técnicas y herramientas en auditoría consiste en integrar métodos de obtención de información con instrumentos de organización y análisis. Esta combinación permite desarrollar un proceso más estructurado, completo y confiable.",
    diagram: <Diagram1 />
  },
  {
    id: 2,
    label: "2. Relación",
    title: "Relación entre técnicas y herramientas",
    description: "Las técnicas permiten recolectar información (como observar, entrevistar o inspeccionar), mientras que las herramientas facilitan su registro, clasificación y análisis. Ambas son complementarias y necesarias para una auditoría efectiva.",
    diagram: <Diagram2 />
  },
  {
    id: 3,
    label: "3. Observación",
    title: "Integración en la observación directa",
    description: "La observación directa puede fortalecerse mediante el uso de listas de verificación, que permiten registrar de manera sistemática lo observado y evitar omisiones durante la evaluación.",
    diagram: <Diagram3 />
  },
  {
    id: 4,
    label: "4. Entrevistas",
    title: "Integración en entrevistas y documentación",
    description: "Las entrevistas pueden complementarse con la revisión documental, lo que permite contrastar la información proporcionada por el personal con los registros formales de la organización.",
    diagram: <Diagram4 />
  },
  {
    id: 5,
    label: "5. Análisis",
    title: "Análisis mediante matrices de riesgo",
    description: "La información obtenida a través de inspecciones y otras técnicas puede ser interpretada mediante matrices de riesgo, facilitando la priorización de problemas según su impacto y probabilidad.",
    diagram: <Diagram5 />
  },
  {
    id: 6,
    label: "6. Calidad",
    title: "Calidad de la evidencia obtenida",
    description: "La integración adecuada de técnicas y herramientas asegura que la evidencia sea suficiente (cantidad adecuada), relevante (relacionada con los objetivos) y confiable (verificable y consistente). Esto fortalece la validez de los resultados.",
    diagram: <Diagram6 />
  },
  {
    id: 7,
    label: "7. Impacto",
    title: "Impacto en la validez de la auditoría",
    description: "El uso combinado mejora la calidad del análisis y reduce la subjetividad. Esto permite generar conclusiones más sólidas y recomendaciones mejor fundamentadas para la toma de decisiones.",
    diagram: <Diagram7 />
  }
];

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const currentSection = lessonData.find(section => section.id === activeTab) || lessonData[0];

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 font-sans text-slate-900">
      
      <Header 
        title="Uso combinado de técnicas y herramientas en auditoría" 
        tabs={lessonData.map(d => ({ id: d.id, label: d.label }))}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <LessonLayout>
        {/* Panel de Contenido basado en Grid */}
        <Card className="grid-rows-[auto_auto_1fr]">
          {/* Cabecera del Panel */}
          <div className="grid p-6 md:p-8 border-b border-slate-100 bg-white">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{currentSection.title}</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {currentSection.description}
            </p>
          </div>
          
          {/* Contenedor del Renderizado del Diagrama */}
          <div className="grid p-6 md:p-8 bg-slate-50/50">
            <div className="grid gap-4">
              {currentSection.diagram}
            </div>
          </div>
        </Card>
      </LessonLayout>
      
    </div>
  );
}
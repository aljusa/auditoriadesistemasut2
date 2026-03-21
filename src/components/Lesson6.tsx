import React, { useState } from 'react';
import { Target,   BookOpen } from 'lucide-react';

// --- TYPES & INTERFACES ---

interface LessonSection {
  id: number;
  tabTitle: string;
  title: string;
  description: string;
  diagram: React.FC;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

// --- DATA ---

const lessonData: LessonSection[] = [
  {
    id: 0,
    tabTitle: "Delimitación",
    title: "Delimitación de la relación entre objetivos y criterios",
    description: "En el proceso de auditoría, los objetivos y los criterios son elementos complementarios que deben mantenerse alineados. Los objetivos definen lo que se desea evaluar, mientras que los criterios establecen las referencias con las cuales se realizará dicha evaluación. Su correcta relación asegura coherencia en todo el proceso.",
    diagram: DiagramaDelimitacion,
  },
  {
    id: 1,
    tabTitle: "Función Objetivos",
    title: "Función de los objetivos en la auditoría",
    description: "Los objetivos responden a la pregunta “¿qué se desea evaluar o lograr?”. Orientan el alcance de la auditoría y permiten enfocar los esfuerzos en aspectos específicos, como la eficacia de los controles o la protección del personal.",
    diagram: DiagramaObjetivos,
  },
  {
    id: 2,
    tabTitle: "Función Criterios",
    title: "Función de los criterios en la auditoría",
    description: "Los criterios responden a la pregunta “¿con base en qué se evaluará?”. Proporcionan estándares o referencias concretas, como normas, políticas o regulaciones, que permiten medir el desempeño o cumplimiento de la organización.",
    diagram: DiagramaCriterios,
  },
  {
    id: 3,
    tabTitle: "Complementariedad",
    title: "Complementariedad entre objetivos y criterios",
    description: "La relación entre ambos elementos es esencial: los objetivos establecen el propósito, mientras que los criterios brindan el marco de referencia. Sin esta complementariedad, la auditoría pierde claridad y estructura.",
    diagram: DiagramaComplementariedad,
  },
  {
    id: 4,
    tabTitle: "Riesgos",
    title: "Riesgos de la desalineación",
    description: "Cuando los objetivos no están respaldados por criterios claros, la evaluación puede volverse subjetiva. Por otro lado, si existen criterios sin objetivos definidos, el proceso carece de dirección y relevancia. Esta desalineación afecta la calidad de los resultados.",
    diagram: DiagramaRiesgos,
  },
  {
    id: 5,
    tabTitle: "Importancia",
    title: "Importancia de la coherencia en la auditoría",
    description: "Una adecuada alineación entre objetivos y criterios garantiza resultados coherentes, útiles y aplicables. Esto facilita la toma de decisiones informadas y fortalece la efectividad del proceso de auditoría.",
    diagram: DiagramaImportancia,
  }
];

// --- DIAGRAM COMPONENTS ---
// Utilizando SVG para crear representaciones visuales precisas y escalables

function SvgDefs() {
  return (
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
      </marker>
      <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
      </marker>
      <marker id="arrowstart" markerWidth="10" markerHeight="7" refX="1" refY="3.5" orient="auto">
        <polygon points="10 0, 0 3.5, 10 7" fill="#64748b" />
      </marker>
    </defs>
  );
}

function DiagramaDelimitacion() {
  return (
    <svg viewBox="0 0 500 200" className="w-full h-full max-h-64 font-sans drop-shadow-sm">
      <SvgDefs />
      {/* Objetivos */}
      <rect x="50" y="60" width="140" height="80" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="120" y="100" fill="#1e3a8a" textAnchor="middle" fontWeight="bold" fontSize="16">Objetivos</text>
      <text x="120" y="120" fill="#64748b" textAnchor="middle" fontSize="12">¿Qué evaluar?</text>
      
      {/* Criterios */}
      <rect x="310" y="60" width="140" height="80" rx="8" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
      <text x="380" y="100" fill="#064e3b" textAnchor="middle" fontWeight="bold" fontSize="16">Criterios</text>
      <text x="380" y="120" fill="#64748b" textAnchor="middle" fontSize="12">¿Con qué comparar?</text>
      
      {/* Conexión Bidireccional */}
      <path d="M 195 100 L 305 100" stroke="#64748b" strokeWidth="3" markerEnd="url(#arrowhead)" markerStart="url(#arrowstart)" />
      <text x="250" y="85" fill="#475569" textAnchor="middle" fontSize="12" fontWeight="600">Interdependencia</text>
    </svg>
  );
}

function DiagramaObjetivos() {
  return (
    <svg viewBox="0 0 500 300" className="w-full h-full max-h-72 font-sans drop-shadow-sm">
      <SvgDefs />
      {/* Centro */}
      <circle cx="250" cy="150" r="50" fill="#eff6ff" stroke="#3b82f6" strokeWidth="3" />
      <text x="250" y="145" fill="#1e3a8a" textAnchor="middle" fontWeight="bold" fontSize="14">¿Qué</text>
      <text x="250" y="165" fill="#1e3a8a" textAnchor="middle" fontWeight="bold" fontSize="14">evaluar?</text>

      {/* Ramas */}
      <path d="M 250 95 L 250 40" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M 200 180 L 130 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M 300 180 L 370 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Nodos */}
      <rect x="180" y="10" width="140" height="30" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="250" y="30" fill="#334155" textAnchor="middle" fontSize="14">Alcance de Auditoría</text>

      <rect x="30" y="235" width="160" height="30" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="110" y="255" fill="#334155" textAnchor="middle" fontSize="14">Eficacia de Controles</text>

      <rect x="310" y="235" width="160" height="30" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="390" y="255" fill="#334155" textAnchor="middle" fontSize="14">Protección de Personal</text>
    </svg>
  );
}

function DiagramaCriterios() {
  return (
    <svg viewBox="0 0 500 300" className="w-full h-full max-h-72 font-sans drop-shadow-sm">
      <SvgDefs />
      {/* Centro */}
      <circle cx="250" cy="150" r="55" fill="#f0fdf4" stroke="#10b981" strokeWidth="3" />
      <text x="250" y="145" fill="#064e3b" textAnchor="middle" fontWeight="bold" fontSize="14">¿Con qué</text>
      <text x="250" y="165" fill="#064e3b" textAnchor="middle" fontWeight="bold" fontSize="14">comparar?</text>

      {/* Ramas */}
      <path d="M 250 90 L 250 40" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M 195 175 L 130 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M 305 175 L 370 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Nodos */}
      <rect x="190" y="10" width="120" height="30" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="250" y="30" fill="#334155" textAnchor="middle" fontSize="14">Normas ISO</text>

      <rect x="50" y="235" width="140" height="30" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="120" y="255" fill="#334155" textAnchor="middle" fontSize="14">Políticas Internas</text>

      <rect x="310" y="235" width="140" height="30" rx="4" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="380" y="255" fill="#334155" textAnchor="middle" fontSize="14">Regulaciones Legales</text>
    </svg>
  );
}

function DiagramaComplementariedad() {
  return (
    <svg viewBox="0 0 500 250" className="w-full h-full max-h-72 font-sans drop-shadow-sm">
      {/* Fondo Mapa */}
      <rect x="100" y="50" width="120" height="150" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="160" cy="100" r="15" fill="#3b82f6" />
      <circle cx="160" cy="100" r="6" fill="#fff" />
      <path d="M 160 115 L 150 140 L 170 140 Z" fill="#3b82f6" />
      <text x="160" y="180" fill="#1e3a8a" textAnchor="middle" fontWeight="bold" fontSize="16">El Destino</text>
      <text x="160" y="195" fill="#64748b" textAnchor="middle" fontSize="12">(Objetivos)</text>

      {/* Fondo Brújula */}
      <circle cx="360" cy="125" r="60" fill="#f0fdf4" stroke="#10b981" strokeWidth="4" />
      <polygon points="360 80, 375 125, 360 170, 345 125" fill="#10b981" />
      <polygon points="360 80, 360 170, 345 125" fill="#047857" opacity="0.3" />
      <circle cx="360" cy="125" r="8" fill="#fff" stroke="#10b981" strokeWidth="2" />
      
      <text x="360" y="215" fill="#064e3b" textAnchor="middle" fontWeight="bold" fontSize="16">La Guía</text>
      <text x="360" y="230" fill="#64748b" textAnchor="middle" fontSize="12">(Criterios)</text>

      <path d="M 230 125 L 290 125" stroke="#cbd5e1" strokeWidth="4" />
      <path d="M 260 105 L 260 145" stroke="#cbd5e1" strokeWidth="4" />
    </svg>
  );
}

function DiagramaRiesgos() {
  return (
    <svg viewBox="0 0 600 300" className="w-full h-full max-h-80 font-sans drop-shadow-sm">
      {/* Escenario Alineado */}
      <rect x="20" y="20" width="560" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="60" cy="75" r="20" fill="#10b981" />
      <path d="M 50 75 L 58 83 L 70 65" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      <text x="100" y="55" fill="#334155" fontWeight="bold" fontSize="16">Escenario Alineado (Objetivos + Criterios)</text>
      <rect x="100" y="70" width="400" height="40" rx="4" fill="#eff6ff" />
      <text x="300" y="95" fill="#1e3a8a" textAnchor="middle" fontSize="14">Evaluación objetiva, dirección clara y resultados útiles.</text>

      {/* Escenario Desalineado */}
      <rect x="20" y="150" width="560" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="60" cy="215" r="20" fill="#ef4444" />
      <path d="M 50 205 L 70 225 M 70 205 L 50 225" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      <text x="100" y="185" fill="#334155" fontWeight="bold" fontSize="16">Escenario Desalineado</text>
      
      <rect x="100" y="200" width="190" height="60" rx="4" fill="#fef2f2" />
      <text x="195" y="225" fill="#991b1b" textAnchor="middle" fontSize="12" fontWeight="bold">Sin Criterios:</text>
      <text x="195" y="240" fill="#991b1b" textAnchor="middle" fontSize="12">Evaluación subjetiva</text>

      <rect x="310" y="200" width="190" height="60" rx="4" fill="#fffbeb" />
      <text x="405" y="225" fill="#92400e" textAnchor="middle" fontSize="12" fontWeight="bold">Sin Objetivos:</text>
      <text x="405" y="240" fill="#92400e" textAnchor="middle" fontSize="12">Proceso sin dirección</text>
    </svg>
  );
}

function DiagramaImportancia() {
  return (
    <svg viewBox="0 0 700 150" className="w-full h-full max-h-48 font-sans drop-shadow-sm">
      <SvgDefs />
      
      <rect x="10" y="50" width="120" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="70" y="79" fill="#1e3a8a" textAnchor="middle" fontWeight="bold" fontSize="14">Objetivos</text>

      <path d="M 135 75 L 175 75" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />

      <rect x="185" y="50" width="120" height="50" rx="6" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
      <text x="245" y="79" fill="#064e3b" textAnchor="middle" fontWeight="bold" fontSize="14">Criterios</text>

      <path d="M 310 75 L 350 75" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />

      <rect x="360" y="50" width="140" height="50" rx="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
      <text x="430" y="79" fill="#334155" textAnchor="middle" fontWeight="bold" fontSize="14">Evaluación Coherente</text>

      <path d="M 505 75 L 545 75" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />

      <rect x="555" y="50" width="130" height="50" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <text x="620" y="73" fill="#92400e" textAnchor="middle" fontWeight="bold" fontSize="14">Resultados</text>
      <text x="620" y="88" fill="#92400e" textAnchor="middle" fontSize="11">Útiles y Aplicables</text>
    </svg>
  );
}


// --- CORE UI COMPONENTS ---

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const LessonLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // CSS Grid principal: Filas para cabecera, navegación y área principal
    <div className="grid grid-rows-[auto_auto_1fr] min-h-screen bg-slate-50 text-slate-800 font-sans">
      {children}
    </div>
  );
};

// --- MAIN APPLICATION ---

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentLesson = lessonData[activeTab];
  const ActiveDiagram = currentLesson.diagram;

  return (
    <LessonLayout>
      
      {/* HEADER (con Title) */}
      <header className="grid grid-cols-[auto_1fr] items-center gap-4 bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <Target size={28} />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900">
            Relación entre Objetivos y Criterios de Auditoría
          </h1>
        </div>
      </header>

      {/* NAV (Pestañas) */}
      <nav className="bg-slate-100 border-b border-slate-300 px-6 pt-4">
        <div className="max-w-7xl mx-auto">
          {/* Uso estricto de CSS Grid para las pestañas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 items-end">
            {lessonData.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setActiveTab(lesson.id)}
                className={`
                  grid place-items-center py-3 px-2 rounded-t-lg font-semibold text-sm transition-all duration-200 border-b-2
                  ${activeTab === lesson.id 
                    ? 'bg-white text-blue-700 border-blue-600 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]' 
                    : 'bg-slate-200/50 text-slate-500 border-transparent hover:bg-slate-200 hover:text-slate-700'}
                `}
              >
                {lesson.tabTitle}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="grid p-6 lg:p-10 max-w-7xl mx-auto w-full items-start">
        
        {/* DIAGRAM TITLE & DESCRIPTION */}
        <div className="grid gap-3 mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
            {currentLesson.title}
          </h2>
          <div className="grid grid-cols-[auto_1fr] gap-4 items-start bg-blue-50/50 p-5 rounded-lg border border-blue-100">
            <BookOpen className="text-blue-500 mt-1" size={24} />
            <p className="text-lg text-slate-600 leading-relaxed">
              {currentLesson.description}
            </p>
          </div>
        </div>

        {/* DIAGRAM RENDER EN CARD */}
        <Card className="grid p-8 bg-white min-h-[400px] place-items-center relative">
  

          <div className="w-full max-w-4xl grid place-items-center py-8">
            <ActiveDiagram />
          </div>

        </Card>

      </main>
    </LessonLayout>
  );
}
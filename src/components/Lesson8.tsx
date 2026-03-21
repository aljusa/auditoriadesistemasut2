import React, { useState } from 'react';
import { 
  AlertTriangle, Users, BookOpen, UserX, ShieldAlert, 
  CheckCircle2, XCircle, DoorClosed, EyeOff, Zap, Activity 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, 
  ResponsiveContainer, AreaChart, Area 
} from 'recharts';

// --- Definición de Tipos ---

interface Section {
  id: string;
  title: string;
  description: string;
  visualType: string;
}

interface LessonLayoutProps {
  sections: Section[];
  activeSectionId: string;
  onTabChange: (id: string) => void;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface DiagramRenderProps {
  visualType: string;
}

// --- Datos de la Lección ---

const lessonSections: Section[] = [
  {
    id: 'delimitacion',
    title: '1. Delimitación de las señales de alerta',
    description: 'Las señales de alerta en el personal son indicios relacionados con comportamientos, prácticas o deficiencias en la gestión del recurso humano que pueden comprometer la seguridad organizacional. Estas señales permiten identificar riesgos potenciales antes de que se conviertan en incidentes.',
    visualType: 'grid-alerts'
  },
  {
    id: 'capacitacion',
    title: '2. Falta de capacitación en seguridad',
    description: 'La ausencia de formación en normas y procedimientos de seguridad limita la capacidad del personal para actuar correctamente ante situaciones de riesgo. Esto incrementa la probabilidad de errores y fallas operativas.',
    visualType: 'chart-training'
  },
  {
    id: 'protocolos',
    title: '3. Incumplimiento de protocolos',
    description: 'El no seguir procedimientos definidos, como controles de acceso o uso de equipos, constituye una señal de alerta importante. Este comportamiento puede generar vulnerabilidades incluso cuando existen medidas adecuadas.',
    visualType: 'diagram-protocols'
  },
  {
    id: 'rotacion',
    title: '4. Alta rotación en áreas críticas',
    description: 'La rotación frecuente de personal en áreas sensibles puede afectar la continuidad, el control y la confiabilidad. Además, dificulta la consolidación de una cultura de seguridad estable.',
    visualType: 'chart-rotation'
  },
  {
    id: 'accesos',
    title: '5. Accesos indebidos',
    description: 'El ingreso de personal a áreas no autorizadas indica fallas en el control de accesos o en el cumplimiento de normas. Esto puede exponer información, equipos o procesos críticos.',
    visualType: 'map-access'
  },
  {
    id: 'conductas',
    title: '6. Conductas inusuales o negligentes',
    description: 'Comportamientos atípicos, descuidos o actitudes contrarias a las políticas organizacionales pueden ser indicios de riesgo. Estas conductas pueden derivar en errores, incidentes o incluso acciones intencionales.',
    visualType: 'grid-behaviors'
  },
  {
    id: 'impacto',
    title: '7. Impacto en la cultura de seguridad',
    description: 'La presencia de estas señales refleja posibles debilidades en la cultura de seguridad y en los procesos de supervisión. Su identificación temprana permite implementar mejoras en la capacitación, el control y la gestión del personal.',
    visualType: 'diagram-culture'
  }
];

// --- Componentes Base ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`grid bg-white border border-slate-200 rounded-xl shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

// --- Componentes de Visualización (Diagram Render) ---

const DiagramRender: React.FC<DiagramRenderProps> = ({ visualType }) => {
  // Renderizado dinámico basado en el tipo de visualización requerido
  switch (visualType) {
    case 'grid-alerts':
      return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 place-items-center h-full min-h-[300px] p-4 bg-slate-50 rounded-lg">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="grid place-items-center relative">
              <Users size={48} className={i === 2 || i === 4 ? "text-red-400" : "text-slate-400"} />
              {(i === 2 || i === 4) && (
                <div className="absolute -top-2 -right-2 grid place-items-center bg-red-100 rounded-full p-1 border-2 border-white">
                  <AlertTriangle size={16} className="text-red-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      );

    case 'chart-training':
      const trainingData = [
        { name: 'Con Capacitación', errores: 15, preparacion: 85 },
        { name: 'Sin Capacitación', errores: 75, preparacion: 20 },
      ];
      return (
        <div className="grid h-full min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={trainingData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <RechartsTooltip cursor={{fill: 'transparent'}} />
              <Legend />
              <Bar dataKey="errores" name="Probabilidad de Errores %" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="preparacion" name="Nivel de Preparación %" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );

    case 'diagram-protocols':
      return (
        <div className="grid grid-cols-1 grid-rows-3 gap-4 h-full min-h-[300px] bg-slate-50 p-6 rounded-lg font-medium text-slate-700">
          <div className="grid place-items-center bg-white border-2 border-slate-200 rounded-lg shadow-sm">
            Inicio de Operación
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid place-items-center border-l-2 border-dashed border-slate-300">
              <span className="text-xs text-slate-400 mb-2">Sigue Protocolo</span>
              <div className="grid place-items-center w-full h-12 bg-green-100 text-green-700 rounded-lg">
                <CheckCircle2 size={24} className="mb-1" />
              </div>
            </div>
            <div className="grid place-items-center border-l-2 border-dashed border-slate-300">
              <span className="text-xs text-slate-400 mb-2">Omite Protocolo</span>
              <div className="grid place-items-center w-full h-12 bg-red-100 text-red-700 rounded-lg">
                <XCircle size={24} className="mb-1" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid place-items-center text-green-600 font-semibold bg-white rounded-lg shadow-sm border border-green-200">
              Operación Segura
            </div>
            <div className="grid place-items-center text-red-600 font-semibold bg-white rounded-lg shadow-sm border border-red-200">
              ¡Señal de Alerta!
            </div>
          </div>
        </div>
      );

    case 'chart-rotation':
      const rotationData = [
        { mes: 'Ene', ingresos: 2, salidas: 1 },
        { mes: 'Feb', ingresos: 3, salidas: 3 },
        { mes: 'Mar', ingresos: 5, salidas: 4 },
        { mes: 'Abr', ingresos: 7, salidas: 8 },
        { mes: 'May', ingresos: 6, salidas: 7 },
        { mes: 'Jun', ingresos: 9, salidas: 9 },
      ];
      return (
        <div className="grid h-full min-h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={rotationData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="mes" />
              <YAxis />
              <RechartsTooltip />
              <Legend />
              <Area type="monotone" dataKey="ingresos" name="Ingresos de Personal" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Area type="monotone" dataKey="salidas" name="Salidas (Rotación)" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );

    case 'map-access':
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full min-h-[300px] bg-slate-200 p-2 rounded-lg">
          <div className="grid place-items-center bg-white rounded-md border-2 border-slate-300">
            <span className="text-slate-500 font-medium">Área Pública</span>
            <Users className="text-slate-400" />
          </div>
          <div className="grid place-items-center bg-white rounded-md border-2 border-slate-300">
            <span className="text-slate-500 font-medium">Oficinas</span>
            <Users className="text-slate-400" />
          </div>
          <div className="grid place-content-center gap-2 bg-red-50 rounded-md border-2 border-red-300 relative overflow-hidden">
            <div className="absolute top-2 left-2 flex items-center gap-1 text-red-600 text-xs font-bold">
              <DoorClosed size={14} /> RESTRINGIDO
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="grid place-items-center">
                 <ShieldAlert className="text-red-300" size={32}/>
              </div>
              <div className="grid place-items-center relative">
                 <UserX className="text-red-600 animate-pulse" size={32}/>
                 <span className="absolute -bottom-5 text-[10px] text-red-600 font-bold">Acceso Indebido</span>
              </div>
            </div>
          </div>
          <div className="grid place-items-center bg-white rounded-md border-2 border-slate-300">
            <span className="text-slate-500 font-medium">Almacén</span>
          </div>
        </div>
      );

    case 'grid-behaviors':
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full min-h-[300px]">
          <div className="grid grid-rows-[auto_1fr] gap-2 p-4 bg-orange-50 border border-orange-200 rounded-lg place-items-center text-center">
            <EyeOff size={40} className="text-orange-500" />
            <div>
              <h4 className="font-bold text-orange-700">Distracción</h4>
              <p className="text-xs text-orange-600 mt-1">Falta de atención en tareas críticas.</p>
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-2 p-4 bg-yellow-50 border border-yellow-200 rounded-lg place-items-center text-center">
            <Activity size={40} className="text-yellow-500" />
            <div>
              <h4 className="font-bold text-yellow-700">Omisión</h4>
              <p className="text-xs text-yellow-600 mt-1">Salto de pasos en procedimientos.</p>
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-2 p-4 bg-red-50 border border-red-200 rounded-lg place-items-center text-center">
            <Zap size={40} className="text-red-500" />
            <div>
              <h4 className="font-bold text-red-700">Acción Indebida</h4>
              <p className="text-xs text-red-600 mt-1">Conducta contraria a las políticas.</p>
            </div>
          </div>
        </div>
      );

    case 'diagram-culture':
      return (
        <div className="grid grid-rows-[auto_auto_auto] gap-6 place-items-center h-full min-h-[300px] bg-slate-50 p-6 rounded-lg">
          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="grid place-items-center bg-red-100 text-red-700 text-xs font-bold p-2 rounded shadow-sm text-center">Falta Capacitación</div>
            <div className="grid place-items-center bg-red-100 text-red-700 text-xs font-bold p-2 rounded shadow-sm text-center">Accesos Indebidos</div>
            <div className="grid place-items-center bg-red-100 text-red-700 text-xs font-bold p-2 rounded shadow-sm text-center">Alta Rotación</div>
          </div>
          <div className="grid grid-cols-3 gap-2 w-full place-items-center">
            <div className="grid place-items-center w-1 h-8 bg-slate-300"></div>
            <div className="grid place-items-center w-1 h-8 bg-slate-300"></div>
            <div className="grid place-items-center w-1 h-8 bg-slate-300"></div>
          </div>
          <div className="grid place-items-center w-full max-w-sm bg-slate-800 text-white p-4 rounded-xl shadow-lg border-b-4 border-red-500">
            <ShieldAlert className="mb-2 text-red-400" size={32} />
            <h3 className="font-bold text-lg">Cultura de Seguridad Debilitada</h3>
            <p className="text-xs text-slate-300 text-center mt-2">
              Las señales no atendidas fracturan el ambiente organizacional.
            </p>
          </div>
        </div>
      );

    default:
      return (
        <div className="grid place-items-center h-full min-h-[300px] bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 text-slate-400">
          Visualización no disponible
        </div>
      );
  }
};

// --- Componente de Layout (Uso estricto de CSS Grid) ---

const LessonLayout: React.FC<LessonLayoutProps> = ({ sections, activeSectionId, onTabChange }) => {
  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];

  return (
    <div className="grid grid-rows-[auto_auto_1fr] min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Header */}
      <header className="grid grid-cols-[auto_1fr] gap-4 place-items-center px-6 py-4 bg-white border-b border-slate-200">
        <div className="grid place-items-center w-10 h-10 bg-blue-600 rounded-lg shadow-sm">
          <BookOpen className="text-white" size={20} />
        </div>
        <div className="grid place-content-start w-full">
          <h1 className="text-xl font-bold text-slate-800">Señales de alerta en el personal</h1>
        </div>
      </header>

      {/* Navegación por Pestañas (Tabs) */}
      <nav className="grid bg-white border-b border-slate-200 w-full overflow-x-auto">
        <div className="grid grid-flow-col auto-cols-max">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onTabChange(section.id)}
              className={`grid place-items-center px-6 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap outline-none hover:bg-slate-50
                ${activeSectionId === section.id 
                  ? 'border-blue-600 text-blue-700 bg-blue-50/30' 
                  : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </nav>

      {/* Área de Contenido Principal */}
      <main className="grid place-items-start p-6 md:p-8 overflow-y-auto">
        <div className="grid w-full max-w-6xl mx-auto gap-6">
          
          <Card className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            
            {/* Panel de Texto (Izquierda) */}
            <div className="grid grid-rows-[auto_1fr] gap-4 content-start">
              <div className="grid gap-2">
               
                <h3 className="text-2xl font-extrabold text-slate-800 leading-tight">
                  {activeSection.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {activeSection.description}
              </p>
            </div>

            {/* Panel de Diagrama (Derecha) */}
            <div className="grid grid-rows-[auto_1fr] gap-4 bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="grid place-items-start">
               
              </div>
              <div className="grid place-items-center w-full bg-white rounded-lg shadow-inner border border-slate-200 overflow-hidden">
                <DiagramRender visualType={activeSection.visualType} />
              </div>
            </div>

          </Card>
          
        </div>
      </main>

    </div>
  );
};

// --- Componente Principal (App) ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(lessonSections[0].id);

  return (
    <LessonLayout 
      sections={lessonSections} 
      activeSectionId={activeTab} 
      onTabChange={setActiveTab} 
    />
  );
}
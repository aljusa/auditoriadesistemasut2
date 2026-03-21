import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, XCircle, ArrowRight, AlertTriangle, PlayCircle, FileText, CheckSquare, Clock } from 'lucide-react';

// --- DEFINICIÓN DE TIPOS ---
interface SectionData {
  id: string;
  tabLabel: string;
  diagramTitle: string;
  description: string;
  DiagramComponent: React.FC;
}

// --- COMPONENTES BASE (DISEÑO Y MAQUETACIÓN ESTRICTAMENTE CON CSS GRID) ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`grid gap-6 p-8 bg-white rounded-2xl shadow-lg border border-slate-100 ${className}`}>
    {children}
  </div>
);

const LessonLayout: React.FC<{ header: React.ReactNode; nav: React.ReactNode; children: React.ReactNode }> = ({ header, nav, children }) => (
  <div className="grid grid-rows-[auto_auto_1fr] min-h-screen bg-slate-50 font-sans text-slate-800">
    <header className="grid place-content-center bg-blue-900 text-white p-8 shadow-md">
      {header}
    </header>
    <nav className="grid border-b border-slate-200 bg-white top-0 z-10 shadow-sm px-4 md:px-8 py-4">
      {nav}
    </nav>
    <main className="grid p-4 md:p-8 w-full max-w-6xl mx-auto items-start">
      {children}
    </main>
  </div>
);

// --- COMPONENTES DE DIAGRAMAS (RENDERIZADO VISUAL) ---

// Diagrama 1: Flujo de inicio
const DiagramDelimitacion: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto_auto_auto] gap-4 place-items-center bg-slate-50 p-8 rounded-xl border border-slate-200">
    <div className="grid place-items-center p-6 bg-blue-600 text-white rounded-lg shadow-md w-full text-center transform scale-105 border-2 border-blue-300 ring-4 ring-blue-100">
      <PlayCircle className="mb-2 w-8 h-8" />
      <span className="font-bold">Planificación</span>
      <span className="text-xs text-blue-100 mt-1">(Punto de partida)</span>
    </div>
    <ArrowRight className="text-slate-400 w-8 h-8 rotate-90 md:rotate-0" />
    <div className="grid place-items-center p-6 bg-slate-200 text-slate-600 rounded-lg w-full text-center">
      <FileText className="mb-2 w-8 h-8 opacity-50" />
      <span className="font-medium">Ejecución</span>
    </div>
    <ArrowRight className="text-slate-400 w-8 h-8 rotate-90 md:rotate-0" />
    <div className="grid place-items-center p-6 bg-slate-200 text-slate-600 rounded-lg w-full text-center">
      <CheckSquare className="mb-2 w-8 h-8 opacity-50" />
      <span className="font-medium">Informe</span>
    </div>
  </div>
);

// Diagrama 2: Distribución de recursos (Recharts)
const dataRecursos = [
  { name: 'Humanos', value: 45, color: '#3b82f6' },
  { name: 'Tiempo', value: 35, color: '#10b981' },
  { name: 'Materiales', value: 20, color: '#f59e0b' },
];

const DiagramRecursos: React.FC = () => (
  <div className="grid h-80 bg-white p-4 rounded-xl border border-slate-200">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={dataRecursos}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          paddingAngle={5}
          dataKey="value"
        >
          {dataRecursos.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
      </PieChart>
    </ResponsiveContainer>
    <div className="grid grid-cols-3 gap-2 mt-4 text-center">
      {dataRecursos.map((item) => (
        <div key={item.name} className="grid place-items-center">
          <div className="w-4 h-4 rounded-full mb-1" style={{ backgroundColor: item.color }}></div>
          <span className="text-sm font-medium">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

// Diagrama 3: Comparativa de omisiones
const DiagramOmisiones: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="grid gap-4 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
      <h4 className="font-bold text-emerald-800 text-lg border-b border-emerald-200 pb-2">Auditoría Planificada (Completa)</h4>
      <ul className="grid gap-3">
        {['Área Financiera revisada', 'Inventario verificado', 'Cumplimiento legal evaluado', 'Riesgos operativos medidos'].map((item, i) => (
          <li key={i} className="grid grid-cols-[auto_1fr] gap-3 items-center text-emerald-900">
            <CheckCircle2 className="text-emerald-500 w-5 h-5" /> <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="grid gap-4 p-6 bg-rose-50 rounded-xl border border-rose-200">
      <h4 className="font-bold text-rose-800 text-lg border-b border-rose-200 pb-2">Auditoría Sin Planificar (Incompleta)</h4>
      <ul className="grid gap-3">
        {['Área Financiera revisada', 'Inventario verificado'].map((item, i) => (
          <li key={i} className="grid grid-cols-[auto_1fr] gap-3 items-center text-slate-600">
            <CheckCircle2 className="text-emerald-500 w-5 h-5" /> <span>{item}</span>
          </li>
        ))}
        {['Cumplimiento legal omitido', 'Riesgos operativos ignorados'].map((item, i) => (
          <li key={i} className="grid grid-cols-[auto_1fr] gap-3 items-center text-rose-700 font-medium">
            <XCircle className="text-rose-500 w-5 h-5" /> <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Diagrama 4: Prioridades (Recharts)
const dataPrioridades = [
  { area: 'Tesorería', riesgo: 95, prioridad: 'Alta' },
  { area: 'Compras', riesgo: 80, prioridad: 'Alta' },
  { area: 'RRHH', riesgo: 45, prioridad: 'Media' },
  { area: 'Marketing', riesgo: 20, prioridad: 'Baja' },
];

const DiagramPrioridades: React.FC = () => (
  <div className="grid h-80 bg-white p-4 rounded-xl border border-slate-200">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={dataPrioridades} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} />
        <YAxis dataKey="area" type="category" width={80} tick={{ fill: '#334155', fontWeight: 600 }} />
        <Tooltip cursor={{ fill: '#f1f5f9' }} />
        <Bar dataKey="riesgo" radius={[0, 4, 4, 0]}>
          {dataPrioridades.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.riesgo > 70 ? '#ef4444' : entry.riesgo > 40 ? '#f59e0b' : '#3b82f6'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    <div className="grid grid-cols-3 gap-4 mt-2 text-center text-sm font-medium">
      <span className="text-red-500">Prioridad Alta (&gt;70%)</span>
      <span className="text-amber-500">Prioridad Media (40-70%)</span>
      <span className="text-blue-500">Prioridad Baja (&lt;40%)</span>
    </div>
  </div>
);

// Diagrama 5: Eficiencia del proceso
const DiagramEficiencia: React.FC = () => (
  <div className="grid grid-rows-2 gap-6">
    <div className="grid grid-cols-[200px_1fr] gap-4 bg-blue-50 p-4 rounded-xl border border-blue-200 items-center">
      <div className="grid place-items-center text-blue-800 font-bold text-center">
        <Clock className="mb-2" /> Proceso Organizado
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="grid place-items-center h-12 bg-blue-500 text-white rounded-md font-bold text-sm shadow-sm relative">
             Fase {step}
             {step < 4 && <ArrowRight className="absolute -right-3 text-blue-300 w-4 h-4 z-10 bg-blue-50 rounded-full" />}
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-[200px_1fr] gap-4 bg-slate-100 p-4 rounded-xl border border-slate-300 items-center">
      <div className="grid place-items-center text-slate-600 font-bold text-center">
        <AlertTriangle className="mb-2" /> Proceso Desorganizado
      </div>
      <div className="grid grid-cols-4 gap-2 relative">
        <div className="grid place-items-center h-12 bg-slate-400 text-white rounded-md font-bold text-sm col-span-2">Fase 1 (Retraso)</div>
        <div className="grid place-items-center h-12 bg-rose-400 text-white rounded-md font-bold text-sm border-2 border-dashed border-rose-600">Interrupción</div>
        <div className="grid place-items-center h-12 bg-slate-400 text-white rounded-md font-bold text-sm">Fase 2</div>
      </div>
    </div>
  </div>
);

// Diagrama 6: Causa y Efecto
const DiagramConsecuencias: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-6 place-items-center bg-slate-50 p-8 rounded-xl border border-slate-200">
    <div className="grid place-items-center p-6 bg-rose-600 text-white rounded-xl shadow-lg font-bold text-center w-48 h-32 border-4 border-rose-200">
      Falta de Planificación
    </div>
    
    <div className="grid grid-rows-3 gap-8 place-items-center h-full">
      <ArrowRight className="text-rose-400 rotate-90 md:rotate-0 w-8 h-8" />
      <ArrowRight className="text-rose-400 rotate-90 md:rotate-0 w-8 h-8" />
      <ArrowRight className="text-rose-400 rotate-90 md:rotate-0 w-8 h-8" />
    </div>

    <div className="grid grid-rows-3 gap-4 w-full">
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center p-4 bg-white border border-rose-200 rounded-lg shadow-sm text-rose-900 font-medium">
        <AlertTriangle className="text-rose-500" /> Desorden operativo
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center p-4 bg-white border border-rose-200 rounded-lg shadow-sm text-rose-900 font-medium">
        <XCircle className="text-rose-500" /> Omisiones críticas
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center p-4 bg-white border border-rose-200 rounded-lg shadow-sm text-rose-900 font-medium">
        <FileText className="text-rose-500" /> Resultados poco confiables
      </div>
    </div>
  </div>
);

// --- DATOS DE LA LECCIÓN ---
const LESSON_DATA: SectionData[] = [
  {
    id: 'delimitacion',
    tabLabel: '1. Delimitación',
    diagramTitle: 'Delimitación de la planificación en auditoría',
    description: 'La planificación es la fase inicial del proceso de auditoría en la que se organiza y define cómo se llevará a cabo la evaluación. En esta etapa se establecen lineamientos que orientan todas las actividades posteriores, asegurando orden y coherencia.',
    DiagramComponent: DiagramDelimitacion
  },
  {
    id: 'optimizacion',
    tabLabel: '2. Optimización',
    diagramTitle: 'Optimización de recursos',
    description: 'Una adecuada planificación permite asignar de manera eficiente los recursos humanos, materiales y de tiempo. Esto evita desperdicios y asegura que cada elemento disponible sea utilizado de forma estratégica.',
    DiagramComponent: DiagramRecursos
  },
  {
    id: 'prevencion',
    tabLabel: '3. Prevención',
    diagramTitle: 'Prevención de omisiones',
    description: 'Planificar permite identificar todas las áreas y aspectos que deben ser evaluados, reduciendo el riesgo de dejar elementos importantes sin revisar. Esto garantiza una auditoría más completa.',
    DiagramComponent: DiagramOmisiones
  },
  {
    id: 'prioridades',
    tabLabel: '4. Prioridades',
    diagramTitle: 'Establecimiento de prioridades',
    description: 'La planificación facilita definir qué áreas o procesos requieren mayor atención, en función de su nivel de riesgo o criticidad. Esto permite enfocar los esfuerzos donde son más necesarios.',
    DiagramComponent: DiagramPrioridades
  },
  {
    id: 'eficiencia',
    tabLabel: '5. Eficiencia',
    diagramTitle: 'Mejora de la eficiencia del proceso',
    description: 'Al contar con una estructura clara desde el inicio, se reducen tiempos innecesarios y se mejora la ejecución de las actividades. Esto contribuye a un proceso más ágil y organizado.',
    DiagramComponent: DiagramEficiencia
  },
  {
    id: 'consecuencias',
    tabLabel: '6. Consecuencias',
    diagramTitle: 'Consecuencias de una planificación deficiente',
    description: 'La falta de planificación puede generar desorden, omisiones y resultados poco confiables. Esto afecta la calidad de la auditoría y limita su utilidad para la toma de decisiones.',
    DiagramComponent: DiagramConsecuencias
  }
];

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>(LESSON_DATA[0].id);

  const activeSection = LESSON_DATA.find(section => section.id === activeTabId) || LESSON_DATA[0];

  const HeaderContent = (
    <div className="grid gap-2 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Importancia de la planificación en la auditoría</h1>
    </div>
  );

  const NavigationContent = (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full max-w-6xl mx-auto">
      {LESSON_DATA.map((section) => {
        const isActive = activeTabId === section.id;
        return (
          <button
            key={section.id}
            onClick={() => setActiveTabId(section.id)}
            className={`grid place-items-center py-3 px-2 rounded-lg font-semibold transition-all duration-200 border-b-4 ${
              isActive 
                ? 'bg-blue-50 text-blue-700 border-blue-600 shadow-inner' 
                : 'bg-white text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            {section.tabLabel}
          </button>
        );
      })}
    </div>
  );

  return (
    <LessonLayout header={HeaderContent} nav={NavigationContent}>
      <Card>
        <div className="grid gap-8">
          <div className="grid gap-4 border-b border-slate-100 pb-6">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">
              {activeSection.diagramTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {activeSection.description}
            </p>
          </div>
          
          <div className="grid gap-2">
            <activeSection.DiagramComponent />
          </div>
        </div>
      </Card>
    </LessonLayout>
  );
}
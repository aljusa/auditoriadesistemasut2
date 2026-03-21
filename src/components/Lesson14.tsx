import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { 
  CheckSquare, Square, ShieldAlert,  
  Settings, Database, Server, Activity,
  ArrowRight, Search
} from 'lucide-react';

// --- DEFINICIONES DE TIPOS ---

interface TabData {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  diagramTitle: string;
  diagramRender: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  data: TabData;
}

// --- COMPONENTES BASE (LAYOUT ESTRICTO EN GRID) ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200  grid ${className}`}>
    {children}
  </div>
);

// --- COMPONENTES DE VISUALIZACIÓN (DIAGRAMAS) ---

const DelimitacionDiagram = () => (
  <div className="grid place-items-center w-full h-full min-h-[300px] bg-slate-50 rounded-lg p-6">
    <div className="grid grid-cols-3 grid-rows-3 gap-6 w-full max-w-lg relative place-items-center">
      {/* Conectores SVG de fondo */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <line x1="16.6%" y1="50%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="83.3%" y1="50%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="50%" y1="16.6%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="50%" y1="83.3%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" />
      </svg>
      
      {/* Nodos */}
      <div className="grid place-items-center row-start-2 col-start-1 bg-white p-3 rounded-lg shadow-sm border border-slate-200 z-10 text-sm font-medium text-center">Listas de<br/>verificación</div>
      <div className="grid place-items-center row-start-1 col-start-2 bg-white p-3 rounded-lg shadow-sm border border-slate-200 z-10 text-sm font-medium text-center">Software</div>
      
      <div className="grid place-items-center row-start-2 col-start-2 bg-blue-600 text-white p-4 rounded-xl shadow-md z-10 font-bold text-center">
        Herramientas<br/>de auditoría
      </div>
      
      <div className="grid place-items-center row-start-3 col-start-2 bg-white p-3 rounded-lg shadow-sm border border-slate-200 z-10 text-sm font-medium text-center">Reportes</div>
      <div className="grid place-items-center row-start-2 col-start-3 bg-white p-3 rounded-lg shadow-sm border border-slate-200 z-10 text-sm font-medium text-center">Matrices<br/>de riesgo</div>
    </div>
  </div>
);

const ChecklistDiagram = () => (
  <div className="grid place-items-center w-full h-full min-h-[300px] bg-slate-50 rounded-lg p-6">
    <div className="grid gap-3 w-full max-w-md">
      {[
        { id: 1, text: "Revisión de políticas de acceso", checked: true },
        { id: 2, text: "Verificación de respaldos de base de datos", checked: true },
        { id: 3, text: "Auditoría de logs del firewall", checked: false },
        { id: 4, text: "Evaluación de cifrado en tránsito", checked: false },
        { id: 5, text: "Actualización de parches críticos", checked: true },
      ].map((item) => (
        <div key={item.id} className="grid grid-cols-[auto_1fr] gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-200 items-start">
          <div className="grid mt-0.5">
            {item.checked ? <CheckSquare className="text-emerald-500 w-5 h-5" /> : <Square className="text-slate-400 w-5 h-5" />}
          </div>
          <span className={`text-sm ${item.checked ? 'text-slate-800' : 'text-slate-500'}`}>{item.text}</span>
        </div>
      ))}
    </div>
  </div>
);

const RiskMatrixDiagram = () => (
  <div className="grid place-items-center w-full h-full min-h-[300px] bg-slate-50 rounded-lg p-6 overflow-x-auto">
    <div className="grid grid-cols-[auto_1fr_1fr_1fr] grid-rows-[auto_1fr_1fr_1fr] gap-1 min-w-[400px]">
      {/* Header Fila 1 */}
      <div className="grid"></div>
      <div className="grid place-items-center font-semibold text-slate-600 pb-2">Impacto Bajo</div>
      <div className="grid place-items-center font-semibold text-slate-600 pb-2">Impacto Medio</div>
      <div className="grid place-items-center font-semibold text-slate-600 pb-2">Impacto Alto</div>
      
      {/* Fila Alta Probabilidad */}
      <div className="grid place-items-center font-semibold text-slate-600 pr-2 rotate-180 [writing-mode:vertical-lr]">Prob. Alta</div>
      <div className="grid place-items-center bg-amber-200 border border-amber-300 p-4 text-amber-800 font-bold rounded-tl-md">Medio</div>
      <div className="grid place-items-center bg-rose-300 border border-rose-400 p-4 text-rose-900 font-bold">Alto</div>
      <div className="grid place-items-center bg-rose-500 border border-rose-600 p-4 text-white font-bold rounded-tr-md">Extremo</div>

      {/* Fila Media Probabilidad */}
      <div className="grid place-items-center font-semibold text-slate-600 pr-2 rotate-180 [writing-mode:vertical-lr]">Prob. Media</div>
      <div className="grid place-items-center bg-emerald-200 border border-emerald-300 p-4 text-emerald-800 font-bold">Bajo</div>
      <div className="grid place-items-center bg-amber-200 border border-amber-300 p-4 text-amber-800 font-bold">Medio</div>
      <div className="grid place-items-center bg-rose-300 border border-rose-400 p-4 text-rose-900 font-bold">Alto</div>

      {/* Fila Baja Probabilidad */}
      <div className="grid place-items-center font-semibold text-slate-600 pr-2 rotate-180 [writing-mode:vertical-lr]">Prob. Baja</div>
      <div className="grid place-items-center bg-emerald-400 border border-emerald-500 p-4 text-emerald-900 font-bold rounded-bl-md">Muy Bajo</div>
      <div className="grid place-items-center bg-emerald-200 border border-emerald-300 p-4 text-emerald-800 font-bold">Bajo</div>
      <div className="grid place-items-center bg-amber-200 border border-amber-300 p-4 text-amber-800 font-bold rounded-br-md">Medio</div>
    </div>
  </div>
);

const SoftwareDiagram = () => (
  <div className="grid w-full h-full min-h-[300px] bg-slate-900 rounded-lg overflow-hidden border border-slate-700 grid-rows-[auto_1fr] text-slate-300">
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 p-3 border-b border-slate-700 bg-slate-800 items-center">
      <div className="grid grid-cols-3 gap-1.5">
        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
      </div>
      <div className="grid place-items-center text-xs font-mono tracking-wider opacity-70">AUDIT_SYS_DASHBOARD v2.4</div>
      <Search className="w-4 h-4 text-slate-400" />
    </div>
    
    <div className="grid grid-cols-[auto_1fr] h-full">
      <div className="grid grid-rows-4 gap-4 p-4 border-r border-slate-700 bg-slate-800/50 w-16 place-items-center content-start">
        <Activity className="w-5 h-5 text-blue-400" />
        <Database className="w-5 h-5 text-slate-500" />
        <Server className="w-5 h-5 text-slate-500" />
        <Settings className="w-5 h-5 text-slate-500" />
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-4 p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded p-4 border border-slate-700 grid gap-2">
             <span className="text-xs text-slate-400 uppercase">Hallazgos Críticos</span>
             <span className="text-2xl font-bold text-rose-400">12</span>
          </div>
          <div className="bg-slate-800 rounded p-4 border border-slate-700 grid gap-2">
             <span className="text-xs text-slate-400 uppercase">Auditorías Activas</span>
             <span className="text-2xl font-bold text-blue-400">3</span>
          </div>
          <div className="bg-slate-800 rounded p-4 border border-slate-700 grid gap-2">
             <span className="text-xs text-slate-400 uppercase">Cumplimiento</span>
             <span className="text-2xl font-bold text-emerald-400">87%</span>
          </div>
        </div>
        <div className="bg-slate-800 rounded border border-slate-700 grid place-items-center">
          <span className="text-slate-500 text-sm">Visualización de logs de red (Simulado)</span>
        </div>
      </div>
    </div>
  </div>
);

const incidentData = [
  { mes: 'Ene', accesos: 4, malware: 1, hardware: 2 },
  { mes: 'Feb', accesos: 3, malware: 0, hardware: 1 },
  { mes: 'Mar', accesos: 7, malware: 2, hardware: 0 },
  { mes: 'Abr', accesos: 2, malware: 5, hardware: 3 },
  { mes: 'May', accesos: 5, malware: 1, hardware: 1 },
  { mes: 'Jun', accesos: 4, malware: 0, hardware: 2 },
];

const IncidentsDiagram = () => (
  <div className="grid w-full h-full min-h-[350px] bg-slate-50 rounded-lg p-6">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={incidentData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
        <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
        <Legend wrapperStyle={{ paddingTop: '20px' }}/>
        <Bar dataKey="accesos" name="Accesos no autorizados" stackId="a" fill="#3b82f6" radius={[0, 0, 4, 4]} />
        <Bar dataKey="malware" name="Infecciones Malware" stackId="a" fill="#ef4444" />
        <Bar dataKey="hardware" name="Fallas Hardware" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const FlowchartDiagram = () => (
  <div className="grid place-items-center w-full h-full min-h-[400px] bg-slate-50 rounded-lg p-6">
    <div className="grid grid-rows-[auto_auto_auto_auto_auto] gap-2 place-items-center max-w-sm text-sm text-center font-medium">
      
      {/* Step 1 */}
      <div className="bg-blue-100 border-2 border-blue-400 text-blue-900 py-2 px-6 rounded-full w-48 shadow-sm">
        Inicio de Proceso
      </div>
      <div className="grid place-items-center h-8 w-1 bg-slate-300"></div>
      
      {/* Step 2 */}
      <div className="bg-white border-2 border-slate-300 text-slate-800 py-3 px-6 rounded-md w-48 shadow-sm">
        Recopilación de Datos
      </div>
      <div className="grid place-items-center h-8 w-1 bg-slate-300"></div>

      {/* Decision */}
      <div className="bg-amber-100 border-2 border-amber-400 text-amber-900 py-4 px-6 rotate-45 w-32 h-32 grid place-items-center shadow-sm my-4">
        <span className="-rotate-45">¿Datos completos?</span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] w-full max-w-xs items-center relative h-16">
         {/* Line NO */}
         <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-rose-400 -translate-y-1/2"></div>
         <div className="absolute top-0 left-0 w-1 h-1/2 bg-rose-400"></div>
         <span className="absolute left-8 top-0 text-xs text-rose-600 font-bold bg-slate-50 px-1">NO (Cuello de botella)</span>
         
         {/* Line YES */}
         <div className="absolute top-0 left-1/2 w-1 h-full bg-emerald-400 -translate-x-1/2"></div>
         <span className="absolute right-12 top-2 text-xs text-emerald-600 font-bold bg-slate-50 px-1">SÍ</span>
      </div>

      {/* Final Step */}
      <div className="bg-white border-2 border-slate-300 text-slate-800 py-3 px-6 rounded-md w-48 shadow-sm">
        Análisis y Reporte
      </div>

    </div>
  </div>
);

const ImportanceDiagram = () => (
  <div className="grid place-items-center w-full h-full min-h-[300px] bg-slate-50 rounded-lg p-6">
    <div className="grid grid-cols-[1fr_auto_1fr] gap-6 w-full max-w-3xl items-center">
      
      {/* Herramientas Left */}
      <div className="grid gap-4">
        <div className="bg-white border border-slate-200 p-3 rounded-md shadow-sm text-sm text-center text-slate-700 font-medium">Precisión y Claridad</div>
        <div className="bg-white border border-slate-200 p-3 rounded-md shadow-sm text-sm text-center text-slate-700 font-medium">Sistematización</div>
        <div className="bg-white border border-slate-200 p-3 rounded-md shadow-sm text-sm text-center text-slate-700 font-medium">Respaldo con Evidencia</div>
      </div>
      
      {/* Flechas Grid */}
      <div className="grid grid-rows-3 gap-4 place-items-center text-blue-500">
         <ArrowRight className="w-6 h-6" />
         <ArrowRight className="w-8 h-8" />
         <ArrowRight className="w-6 h-6" />
      </div>

      {/* Resultados Right */}
      <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg grid gap-2 place-items-center text-center h-full content-center">
        <ShieldAlert className="w-10 h-10 mb-2 opacity-90" />
        <h3 className="text-xl font-bold">Resultados de Auditoría</h3>
        <p className="text-blue-100 text-xs mt-2">Estructurados y Confiables</p>
      </div>

    </div>
  </div>
);


// --- DATA DE LA LECCIÓN ---

const lessonData: TabData[] = [
  {
    id: 'delimitacion',
    tabLabel: '1. Delimitación',
    title: 'Delimitación de las herramientas de auditoría',
    description: 'Las herramientas de auditoría son instrumentos que permiten organizar, analizar y documentar la información recopilada durante el proceso de evaluación. Su uso contribuye a estructurar el trabajo del auditor y a garantizar la consistencia de los resultados.',
    diagramTitle: 'Ecosistema de Apoyo',
    diagramRender: <DelimitacionDiagram />
  },
  {
    id: 'checklists',
    tabLabel: '2. Listas de Verificación',
    title: 'Listas de verificación (checklists)',
    description: 'Las listas de verificación son instrumentos que contienen una serie de elementos o criterios que deben revisarse durante la auditoría. Permiten asegurar que no se omitan aspectos importantes y facilitan una evaluación ordenada.',
    diagramTitle: 'Seguimiento Sistemático',
    diagramRender: <ChecklistDiagram />
  },
  {
    id: 'matrices',
    tabLabel: '3. Matrices de Riesgo',
    title: 'Matrices de riesgo',
    description: 'Las matrices de riesgo permiten identificar, clasificar y priorizar riesgos según su probabilidad de ocurrencia y su impacto. Son útiles para enfocar la atención en los aspectos más críticos.',
    diagramTitle: 'Priorización Visual de Riesgos',
    diagramRender: <RiskMatrixDiagram />
  },
  {
    id: 'software',
    tabLabel: '4. Software',
    title: 'Software de auditoría',
    description: 'El software de auditoría facilita el registro, análisis y seguimiento de hallazgos. Permite centralizar la información, generar reportes y mejorar la trazabilidad del proceso.',
    diagramTitle: 'Gestión Tecnológica Conceptual',
    diagramRender: <SoftwareDiagram />
  },
  {
    id: 'reportes',
    tabLabel: '5. Reportes',
    title: 'Reportes de incidentes',
    description: 'Los reportes de incidentes contienen información histórica sobre eventos que han afectado la seguridad. Su análisis permite identificar patrones, causas recurrentes y áreas de mejora.',
    diagramTitle: 'Análisis de Frecuencia Histórica',
    diagramRender: <IncidentsDiagram />
  },
  {
    id: 'flujo',
    tabLabel: '6. Diagramas',
    title: 'Diagramas de flujo de procesos',
    description: 'Los diagramas de flujo representan visualmente los procesos dentro de la organización. Facilitan la identificación de fallas, cuellos de botella o puntos críticos en las operaciones.',
    diagramTitle: 'Identificación de Fallas en Proceso',
    diagramRender: <FlowchartDiagram />
  },
  {
    id: 'importancia',
    tabLabel: '7. Importancia',
    title: 'Importancia del uso adecuado',
    description: 'El uso correcto de estas herramientas mejora la precisión, eficiencia y claridad de la auditoría. Permiten sistematizar la información y respaldar los resultados con evidencia estructurada.',
    diagramTitle: 'Convergencia de Herramientas',
    diagramRender: <ImportanceDiagram />
  }
];

// --- COMPONENTE DE DISEÑO DE LECCIÓN (Grid Layout) ---

const LessonLayout: React.FC<LessonLayoutProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full p-6 lg:p-8 bg-slate-100/50">
      
      {/* Columna Izquierda: Texto y Descripción */}
      <div className="grid grid-rows-[auto_1fr] gap-6 lg:col-span-4 content-start">
        <Card className="p-6 bg-white border-l-4 border-l-blue-600">
          <div className="grid gap-2">
            <h2 className="text-2xl font-bold text-slate-800 leading-tight">
              {data.title}
            </h2>
          </div>
        </Card>

        <Card className="p-6 bg-white shadow-sm h-full">
          <div className="grid grid-rows-[auto_1fr] gap-4 h-full">
           
            <p className="text-slate-600 leading-relaxed text-[1.05rem]">
              {data.description}
            </p>
          </div>
        </Card>
      </div>

      {/* Columna Derecha: Renderizado del Diagrama */}
      <div className="grid lg:col-span-8 h-full min-h-[500px]">
        <Card className="grid grid-rows-[auto_1fr] bg-white h-full">
          <div className="grid grid-cols-[1fr_auto] items-center p-5 border-b border-slate-200 bg-slate-50/80">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold text-slate-800">{data.diagramTitle}</h3>
            </div>
          </div>
          
          <div className="grid place-items-center p-6 bg-white h-full">
            {data.diagramRender}
          </div>
        </Card>
      </div>

    </div>
  );
};

// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>(lessonData[0].id);

  const activeTabData = lessonData.find(tab => tab.id === activeTabId) || lessonData[0];

  return (
    <div className="grid h-screen grid-rows-[auto_1fr] bg-slate-100 font-sans ">
      
      {/* Header y Navegación (Tabs) */}
      <header className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 bg-slate-900 px-6 pt-6 pb-0 shadow-md z-10">
        
        {/* Title / Logo Area */}
        <div className="grid grid-cols-[auto_1fr] gap-3 items-center pb-4 md:pb-6 text-white border-b md:border-b-0 border-slate-800">
          <ShieldAlert className="w-8 h-8 text-blue-500" />
          <div className="grid">
            <h1 className="text-xl font-bold leading-none tracking-wide">Herramientas de Evaluación</h1>
          </div>
        </div>

        {/* Navigation Tabs - Uso de grid flow-col para evitar flex */}
        <nav className="grid grid-cols-4 auto-cols-max gap-1  items-end no-scrollbar pb-0">
          {lessonData.map((tab) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`
                  grid place-items-center px-4 py-3 text-sm font-medium transition-all duration-200 rounded-t-lg
                  border-t-2 border-l border-r
                  ${isActive 
                    ? 'bg-slate-100 text-blue-700 border-t-blue-500 border-l-slate-200 border-r-slate-200 relative top-[1px]' 
                    : 'bg-slate-800/50 text-slate-400 border-t-transparent border-l-transparent border-r-transparent hover:bg-slate-800 hover:text-slate-200'}
                `}
              >
                {tab.tabLabel}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Área Principal de Contenido */}
      <main className="grid ">
        <LessonLayout data={activeTabData} />
      </main>

    </div>
  );
}
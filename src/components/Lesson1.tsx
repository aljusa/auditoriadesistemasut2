import React, { useState } from 'react';
import { 
  Building, 
  Server, 
  Database, 
  Users, 
  AlertTriangle, 
  ShieldX, 
  Zap, 
  CloudLightning,
  Camera,
  Lock,
  Bell,
  Network,
  Activity,
  Workflow,
  ShieldCheck
} from 'lucide-react';

// --- Tipos e Interfaces ---

interface LessonSection {
  id: string;
  tabTitle: string;
  diagramTitle: string;
  description: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LessonLayoutProps {
  section: LessonSection;
  children: React.ReactNode;
}

interface DiagramProps {
  id: string;
}

// --- Datos de la Lección ---

const LESSON_DATA: LessonSection[] = [
  {
    id: 'concepto',
    tabTitle: '1. Concepto Central',
    diagramTitle: 'Delimitación del concepto de seguridad física',
    description: 'La seguridad física se refiere al conjunto de medidas organizadas para proteger los activos tangibles de una entidad. Estos activos incluyen instalaciones, equipos, información en soporte físico y las personas que interactúan en ese entorno. Su objetivo principal es prevenir, detectar y responder a eventos que puedan comprometer la integridad, disponibilidad o funcionamiento de dichos recursos.'
  },
  {
    id: 'activos',
    tabTitle: '2. Activos Protegidos',
    diagramTitle: 'Tipos de activos protegidos',
    description: 'Los activos protegidos se clasifican según su naturaleza material. Las instalaciones comprenden edificios y espacios; los equipos incluyen maquinaria y tecnología; la información abarca documentos y soportes físicos; y las personas incluyen empleados, visitantes y usuarios. Esta clasificación ayuda a priorizar las medidas de seguridad.'
  },
  {
    id: 'riesgos',
    tabTitle: '3. Principales Riesgos',
    diagramTitle: 'Matriz de Riesgos en Seguridad Física',
    description: 'Los riesgos son eventos potenciales que pueden afectar negativamente a los activos. Entre los más comunes se encuentran el acceso no autorizado, el robo de bienes, los actos de sabotaje y los daños por fenómenos naturales. Cada uno representa una amenaza distinta que requiere medidas específicas.'
  },
  {
    id: 'controles',
    tabTitle: '4. Controles y Medidas',
    diagramTitle: 'Controles y medidas de protección',
    description: 'Para mitigar los riesgos, se implementan controles físicos y tecnológicos como videovigilancia, cerraduras, alarmas y cercas. Estas medidas se dividen en preventivas (evitan incidentes) o reactivas (responden a ellos).'
  },
  {
    id: 'integracion',
    tabTitle: '5. Integración',
    diagramTitle: 'Integración y supervisión de la seguridad física',
    description: 'La eficacia no depende de medidas aisladas, sino de su integración en un sistema coherente. Esto implica coordinar dispositivos, procedimientos y personal, con supervisión continua para detectar fallos y mejorar el sistema general.'
  }
];

// --- Componentes Base ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`border border-slate-200 rounded-xl shadow-sm bg-white overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// --- Componentes de Visualización (Diagramas) ---

const DiagramConcepto: React.FC = () => (
  <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-2xl mx-auto p-4 place-items-center">
    {/* Top */}
    <div className="grid place-items-center col-start-2 row-start-1 bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800 text-center shadow-sm w-32">
      <Building className="mb-2" size={32} />
      <span className="text-sm font-semibold">Instalaciones</span>
    </div>
    
    {/* Left */}
    <div className="grid place-items-center col-start-1 row-start-2 bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-emerald-800 text-center shadow-sm w-32">
      <Database className="mb-2" size={32} />
      <span className="text-sm font-semibold">Información</span>
    </div>

    {/* Center */}
    <div className="grid place-items-center col-start-2 row-start-2 bg-slate-800 p-6 rounded-full border-4 border-slate-200 text-white text-center shadow-lg h-40 w-40 z-10">
      <ShieldCheck size={40} className="mb-2 text-blue-400" />
      <span className="font-bold leading-tight">Seguridad<br/>Física</span>
    </div>

    {/* Right */}
    <div className="grid place-items-center col-start-3 row-start-2 bg-amber-50 p-4 rounded-lg border border-amber-100 text-amber-800 text-center shadow-sm w-32">
      <Users className="mb-2" size={32} />
      <span className="text-sm font-semibold">Personas</span>
    </div>

    {/* Bottom */}
    <div className="grid place-items-center col-start-2 row-start-3 bg-purple-50 p-4 rounded-lg border border-purple-100 text-purple-800 text-center shadow-sm w-32">
      <Server className="mb-2" size={32} />
      <span className="text-sm font-semibold">Equipos</span>
    </div>
  </div>
);

const DiagramActivos: React.FC = () => (
  <div className="grid grid-cols-4 grid-rows-[auto_auto_auto] gap-y-8 gap-x-4 w-full max-w-4xl mx-auto p-4 place-items-center">
    {/* Root Node */}
    <div className="col-span-4 grid place-items-center bg-slate-800 text-white px-8 py-4 rounded-lg shadow-md z-10">
      <span className="text-lg font-bold tracking-wide uppercase">Activos Protegidos</span>
    </div>

    {/* Connector Lines (Simulated with grid borders) */}
    <div className="col-span-4 grid grid-cols-4 w-full h-8 -mt-8 border-t-2 border-slate-300 translate-y-4">
      <div className="border-l-2 border-slate-300 w-full h-full justify-self-center relative left-[50%]"></div>
      <div className="border-l-2 border-slate-300 w-full h-full justify-self-center relative left-[50%]"></div>
      <div className="border-l-2 border-slate-300 w-full h-full justify-self-center relative left-[50%]"></div>
      <div className="border-l-2 border-slate-300 w-full h-full justify-self-center relative left-[50%]"></div>
    </div>

    {/* Leaf Nodes */}
    <Card className="grid place-items-center p-6 w-full text-center hover:shadow-md transition-shadow">
      <Building size={40} className="text-blue-600 mb-3" />
      <h3 className="font-semibold text-slate-800">Instalaciones</h3>
      <p className="text-xs text-slate-500 mt-2">Edificios y espacios físicos</p>
    </Card>

    <Card className="grid place-items-center p-6 w-full text-center hover:shadow-md transition-shadow">
      <Server size={40} className="text-purple-600 mb-3" />
      <h3 className="font-semibold text-slate-800">Equipos</h3>
      <p className="text-xs text-slate-500 mt-2">Maquinaria y tecnología</p>
    </Card>

    <Card className="grid place-items-center p-6 w-full text-center hover:shadow-md transition-shadow">
      <Database size={40} className="text-emerald-600 mb-3" />
      <h3 className="font-semibold text-slate-800">Información</h3>
      <p className="text-xs text-slate-500 mt-2">Documentos y soportes</p>
    </Card>

    <Card className="grid place-items-center p-6 w-full text-center hover:shadow-md transition-shadow">
      <Users size={40} className="text-amber-600 mb-3" />
      <h3 className="font-semibold text-slate-800">Personas</h3>
      <p className="text-xs text-slate-500 mt-2">Empleados y visitantes</p>
    </Card>
  </div>
);

const DiagramRiesgos: React.FC = () => (
  <div className="grid grid-cols-1 gap-0 w-full max-w-3xl mx-auto border border-slate-200 rounded-lg overflow-hidden shadow-sm">
    <div className="grid grid-cols-[1fr_2fr] bg-slate-100 border-b border-slate-200 font-bold text-slate-700">
      <div className="p-4 border-r border-slate-200">Tipo de Riesgo</div>
      <div className="p-4">Descripción General</div>
    </div>
    
    <div className="grid grid-cols-[1fr_2fr] border-b border-slate-100 hover:bg-slate-50">
      <div className="p-4 border-r border-slate-100 grid grid-cols-[auto_1fr] gap-3 place-items-center justify-items-start text-red-600 font-medium">
        <ShieldX size={20} /> Acceso No Autorizado
      </div>
      <div className="p-4 text-sm text-slate-600 place-self-center justify-self-start">Ingreso de personas externas a áreas restringidas comprometiendo la confidencialidad.</div>
    </div>

    <div className="grid grid-cols-[1fr_2fr] border-b border-slate-100 hover:bg-slate-50">
      <div className="p-4 border-r border-slate-100 grid grid-cols-[auto_1fr] gap-3 place-items-center justify-items-start text-orange-600 font-medium">
        <AlertTriangle size={20} /> Robo de Bienes
      </div>
      <div className="p-4 text-sm text-slate-600 place-self-center justify-self-start">Sustracción ilegítima de equipos, documentos o materiales valiosos.</div>
    </div>

    <div className="grid grid-cols-[1fr_2fr] border-b border-slate-100 hover:bg-slate-50">
      <div className="p-4 border-r border-slate-100 grid grid-cols-[auto_1fr] gap-3 place-items-center justify-items-start text-purple-600 font-medium">
        <Zap size={20} /> Actos de Sabotaje
      </div>
      <div className="p-4 text-sm text-slate-600 place-self-center justify-self-start">Destrucción intencionada de infraestructura para interrumpir operaciones.</div>
    </div>

    <div className="grid grid-cols-[1fr_2fr] hover:bg-slate-50">
      <div className="p-4 border-r border-slate-100 grid grid-cols-[auto_1fr] gap-3 place-items-center justify-items-start text-blue-600 font-medium">
        <CloudLightning size={20} /> Fenómenos Naturales
      </div>
      <div className="p-4 text-sm text-slate-600 place-self-center justify-self-start">Daños causados por sismos, inundaciones, incendios u otros eventos climáticos.</div>
    </div>
  </div>
);

const DiagramControles: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto p-4">
    {/* Grupo Prevención */}
    <Card className="grid grid-rows-[auto_1fr] bg-blue-50 border-blue-200">
      <div className="bg-blue-600 text-white p-4 text-center font-bold uppercase tracking-wider">
        Medidas Preventivas
      </div>
      <div className="grid grid-cols-2 gap-4 p-6 place-items-center">
        <div className="grid place-items-center text-center gap-2">
          <div className="grid place-items-center w-16 h-16 bg-white rounded-full shadow-sm text-blue-600">
            <Lock size={32} />
          </div>
          <span className="text-sm font-medium text-blue-900">Cerraduras</span>
        </div>
        <div className="grid place-items-center text-center gap-2">
          <div className="grid place-items-center w-16 h-16 bg-white rounded-full shadow-sm text-blue-600">
            <Network size={32} />
          </div>
          <span className="text-sm font-medium text-blue-900">Cercas Perimetrales</span>
        </div>
        <div className="col-span-2 text-xs text-blue-700 text-center mt-4">
          Diseñadas para disuadir y evitar que ocurran incidentes.
        </div>
      </div>
    </Card>

    {/* Grupo Respuesta */}
    <Card className="grid grid-rows-[auto_1fr] bg-rose-50 border-rose-200">
      <div className="bg-rose-600 text-white p-4 text-center font-bold uppercase tracking-wider">
        Medidas Reactivas / Detección
      </div>
      <div className="grid grid-cols-2 gap-4 p-6 place-items-center">
        <div className="grid place-items-center text-center gap-2">
          <div className="grid place-items-center w-16 h-16 bg-white rounded-full shadow-sm text-rose-600">
            <Camera size={32} />
          </div>
          <span className="text-sm font-medium text-rose-900">Videovigilancia</span>
        </div>
        <div className="grid place-items-center text-center gap-2">
          <div className="grid place-items-center w-16 h-16 bg-white rounded-full shadow-sm text-rose-600">
            <Bell size={32} />
          </div>
          <span className="text-sm font-medium text-rose-900">Sistemas de Alarma</span>
        </div>
        <div className="col-span-2 text-xs text-rose-700 text-center mt-4">
          Diseñadas para identificar y responder a brechas de seguridad.
        </div>
      </div>
    </Card>
  </div>
);

const DiagramIntegracion: React.FC = () => (
  <div className="grid grid-cols-3 grid-rows-3 gap-6 w-full max-w-2xl mx-auto p-4 place-items-center relative">
    
    {/* SVG Connectors Background */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
       {/* Líneas simuladas con SVG para conectar los nodos en triángulo */}
       <line x1="50%" y1="20%" x2="25%" y2="80%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6,6" />
       <line x1="50%" y1="20%" x2="75%" y2="80%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6,6" />
       <line x1="25%" y1="80%" x2="75%" y2="80%" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6,6" />
    </svg>

    {/* Top Node */}
    <div className="col-start-2 row-start-1 grid place-items-center bg-white p-4 rounded-xl shadow-md border-2 border-indigo-200 text-center w-36 z-10">
      <Users size={32} className="text-indigo-600 mb-2" />
      <span className="font-semibold text-slate-800 text-sm">Personal<br/><span className="text-xs font-normal text-slate-500">(Guardias, Usuarios)</span></span>
    </div>

    {/* Center Core */}
    <div className="col-start-2 row-start-2 grid place-items-center bg-indigo-600 p-5 rounded-full shadow-lg text-white text-center w-32 h-32 z-10 hover:scale-105 transition-transform">
      <Activity size={32} className="mb-1" />
      <span className="font-bold text-xs">Supervisión<br/>Continua</span>
    </div>

    {/* Bottom Left Node */}
    <div className="col-start-1 row-start-3 grid place-items-center bg-white p-4 rounded-xl shadow-md border-2 border-indigo-200 text-center w-36 z-10">
      <Server size={32} className="text-indigo-600 mb-2" />
      <span className="font-semibold text-slate-800 text-sm">Dispositivos<br/><span className="text-xs font-normal text-slate-500">(Cámaras, Sensores)</span></span>
    </div>

    {/* Bottom Right Node */}
    <div className="col-start-3 row-start-3 grid place-items-center bg-white p-4 rounded-xl shadow-md border-2 border-indigo-200 text-center w-36 z-10">
      <Workflow size={32} className="text-indigo-600 mb-2" />
      <span className="font-semibold text-slate-800 text-sm">Procesos<br/><span className="text-xs font-normal text-slate-500">(Protocolos, Auditorías)</span></span>
    </div>
  </div>
);

const DiagramRender: React.FC<DiagramProps> = ({ id }) => {
  switch (id) {
    case 'concepto':
      return <DiagramConcepto />;
    case 'activos':
      return <DiagramActivos />;
    case 'riesgos':
      return <DiagramRiesgos />;
    case 'controles':
      return <DiagramControles />;
    case 'integracion':
      return <DiagramIntegracion />;
    default:
      return <div className="grid place-items-center p-10 text-slate-500">Diagrama no encontrado</div>;
  }
};

// --- Componente de Layout Principal de la Lección ---

const LessonLayout: React.FC<LessonLayoutProps> = ({ section, children }) => {
  return (
    <div className="grid grid-rows-[auto_auto_1fr] gap-6 h-full animate-in fade-in duration-500">
      <div className="grid gap-2">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 border-b pb-2 border-slate-200">
          {section.diagramTitle}
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
          {section.description}
        </p>
      </div>
      
      <Card className="grid grid-rows-[1fr] min-h-[400px] p-6 bg-slate-50/50">
        <div className="grid place-items-center w-full h-full">
           {children}
        </div>
      </Card>
    </div>
  );
};

// --- Aplicación Principal ---

export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>(LESSON_DATA[0].id);

  const activeSection = LESSON_DATA.find(section => section.id === activeTabId) || LESSON_DATA[0];

  return (
    <div className="min-h-screen bg-slate-100 grid grid-rows-[auto_1fr] gap-0 text-slate-900 font-sans">
      
      {/* Header & Navegación (Pestañas) */}
      <header className="grid grid-rows-[auto_auto] gap-0 bg-slate-800 text-white shadow-md top-0 z-50">
        <div className="grid px-6 py-6 border-b border-slate-700">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            Concepto de Seguridad Física
          </h1>
        </div>
        
        <nav className="grid md:grid-cols-5 lg:grid-cols-1 gap-0 w-full">
          {LESSON_DATA.map((tab) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`grid place-items-center py-4 px-2 text-sm font-medium transition-colors border-b-4 whitespace-nowrap
                  ${isActive 
                    ? 'border-blue-400 bg-slate-700 text-blue-50' 
                    : 'border-transparent text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
              >
                {tab.tabTitle}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Contenido Principal */}
      <main className="grid p-4 md:p-8 overflow-y-auto">
        <div className="grid max-w-6xl w-full justify-self-center">
          <LessonLayout section={activeSection}>
            <DiagramRender id={activeSection.id} />
          </LessonLayout>
        </div>
      </main>

    </div>
  );
}
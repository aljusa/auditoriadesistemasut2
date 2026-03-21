import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  ShieldCheck, 
  Video, 
  VideoOff, 
  Lightbulb, 
  LightbulbOff, 
  Wrench, 
  DoorOpen, 
  Map, 
  HelpCircle,
  ArrowRight,
  EyeOff,
  Building
} from 'lucide-react';

// --- TYPES ---
interface LessonSection {
  id: string;
  tabTitle: string;
  diagramTitle: string;
  description: string;
  visualType: 'schema' | 'access' | 'cameras' | 'lighting' | 'maintenance' | 'evacuation' | 'impact';
}

// --- DATA ---
const LESSON_DATA: LessonSection[] = [
  {
    id: '1',
    tabTitle: '1. Delimitación',
    diagramTitle: 'Esquema de Vulnerabilidades Físicas',
    description: 'Las señales de alerta en el área física son indicios visibles o detectables que evidencian debilidades en la infraestructura, los sistemas de control o las condiciones del entorno. Estas señales permiten anticipar riesgos y tomar acciones preventivas antes de que ocurran incidentes.',
    visualType: 'schema'
  },
  {
    id: '2',
    tabTitle: '2. Accesos',
    diagramTitle: 'Comparativa de Control de Accesos',
    description: 'La presencia de accesos sin control o con vigilancia limitada constituye una vulnerabilidad crítica. Permite el ingreso de personas no autorizadas, aumentando el riesgo de intrusiones, robos o sabotaje.',
    visualType: 'access'
  },
  {
    id: '3',
    tabTitle: '3. Videovigilancia',
    diagramTitle: 'Análisis de Cobertura y Puntos Ciegos',
    description: 'Las cámaras de seguridad inoperativas, mal ubicadas o desconectadas reducen la capacidad de monitoreo y detección de incidentes. Esto genera zonas sin cobertura donde pueden ocurrir eventos sin ser registrados.',
    visualType: 'cameras'
  },
  {
    id: '4',
    tabTitle: '4. Iluminación',
    diagramTitle: 'Impacto de la Iluminación en la Seguridad',
    description: 'La falta de iluminación adecuada en zonas como estacionamientos, pasillos o accesos dificulta la visibilidad y favorece actividades indebidas. Además, incrementa el riesgo de accidentes.',
    visualType: 'lighting'
  },
  {
    id: '5',
    tabTitle: '5. Mantenimiento',
    diagramTitle: 'Indicadores de Deterioro de Infraestructura',
    description: 'El mal estado de instalaciones, puertas, cercas o sistemas eléctricos puede comprometer la seguridad física. Estas deficiencias facilitan accesos no autorizados y aumentan la probabilidad de fallas o accidentes.',
    visualType: 'maintenance'
  },
  {
    id: '6',
    tabTitle: '6. Señalización',
    diagramTitle: 'Rutas de Evacuación: Claras vs. Deficientes',
    description: 'La ausencia o mala ubicación de señalización de rutas de evacuación dificulta la respuesta ante emergencias. Esto puede generar confusión, retrasos y mayores riesgos para las personas.',
    visualType: 'evacuation'
  },
  {
    id: '7',
    tabTitle: '7. Impacto',
    diagramTitle: 'Diagrama Causa-Efecto de Alertas Ignoradas',
    description: 'Cuando estas señales no se corrigen a tiempo, incrementan la probabilidad de intrusiones, accidentes y fallas en la respuesta ante emergencias. La identificación temprana es clave para mantener un entorno seguro.',
    visualType: 'impact'
  }
];

// --- COMPONENTS ---

// Card Component
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl border border-gray-200 shadow-sm p-6 grid ${className}`}>
    {children}
  </div>
);

// Diagram Render Component
const DiagramRender: React.FC<{ type: LessonSection['visualType'] }> = ({ type }) => {
  switch (type) {
    case 'schema':
      return (
        <div className="grid grid-cols-3 grid-rows-3 gap-2 bg-slate-50 p-4 rounded-lg h-64 border-2 border-slate-200 relative w-full">
          <div className="grid place-items-center border border-slate-300 bg-slate-100 rounded">
             <Building className="text-slate-400" />
          </div>
          <div className="grid place-items-center border border-red-300 bg-red-50 rounded relative">
             <Building className="text-slate-400" />
             <AlertTriangle className="absolute top-2 right-2 text-red-500 animate-pulse w-5 h-5" />
          </div>
          <div className="grid place-items-center border border-slate-300 bg-slate-100 rounded">
             <Building className="text-slate-400" />
          </div>
          <div className="grid place-items-center border border-slate-300 bg-slate-100 rounded">
             <Building className="text-slate-400" />
          </div>
          <div className="grid place-items-center border border-slate-300 bg-slate-100 rounded">
             <Building className="text-slate-400" />
          </div>
          <div className="grid place-items-center border border-orange-300 bg-orange-50 rounded relative">
             <Building className="text-slate-400" />
             <AlertTriangle className="absolute top-2 right-2 text-orange-500 animate-pulse w-5 h-5" />
          </div>
          <div className="grid col-span-3 place-items-center border border-slate-300 bg-slate-200 rounded">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Zona Principal</span>
          </div>
        </div>
      );

    case 'access':
      return (
        <div className="grid grid-cols-2 gap-4 h-64 w-full">
          <div className="grid grid-rows-[auto_1fr] gap-4 bg-red-50 p-4 rounded-lg border-2 border-red-200">
            <div className="grid place-items-center">
              <span className="font-bold text-red-700 text-center">Sin Vigilancia</span>
            </div>
            <div className="grid place-items-center relative">
              <DoorOpen className="w-16 h-16 text-red-400" />
              <ShieldAlert className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-red-600 bg-white rounded-full" />
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-4 bg-green-50 p-4 rounded-lg border-2 border-green-200">
            <div className="grid place-items-center">
              <span className="font-bold text-green-700 text-center">Acceso Controlado</span>
            </div>
            <div className="grid place-items-center relative">
              <DoorOpen className="w-16 h-16 text-green-400" />
              <ShieldCheck className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-green-600 bg-white rounded-full" />
            </div>
          </div>
        </div>
      );

    case 'cameras':
      return (
         <div className="grid grid-cols-2 gap-2 h-64 w-full bg-slate-800 p-4 rounded-lg border-2 border-slate-700">
           <div className="grid place-items-center relative border border-slate-600 overflow-hidden bg-slate-900 rounded">
             <div className="absolute top-2 left-2 z-10 grid grid-flow-col gap-1 auto-cols-max items-center">
                <Video className="w-5 h-5 text-green-400" />
                <span className="text-xs text-green-400 font-bold">REC</span>
             </div>
             <div className="absolute top-0 left-0 w-full h-full bg-green-400/20 origin-top-left scale-150 transform rotate-12"></div>
             <span className="text-slate-500 z-10">Cobertura 1</span>
           </div>
           <div className="grid place-items-center relative border border-slate-600 bg-slate-900 rounded">
             <div className="absolute top-2 right-2 z-10 grid grid-flow-col gap-1 auto-cols-max items-center">
                <span className="text-xs text-red-400 font-bold">OFFLINE</span>
                <VideoOff className="w-5 h-5 text-red-400" />
             </div>
             <EyeOff className="w-12 h-12 text-slate-700 z-10" />
             <span className="text-slate-500 z-10 mt-2">Punto Ciego</span>
           </div>
         </div>
      );

    case 'lighting':
      return (
        <div className="grid grid-cols-2 gap-4 h-64 w-full">
           <div className="grid place-items-center border-2 border-slate-800 bg-slate-900 rounded-lg p-4 relative overflow-hidden text-center">
              <LightbulbOff className="w-12 h-12 text-slate-700 mb-2" />
              <span className="text-slate-500 font-medium">Área Oscura<br/><span className="text-xs">(Alto Riesgo)</span></span>
              <div className="absolute bottom-4 right-4"><AlertTriangle className="text-red-900 w-6 h-6"/></div>
           </div>
           <div className="grid place-items-center border-2 border-yellow-200 bg-yellow-50 rounded-lg p-4 relative overflow-hidden text-center">
              <div className="absolute inset-0 bg-yellow-400/20 radial-gradient-light blur-xl rounded-full scale-150"></div>
              <Lightbulb className="w-12 h-12 text-yellow-500 mb-2 z-10 drop-shadow-lg" />
              <span className="text-yellow-800 font-medium z-10">Área Iluminada<br/><span className="text-xs">(Bajo Riesgo)</span></span>
              <div className="absolute bottom-4 right-4 z-10"><ShieldCheck className="text-green-500 w-6 h-6"/></div>
           </div>
        </div>
      );

    case 'maintenance':
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-64 w-full p-4 bg-orange-50 border-2 border-orange-200 rounded-lg">
          <div className="grid grid-flow-col auto-cols-max gap-4 place-items-center place-content-center bg-white rounded shadow-sm border border-orange-100">
             <Wrench className="w-8 h-8 text-orange-400" />
             <span className="font-semibold text-slate-700 text-sm">Cerca Rota</span>
          </div>
          <div className="grid grid-flow-col auto-cols-max gap-4 place-items-center place-content-center bg-white rounded shadow-sm border border-orange-100">
             <AlertTriangle className="w-8 h-8 text-orange-400" />
             <span className="font-semibold text-slate-700 text-sm">Cableado Expuesto</span>
          </div>
          <div className="grid grid-flow-col auto-cols-max gap-4 place-items-center place-content-center bg-white rounded shadow-sm border border-orange-100">
             <DoorOpen className="w-8 h-8 text-orange-400" />
             <span className="font-semibold text-slate-700 text-sm">Puerta Caída</span>
          </div>
          <div className="grid place-items-center place-content-center bg-orange-100 rounded border border-orange-300 text-center p-2">
             <span className="font-bold text-orange-800 text-sm uppercase">Mantenimiento Urgente Requerido</span>
          </div>
        </div>
      );

    case 'evacuation':
      return (
         <div className="grid grid-cols-2 gap-4 h-64 w-full">
          <div className="grid grid-rows-[auto_1fr] gap-4 bg-red-50 p-4 rounded-lg border-2 border-red-200">
            <div className="grid place-items-center">
              <span className="font-bold text-red-700 text-sm text-center">Sin Señalización</span>
            </div>
            <div className="grid place-items-center bg-white rounded border border-red-100 relative">
               <Map className="w-16 h-16 text-slate-300" />
               <HelpCircle className="absolute text-red-500 w-8 h-8 animate-bounce" />
               <span className="text-xs text-red-400 absolute bottom-2 font-semibold">¿Hacia dónde ir?</span>
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-4 bg-green-50 p-4 rounded-lg border-2 border-green-200">
            <div className="grid place-items-center">
              <span className="font-bold text-green-700 text-sm text-center">Ruta Clara</span>
            </div>
            <div className="grid place-items-center bg-white rounded border border-green-100 relative">
               <div className="grid grid-cols-3 w-full px-4 place-items-center">
                 <span className="text-xs font-bold text-slate-500">Inicio</span>
                 <ArrowRight className="text-green-500 w-8 h-8" />
                 <div className="grid grid-flow-col auto-cols-max items-center gap-1 bg-green-500 text-white px-2 py-1 rounded">
                   <DoorOpen className="w-4 h-4" />
                   <span className="text-xs font-bold">SALIDA</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      );

    case 'impact':
      return (
         <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-2 h-64 w-full items-center p-4 bg-slate-50 border-2 border-slate-200 rounded-lg">
            <div className="grid grid-rows-[auto_auto] gap-2 place-items-center text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full grid place-items-center border-2 border-yellow-400">
                <AlertTriangle className="text-yellow-600 w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-slate-700">Señal de Alerta Ignorada</span>
            </div>
            
            <ArrowRight className="text-slate-400 w-6 h-6" />

            <div className="grid grid-rows-[auto_auto] gap-2 place-items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full grid place-items-center border-2 border-orange-400">
                <ShieldAlert className="text-orange-600 w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-slate-700">Vulnerabilidad Crítica</span>
            </div>

            <ArrowRight className="text-slate-400 w-6 h-6" />

            <div className="grid grid-rows-[auto_auto] gap-2 place-items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full grid place-items-center border-2 border-red-500">
                <AlertTriangle className="text-red-600 w-8 h-8 animate-pulse" />
              </div>
              <span className="text-xs font-bold text-red-700">Incidente / Falla</span>
            </div>
         </div>
      );

    default:
      return null;
  }
};


// Main Layout Component
export default function App() {
  const [activeTabId, setActiveTabId] = useState<string>(LESSON_DATA[0].id);

  const activeSection = LESSON_DATA.find(section => section.id === activeTabId) || LESSON_DATA[0];

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-full bg-slate-100 font-sans text-slate-800">
      
      {/* HEADER SECTION */}
      <header className="grid grid-rows-[auto_auto] gap-6 bg-white shadow-sm border-b border-slate-200 px-6 pt-6 pb-0">
        
        {/* Title Area */}
        <div className="grid">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Señales de Alerta en el Área Física
          </h1>
  
        </div>

        {/* Navigation Tabs Area */}
        <nav className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto pb-[-1px]">
          {LESSON_DATA.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`grid place-items-center px-4 py-3 text-sm font-semibold transition-colors duration-200 border-b-2 whitespace-nowrap outline-none
                ${activeTabId === tab.id 
                  ? 'border-blue-600 text-blue-700 bg-blue-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }
              `}
            >
              {tab.tabTitle}
            </button>
          ))}
        </nav>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 overflow-y-auto content-start">
        
        {/* Text/Theory Panel */}
        <Card className="grid-rows-[auto_1fr] gap-4 self-start">
          <div className="grid grid-flow-col auto-cols-max gap-3 items-center border-b border-slate-100 pb-4">
            <div className="grid place-items-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600">
               <ShieldAlert size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">Contexto de Seguridad</h2>
          </div>
          <div className="grid text-base leading-relaxed text-slate-600">
            <p>{activeSection.description}</p>
          </div>
        </Card>

        {/* Visual/Diagram Panel */}
        <Card className="grid-rows-[auto_auto_1fr] gap-4 self-start bg-slate-50">
           <div className="grid border-b border-slate-200 pb-4">
             <h3 className="text-lg font-bold text-slate-800">
               {activeSection.diagramTitle}
             </h3>
 
           </div>
           
           <div className="grid place-items-center pt-2">
             <DiagramRender type={activeSection.visualType} />
           </div>
        </Card>

      </main>
    </div>
  );
}
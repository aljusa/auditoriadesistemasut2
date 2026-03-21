import React, { useState } from 'react';
import { 
  AlertTriangle, ShieldAlert, ArrowRight, Laptop, UserX, 
  HardHat, CheckCircle, FileWarning, Globe, Activity, 
  XCircle, Building, Users, Search, ActivitySquare, 
  Wrench, ShieldCheck, Database, Unlock
} from 'lucide-react';

// --- TYPES & INTERFACES ---

interface SectionData {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  diagramTitle: string;
  diagramDescription: string;
  diagramId: string;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface LayoutProps {
  title: string;
  sections: SectionData[];
}

// --- DATA ---

const LESSON_DATA: SectionData[] = [
  {
    id: 's1',
    tabLabel: '1. Impacto General',
    title: 'Delimitación del impacto de las señales de alerta',
    description: 'Las señales de alerta representan indicios de posibles fallas en la seguridad que, si no se atienden oportunamente, pueden transformarse en incidentes reales. Su impacto se manifiesta en distintos ámbitos de la organización, afectando tanto recursos materiales como humanos y operativos.',
    diagramTitle: 'Evolución de Señales a Incidentes',
    diagramDescription: 'Esquema de causa-efecto que muestra cómo las señales no atendidas se ramifican en diversas consecuencias organizacionales.',
    diagramId: 'diagram-cause-effect'
  },
  {
    id: 's2',
    tabLabel: '2. Pérdida de Activos',
    title: 'Pérdida o robo de activos',
    description: 'Una de las consecuencias más directas es el robo o la pérdida de bienes materiales. Las fallas en controles físicos o en el comportamiento del personal facilitan la sustracción de equipos, herramientas o recursos valiosos.',
    diagramTitle: 'Vulnerabilidad de Activos Físicos',
    diagramDescription: 'Representación de activos tecnológicos y físicos expuestos a sustracción debido a controles deficientes.',
    diagramId: 'diagram-theft'
  },
  {
    id: 's3',
    tabLabel: '3. Accidentes',
    title: 'Accidentes laborales',
    description: 'Las deficiencias en seguridad pueden derivar en accidentes que afecten la integridad del personal. Factores como falta de señalización, capacitación o mantenimiento incrementan este riesgo.',
    diagramTitle: 'Entorno de Riesgo vs. Entorno Seguro',
    diagramDescription: 'Comparativa visual entre un entorno con medidas preventivas adecuadas y otro con deficiencias de seguridad.',
    diagramId: 'diagram-accidents'
  },
  {
    id: 's4',
    tabLabel: '4. Filtración',
    title: 'Filtración de información sensible',
    description: 'Las señales de alerta también pueden estar relacionadas con el manejo inadecuado de la información. Esto puede provocar accesos no autorizados o pérdida de datos críticos para la organización.',
    diagramTitle: 'Fuga de Datos Críticos',
    diagramDescription: 'Esquema de vulneración de sistemas donde la información protegida es expuesta a entornos externos no autorizados.',
    diagramId: 'diagram-leak'
  },
  {
    id: 's5',
    tabLabel: '5. Interrupciones',
    title: 'Interrupciones en la operación',
    description: 'Los incidentes derivados de señales no atendidas pueden afectar la continuidad operativa. Esto incluye fallas en procesos, detención de actividades o pérdida de productividad.',
    diagramTitle: 'Ruptura del Flujo Operativo',
    diagramDescription: 'Diagrama de flujo que ilustra cómo un incidente de seguridad paraliza la cadena de procesos de la organización.',
    diagramId: 'diagram-interruption'
  },
  {
    id: 's6',
    tabLabel: '6. Reputación',
    title: 'Daño a la reputación institucional',
    description: 'Las fallas en seguridad no solo tienen consecuencias internas, sino también externas. Los incidentes pueden afectar la imagen de la organización, generando pérdida de confianza por parte de clientes, socios o el público.',
    diagramTitle: 'Impacto en la Percepción Externa',
    diagramDescription: 'Relación directa entre un incidente interno de seguridad y el deterioro de la confianza del público externo.',
    diagramId: 'diagram-reputation'
  },
  {
    id: 's7',
    tabLabel: '7. Acción Correctiva',
    title: 'Importancia de la acción correctiva y preventiva',
    description: 'El análisis de las señales de alerta debe ir más allá de su identificación. Es fundamental implementar acciones correctivas para resolver fallas existentes y medidas preventivas para evitar su recurrencia, fortaleciendo así el sistema de seguridad.',
    diagramTitle: 'Ciclo de Gestión de Seguridad',
    diagramDescription: 'Enfoque integral continuo: Detección, Análisis, Corrección y Prevención.',
    diagramId: 'diagram-cycle'
  }
];

// --- COMPONENTS ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

// Renders specific abstract diagrams using CSS Grid based on the section's requirement
const DiagramRender: React.FC<{ diagramId: string }> = ({ diagramId }) => {
  switch (diagramId) {
    case 'diagram-cause-effect':
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center h-full p-6 bg-slate-50">
          <div className="grid place-items-center bg-amber-100 p-6 rounded-lg border-2 border-amber-300">
            <AlertTriangle className="w-12 h-12 text-amber-600 mb-2" />
            <span className="font-semibold text-amber-800 text-center">Señales de Alerta Ignoradas</span>
          </div>
          <div className="grid grid-rows-3 gap-2 place-items-center hidden md:grid">
            <ArrowRight className="text-slate-400 rotate-[-30deg]" />
            <ArrowRight className="text-slate-400" />
            <ArrowRight className="text-slate-400 rotate-[30deg]" />
          </div>
          <div className="grid grid-rows-3 gap-4">
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 bg-red-100 p-3 rounded border border-red-200">
              <ShieldAlert className="text-red-600 w-6 h-6" />
              <span className="text-sm font-medium text-red-800">Daños Materiales</span>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 bg-red-100 p-3 rounded border border-red-200">
              <Users className="text-red-600 w-6 h-6" />
              <span className="text-sm font-medium text-red-800">Afectación Humana</span>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 bg-red-100 p-3 rounded border border-red-200">
              <Activity className="text-red-600 w-6 h-6" />
              <span className="text-sm font-medium text-red-800">Paro Operativo</span>
            </div>
          </div>
        </div>
      );
    
    case 'diagram-theft':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full p-8 bg-slate-50 place-items-center">
          <div className="grid grid-rows-[auto_auto] place-items-center gap-4 relative">
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full p-2 z-10 animate-pulse">
              <Unlock className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-slate-300 shadow-md">
              <Laptop className="w-16 h-16 text-slate-600" />
            </div>
            <span className="font-semibold text-slate-700">Activo Vulnerable</span>
          </div>
          <div className="grid grid-rows-[auto_auto] place-items-center gap-4">
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-300 border-dashed">
              <UserX className="w-16 h-16 text-red-500" />
            </div>
            <span className="font-semibold text-red-700">Pérdida / Robo</span>
          </div>
        </div>
      );

    case 'diagram-accidents':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full rounded-lg overflow-hidden border border-slate-200">
          <div className="grid grid-rows-[auto_1fr] bg-red-50 p-6 place-items-center text-center gap-4">
            <div className="grid grid-cols-[auto_auto] items-center gap-2">
              <XCircle className="text-red-500 w-6 h-6" />
              <h4 className="font-bold text-red-800">Deficiencia (Riesgo)</h4>
            </div>
            <div className="grid place-items-center gap-2">
              <HardHat className="w-16 h-16 text-red-400 opacity-50" />
              <p className="text-sm text-red-700 mt-2">Falta de equipo, capacitación o señalización.</p>
              <AlertTriangle className="w-8 h-8 text-red-600 mt-4 animate-bounce" />
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] bg-emerald-50 p-6 place-items-center text-center gap-4 border-t md:border-t-0 md:border-l border-slate-200">
            <div className="grid grid-cols-[auto_auto] items-center gap-2">
              <CheckCircle className="text-emerald-500 w-6 h-6" />
              <h4 className="font-bold text-emerald-800">Medidas Adecuadas</h4>
            </div>
            <div className="grid place-items-center gap-2">
              <HardHat className="w-16 h-16 text-emerald-600" />
              <p className="text-sm text-emerald-700 mt-2">Entorno seguro y monitoreado constantemente.</p>
              <ShieldCheck className="w-8 h-8 text-emerald-600 mt-4" />
            </div>
          </div>
        </div>
      );

    case 'diagram-leak':
      return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 h-full p-6 bg-slate-50">
          <div className="grid grid-rows-[auto_auto] place-items-center gap-3 bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <Database className="w-12 h-12 text-blue-600" />
            <span className="font-semibold text-blue-800 text-center">Datos Internos Seguros</span>
          </div>
          <div className="grid place-items-center gap-2 relative">
            <div className="w-full h-1 bg-red-400 rounded absolute top-1/2 -translate-y-1/2"></div>
            <FileWarning className="w-8 h-8 text-red-600 bg-slate-50 relative z-10" />
            <span className="text-xs font-bold text-red-600 mt-6 relative z-10 bg-slate-50 px-1">Filtración</span>
          </div>
          <div className="grid grid-rows-[auto_auto] place-items-center gap-3 bg-slate-200 p-6 rounded-lg border-2 border-slate-300 border-dashed">
            <Globe className="w-12 h-12 text-slate-500" />
            <span className="font-semibold text-slate-700 text-center">Entorno Externo</span>
          </div>
        </div>
      );

    case 'diagram-interruption':
      return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 h-full p-6 bg-slate-50 overflow-x-auto">
          <div className="grid place-items-center bg-emerald-100 p-4 rounded border border-emerald-300 min-w-[100px]">
            <span className="font-bold text-emerald-800">Proceso A</span>
          </div>
          <ArrowRight className="text-slate-400 hidden md:block" />
          <div className="grid place-items-center bg-red-100 p-4 rounded border-2 border-red-500 relative min-w-[100px]">
            <XCircle className="absolute -top-3 -right-3 text-red-600 bg-white rounded-full w-6 h-6" />
            <span className="font-bold text-red-800">Falla</span>
          </div>
          <ArrowRight className="text-slate-200 hidden md:block" />
          <div className="grid place-items-center bg-slate-100 p-4 rounded border border-slate-200 opacity-50 min-w-[100px]">
            <span className="font-bold text-slate-500">Proceso C (Detenido)</span>
          </div>
        </div>
      );

    case 'diagram-reputation':
      return (
        <div className="grid grid-rows-[auto_auto_auto] place-items-center gap-6 h-full p-6 bg-slate-50">
          <div className="grid place-items-center bg-white p-4 rounded-xl shadow border border-slate-200 w-48">
            <Building className="w-10 h-10 text-indigo-600 mb-2" />
            <span className="font-bold text-slate-800">Organización</span>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] w-full items-center gap-2">
            <div className="h-0.5 bg-red-300 w-full"></div>
            <div className="bg-red-100 px-4 py-1 rounded-full border border-red-300 text-red-700 text-sm font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Incidente de Seguridad
            </div>
            <div className="h-0.5 bg-red-300 w-full"></div>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid place-items-center bg-slate-100 p-3 rounded-lg">
                <Users className="w-8 h-8 text-slate-400 mb-1" />
                <span className="text-xs text-center text-slate-600">Pérdida de Confianza</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'diagram-cycle':
      return (
        <div className="grid place-items-center h-full p-6 bg-slate-50">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-sm relative">
            <div className="grid place-items-center bg-blue-50 p-4 rounded-tl-2xl border border-blue-200 text-center">
              <Search className="w-6 h-6 text-blue-600 mb-1" />
              <span className="text-sm font-bold text-blue-800">1. Detección</span>
            </div>
            <div className="grid place-items-center bg-amber-50 p-4 rounded-tr-2xl border border-amber-200 text-center">
              <ActivitySquare className="w-6 h-6 text-amber-600 mb-1" />
              <span className="text-sm font-bold text-amber-800">2. Análisis</span>
            </div>
            <div className="grid place-items-center bg-emerald-50 p-4 rounded-bl-2xl border border-emerald-200 text-center">
              <ShieldCheck className="w-6 h-6 text-emerald-600 mb-1" />
              <span className="text-sm font-bold text-emerald-800">4. Prevención</span>
            </div>
            <div className="grid place-items-center bg-purple-50 p-4 rounded-br-2xl border border-purple-200 text-center">
              <Wrench className="w-6 h-6 text-purple-600 mb-1" />
              <span className="text-sm font-bold text-purple-800">3. Corrección</span>
            </div>
            {/* Center icon to symbolize cycle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
               <Activity className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        </div>
      );

    default:
      return <div>Visualización no disponible</div>;
  }
};

const LessonLayout: React.FC<LayoutProps> = ({ title, sections }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeSection = sections[activeTabIndex];

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* Header Area */}
      <header className="grid grid-rows-[auto_auto] bg-white border-b border-slate-200 shadow-sm z-10 top-0">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-900 tracking-tight">
            {title}
          </h1>
        </div>
        
        {/* Navigation Tabs (Strictly Grid) */}
        <nav className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] border-t border-slate-100 bg-slate-50 overflow-x-auto">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveTabIndex(index)}
              className={`grid place-items-center py-3 px-4 text-sm font-medium transition-colors border-b-2 
                ${activeTabIndex === index 
                  ? 'border-indigo-600 text-indigo-700 bg-indigo-50/50' 
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              aria-selected={activeTabIndex === index}
              role="tab"
            >
              <span className="truncate w-full text-center">{section.tabLabel}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto h-full">
          {/* Main Grid: Text on Left, Diagram on Right (on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 items-start h-full">
            
            {/* Text Panel */}
            <Card className="grid grid-rows-[auto_1fr] h-full">
              <div className="bg-indigo-900 px-6 py-4">
                <h2 className="text-xl font-bold text-white">
                  {activeSection.title}
                </h2>
              </div>
              <div className="p-6 text-lg leading-relaxed text-slate-700 bg-white">
                {activeSection.description}
              </div>
            </Card>

            {/* Diagram Panel */}
            <Card className="grid grid-rows-[auto_auto_1fr] h-full">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                <h3 className="text-lg font-bold text-slate-800">
                  {activeSection.diagramTitle}
                </h3>
              </div>
              <div className="p-4 bg-white min-h-[300px]">
                <DiagramRender diagramId={activeSection.diagramId} />
              </div>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <LessonLayout 
      title="Impacto de las señales de alerta en la seguridad" 
      sections={LESSON_DATA} 
    />
  );
}
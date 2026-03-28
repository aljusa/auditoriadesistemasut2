import React from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Database, 
  Server, 
  Layout, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  Search,
  ShieldCheck,
  UserX,
  FileWarning,
  Lock,
  Activity
} from 'lucide-react';

// --- Componentes Visuales (Diagramas) ---

const TrafficLightDiagram = () => (
  <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="bg-gray-800 p-4 rounded-2xl shadow-inner flex flex-col gap-4 w-24 items-center">
      <div className="w-12 h-12 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] border-2 border-red-600"></div>
      <div className="w-12 h-12 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)] border-2 border-yellow-500"></div>
      <div className="w-12 h-12 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] border-2 border-green-600"></div>
    </div>
    <div className="flex flex-col justify-between h-40">
      <div className="flex items-center gap-3">
        <span className="w-4 h-4 rounded-full bg-red-500"></span>
        <p className="text-gray-700 font-medium">Alertas Críticas (Riesgo inminente o fallo de seguridad)</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
        <p className="text-gray-700 font-medium">Advertencias (Anomalías que requieren revisión)</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-4 h-4 rounded-full bg-green-500"></span>
        <p className="text-gray-700 font-medium">Condiciones Seguras (Controles operando correctamente)</p>
      </div>
    </div>
  </div>
);
const DatabaseDiagram = () => {
  return (
    <div className="relative w-full p-12 bg-blue-50 rounded-xl border border-blue-100 overflow-hidden min-h-[320px]">

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center bg-white px-6 py-4 rounded-xl shadow-md border border-blue-200">
          <Database size={64} className="text-blue-600 mb-2" />
          <span className="font-bold text-blue-800 text-lg text-center">
            Repositorio de Datos
          </span>
        </div>
      </div>

      {/* Top Left */}
      <div className="absolute top-6 left-6 flex flex-col items-center bg-white px-3 py-2 rounded-lg shadow-md border border-red-200 animate-pulse w-[140px] text-center">
        <UserX className="text-red-500" size={22} />
        <span className="text-xs font-semibold text-red-700 mt-1">
          Accesos inusuales
        </span>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-6 left-6 flex flex-col items-center bg-white px-3 py-2 rounded-lg shadow-md border border-red-200 animate-pulse w-[140px] text-center">
        <Lock className="text-red-500" size={22} />
        <span className="text-xs font-semibold text-red-700 mt-1">
          Falta de cifrado
        </span>
      </div>

      {/* Right Center */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center bg-white px-3 py-2 rounded-lg shadow-md border border-red-200 animate-pulse w-[140px] text-center">
        <FileWarning className="text-red-500" size={22} />
        <span className="text-xs font-semibold text-red-700 mt-1">
          Datos corruptos
        </span>
      </div>

  

    </div>
  );
};

const AppLayersDiagram = () => (
  <div className="flex flex-col gap-3 p-6 bg-white rounded-xl shadow-sm border border-gray-100 w-full max-w-md mx-auto">
    <div className="flex justify-between items-center bg-purple-100 p-4 rounded-lg border border-purple-200">
      <div className="flex items-center gap-3">
        <Layout className="text-purple-600" />
        <span className="font-semibold text-purple-800">Capa de Interfaz</span>
      </div>
      <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold border border-red-200">
        <AlertTriangle size={14} /> Sin validación de entrada
      </div>
    </div>

    <div className="flex justify-between items-center bg-indigo-100 p-4 rounded-lg border border-indigo-200">
      <div className="flex items-center gap-3">
        <Activity className="text-indigo-600" />
        <span className="font-semibold text-indigo-800">Lógica de Negocio</span>
      </div>
      <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold border border-red-200">
        <AlertTriangle size={14} /> Fallos y cuelgues
      </div>
    </div>

    <div className="flex justify-between items-center bg-slate-100 p-4 rounded-lg border border-slate-200">
      <div className="flex items-center gap-3">
        <Server className="text-slate-600" />
        <span className="font-semibold text-slate-800">Capa de Datos</span>
      </div>
      <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold border border-red-200">
        <AlertTriangle size={14} /> Sin autenticación
      </div>
    </div>
  </div>
);

const RiskMatrixDiagram = () => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="relative w-full max-w-sm aspect-square border-l-2 border-b-2 border-gray-400 flex flex-col">
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 font-bold text-gray-500 tracking-wider">PROBABILIDAD</div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-bold text-gray-500 tracking-wider">IMPACTO</div>
      
      {/* Cuadrantes */}
      <div className="flex-1 flex">
        <div className="flex-1 bg-yellow-100 border border-white flex items-center justify-center relative group">
          <span className="text-yellow-700 font-semibold opacity-50 group-hover:opacity-100 transition-opacity">Medio</span>
          <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-500 rounded-full shadow-sm animate-bounce" title="Alerta: Fallo menor recurrente"></div>
        </div>
        <div className="flex-1 bg-red-100 border border-white flex items-center justify-center relative group">
          <span className="text-red-700 font-semibold opacity-50 group-hover:opacity-100 transition-opacity">Alto / Crítico</span>
          <div className="absolute bottom-6 right-6 w-4 h-4 bg-red-600 rounded-full shadow-sm animate-ping" title="Alerta: Acceso no autorizado a DB"></div>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="flex-1 bg-green-100 border border-white flex items-center justify-center relative group">
          <span className="text-green-700 font-semibold opacity-50 group-hover:opacity-100 transition-opacity">Bajo</span>
        </div>
        <div className="flex-1 bg-yellow-100 border border-white flex items-center justify-center relative group">
          <span className="text-yellow-700 font-semibold opacity-50 group-hover:opacity-100 transition-opacity">Medio</span>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-500 rounded-full shadow-sm" title="Alerta: Falta de parche no crítico"></div>
        </div>
      </div>
    </div>
  </div>
);

const TimelineDiagram = () => (
  <div className="flex flex-col gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="relative flex items-center justify-between before:absolute before:inset-0 before:h-1 before:bg-green-200 before:top-1/2 before:-translate-y-1/2 before:z-0">
      <div className="z-10 bg-white p-2 rounded-full border-2 border-green-500 text-green-600 flex flex-col items-center gap-2">
        <AlertTriangle size={24} />
        <span className="text-xs font-bold text-gray-600 absolute -bottom-6 whitespace-nowrap">Señal detectada</span>
      </div>
      <div className="z-10 bg-white px-3 py-1 rounded-full border border-green-300 text-green-700 text-sm font-semibold shadow-sm">
        Acción Rápida
      </div>
      <div className="z-10 bg-white p-2 rounded-full border-2 border-green-600 text-green-600 bg-green-50 flex flex-col items-center gap-2">
        <CheckCircle size={24} />
        <span className="text-xs font-bold text-gray-600 absolute -bottom-6 whitespace-nowrap">Riesgo Mitigado</span>
      </div>
    </div>

    <div className="h-px bg-gray-200 my-4"></div>

    <div className="relative flex items-center justify-between before:absolute before:inset-0 before:h-1 before:bg-red-200 before:top-1/2 before:-translate-y-1/2 before:z-0">
      <div className="z-10 bg-white p-2 rounded-full border-2 border-red-400 text-red-500 flex flex-col items-center gap-2">
        <AlertTriangle size={24} />
        <span className="text-xs font-bold text-gray-600 absolute -top-6 whitespace-nowrap">Señal ignorada</span>
      </div>
      <div className="z-10 bg-white px-3 py-1 rounded-full border border-red-300 text-red-700 text-sm font-semibold shadow-sm">
        Tiempo transcurrido
      </div>
      <div className="z-10 bg-white p-2 rounded-full border-2 border-red-600 text-red-600 bg-red-50 flex flex-col items-center gap-2">
        <XCircle size={24} />
        <span className="text-xs font-bold text-red-600 absolute -bottom-6 whitespace-nowrap">Incidente Crítico</span>
      </div>
    </div>
  </div>
);

const IntegrationDiagram = () => (
  <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 flex flex-col md:flex-row items-center justify-center gap-8">
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 bg-white p-2 rounded shadow-sm border border-gray-100"><Database className="text-blue-500" size={20}/> Alertas de Datos</div>
      <div className="flex items-center gap-2 bg-white p-2 rounded shadow-sm border border-gray-100"><Layout className="text-purple-500" size={20}/> Alertas de Software</div>
      <div className="flex items-center gap-2 bg-white p-2 rounded shadow-sm border border-gray-100"><ShieldAlert className="text-red-500" size={20}/> Alertas de Acceso</div>
    </div>
    
    <div className="text-gray-400 hidden md:block"><ArrowRight size={32} /></div>
    
    <div className="flex flex-col items-center text-center bg-indigo-600 text-white p-6 rounded-full shadow-lg border-4 border-indigo-200">
      <Search size={40} className="mb-2" />
      <span className="font-bold">Proceso de<br/>Auditoría</span>
    </div>

    <div className="text-gray-400 hidden md:block"><ArrowRight size={32} /></div>

    <div className="flex flex-col items-center text-center bg-green-50 p-6 rounded-xl border-2 border-green-500 shadow-sm">
      <ShieldCheck size={48} className="text-green-600 mb-3" />
      <span className="font-bold text-green-800">Sistema Fortalecido</span>
      <span className="text-xs text-green-600 mt-1">Acciones de Mejora Aplicadas</span>
    </div>
  </div>
);

// --- Componente Estructural de Sección ---

type LessonSectionProps = {
  number: number;
  title: string;
  explanation:  React.ReactNode;
  DiagramComponent: React.ComponentType;
};

const LessonSection: React.FC<LessonSectionProps> = ({
  number,
  title,
  explanation,
  DiagramComponent,
}) => (
  <section className="mb-12 scroll-mt-6" id={`section-${number}`}>
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
            {number}
          </span>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        
        <div className="prose prose-blue max-w-none text-gray-600 mb-8 leading-relaxed">
          {explanation}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <div className="flex justify-center">
            <DiagramComponent />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Aplicación Principal ---

export default function App() {
  const sectionsData = [
    {
      title: "Introducción a la detección de señales de alerta",
      explanation: <p>Durante una auditoría, no solo se revisan controles formales, sino también indicadores que sugieren posibles fallas o vulnerabilidades. Estas señales de alerta permiten anticipar riesgos antes de que se conviertan en incidentes críticos.</p>,
      DiagramComponent: TrafficLightDiagram
    },
    {
      title: "Señales de alerta en los datos",
      explanation: (
        <>
          <p className="mb-3">Las señales de alerta en los datos son indicios de que la información puede estar en riesgo o mal gestionada. Estas situaciones suelen evidenciar debilidades en los controles de seguridad o en la administración de la información.</p>
          <p className="font-semibold text-gray-700 mb-2">Algunos indicadores relevantes incluyen:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Accesos no autorizados o inusuales a la información.</li>
            <li>Falta de mecanismos de respaldo (backups).</li>
            <li>Presencia de datos inconsistentes, incompletos o corruptos.</li>
            <li>Ausencia de cifrado en información sensible.</li>
          </ul>
        </>
      ),
      DiagramComponent: DatabaseDiagram
    },
    {
      title: "Señales de alerta en el software de aplicación",
      explanation: (
        <>
          <p className="mb-3">En el software de aplicación, las señales de alerta reflejan posibles fallas en el desarrollo, mantenimiento o seguridad del sistema. Estas pueden ser aprovechadas para explotar vulnerabilidades.</p>
          <p className="font-semibold text-gray-700 mb-2">Entre las más comunes se encuentran:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fallos frecuentes o comportamiento inestable de la aplicación.</li>
            <li>Falta de actualizaciones o parches de seguridad.</li>
            <li>Código sin validación de entradas o con prácticas inseguras.</li>
            <li>Accesos sin mecanismos adecuados de autenticación.</li>
          </ul>
        </>
      ),
      DiagramComponent: AppLayersDiagram
    },
    {
      title: "Análisis de riesgos asociados a las señales",
      explanation: <p>Cada señal de alerta debe analizarse considerando dos factores: la <strong>probabilidad</strong> de que ocurra un incidente y el <strong>impacto</strong> que tendría en la organización. Esta evaluación permite priorizar los riesgos y enfocar los esfuerzos de mitigación.</p>,
      DiagramComponent: RiskMatrixDiagram
    },
    {
      title: "Importancia de la detección temprana",
      explanation: <p>La identificación oportuna de señales de alerta permite actuar antes de que los problemas escalen. Esto reduce la posibilidad de incidentes graves como pérdida de datos, interrupciones del servicio o ataques cibernéticos.</p>,
      DiagramComponent: TimelineDiagram
    },
    {
      title: "Cierre",
      explanation: <p>Las señales de alerta constituyen herramientas clave para el auditor, ya que permiten identificar vulnerabilidades de manera proactiva. Su correcta interpretación fortalece la seguridad de los datos y del software de aplicación.</p>,
      DiagramComponent: IntegrationDiagram
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      {/* Cabecera / Header */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-12 px-6 shadow-md mb-12">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Señales de alerta en datos y software de aplicación
          </h1>
       
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        {sectionsData.map((section, index) => (
          <LessonSection 
            key={index}
            number={index + 1}
            title={section.title}
            explanation={section.explanation}
            DiagramComponent={section.DiagramComponent}
          />
        ))}
      </main>
 
    </div>
  );
}
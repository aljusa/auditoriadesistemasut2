import React from 'react';
import { 
  UserSearch, Laptop, FileText, Users, Settings, ShieldCheck, 
  Database, Server, Activity, ArrowRight, Terminal, Search, 
  Cog, CheckCircle, AlertTriangle, Clock, Wrench, BookOpen,
  MessageSquare, Eye, Fingerprint, Lock, FileSearch
} from 'lucide-react';

// --- Componentes Visuales (Diagramas) ---

const IntroDiagram = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl border border-blue-100 h-full">
    <div className="flex items-center w-full justify-between mb-8 relative">
      <div className="flex flex-col items-center gap-2 z-10">
        <div className="p-3 bg-white rounded-full shadow-md text-blue-600"><Laptop size={24} /></div>
        <span className="text-xs font-semibold text-gray-600">Software</span>
      </div>
      <div className="flex flex-col items-center gap-2 z-10">
        <div className="p-3 bg-white rounded-full shadow-md text-blue-600"><FileText size={24} /></div>
        <span className="text-xs font-semibold text-gray-600">Documentos</span>
      </div>
      <div className="flex flex-col items-center gap-2 z-10">
        <div className="p-3 bg-white rounded-full shadow-md text-blue-600"><MessageSquare size={24} /></div>
        <span className="text-xs font-semibold text-gray-600">Entrevistas</span>
      </div>
      {/* Líneas conectoras horizontales */}
      <div className="absolute top-6 left-10 right-10 h-0.5 bg-blue-200 z-0"></div>
    </div>
    
    <div className="flex flex-col items-center my-4 relative">
      <div className="h-8 w-0.5 bg-blue-300 mb-2"></div>
      <div className="p-4 bg-blue-600 text-white rounded-full shadow-lg z-10 animate-pulse">
        <UserSearch size={40} />
      </div>
      <span className="font-bold text-blue-800 mt-2">Auditor en el Centro</span>
      <div className="h-8 w-0.5 bg-blue-300 mt-2"></div>
    </div>

    <div className="flex items-center gap-8 mt-4">
      <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 shadow-sm w-32">
        <Server className="text-indigo-500" size={32} />
        <span className="text-sm font-medium text-center">Sistemas Evaluados</span>
      </div>
    </div>
  </div>
);

const TechniquesDiagram = () => (
  <div className="grid grid-cols-2 gap-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100 h-full">
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
      <MessageSquare className="text-indigo-500 mb-2" size={28} />
      <span className="text-sm font-bold text-gray-700">Entrevistas</span>
      <ArrowRight className="text-gray-300 my-1 transform rotate-90" size={16} />
      <Users className="text-gray-600" size={20} />
      <span className="text-xs text-gray-500">Personas</span>
    </div>
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
      <Eye className="text-indigo-500 mb-2" size={28} />
      <span className="text-sm font-bold text-gray-700">Observación</span>
      <ArrowRight className="text-gray-300 my-1 transform rotate-90" size={16} />
      <Settings className="text-gray-600" size={20} />
      <span className="text-xs text-gray-500">Procesos</span>
    </div>
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
      <FileSearch className="text-indigo-500 mb-2" size={28} />
      <span className="text-sm font-bold text-gray-700">Revisión</span>
      <ArrowRight className="text-gray-300 my-1 transform rotate-90" size={16} />
      <FileText className="text-gray-600" size={20} />
      <span className="text-xs text-gray-500">Documentos</span>
    </div>
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
      <Fingerprint className="text-indigo-500 mb-2" size={28} />
      <span className="text-sm font-bold text-gray-700">Pruebas</span>
      <ArrowRight className="text-gray-300 my-1 transform rotate-90" size={16} />
      <Laptop className="text-gray-600" size={20} />
      <span className="text-xs text-gray-500">Sistemas</span>
    </div>
  </div>
);

const ToolsDiagram = () => (
  <div className="flex flex-col p-6 bg-emerald-50 rounded-xl border border-emerald-100 h-full justify-center">
    <div className="flex justify-around mb-8">
      <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-sm border border-emerald-100"><Terminal className="text-emerald-600" size={24}/><span className="text-[10px] mt-1">Logs</span></div>
      <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-sm border border-emerald-100"><Search className="text-emerald-600" size={24}/><span className="text-[10px] mt-1">Escáner</span></div>
      <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-sm border border-emerald-100"><Lock className="text-emerald-600" size={24}/><span className="text-[10px] mt-1">Pen-test</span></div>
      <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-sm border border-emerald-100"><Activity className="text-emerald-600" size={24}/><span className="text-[10px] mt-1">Monitor</span></div>
    </div>
    <div className="flex justify-center mb-6 relative">
       <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <ArrowRight className="transform rotate-90 w-full" size={60} />
       </div>
    </div>
    <div className="flex justify-center gap-6 p-4 bg-slate-800 rounded-xl text-white shadow-inner">
      <div className="flex flex-col items-center"><Server className="text-blue-400 mb-2" size={32}/><span className="text-xs">Servidores</span></div>
      <div className="flex flex-col items-center"><Database className="text-yellow-400 mb-2" size={32}/><span className="text-xs">Bases de Datos</span></div>
      <div className="flex flex-col items-center"><Laptop className="text-green-400 mb-2" size={32}/><span className="text-xs">Aplicaciones</span></div>
    </div>
  </div>
);

const AutomationDiagram = () => (
  <div className="flex items-center justify-between p-6 bg-purple-50 rounded-xl border border-purple-100 h-full">
    <div className="flex flex-col items-center">
      <div className="p-4 bg-white rounded-full shadow-md border border-purple-200">
        <Database className="text-purple-500" size={36} />
      </div>
      <span className="text-sm font-semibold mt-2 text-purple-800">Datos Crudos</span>
    </div>
    
    <div className="flex flex-col items-center flex-1">
      <div className="flex items-center w-full justify-center gap-2 text-purple-300">
        <div className="h-0.5 bg-purple-300 w-8"></div>
        <ArrowRight size={20} />
      </div>
    </div>

    <div className="flex flex-col items-center relative">
      <div className="p-5 bg-purple-600 rounded-lg shadow-lg animate-spin-slow">
        <Cog className="text-white" size={40} />
      </div>
      <span className="text-sm font-bold mt-3 text-purple-900">Procesamiento<br/>Automático</span>
    </div>

    <div className="flex flex-col items-center flex-1">
      <div className="flex items-center w-full justify-center gap-2 text-purple-300">
        <div className="h-0.5 bg-purple-300 w-8"></div>
        <ArrowRight size={20} />
      </div>
    </div>

    <div className="flex flex-col items-center">
      <div className="p-4 bg-white rounded-full shadow-md border border-purple-200">
        <FileText className="text-purple-500" size={36} />
      </div>
      <span className="text-sm font-semibold mt-2 text-purple-800">Reportes</span>
    </div>
  </div>
);

const SelectionDiagram = () => (
  <div className="flex flex-col items-center p-6 bg-orange-50 rounded-xl border border-orange-100 h-full">
    <div className="flex w-full justify-around mb-6">
      <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-orange-200 w-24">
        <Laptop className="text-orange-500 mb-1" size={24}/>
        <span className="text-xs font-semibold text-center">Tipo de Sistema</span>
      </div>
      <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-orange-200 w-24">
        <AlertTriangle className="text-orange-500 mb-1" size={24}/>
        <span className="text-xs font-semibold text-center">Nivel de Riesgo</span>
      </div>
      <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-orange-200 w-24">
        <Clock className="text-orange-500 mb-1" size={24}/>
        <span className="text-xs font-semibold text-center">Recursos</span>
      </div>
    </div>
    
    <div className="w-full max-w-[200px] h-12 bg-orange-200 rounded-t-full flex items-end justify-center pb-1">
       <ArrowRight className="transform rotate-90 text-orange-600" size={24} />
    </div>
    <div className="w-full max-w-[100px] h-12 bg-orange-300 flex items-end justify-center pb-2">
       <ArrowRight className="transform rotate-90 text-orange-700" size={24} />
    </div>
    
    <div className="mt-2 p-4 bg-orange-600 text-white rounded-xl shadow-lg flex items-center gap-3">
      <CheckCircle size={28} />
      <span className="font-bold">Selección Óptima</span>
    </div>
  </div>
);

const ClosingDiagram = () => (
  <div className="flex flex-col p-6 bg-slate-50 rounded-xl border border-slate-200 h-full justify-center">
    <div className="flex justify-center gap-12 mb-6">
      <div className="flex flex-col items-center">
        <div className="p-4 bg-white rounded-full shadow-md border border-slate-200">
          <BookOpen className="text-blue-600" size={32} />
        </div>
        <span className="font-semibold text-slate-700 mt-2">Técnicas</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="p-4 bg-white rounded-full shadow-md border border-slate-200">
          <Wrench className="text-emerald-600" size={32} />
        </div>
        <span className="font-semibold text-slate-700 mt-2">Herramientas</span>
      </div>
    </div>
    
    <div className="flex justify-center mb-6 text-slate-400">
      <ArrowRight className="transform rotate-90" size={30} />
      <ArrowRight className="transform rotate-90 -ml-4" size={30} />
    </div>

    <div className="flex flex-col items-center p-6 bg-slate-800 rounded-xl text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500 w-16 h-16 rounded-full opacity-20 blur-xl"></div>
      <ShieldCheck className="text-green-400 mb-3 z-10" size={48} />
      <h3 className="text-lg font-bold z-10">Auditoría Efectiva</h3>
      <p className="text-sm text-slate-300 text-center mt-2 z-10">Mejora en la seguridad de datos y software</p>
    </div>
  </div>
);

// --- Componente de Sección Reutilizable ---

type SectionProps = {
  title: string;
  children?: React.ReactNode;
  visual?: React.ReactNode;
  reverse?: boolean;
  index?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  children,
  visual,
  reverse = false,
  index,
}) => (
  <section className={`py-12 px-6 md:px-12 ${reverse ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100`}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
      
      {/* Columna de Texto */}
      <div className={`flex-1 flex flex-col justify-center ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
            {index}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            {title}
          </h2>
        </div>
        <div className="text-gray-600 leading-relaxed text-lg space-y-4">
          {children}
        </div>
      </div>

      {/* Columna Visual */}
      <div className={`flex-1 min-h-[300px] ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <div className="h-full w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
           {visual}
        </div>
      </div>

    </div>
  </section>
);

// --- Aplicación Principal ---

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* Encabezado */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <ShieldCheck size={40} className="text-blue-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Técnicas y Herramientas de Auditoría
          </h1>
        
        </div>
      </header>

      {/* Contenido Principal */}
      <main>
        
        <Section 
          index="1"
          title="Introducción a las técnicas y herramientas de auditoría"
          visual={<IntroDiagram />}
        >
          <p>
            Las técnicas y herramientas son elementos fundamentales que permiten al auditor evaluar de manera eficiente la seguridad de los datos y del software de aplicación.
          </p>
          <p>
            Su correcta aplicación facilita la <strong>identificación de riesgos</strong> y la obtención de <strong>evidencia confiable</strong> para garantizar la integridad de los sistemas evaluados.
          </p>
        </Section>

        <Section 
          index="2"
          title="Técnicas de auditoría"
          visual={<TechniquesDiagram />}
          reverse
        >
          <p>
            Las técnicas de auditoría son métodos utilizados para recopilar información, analizar controles y evaluar el cumplimiento de los sistemas. Entre las principales se encuentran:
          </p>
          <ul className="list-none space-y-3 mt-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 mt-1 shrink-0" size={18} />
              <span><strong>Entrevistas:</strong> permiten obtener información directa del personal clave.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 mt-1 shrink-0" size={18} />
              <span><strong>Observación directa:</strong> consiste en examinar procesos en tiempo real.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 mt-1 shrink-0" size={18} />
              <span><strong>Revisión documental:</strong> analiza políticas, procedimientos y registros.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 mt-1 shrink-0" size={18} />
              <span><strong>Pruebas de cumplimiento:</strong> verifican si los controles se aplican correctamente.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 mt-1 shrink-0" size={18} />
              <span><strong>Análisis de vulnerabilidades:</strong> identifica debilidades en sistemas y aplicaciones.</span>
            </li>
          </ul>
        </Section>

        <Section 
          index="3"
          title="Herramientas de auditoría"
          visual={<ToolsDiagram />}
        >
          <p>
            Las herramientas de auditoría son recursos tecnológicos que facilitan el análisis técnico de los sistemas y datos. Estas herramientas permiten detectar problemas que no siempre son visibles mediante técnicas manuales.
          </p>
          <p className="font-semibold text-gray-700 mt-4 mb-2">Algunas de las más utilizadas incluyen:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-emerald-50 p-3 rounded border border-emerald-100 flex items-center gap-2">
              <Terminal size={16} className="text-emerald-600"/> Software para análisis de registros (logs)
            </div>
            <div className="bg-emerald-50 p-3 rounded border border-emerald-100 flex items-center gap-2">
              <Search size={16} className="text-emerald-600"/> Escáneres de vulnerabilidades
            </div>
            <div className="bg-emerald-50 p-3 rounded border border-emerald-100 flex items-center gap-2">
              <Lock size={16} className="text-emerald-600"/> Herramientas de pruebas de penetración
            </div>
            <div className="bg-emerald-50 p-3 rounded border border-emerald-100 flex items-center gap-2">
              <Activity size={16} className="text-emerald-600"/> Sistemas de monitoreo de seguridad
            </div>
          </div>
        </Section>

        <Section 
          index="4"
          title="Automatización en la auditoría"
          visual={<AutomationDiagram />}
          reverse
        >
          <p>
            La automatización implica el uso de herramientas tecnológicas para ejecutar tareas de auditoría de forma más rápida y precisa. Esto es especialmente útil en entornos con grandes volúmenes de información.
          </p>
          <p className="font-semibold text-gray-700 mt-4">Entre sus ventajas destacan:</p>
          <ul className="space-y-2 mt-2 ml-1">
            <li className="flex items-center gap-2 text-purple-800 bg-purple-50 px-3 py-2 rounded">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              Detección rápida de vulnerabilidades
            </li>
            <li className="flex items-center gap-2 text-purple-800 bg-purple-50 px-3 py-2 rounded">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              Análisis masivo de datos
            </li>
            <li className="flex items-center gap-2 text-purple-800 bg-purple-50 px-3 py-2 rounded">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
              Generación automática de reportes
            </li>
          </ul>
        </Section>

        <Section 
          index="5"
          title="Selección de técnicas y herramientas"
          visual={<SelectionDiagram />}
        >
          <p>
            La elección de las técnicas y herramientas adecuadas no es un proceso estandarizado, sino que depende de varios factores críticos. Una selección adecuada asegura que la auditoría sea verdaderamente <strong>eficiente y relevante</strong>.
          </p>
          <p className="mb-2">Los factores a evaluar incluyen:</p>
          <div className="pl-4 border-l-2 border-orange-300 space-y-3">
            <div>
              <strong className="text-gray-800">El tipo de sistema o aplicación:</strong>
              <p className="text-sm">Cada arquitectura requiere enfoques específicos de evaluación.</p>
            </div>
            <div>
              <strong className="text-gray-800">El nivel de riesgo identificado:</strong>
              <p className="text-sm">Sistemas críticos demandan herramientas más profundas e intrusivas.</p>
            </div>
            <div>
              <strong className="text-gray-800">Los recursos disponibles:</strong>
              <p className="text-sm">Considerando el tiempo, personal capacitado y presupuesto tecnológico.</p>
            </div>
          </div>
        </Section>

        <Section 
          index="6"
          title="Cierre de la lección"
          visual={<ClosingDiagram />}
          reverse
        >
          <p className="text-xl font-medium text-slate-800">
            El uso adecuado de técnicas y herramientas fortalece la efectividad del proceso de auditoría.
          </p>
          <p className="mt-4">
            Al integrar metodologías sólidas con la tecnología correcta, el auditor no solo evalúa el estado actual, sino que permite identificar vulnerabilidades con mayor precisión.
          </p>
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r text-blue-900 font-medium">
            En última instancia, esto contribuye directamente a mejorar y garantizar la seguridad de los datos y del software de aplicación de la organización.
          </div>
        </Section>

      </main>


    </div>
  );
};

export default App;
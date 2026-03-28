import React from 'react';
import { 
  BookOpen, Target, ShieldCheck, Layers, 
  Link as LinkIcon, CheckSquare, Flag, ArrowRight,
  ArrowDown, Activity, FileText, Lock, AlertTriangle, Shield
} from 'lucide-react';

// --- COMPONENTES VISUALES (DIAGRAMAS) ---

const Diagram1 = () => (
  <div className="flex flex-col items-center w-full p-6 bg-slate-50 rounded-xl border border-slate-200">
    <div className="flex w-full justify-around gap-4 mb-4">
      <div className="flex-1 bg-blue-100 border border-blue-300 p-4 rounded-lg shadow-sm text-center relative">
        <h4 className="font-bold text-blue-800 flex items-center justify-center gap-2">
          <Target className="w-5 h-5" /> Objetivos
        </h4>
        <p className="text-xs text-blue-600 mt-2">Qué se busca evaluar</p>
      </div>
      <div className="flex-1 bg-emerald-100 border border-emerald-300 p-4 rounded-lg shadow-sm text-center relative">
        <h4 className="font-bold text-emerald-800 flex items-center justify-center gap-2">
          <Layers className="w-5 h-5" /> Criterios
        </h4>
        <p className="text-xs text-emerald-600 mt-2">Marco de comparación</p>
      </div>
    </div>
    
    <div className="flex w-full justify-around px-12 text-slate-400 mb-4">
      <ArrowDown className="w-8 h-8 animate-bounce" />
      <ArrowDown className="w-8 h-8 animate-bounce" />
    </div>

    <div className="w-3/4 bg-indigo-600 text-white p-4 rounded-xl shadow-md text-center">
      <h3 className="text-lg font-bold flex items-center justify-center gap-2">
        <Activity className="w-6 h-6" /> Auditoría Efectiva
      </h3>
    </div>
  </div>
);

const Diagram2 = () => {

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-4">
      {/* SVG para líneas conectoras */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        <g stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4">
          <line x1="200" y1="200" x2="200" y2="60" /> {/* Top */}
          <line x1="200" y1="200" x2="330" y2="150" /> {/* Top Right */}
          <line x1="200" y1="200" x2="280" y2="310" /> {/* Bottom Right */}
          <line x1="200" y1="200" x2="120" y2="310" /> {/* Bottom Left */}
          <line x1="200" y1="200" x2="70" y2="150" /> {/* Top Left */}
        </g>
      </svg>
      
      {/* Nodo Central */}
      <div className="absolute z-10 w-24 h-24 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-blue-200">
        <Target className="w-8 h-8 mb-1" />
        <span className="font-bold text-sm">Auditoría</span>
      </div>

      {/* Nodos Satélite */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border shadow-sm px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2">
        <Lock className="w-4 h-4 text-slate-500" /> Protección accesos
      </div>
      <div className="absolute top-1/3 right-4 bg-white border shadow-sm px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2">
        <FileText className="w-4 h-4 text-slate-500" /> Integridad datos
      </div>
      <div className="absolute bottom-12 right-12 bg-white border shadow-sm px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2">
        <Shield className="w-4 h-4 text-slate-500" /> Seguridad SW
      </div>
      <div className="absolute bottom-12 left-12 bg-white border shadow-sm px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-slate-500" /> Riesgos
      </div>
      <div className="absolute top-1/3 left-4 bg-white border shadow-sm px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2">
        <CheckSquare className="w-4 h-4 text-slate-500" /> Normativas
      </div>
    </div>
  );
};

const Diagram3 = () => (
  <div className="flex flex-col items-center justify-end w-full min-h-[300px] p-6 bg-slate-50 rounded-xl border border-slate-200 gap-1">
    <div className="w-1/3 bg-rose-500 text-white py-3 px-4 text-center rounded-t-xl shadow-sm z-40 transform hover:scale-105 transition-transform cursor-pointer">
      <p className="text-xs font-semibold opacity-80 uppercase tracking-wider">Jerarquía 1</p>
      <p className="font-bold text-sm">Regulaciones Legales</p>
    </div>
    <div className="w-1/2 bg-amber-500 text-white py-4 px-4 text-center shadow-sm z-30 transform hover:scale-105 transition-transform cursor-pointer">
      <p className="text-xs font-semibold opacity-80 uppercase tracking-wider">Jerarquía 2</p>
      <p className="font-bold text-sm">Normas Internacionales (ISO)</p>
    </div>
    <div className="w-3/4 bg-emerald-500 text-white py-5 px-4 text-center shadow-sm z-20 transform hover:scale-105 transition-transform cursor-pointer">
      <p className="text-xs font-semibold opacity-80 uppercase tracking-wider">Jerarquía 3</p>
      <p className="font-bold">Políticas Internas</p>
    </div>
    <div className="w-full bg-blue-500 text-white py-6 px-4 text-center rounded-b-xl shadow-sm z-10 transform hover:scale-105 transition-transform cursor-pointer">
      <p className="text-xs font-semibold opacity-80 uppercase tracking-wider">Base</p>
      <p className="font-bold text-lg">Buenas Prácticas de Desarrollo</p>
    </div>
  </div>
);

const Diagram4 = () => (
  <div className="relative w-full p-6 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center overflow-hidden min-h-[250px]">
    {/* Conexiones de fondo */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      <path d="M 150 50 C 250 50, 250 150, 350 150" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="5 5" className="opacity-50" />
      <path d="M 150 150 C 250 150, 250 50, 350 50" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="5 5" className="opacity-50" />
      <path d="M 150 150 C 250 150, 250 250, 350 250" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="5 5" className="opacity-50" />
    </svg>

    {/* Columna Objetivos */}
    <div className="w-5/12 flex flex-col gap-6 z-10">
      <h4 className="text-center font-bold text-slate-700 border-b-2 border-blue-500 pb-2 mb-2">Objetivos</h4>
      <div className="bg-white border-l-4 border-blue-500 shadow-md p-3 rounded text-sm font-medium">Proteger Datos</div>
      <div className="bg-white border-l-4 border-blue-500 shadow-md p-3 rounded text-sm font-medium">Seguridad Software</div>
    </div>

    <div className="z-10 bg-slate-200 p-2 rounded-full">
      <LinkIcon className="w-6 h-6 text-slate-500" />
    </div>

    {/* Columna Criterios */}
    <div className="w-5/12 flex flex-col gap-6 z-10">
      <h4 className="text-center font-bold text-slate-700 border-b-2 border-emerald-500 pb-2 mb-2">Criterios</h4>
      <div className="bg-white border-l-4 border-emerald-500 shadow-md p-3 rounded text-sm font-medium">ISO/IEC 27001</div>
      <div className="bg-white border-l-4 border-emerald-500 shadow-md p-3 rounded text-sm font-medium">Políticas de Acceso</div>
      <div className="bg-white border-l-4 border-emerald-500 shadow-md p-3 rounded text-sm font-medium">Leyes de Privacidad</div>
    </div>
  </div>
);

const Diagram5 = () => (
  <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
    <table className="w-full text-left border-collapse bg-white">
      <thead>
        <tr className="bg-slate-100 text-slate-700">
          <th className="p-4 font-bold border-b">Elemento a Evaluar</th>
          <th className="p-4 font-bold border-b text-center text-emerald-700 bg-emerald-50">Criterios Establecidos</th>
          <th className="p-4 font-bold border-b text-center text-blue-700 bg-blue-50">Estado Actual</th>
          <th className="p-4 font-bold border-b text-center">Desviación</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr className="border-b hover:bg-slate-50 transition-colors">
          <td className="p-4 font-medium text-slate-800">Cifrado de base de datos</td>
          <td className="p-4 text-center bg-emerald-50/30">AES-256 (Política IT-04)</td>
          <td className="p-4 text-center bg-blue-50/30">AES-128</td>
          <td className="p-4 text-center">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
              <AlertTriangle className="w-3 h-3" /> Incumplimiento
            </span>
          </td>
        </tr>
        <tr className="border-b hover:bg-slate-50 transition-colors">
          <td className="p-4 font-medium text-slate-800">Control de Accesos</td>
          <td className="p-4 text-center bg-emerald-50/30">MFA Obligatorio (ISO 27001)</td>
          <td className="p-4 text-center bg-blue-50/30">MFA Implementado 100%</td>
          <td className="p-4 text-center">
             <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
              <CheckSquare className="w-3 h-3" /> Conforme
            </span>
          </td>
        </tr>
        <tr className="hover:bg-slate-50 transition-colors">
          <td className="p-4 font-medium text-slate-800">Actualización de Parches</td>
          <td className="p-4 text-center bg-emerald-50/30">Instalación en &lt; 7 días</td>
          <td className="p-4 text-center bg-blue-50/30">Promedio: 12 días</td>
          <td className="p-4 text-center">
             <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
              <Activity className="w-3 h-3" /> Observación
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Diagram6 = () => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full bg-slate-800 p-6 rounded-xl shadow-lg text-white gap-4">
    <div className="flex flex-col items-center flex-1 text-center group cursor-pointer">
      <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
        <Target className="w-7 h-7" />
      </div>
      <span className="font-bold text-sm">Objetivos</span>
      <span className="text-xs text-slate-400 mt-1">Qué buscamos</span>
    </div>
    
    <ArrowRight className="w-6 h-6 text-slate-500 hidden md:block" />
    <ArrowDown className="w-6 h-6 text-slate-500 md:hidden" />

    <div className="flex flex-col items-center flex-1 text-center group cursor-pointer">
      <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
        <Layers className="w-7 h-7" />
      </div>
      <span className="font-bold text-sm">Criterios</span>
      <span className="text-xs text-slate-400 mt-1">Marco de ref.</span>
    </div>

    <ArrowRight className="w-6 h-6 text-slate-500 hidden md:block" />
    <ArrowDown className="w-6 h-6 text-slate-500 md:hidden" />

    <div className="flex flex-col items-center flex-1 text-center group cursor-pointer">
      <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
        <Activity className="w-7 h-7" />
      </div>
      <span className="font-bold text-sm">Evaluación</span>
      <span className="text-xs text-slate-400 mt-1">Comparación</span>
    </div>

    <ArrowRight className="w-6 h-6 text-slate-500 hidden md:block" />
    <ArrowDown className="w-6 h-6 text-slate-500 md:hidden" />

    <div className="flex flex-col items-center flex-1 text-center group cursor-pointer">
      <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
        <Flag className="w-7 h-7" />
      </div>
      <span className="font-bold text-sm">Mejora Continua</span>
      <span className="text-xs text-slate-400 mt-1">Acciones y ajustes</span>
    </div>
  </div>
);


// --- COMPONENTE DE SECCIÓN REUTILIZABLE ---

type SectionProps = {
  title: string;
  icon:  React.ReactNode;
  explanation?:  React.ReactNode;
  children?: React.ReactNode;
  isAlternate?: boolean;
};

const Section: React.FC<SectionProps> = ({
  title,
  icon,
  explanation,
  children,
  isAlternate = false,
}) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-8 py-12 px-6 lg:px-12 ${isAlternate ? 'bg-white' : 'bg-slate-50/50'} border-b border-slate-100 last:border-b-0`}>
      {/* Contenido Textual */}
      <div className="flex-1 lg:pr-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        </div>
        <div className="prose prose-slate prose-p:text-slate-600 prose-li:text-slate-600">
          {explanation}
        </div>
      </div>
      
      {/* Visualización */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl -z-10 opacity-50 blur-lg"></div>
        {children}
      </div>
    </div>
  );
};


// --- APLICACIÓN PRINCIPAL ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 pb-20">
      
      {/* Cabecera Principal */}
      <header className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white py-16 px-6 lg:px-12 shadow-xl relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <BookOpen className="w-12 h-12 text-blue-200" />
          </div>
          <div>
          
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Objetivos y criterios de auditoría <br className="hidden md:block"/> en datos y software de aplicación
            </h1>
           
          </div>
        </div>
      </header>

      {/* Contenedor Principal de Lecciones */}
      <main className="max-w-6xl mx-auto mt-8 bg-white shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden border border-slate-100">
        
        <Section 
          title="Introducción al enfoque de la auditoría" 
          icon={<Target className="w-6 h-6" />}
          isAlternate={true}
          explanation={
            <>
              <p>Para que una auditoría sea efectiva, es necesario definir con claridad <strong>qué se busca evaluar</strong> y con <strong>qué referencias</strong> se realizará dicha evaluación.</p>
              <p>Los objetivos orientan el propósito del análisis, mientras que los criterios establecen el marco de comparación y la norma a seguir.</p>
            </>
          }
        >
          <Diagram1 />
        </Section>

        <Section 
          title="Objetivos de la auditoría en datos y software" 
          icon={<ShieldCheck className="w-6 h-6" />}
          isAlternate={false}
          explanation={
            <>
              <p>Los objetivos determinan los aspectos que deben ser examinados dentro de los sistemas de información, enfocando el análisis en elementos críticos.</p>
              <p>Entre los principales objetivos se encuentran:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Verificar la protección frente a accesos no autorizados.</li>
                <li>Evaluar la integridad de la información almacenada.</li>
                <li>Analizar la seguridad del software de aplicación.</li>
                <li>Detectar vulnerabilidades y riesgos potenciales.</li>
                <li>Garantizar el cumplimiento normativo.</li>
              </ul>
            </>
          }
        >
          <Diagram2 />
        </Section>

        <Section 
          title="Criterios de auditoría: marco de referencia" 
          icon={<Layers className="w-6 h-6" />}
          isAlternate={true}
          explanation={
            <>
              <p>Los criterios son los <strong>estándares o puntos de referencia</strong> utilizados para evaluar el estado de los sistemas, funcionando como una guía objetiva para determinar la adecuación de los controles.</p>
              <p>Estos pueden incluir desde normativas amplias hasta prácticas específicas:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Normas internacionales (ej. ISO/IEC 27001).</li>
                <li>Políticas internas de la organización.</li>
                <li>Buenas prácticas de desarrollo seguro.</li>
                <li>Regulaciones legales aplicables.</li>
              </ul>
            </>
          }
        >
          <Diagram3 />
        </Section>

        <Section 
          title="Relación entre objetivos y criterios" 
          icon={<LinkIcon className="w-6 h-6" />}
          isAlternate={false}
          explanation={
            <>
              <p>Ambos elementos están estrechamente vinculados. Los <strong>objetivos</strong> definen <em>qué</em> se desea lograr, mientras que los <strong>criterios</strong> establecen <em>cómo</em> se medirá ese logro.</p>
              <p>Una adecuada alineación garantiza que la evaluación sea coherente, consistente y brinde utilidad real para la toma de decisiones estratégicas.</p>
            </>
          }
        >
          <Diagram4 />
        </Section>

        <Section 
          title="Evaluación del cumplimiento" 
          icon={<CheckSquare className="w-6 h-6" />}
          isAlternate={true}
          explanation={
            <>
              <p>Consiste en <strong>comparar los controles implementados con los criterios definidos</strong>. Este proceso metodológico permite identificar desviaciones, debilidades o incumplimientos.</p>
              <p>A partir de este análisis detallado se generan hallazgos que sirven como base sólida para recomendaciones de mejora en la infraestructura.</p>
            </>
          }
        >
          <Diagram5 />
        </Section>

        <Section 
          title="Cierre" 
          icon={<Flag className="w-6 h-6" />}
          isAlternate={false}
          explanation={
            <>
              <p>Los objetivos y criterios constituyen la <strong>base estructural de cualquier auditoría</strong>. Su correcta definición no es solo un formalismo, sino el núcleo del proceso.</p>
              <p>Permiten realizar evaluaciones sistemáticas, medibles y orientadas de manera directa a la mejora continua de la seguridad en datos y software de aplicación.</p>
            </>
          }
        >
          <Diagram6 />
        </Section>

      </main>
      
    </div>
  );
}
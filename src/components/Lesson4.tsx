import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis,
  Cell
} from 'recharts';
import {
  Shield,
  Target,
  
  FileCheck,
  CheckCircle2,
  XCircle,
  Users,
  Crosshair,
  
  ClipboardList
} from 'lucide-react';

// --- DEFINICIONES DE TIPOS ---

interface SectionData {
  id: string;
  tabLabel: string;
  title: string;
  diagramTitle: string;
  description: string;
}

interface LayoutProps {
  title: string;
  sections: SectionData[];
  activeSectionId: string;
  onTabChange: (id: string) => void;
  children: React.ReactNode;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// --- DATOS DE LA LECCIÓN ---

const LESSON_DATA: SectionData[] = [
  {
    id: 'delimitacion',
    tabLabel: '1. Delimitación',
    title: 'Delimitación de los objetivos de la auditoría',
    diagramTitle: 'Esquema de Orientación de Auditoría',
    description: 'Los objetivos de la auditoría definen los resultados que se esperan alcanzar durante el proceso de evaluación de la seguridad. Actúan como una guía que orienta las acciones del auditor, permitiendo enfocar el análisis en aspectos críticos de la seguridad física y del personal.'
  },
  {
    id: 'evaluacion',
    tabLabel: '2. Evaluación',
    title: 'Evaluación de la eficacia de los controles',
    diagramTitle: 'Eficacia de Controles: Implementado vs Resultado',
    description: 'Uno de los objetivos principales es analizar si los controles de seguridad física implementados funcionan de manera adecuada. Esto implica revisar sistemas como vigilancia, accesos y barreras físicas para determinar si realmente previenen o mitigan riesgos.'
  },
  {
    id: 'proteccion',
    tabLabel: '3. Protección',
    title: 'Verificación de la protección del personal',
    diagramTitle: 'Entorno de Protección del Personal',
    description: 'La auditoría busca asegurar que el personal esté protegido frente a riesgos dentro del entorno laboral. Esto incluye evaluar condiciones de seguridad, protocolos de actuación y medidas preventivas orientadas al bienestar de los empleados.'
  },
  {
    id: 'riesgos',
    tabLabel: '4. Riesgos',
    title: 'Identificación de riesgos y vulnerabilidades',
    diagramTitle: 'Mapa de Calor de Vulnerabilidades en Instalaciones',
    description: 'Otro objetivo clave es detectar riesgos, amenazas y vulnerabilidades tanto en las instalaciones como en la gestión del recurso humano. Este análisis permite anticipar posibles incidentes y tomar acciones preventivas.'
  },
  {
    id: 'cumplimiento',
    tabLabel: '5. Cumplimiento',
    title: 'Comprobación del cumplimiento normativo',
    diagramTitle: 'Matriz de Verificación Normativa',
    description: 'La auditoría también tiene como objetivo verificar que la organización cumpla con normativas externas, políticas internas y procedimientos establecidos. Esto asegura que las operaciones se desarrollen dentro de un marco regulado y seguro.'
  },
  {
    id: 'caracteristicas',
    tabLabel: '6. Características',
    title: 'Características de los objetivos de auditoría',
    diagramTitle: 'Atributos Centrales de los Objetivos',
    description: 'Para que los objetivos sean efectivos, deben ser claros, específicos y alineados con la realidad operativa de la organización. Esto permite obtener resultados relevantes y aplicables, facilitando la toma de decisiones y la mejora continua.'
  }
];

// --- COMPONENTES BASE (Utilizando exclusivamente CSS Grid) ---

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md border border-slate-200  ${className}`}>
    {children}
  </div>
);

const LessonLayout: React.FC<LayoutProps> = ({ title, sections, activeSectionId, onTabChange, children }) => {
  return (
    <div className="grid grid-rows-[auto_auto_1fr] h-screen w-full bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="grid grid-cols-[auto_1fr] gap-4 items-center p-4 bg-slate-900 text-white shadow-md z-10">
        <div className="grid place-items-center w-10 h-10 bg-blue-600 rounded-lg">
          <Shield size={24} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-wide m-0">{title}</h1>
      </header>

      {/* Navegación por Pestañas (Tabs) */}
      <nav className="grid grid-cols-3 auto-cols-max gap-2 p-3 bg-slate-800 shadow-inner border-t border-slate-700">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onTabChange(section.id)}
            className={`grid place-items-center px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer border-none outline-none ${
              activeSectionId === section.id
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
            }`}
            aria-selected={activeSectionId === section.id}
            role="tab"
          >
            {section.tabLabel}
          </button>
        ))}
      </nav>

      {/* Área de Contenido Principal */}
      <main className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 p-6 w-full max-w-7xl justify-self-center">
        {children}
      </main>
    </div>
  );
};

// --- COMPONENTES DE VISUALIZACIÓN (Diagram Renders) ---

const DiagramDelimitacion = () => (
  <div className="grid place-items-center w-full h-full min-h-[300px] bg-slate-50 p-6 rounded-lg">
    <svg viewBox="0 0 400 300" className="w-full max-w-md h-auto drop-shadow-md">
      {/* Flechas conectores */}
      <path d="M 200 150 L 100 80" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
      <path d="M 200 150 L 300 80" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
      <path d="M 200 150 L 100 220" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
      <path d="M 200 150 L 300 220" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
      
      {/* Nodos Periféricos */}
      <circle cx="100" cy="80" r="35" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="2" />
      <text x="100" y="85" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">Física</text>
      
      <circle cx="300" cy="80" r="35" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="2" />
      <text x="300" y="85" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">Personal</text>
      
      <circle cx="100" cy="220" r="35" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="2" />
      <text x="100" y="225" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">Lógica</text>
      
      <circle cx="300" cy="220" r="35" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="2" />
      <text x="300" y="225" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">Procesos</text>

      {/* Nodo Central */}
      <circle cx="200" cy="150" r="45" fill="#2563eb" stroke="#1e40af" strokeWidth="3" />
      <text x="200" y="145" textAnchor="middle" fontSize="12" fill="#ffffff" fontWeight="bold">Auditoría</text>
      <text x="200" y="160" textAnchor="middle" fontSize="10" fill="#bfdbfe">Centro Guía</text>
    </svg>
  </div>
);

const DiagramEvaluacion = () => {
  const data = [
    { name: 'CCTV', implementado: 95, resultado: 75 },
    { name: 'Ctrl. Accesos', implementado: 100, resultado: 90 },
    { name: 'Barreras Físicas', implementado: 80, resultado: 85 },
    { name: 'Rondas Vig.', implementado: 70, resultado: 50 },
  ];

  return (
    <div className="grid w-full h-full min-h-[350px] p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
          <Tooltip 
            cursor={{ fill: '#f8fafc' }} 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
          <Bar dataKey="implementado" name="Control Implementado (%)" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={30} />
          <Bar dataKey="resultado" name="Resultado Obtenido (%)" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const DiagramProteccion = () => (
  <div className="grid grid-cols-[1fr] grid-rows-[auto_1fr] w-full h-full min-h-[300px] gap-6 p-6 bg-slate-50">
    <div className="grid grid-cols-3 gap-4 w-full max-w-lg justify-self-center">
      <div className="grid place-items-center gap-2 p-4 bg-emerald-100 rounded-xl border border-emerald-200">
        <Shield className="text-emerald-600" size={32} />
        <span className="text-xs font-semibold text-emerald-800 text-center">Protocolos Activos</span>
      </div>
      <div className="grid place-items-center gap-2 p-4 bg-blue-100 rounded-xl border border-blue-200">
        <Users className="text-blue-600" size={32} />
        <span className="text-xs font-semibold text-blue-800 text-center">Personal Capacitado</span>
      </div>
      <div className="grid place-items-center gap-2 p-4 bg-amber-100 rounded-xl border border-amber-200">
        <Target className="text-amber-600" size={32} />
        <span className="text-xs font-semibold text-amber-800 text-center">Rutas Seguras</span>
      </div>
    </div>
    
    <div className="grid place-items-center relative w-full max-w-lg justify-self-center bg-white rounded-2xl border-2 border-dashed border-slate-300 p-8">
       <div className="grid grid-cols-3 grid-rows-2 gap-8 w-full place-items-center">
         <Users size={40} className="text-slate-400" />
         <div className="grid place-items-center w-16 h-16 bg-blue-50 rounded-full border-2 border-blue-200">
            <Users size={32} className="text-blue-600" />
         </div>
         <Users size={40} className="text-slate-400" />
         <Users size={40} className="text-slate-400" />
         <Users size={40} className="text-slate-400" />
         <Users size={40} className="text-slate-400" />
       </div>
       <div className="absolute top-2 right-2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
         Entorno Protegido
       </div>
    </div>
  </div>
);

const DiagramRiesgos = () => {
  // Datos simulados de coordenadas en un plano de instalaciones
  const riskData = [
    { x: 10, y: 80, z: 200, name: 'Recepción', risk: 'Bajo' },
    { x: 30, y: 50, z: 800, name: 'Servidores', risk: 'Alto' },
    { x: 70, y: 90, z: 400, name: 'Almacén', risk: 'Medio' },
    { x: 80, y: 30, z: 900, name: 'Acceso Trasero', risk: 'Alto' },
    { x: 50, y: 20, z: 200, name: 'Oficinas', risk: 'Bajo' },
  ];

  const getColor = (risk: string) => {
    switch(risk) {
      case 'Alto': return '#ef4444';
      case 'Medio': return '#f59e0b';
      case 'Bajo': return '#10b981';
      default: return '#94a3b8';
    }
  };

  return (
    <div className="grid w-full h-full min-h-[350px] p-6 relative">
      <div className="absolute inset-6 border-2 border-slate-200 rounded-lg bg-slate-50 opacity-50 z-0"></div>
      <ResponsiveContainer width="100%" height="100%" className="z-10">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
          <XAxis type="number" dataKey="x" name="Eje X" hide domain={[0, 100]} />
          <YAxis type="number" dataKey="y" name="Eje Y" hide domain={[0, 100]} />
          <ZAxis type="number" dataKey="z" range={[100, 1000]} />
          <Tooltip 
            cursor={{ strokeDasharray: '3 3' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-3 rounded shadow-lg border border-slate-100">
                    <p className="font-bold text-sm text-slate-800 m-0">{data.name}</p>
                    <p className="text-xs text-slate-500 mt-1">Nivel de Riesgo: <span style={{color: getColor(data.risk), fontWeight: 'bold'}}>{data.risk}</span></p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Scatter name="Riesgos" data={riskData} shape="circle">
            {riskData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.risk)} opacity={0.7} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-3 gap-2 absolute bottom-2 right-6 bg-white p-2 rounded shadow text-xs">
        <div className="grid grid-cols-[auto_1fr] gap-1 items-center"><div className="w-3 h-3 rounded-full bg-red-500"></div>Alto</div>
        <div className="grid grid-cols-[auto_1fr] gap-1 items-center"><div className="w-3 h-3 rounded-full bg-amber-500"></div>Medio</div>
        <div className="grid grid-cols-[auto_1fr] gap-1 items-center"><div className="w-3 h-3 rounded-full bg-emerald-500"></div>Bajo</div>
      </div>
    </div>
  );
};

const DiagramCumplimiento = () => {
  const checklist = [
    { id: 1, text: 'ISO 27001 - Políticas de control de acceso', status: 'pass' },
    { id: 2, text: 'Normativa interna de uso de credenciales', status: 'pass' },
    { id: 3, text: 'Registro de bitácoras de videovigilancia', status: 'fail' },
    { id: 4, text: 'Auditoría de rutas de evacuación físicas', status: 'pass' },
    { id: 5, text: 'Actualización de protocolos contra incendios', status: 'fail' },
  ];

  return (
    <div className="grid content-start w-full h-full min-h-[300px] p-6 gap-3 bg-slate-50">
      {checklist.map((item) => (
        <div key={item.id} className="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="grid place-items-center w-8 h-8 bg-slate-100 rounded-md">
            <ClipboardList size={16} className="text-slate-500" />
          </div>
          <span className="text-sm font-medium text-slate-700">{item.text}</span>
          <div className="grid place-items-center">
            {item.status === 'pass' ? (
              <CheckCircle2 size={24} className="text-emerald-500" />
            ) : (
              <XCircle size={24} className="text-red-500" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const DiagramCaracteristicas = () => (
  <div className="grid place-items-center w-full h-full min-h-[350px] bg-slate-50 p-6">
    <div className="grid grid-cols-1 grid-rows-[auto_auto_auto] gap-8 relative w-full max-w-md">
      {/* Conexiones de fondo usando SVG puro superpuesto */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ minHeight: '300px' }}>
        <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="#cbd5e1" strokeWidth="2" />
      </svg>

      {/* Nodo Superior */}
      <div className="grid justify-self-center z-10 bg-white p-4 rounded-xl shadow-md border-2 border-indigo-100 min-w-[140px] text-center">
        <span className="text-sm font-bold text-indigo-700">Claridad</span>
        <span className="text-xs text-slate-500 block mt-1">Comprensibles</span>
      </div>

      {/* Nodo Central */}
      <div className="grid justify-self-center z-10 bg-indigo-600 p-5 rounded-full shadow-lg border-4 border-white">
        <Crosshair size={32} className="text-white" />
      </div>

      {/* Nodos Inferiores */}
      <div className="grid grid-cols-2 w-full justify-between gap-10 z-10">
        <div className="grid justify-self-end bg-white p-4 rounded-xl shadow-md border-2 border-indigo-100 min-w-[140px] text-center">
          <span className="text-sm font-bold text-indigo-700">Especificidad</span>
          <span className="text-xs text-slate-500 block mt-1">Medibles y exactos</span>
        </div>
        <div className="grid justify-self-start bg-white p-4 rounded-xl shadow-md border-2 border-indigo-100 min-w-[140px] text-center">
          <span className="text-sm font-bold text-indigo-700">Alineación</span>
          <span className="text-xs text-slate-500 block mt-1">Acordes a la realidad</span>
        </div>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(LESSON_DATA[0].id);

  const activeSection = LESSON_DATA.find(s => s.id === activeTab) || LESSON_DATA[0];

  const renderDiagram = () => {
    switch (activeTab) {
      case 'delimitacion': return <DiagramDelimitacion />;
      case 'evaluacion': return <DiagramEvaluacion />;
      case 'proteccion': return <DiagramProteccion />;
      case 'riesgos': return <DiagramRiesgos />;
      case 'cumplimiento': return <DiagramCumplimiento />;
      case 'caracteristicas': return <DiagramCaracteristicas />;
      default: return null;
    }
  };

  return (
    <LessonLayout
      title="Objetivos de la auditoría en seguridad"
      sections={LESSON_DATA}
      activeSectionId={activeTab}
      onTabChange={setActiveTab}
    >
      {/* Panel Izquierdo: Descripción del Texto */}
      <Card className="grid grid-rows-[auto_1fr] h-full">
        <div className="grid content-start p-6 bg-slate-50 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 m-0 leading-tight">
            {activeSection.title}
          </h2>
        </div>
        <div className="grid content-start p-6 overflow-y-auto">
          <p className="text-base text-slate-600 leading-relaxed m-0">
            {activeSection.description}
          </p>
        </div>
      </Card>

      {/* Panel Derecho: Visualización de Datos (Diagram Render) */}
      <Card className="grid grid-rows-[auto_1fr] h-full bg-white">
        <div className="grid content-center p-4 bg-slate-800 text-white">
          <h3 className="text-sm font-semibold tracking-wide uppercase m-0 flex items-center gap-2">
            <FileCheck size={16} className="text-blue-400" />
            {activeSection.diagramTitle}
          </h3>
        </div>
        <div className="grid relative overflow-hidden h-full">
          {renderDiagram()}
        </div>
      </Card>
    </LessonLayout>
  );
}
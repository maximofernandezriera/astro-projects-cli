/**
 * Mock Data para el Dashboard de Gestión de Proyectos
 * 
 * Este archivo contiene datos de ejemplo que se usan en toda la aplicación.
 * En una aplicación real, estos datos vendrían de una API o base de datos.
 * 
 * Para la clase magistral, esto demuestra cómo estructurar datos en una aplicación Astro.
 */

export type ProjectStatus = 'planning' | 'in-progress' | 'review' | 'completed';
export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  assignee: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  startDate: string;
  endDate: string;
  team: string[];
  tasks: Task[];
  color: string;
}

/**
 * Datos de ejemplo de proyectos.
 * Cada proyecto tiene un estado, progreso y tareas asociadas.
 */
export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Rediseño del Portal',
    description: 'Actualización completa de la interfaz del portal de clientes',
    status: 'in-progress',
    progress: 65,
    startDate: '2026-01-15',
    endDate: '2026-03-30',
    team: ['Ana García', 'Carlos López', 'María Rodríguez'],
    color: 'bg-blue-100',
    tasks: [
      {
        id: 't1',
        title: 'Diseño de wireframes',
        description: 'Crear wireframes para las nuevas páginas',
        status: 'done',
        assignee: 'Ana García',
        dueDate: '2026-02-01',
        priority: 'high',
      },
      {
        id: 't2',
        title: 'Implementación de componentes',
        description: 'Desarrollar componentes React reutilizables',
        status: 'in-progress',
        assignee: 'Carlos López',
        dueDate: '2026-02-28',
        priority: 'high',
      },
      {
        id: 't3',
        title: 'Testing y QA',
        description: 'Pruebas exhaustivas de la nueva interfaz',
        status: 'todo',
        assignee: 'María Rodríguez',
        dueDate: '2026-03-15',
        priority: 'medium',
      },
    ],
  },
  {
    id: '2',
    name: 'API de Integración',
    description: 'Desarrollo de nueva API para integraciones externas',
    status: 'in-progress',
    progress: 42,
    startDate: '2026-01-20',
    endDate: '2026-04-15',
    team: ['David Martínez', 'Elena Sánchez'],
    color: 'bg-purple-100',
    tasks: [
      {
        id: 't4',
        title: 'Especificación de endpoints',
        description: 'Documentar todos los endpoints de la API',
        status: 'done',
        assignee: 'David Martínez',
        dueDate: '2026-02-05',
        priority: 'high',
      },
      {
        id: 't5',
        title: 'Implementación de autenticación',
        description: 'OAuth 2.0 y JWT tokens',
        status: 'in-progress',
        assignee: 'Elena Sánchez',
        dueDate: '2026-02-20',
        priority: 'high',
      },
    ],
  },
  {
    id: '3',
    name: 'Documentación Técnica',
    description: 'Crear documentación completa del sistema',
    status: 'planning',
    progress: 15,
    startDate: '2026-02-01',
    endDate: '2026-03-01',
    team: ['Francisco Gómez'],
    color: 'bg-green-100',
    tasks: [
      {
        id: 't6',
        title: 'Arquitectura del sistema',
        description: 'Documentar la arquitectura general',
        status: 'in-progress',
        assignee: 'Francisco Gómez',
        dueDate: '2026-02-15',
        priority: 'medium',
      },
    ],
  },
  {
    id: '4',
    name: 'Migración de Base de Datos',
    description: 'Migración de PostgreSQL 12 a PostgreSQL 15',
    status: 'completed',
    progress: 100,
    startDate: '2025-12-01',
    endDate: '2026-01-31',
    team: ['Gloria Hernández', 'Héctor Ruiz'],
    color: 'bg-yellow-100',
    tasks: [
      {
        id: 't7',
        title: 'Backup de datos',
        description: 'Realizar backup completo',
        status: 'done',
        assignee: 'Gloria Hernández',
        dueDate: '2026-01-15',
        priority: 'high',
      },
      {
        id: 't8',
        title: 'Validación de datos',
        description: 'Verificar integridad de datos migrados',
        status: 'done',
        assignee: 'Héctor Ruiz',
        dueDate: '2026-01-25',
        priority: 'high',
      },
    ],
  },
];

/**
 * Obtener un proyecto por ID
 */
export function getProjectById(id: string): Project | undefined {
  return mockProjects.find((p) => p.id === id);
}

/**
 * Obtener estadísticas generales del dashboard
 */
export function getDashboardStats() {
  const total = mockProjects.length;
  const inProgress = mockProjects.filter((p) => p.status === 'in-progress').length;
  const completed = mockProjects.filter((p) => p.status === 'completed').length;
  const avgProgress = Math.round(
    mockProjects.reduce((sum, p) => sum + p.progress, 0) / total
  );

  return {
    totalProjects: total,
    inProgressProjects: inProgress,
    completedProjects: completed,
    averageProgress: avgProgress,
  };
}

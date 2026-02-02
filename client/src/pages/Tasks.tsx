/**
 * Tasks Page - Página de Tareas
 * 
 * Esta página muestra todas las tareas de todos los proyectos.
 * Demuestra cómo Astro puede agregar datos de múltiples fuentes
 * en una sola página.
 */

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { mockProjects } from '@/lib/mockData';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function Tasks() {
  // Agregar todas las tareas de todos los proyectos
  const allTasks = mockProjects.flatMap((project) =>
    project.tasks.map((task) => ({
      ...task,
      projectName: project.name,
      projectId: project.id,
    }))
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle2 size={18} className="text-green-600" />;
      case 'in-progress':
        return <Clock size={18} className="text-yellow-600" />;
      default:
        return <AlertCircle size={18} className="text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 text-red-700';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700';
      case 'low':
        return 'bg-green-50 text-green-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <DashboardLayout activeNav="tasks">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Tareas</h1>
          <p className="text-muted-foreground">
            Vista general de todas las tareas en todos los proyectos.
          </p>
        </div>

        {/* Tasks Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Tarea</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Proyecto</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Asignado a</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Prioridad</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Estado</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Vence</th>
                </tr>
              </thead>
              <tbody>
                {allTasks.map((task, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-foreground font-medium">{task.title}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{task.projectName}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{task.assignee}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(task.status)}
                        <span className="text-sm text-muted-foreground capitalize">
                          {task.status === 'done' ? 'Completada' : task.status === 'in-progress' ? 'En Progreso' : 'Por Hacer'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(task.dueDate).toLocaleDateString('es-ES')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-700 mb-1">Completadas</p>
            <p className="text-2xl font-bold text-green-700">
              {allTasks.filter((t) => t.status === 'done').length}
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-700 mb-1">En Progreso</p>
            <p className="text-2xl font-bold text-yellow-700">
              {allTasks.filter((t) => t.status === 'in-progress').length}
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-1">Por Hacer</p>
            <p className="text-2xl font-bold text-gray-700">
              {allTasks.filter((t) => t.status === 'todo').length}
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

/**
 * ProjectDetail Page - Página de Detalles de Proyecto
 * 
 * Esta página demuestra cómo Astro maneja rutas dinámicas.
 * Aunque esta es una aplicación cliente, mostramos cómo estructurar
 * una página de detalle que podría ser dinámica.
 */

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { mockProjects } from '@/lib/mockData';
import { ArrowLeft, Calendar, Users, CheckCircle2, Clock } from 'lucide-react';

export default function ProjectDetail() {
  // En una aplicación real, obtendríamos el ID de la URL
  const projectId = '1';
  const project = mockProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <DashboardLayout activeNav="projects">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Proyecto no encontrado.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout activeNav="projects">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </a>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{project.name}</h1>
            <p className="text-muted-foreground mt-1">{project.description}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Section */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Progreso</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Completado</span>
                  <span className="text-2xl font-bold text-foreground">{project.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Tasks Section */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Tareas</h2>
              <div className="space-y-3">
                {project.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="mt-1">
                      {task.status === 'done' ? (
                        <CheckCircle2 size={20} className="text-green-600" />
                      ) : (
                        <Clock size={20} className="text-yellow-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{task.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>Asignado a: {task.assignee}</span>
                        <span>Vence: {new Date(task.dueDate).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Información</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Estado</p>
                  <p className="font-medium text-foreground capitalize">{project.status}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Calendar size={14} /> Inicio
                  </p>
                  <p className="font-medium text-foreground">
                    {new Date(project.startDate).toLocaleDateString('es-ES')}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                    <Calendar size={14} /> Fin
                  </p>
                  <p className="font-medium text-foreground">
                    {new Date(project.endDate).toLocaleDateString('es-ES')}
                  </p>
                </div>
              </div>
            </div>

            {/* Team Card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users size={18} /> Equipo
              </h3>
              <div className="space-y-2">
                {project.team.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                      {member.charAt(0)}
                    </div>
                    <span className="text-sm text-foreground">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

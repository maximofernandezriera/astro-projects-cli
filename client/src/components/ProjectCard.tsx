/**
 * ProjectCard - Componente Astro Estático
 * 
 * Este componente renderiza una tarjeta de proyecto como HTML puro.
 * No tiene interactividad - es completamente estático.
 * 
 * CONCEPTO CLAVE: Demuestra cómo Astro renderiza componentes a HTML
 * sin JavaScript. La tarjeta es rápida de cargar y renderizar.
 */

import React from 'react';
import { Project } from '@/lib/mockData';
import { Calendar, Users, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const statusConfig = {
  'planning': { label: 'Planificación', color: 'bg-yellow-50', textColor: 'text-yellow-700', icon: AlertCircle },
  'in-progress': { label: 'En Progreso', color: 'bg-blue-50', textColor: 'text-blue-700', icon: Clock },
  'review': { label: 'Revisión', color: 'bg-purple-50', textColor: 'text-purple-700', icon: Clock },
  'completed': { label: 'Completado', color: 'bg-green-50', textColor: 'text-green-700', icon: CheckCircle2 },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
        </div>
        <div className={`${status.color} ${status.textColor} px-3 py-1 rounded text-xs font-medium flex items-center gap-1`}>
          <StatusIcon size={14} />
          {status.label}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground">Progreso</span>
          <span className="text-xs font-semibold text-foreground">{project.progress}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Metadata */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar size={16} />
          <span>{new Date(project.startDate).toLocaleDateString('es-ES')}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users size={16} />
          <span>{project.team.length} miembros</span>
        </div>
      </div>

      {/* Team Avatars */}
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {project.team.slice(0, 3).map((member, idx) => (
            <div
              key={idx}
              className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold border-2 border-card"
            >
              {member.charAt(0)}
            </div>
          ))}
        </div>
        {project.team.length > 3 && (
          <span className="text-xs text-muted-foreground">+{project.team.length - 3} más</span>
        )}
      </div>

      {/* Action Link */}
      <a
        href={`/projects/${project.id}`}
        className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Ver detalles →
      </a>
    </div>
  );
}

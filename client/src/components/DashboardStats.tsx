/**
 * DashboardStats - Componente Astro Estático
 * 
 * Este componente muestra estadísticas generales del dashboard.
 * Es completamente estático y se renderiza como HTML puro.
 * 
 * CONCEPTO CLAVE: Demuestra cómo Astro renderiza componentes
 * presentacionales sin necesidad de JavaScript.
 */

import React from 'react';
import { Briefcase, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

interface DashboardStatsProps {
  totalProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  averageProgress: number;
}

export default function DashboardStats({
  totalProjects,
  completedProjects,
  inProgressProjects,
  averageProgress,
}: DashboardStatsProps) {
  const stats = [
    {
      label: 'Proyectos Totales',
      value: totalProjects,
      icon: Briefcase,
      color: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      label: 'En Progreso',
      value: inProgressProjects,
      icon: Clock,
      color: 'bg-yellow-50',
      textColor: 'text-yellow-700',
    },
    {
      label: 'Completados',
      value: completedProjects,
      icon: CheckCircle2,
      color: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      label: 'Progreso Promedio',
      value: `${averageProgress}%`,
      icon: TrendingUp,
      color: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className={`${stat.color} border border-border rounded-lg p-6`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</p>
              </div>
              <Icon className={`${stat.textColor}`} size={32} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

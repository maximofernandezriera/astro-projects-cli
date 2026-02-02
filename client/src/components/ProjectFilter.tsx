/**
 * ProjectFilter - Componente React Interactivo (Client Island)
 * 
 * Este componente maneja el filtrado interactivo de proyectos.
 * Se marca con client:idle en la página para hidratarse cuando el navegador
 * está inactivo, mejorando el rendimiento de carga inicial.
 * 
 * CONCEPTO CLAVE: Este es un Client Island con client:idle.
 * Se carga y se hidrata solo cuando el navegador no está ocupado.
 * Esto mejora el rendimiento de carga de la página.
 */

import React from 'react';
import { ProjectStatus } from '@/lib/mockData';
import { Search, Filter } from 'lucide-react';

interface ProjectFilterProps {
  onFilterChange: (status: ProjectStatus | 'all', searchTerm: string) => void;
}

export default function ProjectFilter({ onFilterChange }: ProjectFilterProps) {
  const [selectedStatus, setSelectedStatus] = React.useState<ProjectStatus | 'all'>('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const statuses: Array<{ value: ProjectStatus | 'all'; label: string }> = [
    { value: 'all', label: 'Todos' },
    { value: 'planning', label: 'Planificación' },
    { value: 'in-progress', label: 'En Progreso' },
    { value: 'review', label: 'Revisión' },
    { value: 'completed', label: 'Completados' },
  ];

  const handleStatusChange = (status: ProjectStatus | 'all') => {
    setSelectedStatus(status);
    onFilterChange(status, searchTerm);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilterChange(selectedStatus, term);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
        <input
          type="text"
          placeholder="Buscar proyectos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Status Filter */}
      <div className="flex flex-wrap gap-2">
        <Filter size={18} className="text-muted-foreground self-center" />
        {statuses.map((status) => (
          <button
            key={status.value}
            onClick={() => handleStatusChange(status.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedStatus === status.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            {status.label}
          </button>
        ))}
      </div>
    </div>
  );
}

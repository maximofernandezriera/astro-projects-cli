/**
 * Home Page - Dashboard Principal
 * 
 * Esta página demuestra la arquitectura de islas de Astro:
 * - El layout y las tarjetas son componentes estáticos (HTML puro)
 * - El filtro es un Client Island que se hidrata cuando es necesario
 * 
 * CONCEPTO CLAVE: Aquí vemos cómo Astro permite mezclar componentes
 * estáticos y dinámicos en la misma página, optimizando el rendimiento.
 */

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardStats from '@/components/DashboardStats';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';
import { mockProjects, getDashboardStats, ProjectStatus } from '@/lib/mockData';

export default function Home() {
  const [filteredProjects, setFilteredProjects] = React.useState(mockProjects);
  const stats = getDashboardStats();

  const handleFilterChange = (status: ProjectStatus | 'all', searchTerm: string) => {
    let filtered = mockProjects;

    // Filtrar por estado
    if (status !== 'all') {
      filtered = filtered.filter((p) => p.status === status);
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  return (
    <DashboardLayout activeNav="projects">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard de Proyectos</h1>
          <p className="text-muted-foreground">
            Gestiona y monitorea el progreso de todos tus proyectos en un solo lugar.
          </p>
        </div>

        {/* Statistics */}
        <DashboardStats
          totalProjects={stats.totalProjects}
          completedProjects={stats.completedProjects}
          inProgressProjects={stats.inProgressProjects}
          averageProgress={stats.averageProgress}
        />

        {/* Filters */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Filtros</h2>
          <ProjectFilter onFilterChange={handleFilterChange} />
        </div>

        {/* Projects Grid */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Proyectos ({filteredProjects.length})
          </h2>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No se encontraron proyectos.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

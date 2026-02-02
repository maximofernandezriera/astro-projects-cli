/**
 * DashboardLayout - Componente React Interactivo
 * 
 * Este componente se marca con client:load en la página para convertirse
 * en una "isla de cliente" interactiva. Maneja la navegación del sidebar
 * y proporciona la estructura base del dashboard.
 * 
 * CONCEPTO CLAVE: Este es un Client Island - React se hidrata aquí
 * para manejar la interactividad del sidebar. El resto de la página
 * permanece como HTML estático.
 */

import React from 'react';
import { Menu, X } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeNav?: string;
}

export default function DashboardLayout({
  children,
  activeNav = 'projects',
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navItems = [
    { id: 'projects', label: 'Proyectos', href: '/' },
    { id: 'tasks', label: 'Tareas', href: '/tasks' },
    { id: 'team', label: 'Equipo', href: '/team' },
    { id: 'settings', label: 'Configuración', href: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-sidebar-border">
            <h1 className="text-lg font-bold text-foreground">ProjectHub</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-sidebar-accent rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`block px-4 py-2 rounded transition-colors ${
                  activeNav === item.id
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border text-sm text-sidebar-foreground">
            <p>© 2026 ProjectHub</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-1 hover:bg-secondary rounded"
          >
            <Menu size={20} />
          </button>
          <div className="flex-1" />
          <div className="text-sm text-muted-foreground">Usuario: Admin</div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

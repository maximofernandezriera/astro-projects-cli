/**
 * StatCard - Componente Astro Estático para Estadísticas
 * 
 * Este componente renderiza una tarjeta de estadística individual.
 * Es completamente estático y se renderiza como HTML puro.
 */

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  textColor: string;
}

export default function StatCard({
  label,
  value,
  icon: Icon,
  color,
  textColor,
}: StatCardProps) {
  return (
    <div className={`${color} border border-border rounded-lg p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
        </div>
        <Icon className={`${textColor}`} size={32} />
      </div>
    </div>
  );
}

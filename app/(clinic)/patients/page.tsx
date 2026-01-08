"use client"

import { useMemo } from 'react'

export default function PatientsPage() {
  const patients = useMemo(
    () => [
      { id: 'p1', name: 'John Doe', phone: '+1 555 123', lastVisit: '2025-12-10' },
      { id: 'p2', name: 'Anna Ivanova', phone: '+7 925 555', lastVisit: '2025-12-02' },
      { id: 'p3', name: 'Carlos Ruiz', phone: '+34 600 111', lastVisit: '2025-11-20' },
    ],
    []
  )

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Patients</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {patients.map((p) => (
          <div key={p.id} className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="font-medium text-slate-800 dark:text-slate-100">{p.name}</div>
            <div className="text-sm text-gray-500">{p.phone}</div>
            <div className="text-sm text-gray-500">Last visit: {p.lastVisit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

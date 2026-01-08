"use client"

import { useMemo } from 'react'

export default function EmployeesPage() {
  const employees = useMemo(
    () => [
      { id: 'e1', name: 'Dr. Maria Petrova', role: 'Doctor', status: 'active' },
      { id: 'e2', name: 'Nurse Olga', role: 'Reception', status: 'active' },
      { id: 'e3', name: 'Dr. Alexei Ivanov', role: 'Doctor', status: 'inactive' },
    ],
    []
  )

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Employees</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {employees.map((emp) => (
          <div key={emp.id} className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="font-medium text-slate-800 dark:text-slate-100">{emp.name}</div>
            <div className="text-sm text-gray-500">{emp.role}</div>
            <div className={`mt-3 inline-block text-xs px-2 py-1 rounded ${emp.status === 'active' ? 'bg-emerald-600 text-white' : 'bg-gray-300 text-gray-700'}`}>{emp.status}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

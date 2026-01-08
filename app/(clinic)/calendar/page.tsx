"use client"

import { useMemo } from 'react'

export default function CalendarPage() {
  const appointments = useMemo(() => [
    { id: 'a1', patient: 'John Doe', employee: 'Dr. Smith', start: '09:00', duration: 30, status: 'scheduled' },
    { id: 'a2', patient: 'Anna Ivanova', employee: 'Dr. Lee', start: '09:30', duration: 45, status: 'scheduled' },
    { id: 'a3', patient: 'Carlos Ruiz', employee: 'Dr. Smith', start: '10:30', duration: 20, status: 'cancelled' },
  ], [])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Clinic Calendar — Today</h2>

      <div className="space-y-3">
        {appointments.map((a) => (
          <div key={a.id} className="p-3 bg-white/80 dark:bg-slate-800 border rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="text-sm text-gray-500">{a.start} • {a.duration}m</div>
              <div className="font-medium text-slate-800 dark:text-slate-100">{a.patient}</div>
              <div className="text-sm text-gray-500">{a.employee}</div>
            </div>
            <div className="text-sm">
              <span className={`px-2 py-1 rounded text-white ${a.status === 'scheduled' ? 'bg-emerald-600' : 'bg-rose-500'}`}>
                {a.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

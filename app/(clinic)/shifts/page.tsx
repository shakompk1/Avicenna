"use client"

import { useMemo } from 'react'

export default function ShiftsPage() {
  const shifts = useMemo(
    () => [
      { id: 's1', employee: 'Dr. Smith', from: '08:00', to: '14:00', room: 'A1' },
      { id: 's2', employee: 'Dr. Lee', from: '12:00', to: '18:00', room: 'B2' },
    ],
    []
  )

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Shifts</h2>
      <div className="space-y-3">
        {shifts.map((s) => (
          <div key={s.id} className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow flex justify-between">
            <div>
              <div className="font-medium text-slate-800 dark:text-slate-100">{s.employee}</div>
              <div className="text-sm text-gray-500">Room: {s.room}</div>
            </div>
            <div className="text-sm text-gray-600">{s.from} — {s.to}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

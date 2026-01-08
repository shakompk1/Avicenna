"use client"

import { useMemo } from 'react'

export default function AbsencesPage() {
	const absences = useMemo(
		() => [
			{ id: 'ab1', employee: 'Dr. Smith', from: '2025-12-20', to: '2025-12-25', reason: 'Vacation' },
			{ id: 'ab2', employee: 'Dr. Lee', from: '2025-12-05', to: '2025-12-06', reason: 'Conference' },
		],
		[]
	)

	return (
		<div>
			<h2 className="text-xl font-semibold mb-4">Absences</h2>
			<div className="space-y-3">
				{absences.map((a) => (
					<div key={a.id} className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-md">
						<div className="font-medium text-slate-800 dark:text-slate-100">{a.employee}</div>
						<div className="text-sm text-gray-500">{a.from} — {a.to}</div>
						<div className="text-sm">{a.reason}</div>
					</div>
				))}
			</div>
		</div>
	)
}

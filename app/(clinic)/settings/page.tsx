"use client"

export default function SettingsPage() {
  const clinic = { id: '1', name: 'Clinic 1', timezone: 'Europe/Moscow', address: 'Lenina 10' }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <div className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow-sm max-w-xl">
        <div className="mb-3">
          <div className="text-sm text-gray-500">Clinic name</div>
          <div className="font-medium text-slate-800 dark:text-slate-100">{clinic.name}</div>
        </div>

        <div className="mb-3">
          <div className="text-sm text-gray-500">Timezone</div>
          <div className="font-medium text-slate-800 dark:text-slate-100">{clinic.timezone}</div>
        </div>

        <div className="mb-3">
          <div className="text-sm text-gray-500">Address</div>
          <div className="font-medium text-slate-800 dark:text-slate-100">{clinic.address}</div>
        </div>

        <div className="mt-3 flex gap-2">
          <button className="px-3 py-2 rounded border">Edit</button>
          <button className="px-3 py-2 rounded bg-primary text-white">Save</button>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link";

export default function ClinicEntry({
  params,
}: {
  params: { clinicId: string };
}) {
  const clinic = {
    id: params.clinicId,
    name: `Clinic ${params.clinicId}`,
    admins: 2,
    employees: 12,
  };

  return (
    <div className="app-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 className="heading-lg">{clinic.name}</h2>
          <div className="small muted">ID: {clinic.id}</div>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <Link href="/clinics" className="btn">Back</Link>
          <Link href={`/calendar?clinicId=${clinic.id}`} className="btn btn-primary">Enter Clinic</Link>
        </div>
      </div>

      <div className="subnav">
        <Link href={`/calendar?clinicId=${clinic.id}`}>Calendar</Link>
        <Link href={`/patients?clinicId=${clinic.id}`}>Patients</Link>
        <Link href={`/employees?clinicId=${clinic.id}`}>Employees</Link>
        <Link href={`/shifts?clinicId=${clinic.id}`}>Shifts</Link>
        <Link href={`/absences?clinicId=${clinic.id}`}>Absences</Link>
        <Link href={`/settings?clinicId=${clinic.id}`}>Settings</Link>
      </div>

      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        <div className="card">
          <div className="small muted">Admins</div>
          <div className="heading-lg">{clinic.admins}</div>
        </div>
        <div className="card">
          <div className="small muted">Employees</div>
          <div className="heading-lg">{clinic.employees}</div>
        </div>
        <div className="card">
          <div className="small muted">Timezone</div>
          <div className="heading-lg">Europe/Moscow</div>
        </div>
      </div>
    </div>
  );
}

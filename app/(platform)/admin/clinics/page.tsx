"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/stores/session.store";
import Button from "@/shared/ui/Button";
import Badge from "@/shared/ui/Badge";
import Modal from "@/shared/ui/Modal";

type Clinic = { id: string; name: string };

export default function ClinicsPage() {
  const router = useRouter();

  const role = useSessionStore((s) => s.role);
  const clinicId = useSessionStore((s) => s.clinicId);
  const setSession = useSessionStore((s) => s.setSession);

  // моковые клиники (потом будет API)
  const [clinics, setClinics] = useState<Clinic[]>([
    { id: "1", name: "Clinic 1" },
    { id: "2", name: "Clinic 2" },
  ]);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const titleRight = useMemo(() => {
    return (
      <div className="flex items-center gap-2">
        <Badge variant="outline">{role ?? "—"}</Badge>
        {clinicId ? (
          <Badge variant="secondary">Active clinic: {clinicId}</Badge>
        ) : (
          <Badge variant="warning">No clinic selected</Badge>
        )}
      </div>
    );
  }, [role, clinicId]);

  function createClinic(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    const id = String(Date.now());
    setClinics((s) => [{ id, name: trimmed }, ...s]);
    setName("");
    setOpen(false);
  }

  function enterClinic(nextClinicId: string) {
    // SUPER_ADMIN выбирает clinic context → сохраняем clinicId в store
    setSession({ clinicId: nextClinicId });
    router.push("/calendar");
  }

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Clinics</h1>
          <p className="text-sm text-muted-foreground">
            Select a clinic to enter clinic context.
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          {titleRight}
          <Button onClick={() => setOpen(true)}>+ Add clinic</Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clinics.map((c) => {
          const isActive = clinicId === c.id;

          return (
            <div
              key={c.id}
              className="rounded-lg border p-4 bg-background hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-medium truncate">{c.name}</div>
                  <div className="text-xs text-muted-foreground">
                    ID: {c.id}
                  </div>
                </div>

                {isActive ? <Badge variant="success">Active</Badge> : null}
              </div>

              <div className="mt-4 flex gap-2">
                <Button
                  variant={isActive ? "outline" : "primary"}
                  onClick={() => enterClinic(c.id)}
                  className="w-full"
                >
                  {isActive ? "In context" : "Enter"}
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => router.push(`/clinics/${c.id}`)}
                >
                  View
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={createClinic} className="grid gap-4">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-lg font-semibold">Create Clinic</h2>
            <Badge variant="outline">Platform</Badge>
          </div>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Clinic name"
            aria-label="Clinic name"
            className="border rounded px-3 py-2 w-full bg-background"
          />

          <div className="flex gap-2 justify-end">
            <Button
              variant="outline"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

import { ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight mb-4">
      {children}
    </h2>
  );
}

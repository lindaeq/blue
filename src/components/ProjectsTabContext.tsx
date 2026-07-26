"use client";

import { createContext, useContext, useState } from "react";

export type ProjectsTab = "software" | "design";

interface ProjectsTabContextValue {
  tab: ProjectsTab;
  setTab: (tab: ProjectsTab) => void;
}

const ProjectsTabContext = createContext<ProjectsTabContextValue | undefined>(
  undefined
);

export function ProjectsTabProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState<ProjectsTab>("software");

  return (
    <ProjectsTabContext.Provider value={{ tab, setTab }}>
      {children}
    </ProjectsTabContext.Provider>
  );
}

export function useProjectsTab() {
  const ctx = useContext(ProjectsTabContext);
  if (!ctx) {
    throw new Error("useProjectsTab must be used within a ProjectsTabProvider");
  }
  return ctx;
}

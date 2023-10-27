import React, { ReactNode, Suspense } from "react";
import AppToolbar from "../Components/AppToolbar/AppToolbar";
import { Toolbar } from "@mui/material";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <AppToolbar />
      <Toolbar />
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </>
  );
}

export default AppLayout;
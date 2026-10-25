import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { useAuth } from "../context/AuthProvider";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [headerContent, setHeaderContent] = useState(null);
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Sidebar collapsed={collapsed} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} headerContent={headerContent} />

        <main className="flex-1 overflow-y-auto">
          <Outlet context={{ setHeaderContent }} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
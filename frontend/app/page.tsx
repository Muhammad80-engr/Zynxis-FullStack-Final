"use client";

import NotificationPanel from "../components/NotificationPanel";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-2 text-4xl font-bold">
          Zynxis Intern Management System
        </h1>

        <p className="mb-8 text-slate-400">
          Week 7 — Real-Time Notifications
        </p>

        <NotificationPanel />

      </div>
    </main>
  );
}
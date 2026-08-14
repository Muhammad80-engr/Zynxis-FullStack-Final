"use client";

import { useEffect, useState } from "react";
import useSocket from "../hooks/useSocket";

export default function NotificationPanel() {
    const socket = useSocket();

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (!socket) return;

        socket.on("notification", (data) => {
            setNotifications((previous) => [
                data,
                ...previous
            ]);
        });

        return () => {
            socket.off("notification");
        };
    }, [socket]);

    return (
        <div className="rounded-xl bg-slate-800 p-6 text-white shadow-lg">
            <h2 className="mb-4 text-xl font-bold">
                Notifications
            </h2>

            {notifications.length === 0 ? (
                <p className="text-slate-400">
                    No new notifications
                </p>
            ) : (
                <div className="space-y-3">
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-slate-700 p-4"
                        >
                            <h3 className="font-semibold">
                                {notification.title}
                            </h3>

                            <p className="text-slate-300">
                                {notification.message}
                            </p>

                            <p className="mt-2 text-xs text-slate-400">
                                {new Date(
                                    notification.timestamp
                                ).toLocaleTimeString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
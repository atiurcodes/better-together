'use client'
import { authClient } from "@/lib/auth-client";
import { Event } from "@/lib/type";
import { HeartHandshake } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const JoinedEventButton = ({ event }: { event: Event }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleJoinedEvent = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        if (!user) {
            toast.error("Please login first to join this event!");
            return;
        }
        console.log(event);
        const { _id, ...allevent } = event;
        const data = {
            userName: user?.name,
            userEmail: user?.email,
            eventID: _id,
            ...allevent,
            joinedAt: new Date()
        }
        const res = await fetch(`http://localhost:5000/join-event`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        console.log(result);
    }

    return (
        <div>
            <button
                onClick={handleJoinedEvent}
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
                <HeartHandshake size={19} />
                Join Event
            </button>
        </div>
    );
};

export default JoinedEventButton;
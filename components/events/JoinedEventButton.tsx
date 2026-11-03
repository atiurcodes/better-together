
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { Event, JoinedEventType } from "@/lib/type";
import { HeartHandshake, LogOut } from "lucide-react";
import { toast } from "react-toastify";

interface JoinedEvent {
    eventId: string;
}

interface JoinedEventButtonProps {
    event: Event | JoinedEventType;
}

const JoinedEventButton = ({ event }: JoinedEventButtonProps) => {
    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [isJoined, setIsJoined] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    // Get original event ID
    const eventId = "eventId" in event ? event.eventId : event._id;

    // Check whether the user already joined this event
    useEffect(() => {
        let ignore = false;

        const checkJoinedEvent = async () => {
            if (!user?.email) {
                setIsJoined(false);
                setIsChecking(false);
                return;
            }

            setIsChecking(true);

            try {
                const token = await getTokenFromClient();

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/joined-events/${encodeURIComponent(user.email)}`,
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                        cache: "no-store",
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch joined events");
                }

                const joinedEvents: JoinedEvent[] = await res.json();

                const alreadyJoined = joinedEvents.some(
                    (joinedEvent) => joinedEvent.eventId === eventId
                );

                if (!ignore) {
                    setIsJoined(alreadyJoined);
                }
            } catch (error) {
                console.error(error);

                if (!ignore) {
                    toast.error("Failed to check joined event status!");
                }
            } finally {
                if (!ignore) {
                    setIsChecking(false);
                }
            }
        };

        checkJoinedEvent();

        return () => {
            ignore = true;
        };
    }, [user?.email, eventId]);

    // Join or Leave event
    const handleJoinedEvent = async () => {
        if (!user) {
            toast.error("Please login first!");
            return;
        }

        try {
            setIsLoading(true);

            const token = await getTokenFromClient();

            if (isJoined) {
                // Leave Event
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/leave-event`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            eventId,
                            userEmail: user.email,
                        }),
                    }
                );

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message || "Failed to leave event");
                }

                setIsJoined(false);
                toast.success("You left the event successfully!");

                // Refresh server-rendered data if needed
                router.replace("/joined-event");

            } else {
                // Join Event
                const data = {
                    userName: user.name,
                    userEmail: user.email,
                    eventId,
                    eventTitle: event.eventTitle,
                    eventCategory: event.eventCategory,
                    eventDate: event.eventDate,
                    eventLocation: event.eventLocation,
                    imageUrl: event.imageUrl,
                    description: event.description,
                    organizerEmail: "organizerEmail" in event
                        ? event.organizerEmail
                        : "",
                    joinedAt: new Date(),
                };

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/join-event`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(data),
                    }
                );

                const result = await res.json();

                if (!res.ok) {
                    throw new Error(result.message || "Failed to join event");
                }

                setIsJoined(true);
                toast.success("Successfully joined the event!");
            }
        } catch (error) {
            console.error(error);

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Something went wrong!"
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleJoinedEvent}
                type="button"
                disabled={isLoading || isChecking}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 ${isJoined
                    ? "bg-rose-600 shadow-rose-600/20 hover:bg-rose-700"
                    : "bg-emerald-600 shadow-emerald-600/20 hover:bg-emerald-700"
                    }`}
            >
                {isJoined ? (
                    <LogOut size={19} />
                ) : (
                    <HeartHandshake size={19} />
                )}

                {isChecking
                    ? "Checking..."
                    : isLoading
                        ? "Please wait..."
                        : isJoined
                            ? "Leave Event"
                            : "Join Event"}
            </button>
        </div>
    );
};

export default JoinedEventButton;

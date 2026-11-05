
"use client";

import { useEffect, useState } from "react";
import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { HeartHandshake, LogOut } from "lucide-react";
import { Event, JoinedEventType } from "@/lib/type";
import { useRouter } from "next/navigation";

interface JoinedEventButtonProps {
    event: Event | JoinedEventType;
    redirectAfterLeave?: boolean;
}

const JoinedEventButton = ({
    event,
    redirectAfterLeave = false,
}: JoinedEventButtonProps) => {

    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const eventId = "eventId" in event ? event.eventId : event._id;

    const [isJoined, setIsJoined] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    const handleJoinedEvent = async () => {
        if (!user) {
            toast.error("Please login first!");
            return;
        }

        try {
            setIsLoading(true);

            const token = await getTokenFromClient();

            // Leave Event
            if (isJoined) {
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

                toast.success("You left the event successfully!");

                if (redirectAfterLeave) {
                    router.push("/joined-event");
                } else {
                    setIsJoined(false);
                }

                return;
            }

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
                organizerEmail: "",
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

    useEffect(() => {
        const checkJoinedEvent = async () => {
            if (!user?.email) {
                setIsJoined(false);
                setIsChecking(false);
                return;
            }

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

                const joinedEvents = await res.json();

                const alreadyJoined = joinedEvents.some(
                    (joinedEvent: { eventId: string }) =>
                        joinedEvent.eventId === eventId
                );

                setIsJoined(alreadyJoined);

            } catch (error) {
                console.error(error);
                toast.error("Failed to check joined event status!");
            } finally {
                setIsChecking(false);
            }
        };

        checkJoinedEvent();
    }, [user?.email, eventId]);

    return (
        <button
            type="button"
            onClick={handleJoinedEvent}
            disabled={isChecking || isLoading}
            className={`inline-flex w-full items-center cursor-pointer justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${isJoined
                ? "border border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-300 hover:bg-rose-100 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-400 dark:hover:bg-rose-950/70"
                : "bg-[#244B35] text-white hover:-translate-y-0.5 hover:bg-[#397D48] hover:shadow-lg hover:shadow-emerald-900/20 dark:bg-[#397D48] dark:hover:bg-[#4C8A59]"
                }`}
        >
            {isChecking ? (
                "Checking..."
            ) : isLoading ? (
                "Please wait..."
            ) : isJoined ? (
                <>
                    <LogOut size={18} />
                    Leave Event
                </>
            ) : (
                <>
                    <HeartHandshake size={18} />
                    Join Event
                </>
            )}
        </button>
    );
};

export default JoinedEventButton;

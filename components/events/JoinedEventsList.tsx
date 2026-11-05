"use client";

import { useState } from "react";
import { JoinedEventType } from "@/lib/type";
import JoinedEvent from "./JoinedEvent";

interface JoinedEventsListProps {
    initialEvents: JoinedEventType[];
}

const JoinedEventsList = ({ initialEvents }: JoinedEventsListProps) => {
    const [joinedEvents, setJoinedEvents] = useState(initialEvents);

    const handleLeave = (eventId: string) => {
        setJoinedEvents((previousEvents) =>
            previousEvents.filter((event) => event.eventId !== eventId)
        );
    };

    return (
        <div>
            {joinedEvents.map((event) => (
                <JoinedEvent key={event._id} event={event} />
            ))}
        </div>
    );
};

export default JoinedEventsList;
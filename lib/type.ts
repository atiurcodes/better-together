export interface Event {
    _id: string;
    eventTitle: string;
    eventCategory: string;
    eventDate: string;
    eventLocation: string;
    imageUrl: string;
    description: string;
}

export interface JoinedEventType {
    _id: string;
    userName: string;
    userEmail: string;
    eventId: string;
    eventTitle: string;
    eventCategory: string;
    eventDate: string;
    eventLocation: string;
    imageUrl: string;
    description: string;
    organizerEmail: string;
    joinedAt: string;
}
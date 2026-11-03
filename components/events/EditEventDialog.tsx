
"use client";
import { useRouter } from "next/navigation";
import { Event } from "@/lib/type";
import { useState } from "react";
import { ImageIcon, Pencil } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { eventImages } from "@/data/eventImages";
import Image from "next/image";
import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { toast } from "react-toastify";

export default function EditEventDialog({ event }: { event: Event }) {
    const [open, setOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState(event.imageUrl);
    const router = useRouter();

    const handleUpdateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const form = e.currentTarget;
            const formData = new FormData(form);
            const token = await getTokenFromClient();

            const data = Object.fromEntries(formData.entries()) as Record<string, string>;

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/my-event/edit/${event._id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(data)
                }
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Failed to update event");
            }

            toast.success(result.message || "Event updated successfully!");

            setOpen(false);
            router.refresh();

        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to update event!"
            );
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                render={
                    <Button
                        type="button"
                        variant="outline"
                        className="flex-1 gap-2 cursor-pointer rounded-xl border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    >
                        <Pencil size={16} />
                        Edit Event
                    </Button>
                }
            />

            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-emerald-700">
                        Edit Event
                    </DialogTitle>

                    <DialogDescription>
                        Update your event information below.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleUpdateEvent} className="space-y-4">

                    <div className="space-y-2">
                        <Label htmlFor="eventTitle">Event Title</Label>
                        <Input
                            id="eventTitle"
                            name="eventTitle"
                            defaultValue={event.eventTitle}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="eventCategory">Event Category</Label>
                        <Input
                            id="eventCategory"
                            name="eventCategory"
                            defaultValue={event.eventCategory}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="eventDate">Event Date</Label>
                        <Input
                            id="eventDate"
                            name="eventDate"
                            type="date"
                            defaultValue={event.eventDate}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="eventLocation">Event Location</Label>
                        <Input
                            id="eventLocation"
                            name="eventLocation"
                            defaultValue={event.eventLocation}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="imageUrl">Thumbnail Image</Label>

                        {/* Current Image Preview */}
                        <div className="overflow-hidden rounded-xl border border-emerald-100">
                            <Image
                                src={imageUrl}
                                alt={event.eventTitle}
                                width={600}
                                height={300}
                                className="h-44 w-full object-cover"
                            />
                        </div>

                        {/* Image Dropdown */}
                        <div className="relative">
                            <ImageIcon
                                size={18}
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                            />

                            <select
                                id="imageUrl"
                                name="imageUrl"
                                className="w-full cursor-pointer rounded-md border border-slate-200 bg-white px-3.5 py-2.5 pl-11 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                required
                            >
                                {eventImages.map((image) => (
                                    <option key={image.name} value={image.url}>
                                        {image.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            defaultValue={event.description}
                            rows={4}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full cursor-pointer bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
                    >
                        Update Event
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

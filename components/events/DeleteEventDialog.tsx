"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Event } from "@/lib/type";
import { Trash2 } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export default function DeleteEventDialog({ event }: { event: Event }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleDeleteEvent = async () => {
        try {
            const res = await fetch(`http://localhost:5000/delete-event/${event._id}`,
                {
                    method: "DELETE",
                }
            );

            if (!res.ok) {
                throw new Error("Failed to delete event");
            }

            setOpen(false);
            router.refresh();

        } catch (error) {
            console.error(error);
        }
        console.log('clicked');
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                render={
                    <button
                        type="button"
                        className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition-all hover:bg-red-600 hover:text-white dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white"
                    >
                        Delete
                    </button>
                }
            />

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-red-600">
                        Delete Event?
                    </DialogTitle>

                    <DialogDescription className="text-slate-500">
                        Are you sure you want to delete `{event.eventTitle}`?
                        This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex justify-end gap-3 pt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="button"
                        onClick={handleDeleteEvent}
                        className="bg-red-600 text-white hover:bg-red-700"
                    >
                        <Trash2 size={16} />
                        Confirm Delete
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
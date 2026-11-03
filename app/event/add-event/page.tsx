"use client";

import { eventCategories } from "@/data/allCategory";
import { eventImages } from "@/data/eventImages";
import { authClient } from "@/lib/auth-client";
import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { PlusCircle, CalendarDays, MapPin, ImageIcon, Leaf } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const AddEventPage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Capture the form before the async operation
        const form = e.currentTarget;

        try {
            const token = await getTokenFromClient();

            const formData = new FormData(form);
            const eventData = Object.fromEntries(formData.entries()) as Record<string, string>;

            // Collect user email from session
            eventData.organizerEmail = user?.email || "";

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/add-event`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(eventData)
            });

            const result = await res.json();

            if (res.ok) {
                toast.success(result.message || "Event created successfully!");
                form.reset();
            } else {
                toast.error(result.message || "Failed to create event!");
            }

        } catch (error) {
            console.error("Event creation error:", error);
            toast.error("Something went wrong. Please try again!");
        }
    };

    const inputClassName =
        "w-full rounded-xl border border-[#DCE6DC] bg-white px-4 py-3 text-sm text-[#183D2A] placeholder:text-[#9AA99B] outline-none transition-all focus:border-[#397D48] focus:ring-2 focus:ring-[#397D48]/15 dark:border-[#344B39] dark:bg-[#1B2B20] dark:text-[#E6F2E5] dark:placeholder:text-[#829585] dark:focus:border-[#86C995] dark:focus:ring-[#86C995]/15";

    const labelClassName =
        "mb-2 block text-sm font-semibold text-[#294B34] dark:text-[#D5E7D7]";

    return (
        <main className="min-h-screen px-4 py-10 transition-colors duration-300 dark:bg-[#0B0F0D] md:px-8 md:py-14">

            <div className="mx-auto max-w-4xl">

                {/* Page Heading */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F2E5] text-[#245C43] dark:bg-[#24352A] dark:text-[#86C995]">
                        <Leaf size={28} />
                    </div>

                    <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#5B9B65] uppercase">
                        BetterTogether Community
                    </p>

                    <h1 className="font-heading text-3xl font-bold tracking-tight text-[#183D2A] dark:text-[#E6F2E5] md:text-4xl">
                        Create an Event
                    </h1>

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#667568] dark:text-[#A6B9A8] md:text-base">
                        Bring people together, inspire action, and make a
                        positive difference in your community.
                    </p>
                </div>

                {/* Form Card */}
                <div className="overflow-hidden rounded-3xl border border-[#E3E9DF] bg-white shadow-[0_12px_45px_rgba(24,61,42,0.06)] dark:border-[#304334] dark:bg-[#14251B] dark:shadow-black/20">

                    {/* Card Header */}
                    <div className="border-b border-[#E8EEE6] bg-[#F7FAF5] px-6 py-6 dark:border-[#304334] dark:bg-[#192C20] md:px-9">
                        <h2 className="text-xl font-bold text-[#183D2A] dark:text-[#E6F2E5]">
                            Event Information
                        </h2>

                        <p className="mt-1 text-sm text-[#758276] dark:text-[#A6B9A8]">
                            Fill in the details below to share your event.
                        </p>
                    </div>

                    <form onSubmit={handleOnSubmit} className="space-y-6 p-6 md:p-9">

                        {/* Event Title */}
                        <div>
                            <label htmlFor="eventTitle" className={labelClassName}>
                                Event Title
                            </label>

                            <input
                                id="eventTitle"
                                type="text"
                                name="eventTitle"
                                placeholder="e.g. Community Tree Plantation"
                                autoComplete="off"
                                required
                                className={inputClassName}
                            />
                        </div>

                        {/* Type and Date */}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                            <div>
                                <label htmlFor="eventCategory" className={labelClassName}>
                                    Event Type
                                </label>

                                <select
                                    id="eventCategory"
                                    name="eventCategory"
                                    required
                                    className={`${inputClassName} cursor-pointer`}
                                >
                                    {eventCategories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="eventDate" className={labelClassName}>
                                    Event Date
                                </label>

                                <div className="relative">
                                    <CalendarDays
                                        size={18}
                                        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#758276]"
                                    />

                                    <input
                                        id="eventDate"
                                        type="date"
                                        name="eventDate"
                                        min={new Date().toISOString().split("T")[0]}
                                        className={`${inputClassName} pl-11`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label htmlFor="eventLocation" className={labelClassName}>
                                Location or Venue
                            </label>

                            <div className="relative">
                                <MapPin
                                    size={18}
                                    className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#758276]"
                                />

                                <input
                                    id="eventLocation"
                                    type="text"
                                    name="eventLocation"
                                    placeholder="Enter event location or venue"
                                    autoComplete="eventLocation"
                                    required
                                    className={`${inputClassName} pl-11`}
                                />
                            </div>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label htmlFor="imageUrl" className={labelClassName}>
                                Thumbnail Image
                            </label>

                            <div className="relative">
                                <ImageIcon
                                    size={18}
                                    className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#758276]"
                                />

                                <select
                                    id="imageUrl"
                                    name="imageUrl"
                                    className={`${inputClassName} cursor-pointer pl-11`}
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>
                                        Select your image
                                    </option>
                                    {eventImages.map((image) => (
                                        <option key={image.name} value={image.url}>
                                            {image.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className={labelClassName}>
                                Event Description
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                rows={5}
                                placeholder="Tell the community what your event is about..."
                                className={`${inputClassName} resize-y`}
                            />
                        </div>

                        {/* user email */}
                        <div>
                            <div className={`${inputClassName} flex items-center justify-between`}>
                                <span className="shrink-0 text-sm text-gray-400">
                                    Organizer Email attached:
                                </span>

                                <span className="text-sm text-gray-400">
                                    {user?.email}
                                </span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="border-t border-[#E8EEE6] pt-6 dark:border-[#304334]">
                            <button
                                type="submit"
                                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#245C43] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#194832] hover:shadow-lg hover:shadow-[#245C43]/15 focus:outline-none focus:ring-2 focus:ring-[#397D48] focus:ring-offset-2 dark:bg-[#397D48] dark:hover:bg-[#4B965B] dark:focus:ring-offset-[#14251B] sm:w-auto"
                            >
                                <PlusCircle size={18} />
                                Create Event
                            </button>
                        </div>

                    </form>
                </div>

                {/* Footer Note */}
                <p className="mt-6 text-center text-xs text-[#758276] dark:text-[#829585]">
                    Every small action can create a meaningful change. 🌱
                </p>

            </div>
        </main>
    );
};

export default AddEventPage;
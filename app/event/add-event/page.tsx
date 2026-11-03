import AddEvent from "@/components/events/AddEvent";
import { Leaf } from "lucide-react";

const AddEventPage = () => {
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
                <AddEvent />

                {/* Footer Note */}
                <p className="mt-6 text-center text-xs text-[#758276] dark:text-[#829585]">
                    Every small action can create a meaningful change. 🌱
                </p>

            </div>
        </main>
    );
};

export default AddEventPage;

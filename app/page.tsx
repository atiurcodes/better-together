
import GoogleAuthToast from "@/components/auth/GoogleAuthToast";
import Features from "@/components/home/Featured";
import Gallery from "@/components/home/Gallary";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/NewsLetter";
import RecentUpcomingCard from "@/components/home/RecentUpcomingCard";
import { Event } from "@/lib/type";

export default async function Home() {
  const res = await fetch(
    "http://localhost:5000/recent-upcoming-event",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch recent events");
  }

  const recentEvent: Event[] = await res.json();

  return (
    <div>
      <GoogleAuthToast />
      <Hero />
      <Features />

      {/* Recent Upcoming Events */}
      <section className="bg-[#F0F9F4] py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              Make an Impact
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl">
              Recent Upcoming Events
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
              Discover upcoming community initiatives and
              become part of something meaningful.
              Together, we can create a better tomorrow.
            </p>
          </div>

          {recentEvent.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {recentEvent.map((event) => (
                <RecentUpcomingCard
                  key={event._id}
                  event={event}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-emerald-200 py-16 text-center dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                No Upcoming Events Yet
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Stay tuned! New events will be announced soon.
              </p>
            </div>
          )}

          <Gallery />
          <Newsletter />

        </div>
      </section>
    </div>
  );
}

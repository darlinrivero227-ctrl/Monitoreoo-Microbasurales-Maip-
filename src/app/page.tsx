import { Header } from "@/components/Header";
import { AirQualityHero } from "@/components/AirQualityHero";
import { WeeklySummary } from "@/components/WeeklySummary";
import { AIAdvisor } from "@/components/AIAdvisor";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      
      <div className="space-y-6">
        <section>
          <AirQualityHero />
        </section>

        <section>
          <WeeklySummary />
        </section>

        <section>
          <AIAdvisor />
        </section>
      </div>

      <footer className="mt-12 text-center py-8">
        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">
          Maipú Verde &copy; {new Date().getFullYear()} — Compromiso Ambiental Ciudadano
        </p>
      </footer>
    </div>
  );
}

import { Leaf, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CitizenContribution } from "./CitizenContribution";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="flex items-center gap-2">
        <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
          <Leaf className="text-primary-foreground h-6 w-6" />
        </div>
        <h1 className="font-headline text-2xl font-bold tracking-tight text-primary">
          Maipú Verde
        </h1>
      </div>
      <CitizenContribution />
    </header>
  );
}

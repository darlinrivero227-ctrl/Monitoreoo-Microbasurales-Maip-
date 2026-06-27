import { AlertTriangle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AirQualityHero() {
  return (
    <Card className="overflow-hidden border-none shadow-xl shadow-primary/5 card-fade-in mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest font-headline">
          Estado Actual
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center pt-2">
        <div className="relative mb-4">
          <span className="font-headline text-8xl font-bold tracking-tighter text-foreground">
            612
          </span>
          <div className="absolute -right-6 top-2">
            <AlertTriangle className="text-destructive h-10 w-10 animate-pulse" />
          </div>
        </div>
        
        <Badge variant="destructive" className="px-4 py-1 text-base font-semibold mb-4 rounded-full">
          Alta presencia de gases
        </Badge>
        
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
          Se detectan niveles elevados de partículas en suspensión. Se recomienda evitar actividades físicas intensas al aire libre.
        </p>
        
        <div className="mt-6 flex items-center gap-1 text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
          <Info className="h-3 w-3" />
          Actualizado hace 2 minutos en Maipú Centro
        </div>
      </CardContent>
    </Card>
  );
}

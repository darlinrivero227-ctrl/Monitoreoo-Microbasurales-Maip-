"use client";

import { useState } from "react";
import { Sparkles, Loader2, ChevronRight, Activity, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { aiHealthAdvisor, type AIHealthAdvisorOutput } from "@/ai/flows/ai-health-advisor-flow";

export function AIAdvisor() {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<AIHealthAdvisorOutput | null>(null);

  const handleGetAdvice = async () => {
    setLoading(true);
    try {
      const result = await aiHealthAdvisor({
        airQualityIndex: 45,
        airQualityDescription: "Niveles de CH₄ detectados"
      });
      setAdvice(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-xl shadow-primary/5 card-fade-in [animation-delay:400ms] overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-primary/10">
        <div className="flex items-center justify-between">
          <CardTitle className="font-headline text-lg font-bold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> Análisis de Metano
          </CardTitle>
          <div className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">
            Análisis Técnico
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {!advice && !loading && (
          <div className="text-center py-4">
            <p className="text-sm text-muted-foreground mb-6">
              Inicia una evaluación técnica sobre las concentraciones de metano (CH₄) detectadas en el ambiente.
            </p>
            <Button 
              onClick={handleGetAdvice} 
              className="w-full rounded-full font-headline font-bold shadow-lg shadow-primary/20"
            >
              Analizar Niveles
            </Button>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
            <p className="text-sm font-medium animate-pulse">Calculando concentraciones de CH₄...</p>
          </div>
        )}

        {advice && !loading && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div>
              <p className="text-sm font-medium italic text-muted-foreground border-l-4 border-primary/20 pl-4 py-1 leading-relaxed">
                "{advice.healthAdvisory}"
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  <Activity className="h-3 w-3" /> Evaluación Técnica
                </h4>
                {advice.recommendedActivities.length > 0 ? (
                  <ul className="space-y-1">
                    {advice.recommendedActivities.map((act, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground italic">No se han determinado acciones adicionales.</p>
                )}
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-destructive flex items-center gap-2">
                  <ShieldAlert className="h-3 w-3" /> Protocolo de Seguridad
                </h4>
                <ul className="space-y-1">
                  {advice.precautions.map((prec, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-destructive shrink-0 mt-1.5" />
                      <span>{prec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => setAdvice(null)}
              className="w-full rounded-full text-xs font-bold font-headline mt-4"
            >
              Nuevo Análisis
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import { PlusCircle, Send, CheckCircle2 } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function CitizenContribution() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <Dialog onOpenChange={(open) => !open && setSubmitted(false)}>
      <DialogTrigger asChild>
        <Button size="sm" className="rounded-full gap-2 font-headline font-bold shadow-lg shadow-primary/20">
          <PlusCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Aporte Ciudadano</span>
          <span className="sm:hidden">Aportar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-2xl">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl font-bold text-primary">Aporte Ciudadano</DialogTitle>
              <DialogDescription>
                Reporta condiciones ambientales en tu sector para ayudar a mapear Maipú.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="location">Ubicación (Barrio/Calle)</Label>
                <Input id="location" placeholder="Ej: Villa Los Héroes" required className="rounded-xl border-muted" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Observación</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe lo que percibes (humo intenso, olor a gas, aire denso...)" 
                  className="rounded-xl border-muted min-h-[100px]"
                  required
                />
              </div>
              <DialogFooter className="pt-4">
                <Button type="submit" disabled={loading} className="w-full rounded-xl font-headline font-bold">
                  {loading ? "Enviando..." : "Enviar Reporte"}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center text-center gap-4 animate-in zoom-in-95 duration-300">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-headline text-2xl font-bold">¡Gracias por tu aporte!</h3>
            <p className="text-muted-foreground text-sm max-w-[240px]">
              Tu reporte ha sido registrado. La comunidad de Maipú Verde te lo agradece.
            </p>
            <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4 rounded-xl px-8">
              Cerrar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

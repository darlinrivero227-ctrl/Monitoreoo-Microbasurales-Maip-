"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TrendingDown, TrendingUp } from "lucide-react";

const data = [
  { name: "Aire limpio", value: 42, color: "hsl(var(--chart-1))" },
  { name: "Moderado", value: 33, color: "hsl(var(--chart-2))" },
  { name: "Deteriorado", value: 15, color: "hsl(var(--chart-3))" },
  { name: "Alta presencia de gases", value: 10, color: "hsl(var(--chart-4))" },
];

export function WeeklySummary() {
  return (
    <Card className="border-none shadow-xl shadow-primary/5 card-fade-in [animation-delay:200ms] mb-6">
      <CardHeader>
        <CardTitle className="font-headline text-lg font-bold">Resumen Semanal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: item.color }} 
              />
              <div className="flex flex-col">
                <span className="text-[10px] text-muted-foreground uppercase font-semibold leading-none">{item.name}</span>
                <span className="text-sm font-headline font-bold">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>

        <Separator className="mb-6 opacity-50" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingDown className="h-3 w-3 text-primary" /> Promedio semanal
            </span>
            <span className="font-headline text-2xl font-bold">398</span>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              Pico máximo <TrendingUp className="h-3 w-3 text-destructive" />
            </span>
            <span className="font-headline text-2xl font-bold">672</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

'use server';
/**
 * @fileOverview Analista de Metano (CH4) que proporciona evaluaciones técnicas y protocolos de seguridad
 * basados en las concentraciones detectadas.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIHealthAdvisorInputSchema = z.object({
  airQualityIndex: z.number().describe('La concentración de metano en partes por millón (ppm).'),
  airQualityDescription: z
    .string()
    .describe('Descripción técnica de la medición actual.'),
});
export type AIHealthAdvisorInput = z.infer<typeof AIHealthAdvisorInputSchema>;

const AIHealthAdvisorOutputSchema = z.object({
  healthAdvisory: z
    .string()
    .describe('Resumen técnico del estado de concentración de metano.'),
  recommendedActivities: z.array(z.string()).describe(
    'Evaluaciones técnicas o pasos a seguir según la concentración.'
  ),
  precautions: z.array(z.string()).describe(
    'Protocolos de seguridad o precauciones necesarias ante los niveles de CH4.'
  ),
});
export type AIHealthAdvisorOutput = z.infer<typeof AIHealthAdvisorOutputSchema>;

export async function aiHealthAdvisor(input: AIHealthAdvisorInput): Promise<AIHealthAdvisorOutput> {
  return aiHealthAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiMethaneAnalysisPrompt',
  input: { schema: AIHealthAdvisorInputSchema },
  output: { schema: AIHealthAdvisorOutputSchema },
  prompt: `Eres un analista técnico especializado en concentraciones de metano (CH4). Tu tarea es proporcionar una evaluación científica basada en los niveles detectados.

Considera la siguiente información:
Nivel de Metano: {{{airQualityIndex}}} ppm
Estado de la Medición: {{{airQualityDescription}}}

Genera un informe técnico conciso, una lista de evaluaciones técnicas y una lista de protocolos de seguridad. Mantén un tono profesional, científico y preciso.

Formato de salida esperado (JSON):
{{json schema=output.schema}}
`,
});

const aiHealthAdvisorFlow = ai.defineFlow(
  {
    name: 'aiMethaneAnalysisFlow',
    inputSchema: AIHealthAdvisorInputSchema,
    outputSchema: AIHealthAdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

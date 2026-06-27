import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Maipú Verde - Calidad del Aire',
  description: 'Monitoreo de calidad del aire en tiempo real para Maipú.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased selection:bg-primary/20">
        <div className="relative flex min-h-screen flex-col items-center">
          <main className="w-full max-w-[600px] px-4 pb-20 pt-4">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}

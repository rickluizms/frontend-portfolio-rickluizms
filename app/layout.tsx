import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiz | Desenvolvedor de Software & Engenheiro de Dados",
  description: "Portfólio de Luiz, especialista em Engenharia de Dados, Backend e Desenvolvimento de Software.",
  keywords: ["Desenvolvedor", "Engenheiro de Dados", "Backend", "Portfolio", "Luiz", "Data Engineer"],
  authors: [{ name: "Luiz" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Luiz | Desenvolvedor de Software & Engenheiro de Dados",
    description: "Portfólio de Luiz. Conheça meus projetos e experiências em Engenharia de Dados e Desenvolvimento de Software.",
    siteName: "Portfólio do Luiz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

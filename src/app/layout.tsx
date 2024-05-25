import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import '@/styles/variables.scss'
import '@/styles/globals.scss'
import { Header } from "@/component/layout/header";
import { Footer } from "@/component/layout/footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Desafio Lumi Frontend"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />        
      </body>
    </html>
  );
}

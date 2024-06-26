import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import { Provider } from "@/provider";
import { Header } from "@/component/layout/header";
import { Footer } from "@/component/layout/footer";

import '@/styles/variables.scss'
import '@/styles/globals.scss'

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
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>        
      </body>
    </html>
  );
}

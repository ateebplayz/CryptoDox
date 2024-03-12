import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ECP Trades",
  description: "Your key to profitability.",
  openGraph: {
    images: ['https://media.discordapp.net/attachments/1214533245702508584/1216133099650420736/ecpti1.png?ex=65ff4735&is=65ecd235&hm=13030fdd20a1e0017af70e08d2991a07694c221060e4014892ae15e55b3620dc&=&format=webp&quality=lossless&width=1024&height=341']
  },
  twitter: {
    images: ['https://media.discordapp.net/attachments/1214533245702508584/1216133099650420736/ecpti1.png?ex=65ff4735&is=65ecd235&hm=13030fdd20a1e0017af70e08d2991a07694c221060e4014892ae15e55b3620dc&=&format=webp&quality=lossless&width=1024&height=341']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="apple-touch-icon"
        href="/ecpttrades.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

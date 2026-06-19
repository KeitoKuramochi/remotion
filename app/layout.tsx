import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Remotion × Claude でオープニング動画を作ってみた",
  description:
    "RemotionとClaude Codeを使ってDiscordオープニング動画を1セッションで完成させた体験記。画像・音声・Motion Graphicsの実装から感想まで。",
  openGraph: {
    title: "Remotion × Claude でオープニング動画を作ってみた",
    description: "Reactで動画をコードで作れるRemotionをClaude Codeと一緒に使った体験記",
    type: "article",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}

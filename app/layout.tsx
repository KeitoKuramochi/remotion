import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Remotion × Claude でオープニング動画を作ってみた | KeitoKuramochi",
  description:
    "RemotionとClaude Codeを使って10秒のDiscordオープニング動画を作成した体験記。セットアップから音声・画像・Motion Graphicsの実装まで、初心者視点で全部まとめました。",
  openGraph: {
    title: "Remotion × Claude でオープニング動画を作ってみた",
    description: "Reactで動画をコードで作れるRemotionをClaude Codeと一緒に使った体験記",
    type: "article",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

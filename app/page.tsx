"use client";

import { useState } from "react";
import Image from "next/image";

const CYAN = "#00D4FF";
const PURPLE = "#9B4FFF";
const PINK = "#FF3AB8";
const GREEN = "#00FF88";
const YELLOW = "#FFD700";

const NAV_ITEMS = [
  { href: "#what-is-remotion", label: "Remotionとは" },
  { href: "#what-we-made", label: "作ったもの" },
  { href: "#how-to-use", label: "使い方" },
  { href: "#workflow", label: "作業環境" },
  { href: "#images", label: "画像" },
  { href: "#audio", label: "音声" },
  { href: "#claude", label: "Claude連携" },
  { href: "#review", label: "感想" },
];

function Code({ children }: { children: string }) {
  return (
    <code
      style={{
        background: "rgba(0,212,255,0.08)",
        color: "#00D4FF",
        padding: "1px 6px",
        borderRadius: 3,
        fontSize: "0.88em",
        fontFamily: "'JetBrains Mono','Fira Code','Courier New',monospace",
      }}
    >
      {children}
    </code>
  );
}

function SectionHeader({
  id,
  tag,
  tagColor,
  title,
  sub,
}: {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  sub?: string;
}) {
  return (
    <div id={id} className="mb-8 scroll-mt-20">
      <span
        className="cyber-tag mb-3 block"
        style={{
          background: `${tagColor}1a`,
          color: tagColor,
          border: `1px solid ${tagColor}55`,
        }}
      >
        {tag}
      </span>
      <h2
        className="text-3xl font-black text-white mb-2"
        style={{ textShadow: `0 0 20px ${tagColor}55` }}
      >
        {title}
      </h2>
      {sub && (
        <p className="text-sm" style={{ color: tagColor }}>
          {sub}
        </p>
      )}
      <div
        className="mt-3 h-px"
        style={{
          background: `linear-gradient(to right, ${tagColor}, transparent)`,
        }}
      />
    </div>
  );
}

function Callout({
  color,
  icon,
  children,
}: {
  color: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg p-4 my-4 flex gap-3"
      style={{
        background: `${color}0d`,
        border: `1px solid ${color}44`,
      }}
    >
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div style={{ color: "#c8d8e8", fontSize: "0.9rem" }}>{children}</div>
    </div>
  );
}

function TimelineStep({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="timeline-line">
      <p className="font-bold text-white mb-1">{title}</p>
      <div className="text-sm text-slate-400">{children}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="cyber-card p-5 hover:scale-[1.02] transition-transform duration-200">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="font-bold text-white mb-1" style={{ color }}>
        {title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Page() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="grid-bg min-h-screen">
      {/* ── TOP NAV ── */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(2,11,24,0.92)",
          borderColor: "rgba(0,212,255,0.15)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between h-14">
          <span
            className="font-black text-sm glow-cyan"
            style={{ color: CYAN, letterSpacing: "0.1em" }}
          >
            REMOTION × CLAUDE
          </span>
          <div className="hidden md:flex gap-5">
            {NAV_ITEMS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                style={{ letterSpacing: "0.05em" }}
              >
                {n.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-slate-400 hover:text-white text-xl"
            onClick={() => setNavOpen(!navOpen)}
          >
            ☰
          </button>
        </div>
        {navOpen && (
          <div
            className="md:hidden border-t"
            style={{ borderColor: "rgba(0,212,255,0.1)" }}
          >
            {NAV_ITEMS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="block px-4 py-2 text-sm text-slate-300 hover:text-white"
                onClick={() => setNavOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <header className="relative overflow-hidden px-4 pt-24 pb-20 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 60%, ${PURPLE}33 0%, transparent 55%),
                         radial-gradient(ellipse at 70% 50%, ${CYAN}22 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <span
            className="cyber-tag mb-4 inline-block"
            style={{
              background: `${CYAN}1a`,
              color: CYAN,
              border: `1px solid ${CYAN}44`,
            }}
          >
            EXPERIENCE REPORT · 2026.06
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            <span className="glow-cyan" style={{ color: CYAN }}>
              Remotion
            </span>{" "}
            ×{" "}
            <span
              style={{ color: PURPLE, textShadow: `0 0 20px ${PURPLE}` }}
            >
              Claude
            </span>
            <br />
            でオープニング動画を
            <br />
            作ってみた
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Reactで動画をコードで作れる{" "}
            <strong className="text-white">Remotion</strong> を
            <strong className="text-white"> Claude Code</strong>{" "}
            と一緒に使って、Discordコーナーのオープニング動画（13秒）を
            1セッションで完成させた体験記。
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Remotion", "Claude Code", "Motion Graphics", "TypeScript"].map(
              (t) => (
                <span
                  key={t}
                  className="cyber-tag"
                  style={{
                    background: `${PURPLE}1a`,
                    color: PURPLE,
                    border: `1px solid ${PURPLE}44`,
                  }}
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="max-w-4xl mx-auto px-4 pb-24 space-y-20">

        {/* ─────────────────────────────────────
            SECTION 1 — Remotionとは
        ───────────────────────────────────── */}
        <section>
          <SectionHeader
            id="what-is-remotion"
            tag="Section 01"
            tagColor={CYAN}
            title="Remotionとは"
            sub="React で動画をコードで作るフレームワーク"
          />
          <div className="space-y-4 text-slate-300">
            <p>
              <strong className="text-white">Remotion</strong> は「
              <em>Make videos programmatically</em>」をコンセプトにした、
              React ベースのオープンソース動画生成フレームワークです。
              従来の動画編集ソフトでタイムラインを操作するのではなく、
              <strong className="text-white">
                {" "}
                React コンポーネントとして動画を記述
              </strong>
              します。
            </p>

            <Callout color={CYAN} icon="💡">
              <strong>コアコンセプト：</strong>「動画は時間上の画像の数学的関数」。
              <Code>useCurrentFrame()</Code> でフレーム番号を取得し、
              そのフレームに対応した描画をするだけ。
              フレームが変わるとアニメーションになる。
            </Callout>

            <pre>{`// Remotionの基本
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

export default function MyAnimation() {
  const frame = useCurrentFrame(); // 現在フレーム番号（0始まり）

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ opacity, backgroundColor: '#020B18' }}>
      <h1 style={{ color: '#00D4FF' }}>Hello, Remotion!</h1>
    </AbsoluteFill>
  );
}`}</pre>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  icon: "🎬",
                  title: "動画をコードで管理",
                  desc: "Gitで動画プロジェクトをバージョン管理できる。チーム制作にも対応。",
                },
                {
                  icon: "⚡",
                  title: "ローカルプレビュー",
                  desc: "localhost でリアルタイムプレビュー。保存するたびホットリロードで即反映。",
                },
                {
                  icon: "☁️",
                  title: "クラウドレンダリング",
                  desc: "AWS Lambda / GCP Cloud Run で並列処理。長い動画も高速レンダリング。",
                },
                {
                  icon: "🔗",
                  title: "Webアプリへの埋め込み",
                  desc: "@remotion/player でReactアプリ内にインタラクティブな動画を埋め込める。",
                },
              ].map((f) => (
                <FeatureCard key={f.title} {...f} color={CYAN} />
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────
            SECTION 2 — 作ったもの
        ───────────────────────────────────── */}
        <section>
          <SectionHeader
            id="what-we-made"
            tag="Section 02"
            tagColor={PINK}
            title="今回作ったもの"
            sub="おちれのの目指せClaudeマスター！オープニング（13秒）"
          />

          <div
            className="rounded-xl overflow-hidden mb-6"
            style={{ border: `1px solid ${PINK}44` }}
          >
            <video
              src="/opening.mp4"
              controls
              loop
              playsInline
              style={{ width: "100%", display: "block", background: "#020B18" }}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "尺", value: "13秒 / 390フレーム" },
              { label: "解像度", value: "1920 × 1080 / 30fps" },
              { label: "エフェクト層", value: "20以上のレイヤー" },
            ].map((item) => (
              <div key={item.label} className="cyber-card p-4 text-center">
                <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                <p className="font-bold text-white text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-bold mb-3" style={{ color: PINK }}>
              含まれるMotion Graphics要素（全16種）
            </h3>
            <ul className="grid md:grid-cols-2 gap-1.5">
              {[
                "オープニングフラッシュ（白フラッシュ）",
                "パーティクルバースト40発（中心から放射）",
                "拡張リング4連（同心円が外に広がる）",
                "スキャンワイプ（キャラクターが上から表示）",
                "キャラクター個別スウェイ（左右分割・別リズム）",
                "ホログラムリング（回転する六角形HUD）",
                "ライトレイ（放射状の光線・レンズフレア風）",
                "ネームプレート（スライドイン + パルス）",
                "エネルギービーム（2キャラ間のライン）",
                "CHARGEゲージ（タイトルまでのカウント）",
                "タイプライターサブタイトル",
                "グリッチプレショック（タイトル直前）",
                "タイトルインパクト（衝撃波4連 + 42パーティクル）",
                "アンビエントパーティクル20個",
                "データストリーム（流れる文字）",
                "スキャンライン（CRT感）",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-300">
                  <span style={{ color: PINK, flexShrink: 0 }}>▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─────────────────────────────────────
            SECTION 3 — 使い方
        ───────────────────────────────────── */}
        <section>
          <SectionHeader
            id="how-to-use"
            tag="Section 03"
            tagColor={GREEN}
            title="セットアップ・使い方"
            sub="ゼロから動画が動くまでの手順"
          />
          <div className="space-y-4 text-slate-300">
            <div>
              <TimelineStep title="1. Node.js のインストール">
                Node.js v18以上が必要。{" "}
                <Code>node --version</Code> で確認。
              </TimelineStep>
              <TimelineStep title="2. プロジェクト作成">
                <Code>npm create video@latest</Code> でセットアップ。
                ※ インタラクティブなTUIが起動するので、端末でそのまま操作する。
              </TimelineStep>
              <TimelineStep title="3. 依存パッケージインストール">
                <Code>npm install</Code> を実行。
              </TimelineStep>
              <TimelineStep title="4. 開発サーバー起動">
                <Code>npm run dev</Code> で{" "}
                <Code>localhost:3000</Code> が開く。Remotion Studio
                が表示され、リアルタイムプレビューが可能。
              </TimelineStep>
              <TimelineStep title="5. コンポーネントを書く">
                <Code>src/</Code> 以下に React
                コンポーネントを作成。フレーム番号をもとにアニメーションを記述。
              </TimelineStep>
              <TimelineStep title="6. Root.tsx に登録">
                <Code>{"<Composition>"}</Code>{" "}
                タグにコンポーネント・解像度・フレーム数を指定。
              </TimelineStep>
              <TimelineStep title="7. レンダリング">
                <Code>npx remotion render Opening out/output.mp4</Code> でMP4を出力。
              </TimelineStep>
            </div>

            <Callout color={GREEN} icon="🔥">
              <strong>ホットリロードについて：</strong> ファイルを保存すると
              <strong> 自動でブラウザ側がリロード</strong>されます。
              ブラウザ（Remotion Studio）はプレビューのみで、コードの変更はIDEから行います。
            </Callout>

            <h3 className="text-lg font-bold mt-4" style={{ color: GREEN }}>
              重要なAPI
            </h3>
            <pre>{`// フレーム取得
const frame = useCurrentFrame();

// 値のマッピング（inputRange → outputRange）
const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});

// 物理ベースのスプリングアニメーション
const p = spring({ frame, fps: 30,
  config: { mass: 1, damping: 14, stiffness: 150 },
  durationInFrames: 40,
});

// タイミング制御
<Sequence from={60} durationInFrames={90}>
  <MyComponent />
</Sequence>

// 確定的な擬似乱数（Math.random()は使えない！）
const det = (i, seed = 0) =>
  Math.abs(Math.sin(i * 127.1 + seed * 311.7) * 43758.5453) % 1;`}</pre>

            <Callout color={PINK} icon="⚠️">
              <strong>注意：</strong> Remotion は各フレームを独立してレンダリングするため{" "}
              <Code>Math.random()</Code> は使用禁止。
              同じフレームを何度レンダリングしても同じ結果（決定論的レンダリング）でなければならない。
            </Callout>
          </div>
        </section>

        {/* ─────────────────────────────────────
            SECTION 4 — 作業環境のスクリーンショット
        ───────────────────────────────────── */}
        <section>
          <SectionHeader
            id="workflow"
            tag="Section 04"
            tagColor={PURPLE}
            title="実際の作業環境"
            sub="左がRemotion Studio、右がClaude Code"
          />
          <div className="space-y-4 text-slate-300">
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: `1px solid ${PURPLE}44` }}
            >
              <Image
                src="/workflow-screenshot.png"
                alt="左：Remotion Studioのプレビュー、右：VS CodeとClaude Codeの作業画面"
                width={1280}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="text-sm text-slate-400 text-center">
              ↑ 左：Remotion Studio（localhost）でアニメーションをリアルタイムプレビュー
              　右：VS Code + Claude Code でコードを修正
            </p>

            <Callout color={PURPLE} icon="🖥️">
              <strong>このワークフローが核心：</strong>
              右のClaude Codeに「こうして欲しい」と日本語で指示 → コードが自動生成 →
              ファイル保存 → 左のRemotionプレビューに即反映。
              これを繰り返すだけで動画が完成します。
              ブラウザとIDEを左右に並べておくと確認がスムーズです。
            </Callout>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="cyber-card p-5">
                <h3 className="font-bold mb-3" style={{ color: CYAN }}>
                  左側：Remotion Studio
                </h3>
                <ul className="text-sm space-y-2 text-slate-400">
                  <li className="flex gap-2">
                    <span style={{ color: CYAN }}>▸</span>
                    タイムラインでフレームをスクラブ
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: CYAN }}>▸</span>
                    フレーム番号を入力して特定の場面に飛ぶ
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: CYAN }}>▸</span>
                    音声トラックの位置を視覚的に確認
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: CYAN }}>▸</span>
                    保存するたびに自動リロード
                  </li>
                </ul>
              </div>
              <div className="cyber-card p-5">
                <h3 className="font-bold mb-3" style={{ color: PURPLE }}>
                  右側：Claude Code（IDE内）
                </h3>
                <ul className="text-sm space-y-2 text-slate-400">
                  <li className="flex gap-2">
                    <span style={{ color: PURPLE }}>▸</span>
                    日本語で指示するだけでコードを生成
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: PURPLE }}>▸</span>
                    TypeScriptエラーも自動修正
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: PURPLE }}>▸</span>
                    ファイルの読み書きをClaude任せ
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: PURPLE }}>▸</span>
                    「乱用して」の一言でエフェクトを大量追加
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────
            SECTION 5 — 画像について
        ───────────────────────────────────── */}
        <section>
          <SectionHeader
            id="images"
            tag="Section 05"
            tagColor={CYAN}
            title="画像について"
            sub="自分で用意？それともAI生成？"
          />
          <div className="space-y-4 text-slate-300">
            <p>
              今回のキャラクター画像（クマと人物のサイバーパンク風）は
              <strong className="text-white"> Gemini で生成したもの</strong>
              を使いました。「画像は自分で準備しないといけないのかな」と思っていましたが、
              <strong className="text-white">Remotion自体に画像生成機能はなく</strong>、
              どんな画像でも素材として読み込める形になっています。
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="cyber-card p-5">
                <h3
                  className="font-bold mb-3"
                  style={{ color: CYAN }}
                >
                  今回やった方法（シンプル）
                </h3>
                <ul className="text-sm space-y-2 text-slate-400">
                  <li className="flex gap-2">
                    <span style={{ color: CYAN }}>①</span>
                    Gemini で画像生成
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: CYAN }}>②</span>
                    <Code>public/</Code> フォルダに配置
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: CYAN }}>③</span>
                    <Code>staticFile('characters.png')</Code> で読み込み
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: CYAN }}>④</span>
                    <Code>{"<Img>"}</Code> コンポーネントで表示
                  </li>
                </ul>
              </div>
              <div className="cyber-card p-5">
                <h3
                  className="font-bold mb-3"
                  style={{ color: PURPLE }}
                >
                  発展的な使い方
                </h3>
                <ul className="text-sm space-y-2 text-slate-400">
                  <li className="flex gap-2">
                    <span style={{ color: PURPLE }}>▸</span>
                    DALL-E / SD APIを呼び出してURLを直接srcに渡す
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: PURPLE }}>▸</span>
                    データに応じて内容が変わる動画（Spotify Wrapped方式）
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: PURPLE }}>▸</span>
                    公式のAI画像生成パッケージは存在しないが、API連携は自由
                  </li>
                </ul>
              </div>
            </div>

            <pre>{`// AI生成画像のURLをそのまま使う例
import { Img } from 'remotion';

export const AiImage = () => (
  <Img
    src="https://dalle-api-output-url.com/image.png"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
);

// ローカルファイルの場合
import { Img, staticFile } from 'remotion';

<Img src={staticFile('characters.png')} style={{ width: '100%' }} />`}</pre>
          </div>
        </section>

        {/* ─────────────────────────────────────
            SECTION 6 — 音声・タイミング
        ───────────────────────────────────── */}
        <section>
          <SectionHeader
            id="audio"
            tag="Section 06"
            tagColor={YELLOW}
            title="音声・タイミングについて"
            sub="BGM・SE・TTS・字幕の仕組み"
          />
          <div className="space-y-4 text-slate-300">
            <p>
              今回は BGM と3つの SE（効果音）を自分でダウンロードして
              <Code>public/</Code> に配置しました。
              音声ファイルの準備は自分でやる必要があり、
              <strong className="text-white">「タイミング合わせ」</strong>
              が最初の難関でした。
            </p>

            <pre>{`// BGM（フェードイン・フェードアウト付き）
<Audio
  src={staticFile('bgm.mp3')}
  volume={(f) =>
    interpolate(f, [0, 40, 360, 390], [0, 0.65, 0.65, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  }
/>

// 効果音（特定タイミングで再生）
<Sequence from={270} durationInFrames={90}>
  <Audio src={staticFile('se_impact.mp3')} volume={1.0} />
</Sequence>`}</pre>

            <Callout color={YELLOW} icon="🎵">
              <strong>タイミング合わせの方法：</strong> Remotion
              Studio のタイムラインでフレームをスクラブして確認しながら、
              コードの <Code>from={}</Code> 値を調整します。
              「BGMの盛り上がりは何フレーム目？」→ ブラウザで確認 → IDEで修正 →
              保存（自動リロード）の繰り返し。
            </Callout>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="cyber-card p-5">
                <h3
                  className="font-bold mb-3"
                  style={{ color: YELLOW }}
                >
                  TTS（自動読み上げ）
                </h3>
                <ul className="text-sm space-y-2 text-slate-400">
                  <li className="flex gap-2">
                    <span style={{ color: YELLOW }}>▸</span>
                    Remotion公式のTTS npmパッケージは
                    <strong className="text-white">存在しない</strong>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: YELLOW }}>▸</span>
                    Google TTS / Azure TTSの
                    <strong className="text-white">公式テンプレート</strong>はある
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: YELLOW }}>▸</span>
                    ElevenLabs APIでMP3生成 → 読み込みが現実的
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: YELLOW }}>▸</span>
                    流れ：テキスト → TTS API → MP3 →{" "}
                    <Code>{"<Audio>"}</Code>
                  </li>
                </ul>
              </div>
              <div className="cyber-card p-5">
                <h3
                  className="font-bold mb-3"
                  style={{ color: GREEN }}
                >
                  字幕の自動化（公式）
                </h3>
                <ul className="text-sm space-y-2 text-slate-400">
                  <li className="flex gap-2">
                    <span style={{ color: GREEN }}>▸</span>
                    <strong className="text-white">@remotion/captions</strong>（公式）でTikTok風字幕
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: GREEN }}>▸</span>
                    <strong className="text-white">@remotion/whisper-web</strong>（公式）で音声→文字起こし＋タイミング自動化
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: GREEN }}>▸</span>
                    音声ファイルを用意すれば字幕タイミングは全自動
                  </li>
                </ul>
              </div>
            </div>

            <Callout color={GREEN} icon="🎙️">
              <strong>読み上げ動画の作り方（参考記事でも見た手法）：</strong>
              <br />
              テキスト → TTS API（Google / ElevenLabs等）→ MP3生成 →{" "}
              <Code>@remotion/whisper-web</Code> で文字起こし＋タイミング取得 →{" "}
              <Code>@remotion/captions</Code> で字幕を自動配置。
              音声と字幕が完全同期した動画が作れる。
            </Callout>
          </div>
        </section>

        {/* ─────────────────────────────────────
            SECTION 7 — Claude × Remotion
        ───────────────────────────────────── */}
        <section>
          <SectionHeader
            id="claude"
            tag="Section 07"
            tagColor={PURPLE}
            title="Claude × Remotion の使用感"
            sub="AIがコードと自分の間を埋めてくれる"
          />
          <div className="space-y-4 text-slate-300">
            <p>
              今回はClaude Codeのセッション内で「こんな動画を作りたい」という会話から始まり、
              コードの生成・修正・デバッグをすべてClaude任せにしました。
              実際のやりとりの抜粋です。
            </p>

            <div className="space-y-3 my-4">
              {[
                {
                  role: "user",
                  text: "おちれのの目指せclaudeマスター！というコーナーのオープニングを作りたいです。この画像の左のクマがおちえくです。右の黒人がれのあです。",
                  color: CYAN,
                },
                {
                  role: "claude",
                  text: "10秒のサイバーパンク風オープニングを作ります。Motion Graphicsで ParticleBurst, ExpansionRings, ScanWipe, GlitchText, TypewriterText, EnergyBeam を追加します。",
                  color: PURPLE,
                },
                {
                  role: "user",
                  text: "タイトル今10秒位の時にBGMとか効果音の盛り上がりが来てて、その時にどんとタイトルを出して欲しいんですけど、今だと7秒位で出ちゃっててBGMが遅れてる状態なので変えて欲しいです。あと後ろのキャラクターをそれぞれ2人分何か動きを追加してもらえるとより面白いです。揺れるような感じがいいです。",
                  color: CYAN,
                },
                {
                  role: "claude",
                  text: "タイトルを frame 283（9.4秒）に移動します。キャラクターはclip-pathで左右に分割して、それぞれ独立したsin波のスウェイを追加します。おちえくは呼吸のような揺れ、れのあはクールな別リズムで。",
                  color: PURPLE,
                },
                {
                  role: "user",
                  text: "もっとMotion Graphicsを乱用して欲しいです",
                  color: CYAN,
                },
                {
                  role: "claude",
                  text: "ホログラムリング（回転六角形HUD）、ライトレイ（放射光線）、CHARGEゲージ、グリッチプレショック、タイトルインパクト（衝撃波4連＋42パーティクル爆発）を追加します。",
                  color: PURPLE,
                },
              ].map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[80%] rounded-xl px-4 py-3 text-sm"
                    style={{
                      background: `${msg.color}12`,
                      border: `1px solid ${msg.color}44`,
                      color: "#c8d8e8",
                    }}
                  >
                    <span
                      className="block text-xs mb-1.5 font-bold"
                      style={{ color: msg.color }}
                    >
                      {msg.role === "user" ? "自分" : "Claude"}
                    </span>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  title: "自然言語で指示できる",
                  desc: "「揺れるような感じ」「BGMの盛り上がりに合わせて」などの日本語でOK。コード知識がなくても意図が伝わる。",
                },
                {
                  title: "タイミング計算を任せられる",
                  desc: "「10秒位で出て欲しい」→ フレーム換算（10s×30fps=300f）をClaudeが自動計算。",
                },
                {
                  title: "エラーが自動修正される",
                  desc: "TypeScriptのエラーや非推奨警告も指摘されると自動で直してくれる。",
                },
                {
                  title: "「乱用」指示が通る",
                  desc: "「Motion Graphicsを乱用して」と言えば5つのコンポーネントを一度に追加。自分でやると何時間もかかる。",
                },
              ].map((f) => (
                <FeatureCard
                  key={f.title}
                  icon="✦"
                  {...f}
                  color={PURPLE}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────
            SECTION 8 — 感想
        ───────────────────────────────────── */}
        <section>
          <SectionHeader
            id="review"
            tag="Section 08"
            tagColor={PINK}
            title="使ってみた感想"
            sub="初心者がClaude経由でRemotionを使った率直なレビュー"
          />
          <div className="space-y-4 text-slate-300">
            <div className="space-y-4">
              {[
                {
                  icon: "😮",
                  title: "localhost で確認しながら触れるのが便利",
                  body: "Remotion Studio のタイムラインでフレームをスクラブして「この音はここで鳴ってるな」と確認しながら、IDEでコードを直して保存 → 即反映というサイクルが直感的でした。音のタイミングを数値で合わせるのは最初難しかったけど、慣れると「○秒 × 30fps = ○フレーム」で計算できるようになります。",
                  color: CYAN,
                },
                {
                  icon: "🤔",
                  title: "画像は自分で用意する（でもAI生成でOK）",
                  body: "最初「画像どうするんだろう」と思ったけど、Geminiで生成した画像を public/ フォルダに置くだけでした。Remotionは画像を「作る」ツールではなく「組み込む」ツールなので、素材は何でもOK。AI画像生成サービスとの組み合わせが現実的な答えです。",
                  color: PURPLE,
                },
                {
                  icon: "🎵",
                  title: "音の自動読み上げはまだハードル高め",
                  body: "調べてみると @remotion/captions や @remotion/whisper-web という公式パッケージがあって、音声ファイルから字幕タイミングを自動化できることがわかりました。ただし完全自動でTTSから字幕まで生成するには複数のAPIキー設定が必要で、今回は手動でMP3を用意しました。読み上げ動画は「TTS APIでMP3生成 → Remotionで使う」という流れになります。",
                  color: YELLOW,
                },
                {
                  icon: "🚀",
                  title: "Claude経由が圧倒的に楽だった",
                  body: "「揺れる感じにして」「BGMの盛り上がりに合わせて」「Motion Graphicsを乱用して」という日本語の指示だけで、複雑なアニメーションコードが出てきます。自分でRemotionのAPIを全部学習してから始めようとしたら何日もかかっていたと思います。AIが『やりたいこと』と『技術的な作業』の間を埋めてくれる感覚が一番強かったです。",
                  color: PINK,
                },
                {
                  icon: "📝",
                  title: "テロップを自由に変えられるのは良い",
                  body: "フォント・サイズ・アニメーション・タイミングをコードで完全に制御できます。タイプライター風、グリッチエフェクト付き、シネマ風のテロップなど、アイデア次第で何でも作れます。既存の動画編集ソフトでは実現が難しいようなアニメーションも、コードなら自由自在です。",
                  color: GREEN,
                },
              ].map((item) => (
                <div key={item.title} className="cyber-card p-5">
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                  <div
                    className="mt-3 h-px"
                    style={{
                      background: `linear-gradient(to right, ${item.color}44, transparent)`,
                    }}
                  />
                </div>
              ))}
            </div>

            <Callout color={PINK} icon="📚">
              <strong>参考：</strong> 同様の体験をしている方もいます。{" "}
              <a
                href="https://note.com/tomiyasu16/n/n4bbe81ee9afa"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: CYAN, textDecoration: "underline" }}
              >
                note.com の記事
              </a>{" "}
              でも「Claude Codeと会話しながら作れる」「AIが技術的な壁を取り除いてくれる」
              という体験が紹介されています。
            </Callout>

            <div className="cyber-card p-6 text-center mt-6">
              <h3 className="text-xl font-black text-white mb-3">
                まとめ：
                <span style={{ color: CYAN }}> Remotion × Claude </span>
                の可能性
              </h3>
              <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
                Remotion は「コードで動画を作る」という新しいパラダイムを提供しています。
                単体では学習コストがありますが、Claude のような AI と組み合わせると
                プログラミング知識がほぼなくても、アイデアを伝えるだけで
                プロレベルのMotion Graphicsアニメーションが作れます。
                テロップ・画像・音声・エフェクトの自由度は既存の動画ツールを大きく超えており、
                データ駆動型の量産動画や、Webアプリへの動画埋め込みにも展開できます。
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {[
                  "データ駆動動画",
                  "読み上げ動画",
                  "Motion Graphics",
                  "Webアプリ埋め込み",
                ].map((t) => (
                  <span
                    key={t}
                    className="cyber-tag"
                    style={{
                      background: `${CYAN}12`,
                      color: CYAN,
                      border: `1px solid ${CYAN}33`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="border-t py-8 text-center"
        style={{ borderColor: "rgba(0,212,255,0.12)" }}
      >
        <p
          className="text-sm font-bold mb-1"
          style={{ color: "rgba(0,212,255,0.6)" }}
        >
          REMOTION × CLAUDE — Experience Report
        </p>
        <p className="text-xs text-slate-600">
          Built with Next.js + Tailwind CSS · Deployed on Vercel
        </p>
      </footer>
    </div>
  );
}

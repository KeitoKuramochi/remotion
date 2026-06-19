"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/* ── Scroll reveal ───────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}s`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          obs.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

/* ── Frame marker ────────────────────────────────────── */
function FM({ frame, label }: { frame: string; label: string }) {
  return (
    <div style={{ marginBottom: "2.5rem", scrollMarginTop: "4rem" }}>
      <div className="frame-marker">
        <span className="frame-marker-code">{frame}</span>
        <div className="frame-marker-line" />
      </div>
      <h2 style={{ fontSize: "1.65rem", fontWeight: 700, marginBottom: "1rem" }}>
        {label}
      </h2>
    </div>
  );
}

/* ── Inline code ─────────────────────────────────────── */
function C({ children }: { children: string }) {
  return <code>{children}</code>;
}

/* ── Main ────────────────────────────────────────────── */
export default function Page() {
  const NAV = [
    { href: "#remotion", label: "Remotionとは" },
    { href: "#made", label: "作ったもの" },
    { href: "#setup", label: "使い方" },
    { href: "#workflow", label: "作業環境" },
    { href: "#images", label: "画像" },
    { href: "#audio", label: "音声" },
    { href: "#claude", label: "Claude連携" },
    { href: "#review", label: "感想" },
  ];

  const article: React.CSSProperties = {
    maxWidth: 680,
    margin: "0 auto",
    padding: "0 1.5rem",
  };

  const wideBreak: React.CSSProperties = {
    maxWidth: 960,
    margin: "2rem auto",
    padding: "0 1.5rem",
  };

  const p: React.CSSProperties = {
    marginBottom: "1.1rem",
    lineHeight: 1.88,
  };

  return (
    <>
      {/* ── NAV ── */}
      <nav className="site-nav">
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            height: "3rem",
            gap: "0.25rem",
            overflowX: "auto",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--accent)",
              marginRight: "1.5rem",
              whiteSpace: "nowrap",
              letterSpacing: "0.08em",
            }}
          >
            f.log
          </span>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                padding: "0.25rem 0.6rem",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-strong)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <header style={{ padding: "5rem 1.5rem 3.5rem", maxWidth: 680, margin: "0 auto" }}>
        {/* timeline strip */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
            display: "flex",
            gap: "1.5rem",
            marginBottom: "2.5rem",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "0.75rem",
            overflowX: "auto",
          }}
        >
          {["f.0000","f.0062","f.0137","f.0210","f.0270","f.0283","f.0390"].map((f) => (
            <span key={f} style={{ whiteSpace: "nowrap" }}>{f}</span>
          ))}
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
            letterSpacing: "-0.03em",
            color: "var(--text-strong)",
          }}
        >
          Remotion × Claude で
          <br />
          オープニング動画を
          <br />
          作ってみた
        </h1>

        <p style={{ ...p, color: "var(--text)", maxWidth: 480, marginBottom: 0 }}>
          Reactで動画をコードで書ける <strong>Remotion</strong> を、
          <strong>Claude Code</strong> と一緒に使って
          Discordコーナーのオープニング動画を1セッションで完成させた体験記。
          画像・音声・Motion Graphicsの実装から正直な感想まで。
        </p>
      </header>

      {/* ── VIDEO ── */}
      <div style={wideBreak}>
        <video
          src="/opening.mp4"
          controls
          loop
          playsInline
          style={{
            width: "100%",
            display: "block",
            borderRadius: 8,
            border: "1px solid var(--border-mid)",
            background: "#000",
          }}
        />
      </div>

      {/* ── SESSION FLOW ── */}
      <div style={{ maxWidth: 680, margin: "3rem auto 0", padding: "0 1.5rem" }}>
        <Reveal>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1.2rem",
          }}>
            Session Flow — このセッションで実際にやったこと
          </p>

          {/* Flow steps */}
          <div style={{ position: "relative" }}>
            {/* Vertical connector line */}
            <div style={{
              position: "absolute",
              left: "0.45rem",
              top: "1.2rem",
              bottom: "1.2rem",
              width: 1,
              background: "linear-gradient(to bottom, var(--accent), var(--border) 80%)",
              opacity: 0.3,
            }} />

            {[
              {
                label: "Deep Research",
                time: "開始",
                desc: "Remotionが何かわからない状態から。まずClaudeにRemotionを徹底調査させてMDファイルにまとめてもらった。",
                note: null,
              },
              {
                label: "Hello World を試す",
                time: "動作確認",
                desc: "「チュートリアル通りに動かす / HelloWorldを試す / 自分で作る」を提示されて HelloWorld を選択。テンプレートがブラウザ上で動く状態を確認。",
                note: null,
              },
              {
                label: "おちれのオープニング制作",
                time: "本番",
                desc: "キャラクター画像（Gemini生成）を渡して「10秒のオープニングを作って」と指示。Motion Graphicsを段階的に追加していった。",
                note: null,
              },
              {
                label: "音のタイミング調整",
                time: "ハマりポイント",
                desc: "ブラウザ（Remotion Studio）上でフレームをスクラブして音の位置を確認できるが、そこで調整しても何も変わらない。タイミングはすべてコードの from={} で指定する必要がある。",
                note: "⚠ ブラウザは「読み取り専用のプレビュー」。変更はコードから。",
              },
              {
                label: "完成・Vercel公開",
                time: "完了",
                desc: "BGM + SE 3種のタイミングをコードで合わせ、Motion Graphicsを追加して13秒の動画が完成。レンダリング → このサイトに埋め込み。",
                note: null,
              },
            ].map((step, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1rem 1fr",
                gap: "0 1.25rem",
                marginBottom: i < 4 ? "1.75rem" : 0,
                alignItems: "start",
              }}>
                {/* Dot */}
                <div style={{
                  width: "0.9rem",
                  height: "0.9rem",
                  borderRadius: "50%",
                  background: step.note ? "rgba(255,100,80,0.6)" : "var(--bg)",
                  border: `1px solid ${step.note ? "rgba(255,100,80,0.6)" : "var(--accent)"}`,
                  marginTop: "0.2rem",
                  flexShrink: 0,
                  boxShadow: step.note ? "0 0 8px rgba(255,100,80,0.3)" : "0 0 6px rgba(0,212,255,0.2)",
                }} />
                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.3rem" }}>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-strong)" }}>
                      {step.label}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: step.note ? "rgba(255,100,80,0.8)" : "var(--text-muted)",
                      letterSpacing: "0.06em",
                    }}>
                      {step.time}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.7, marginBottom: step.note ? "0.5rem" : 0 }}>
                    {step.desc}
                  </p>
                  {step.note && (
                    <p style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,140,120,0.85)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.03em",
                      lineHeight: 1.6,
                    }}>
                      {step.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "2rem",
            height: 1,
            background: "var(--border)",
          }} />
        </Reveal>
      </div>

      {/* ── ARTICLE ── */}
      <main style={{ ...article, paddingTop: "4rem", paddingBottom: "6rem" }}>

        {/* ━━━━ f.0000 ━━━━ */}
        <section id="remotion" style={{ marginBottom: "5rem" }}>
          <Reveal>
            <FM frame="f.0000" label="Remotionとは" />

            <p style={p}>
              <strong>Remotion</strong> は「Make videos programmatically」をコンセプトにした、
              Reactベースのオープンソース動画生成フレームワークです。
              従来の動画編集ソフトでタイムラインを操作する代わりに、
              <strong>Reactコンポーネントとして動画を記述します。</strong>
            </p>

            <p style={p}>
              コアコンセプトは「動画は時間上の画像の数学的関数」。
              <C>useCurrentFrame()</C> でフレーム番号を取得し、
              そのフレームに応じた描画をするだけ。フレームが変わるとアニメーションになります。
            </p>

            <div className="pull-note">
              <strong>ローカルで動かすと何が起きるか：</strong>
              ブラウザ上に Remotion Studio が開き、タイムラインで任意のフレームにスクラブできます。
              ファイルを保存するたびホットリロードで即反映されるので、
              「数値を変えて → 確認する」のサイクルが非常に速い。
            </div>

            <div style={wideBreak}>
              <pre>{`import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

export default function MyAnimation() {
  const frame = useCurrentFrame(); // 現在フレーム（0始まり）

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
            </div>

            <p style={{ ...p, marginTop: "1.5rem" }}>
              Git で管理できる、データから動的に動画を生成できる、
              Webアプリへの埋め込みにも対応する（<C>@remotion/player</C>）——
              といった特徴があります。
              クラウドレンダリングは AWS Lambda と GCP Cloud Run に対応。
            </p>
          </Reveal>
        </section>

        {/* ━━━━ f.0062 ━━━━ */}
        <section id="made" style={{ marginBottom: "5rem" }}>
          <Reveal>
            <FM frame="f.0062" label="今回作ったもの" />

            <p style={p}>
              Discordで定期開催しているコーナー「おちれのの目指せClaudeマスター！」の
              オープニング動画。キャラクターは左がおちえく（クマ）、右がれのあで、
              画像はGeminiで生成しました。
            </p>

            <div style={{ margin: "1.5rem 0" }}>
              <div className="spec-row">
                <span className="spec-key">duration</span>
                <span className="spec-val">13 秒 / 390 フレーム</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">resolution</span>
                <span className="spec-val">1920 × 1080 / 30 fps</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">layers</span>
                <span className="spec-val">20 以上の合成レイヤー</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">audio</span>
                <span className="spec-val">BGM + SE × 3（手動で用意）</span>
              </div>
            </div>

            <p style={{ ...p, fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              含まれるモーショングラフィクス要素
            </p>
            <div className="effect-list">
              {[
                "オープニングフラッシュ",
                "パーティクルバースト × 40",
                "拡張リング × 4連",
                "スキャンワイプ（上から表示）",
                "キャラクター個別スウェイ",
                "ホログラムリング（回転HUD）",
                "ライトレイ（放射光線）",
                "ネームプレート × 2",
                "エネルギービーム",
                "CHARGEゲージ",
                "タイプライターサブタイトル",
                "グリッチプレショック",
                "タイトルインパクト（衝撃波4連）",
                "パーティクル爆発 × 42",
                "アンビエントパーティクル × 20",
                "スキャンライン（CRT感）",
              ].map((e) => (
                <span key={e} className="effect-item">{e}</span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ━━━━ f.0137 ━━━━ */}
        <section id="setup" style={{ marginBottom: "5rem" }}>
          <Reveal>
            <FM frame="f.0137" label="セットアップ・使い方" />

            <p style={p}>ゼロから動画が動くまでの手順です。</p>

            <div style={{ margin: "1.5rem 0" }}>
              {[
                {
                  n: "01",
                  title: "Node.js のインストール",
                  desc: "v18 以上が必要。node --version で確認。",
                },
                {
                  n: "02",
                  title: "プロジェクト作成",
                  desc: "npm create video@latest で対話形式のセットアップが起動する。",
                },
                {
                  n: "03",
                  title: "npm install",
                  desc: "依存パッケージをインストール。",
                },
                {
                  n: "04",
                  title: "開発サーバー起動",
                  desc: "npm run dev → localhost:3000 で Remotion Studio が開く。",
                },
                {
                  n: "05",
                  title: "コンポーネントを書く",
                  desc: "useCurrentFrame() と interpolate() でアニメーションを記述する。",
                },
                {
                  n: "06",
                  title: "Root.tsx に登録",
                  desc: "<Composition> タグにコンポーネント・解像度・フレーム数を指定。",
                },
                {
                  n: "07",
                  title: "レンダリング",
                  desc: "npx remotion render Opening out/opening.mp4 でMP4を出力。",
                },
              ].map((s) => (
                <div key={s.n} className="step">
                  <span className="step-num">{s.n}</span>
                  <div className="step-body">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="warn-note">
              <strong>Math.random() は使えない。</strong>
              Remotion は各フレームを独立してレンダリングするため、
              同じフレームを何度レンダリングしても同じ結果でなければならない（決定論的レンダリング）。
              代わりに sin ベースの擬似乱数を使う。
            </div>

            <div style={wideBreak}>
              <pre>{`// 値のマッピング
const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});

// 物理ベースのスプリング
const p = spring({ frame, fps: 30,
  config: { mass: 1, damping: 14, stiffness: 150 },
  durationInFrames: 40,
});

// タイミング制御
<Sequence from={60} durationInFrames={90}>
  <MyComponent />
</Sequence>

// 決定論的な擬似乱数
const det = (i, seed = 0) =>
  Math.abs(Math.sin(i * 127.1 + seed * 311.7) * 43758.5453) % 1;`}</pre>
            </div>
          </Reveal>
        </section>

        {/* ━━━━ f.0210 ━━━━ */}
        <section id="workflow" style={{ marginBottom: "5rem" }}>
          <Reveal>
            <FM frame="f.0210" label="実際の作業環境" />

            <p style={p}>
              左が Remotion Studio（localhost）のプレビュー、
              右が VS Code + Claude Code のターミナル。
              この2画面を並べて作業しました。
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ margin: "1.5rem 0" }}>
              <Image
                src="/workflow-screenshot.png"
                alt="左：Remotion Studio、右：VS Code + Claude Code"
                width={1280}
                height={800}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 6,
                  border: "1px solid var(--border-mid)",
                }}
                priority
              />
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: "0.6rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.03em",
                }}
              >
                左：Remotion Studio で f.0199 付近をスクラブ中 / 右：Claude Code でコードを修正中
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p style={p}>
              ワークフローはシンプルで、Claude に指示を出してコードを生成してもらい、
              ファイルを保存するとブラウザ側が自動リロードして即確認できます。
              「タイムラインのこのフレームで音が鳴ってるな」という確認は
              Remotion Studio のスクラブで行い、数値を調整して保存する、を繰り返します。
            </p>

            <div className="pull-note">
              ブラウザ（Remotion Studio）は読み取り専用のプレビューです。
              フレーム番号の入力欄で任意のフレームに飛べますが、コードは変わりません。
              変更はすべて IDE 側から行います。
            </div>
          </Reveal>
        </section>

        {/* ━━━━ f.0258 ━━━━ */}
        <section id="images" style={{ marginBottom: "5rem" }}>
          <Reveal>
            <FM frame="f.0258" label="画像について" />

            <p style={p}>
              今回のキャラクター画像は <strong>Gemini で生成したもの</strong>を使いました。
              最初「自分で用意しないといけないのかな」と思っていましたが、
              Remotion 自体に画像生成機能はなく、
              どんな画像でも素材として読み込める構造になっています。
            </p>

            <p style={p}>
              基本は <C>public/</C> フォルダに画像を置いて
              <C>staticFile('characters.png')</C> で読み込む、というだけです。
              DALL-E や Stable Diffusion の API を使う場合は、
              レスポンスのURLをそのまま <C>{"<Img src={url}>"}</C> に渡せます。
              公式に画像生成パッケージはありませんが、任意のAPIとの組み合わせは自由です。
            </p>

            <div className="pull-note">
              <strong>データ駆動型の活用例：</strong>
              ユーザーデータに応じて異なる画像を生成して動画を量産する（Spotify Wrapped 方式）
              のような使い方もできます。JSONやCSVから差し込んで動画を作るユースケースが Remotion の強みの一つです。
            </div>
          </Reveal>
        </section>

        {/* ━━━━ f.0270 ━━━━ */}
        <section id="audio" style={{ marginBottom: "5rem" }}>
          <Reveal>
            <FM frame="f.0270" label="音声・タイミングについて" />

            <p style={p}>
              今回は BGM と SE 3種を自分でダウンロードして <C>public/</C> に配置しました。
              「BGMの盛り上がりはどのフレームか？」を Remotion Studio で確認して、
              <C>from={}</C> の値を調整する、の繰り返しでタイミングを合わせました。
            </p>

            <div style={wideBreak}>
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

// 効果音（f.0270 で鳴らす）
<Sequence from={270} durationInFrames={90}>
  <Audio src={staticFile('se_impact.mp3')} volume={1.0} />
</Sequence>`}</pre>
            </div>

            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                margin: "2rem 0 0.75rem",
                color: "var(--text-strong)",
              }}
            >
              TTS（自動読み上げ）について調べた結果
            </h3>

            <p style={p}>
              参考にした記事で読み上げ動画が紹介されていて気になったので調べました。
              <C>@remotion/google-tts</C> という npm パッケージは存在せず、
              正式にはテンプレートとして提供されています。
              実用的な流れは「TTS API（Google / ElevenLabs等）でMP3を生成
              → <C>{"<Audio>"}</C> で読み込む」です。
            </p>

            <p style={p}>
              字幕タイミングは <strong>@remotion/captions</strong>（公式）で自動化できます。
              <C>@remotion/whisper-web</C> を使うと音声ファイルから文字起こしとタイミングを
              まとめて取得できるため、音声と字幕が完全同期した動画を作れます。
              ただし複数の API キー設定が必要なので、今回は手動で済ませました。
            </p>

            <div className="pull-note">
              <a
                href="https://note.com/tomiyasu16/n/n4bbe81ee9afa"
                target="_blank"
                rel="noopener noreferrer"
              >
                こちらの記事
              </a>
              でも同じ手法で読み上げ動画が作られています。
              Claude Code に日本語で指示するだけで動きを追加できるという体験が紹介されており、
              今回のセッションとほぼ同じ感覚です。
            </div>
          </Reveal>
        </section>

        {/* ━━━━ f.0283 ━━━━ */}
        <section id="claude" style={{ marginBottom: "5rem" }}>
          <Reveal>
            <FM frame="f.0283" label="Claude × Remotion の使用感" />

            <p style={p}>
              今回はコードをほぼ自分で書いていません。
              Claude Code のセッション内で「こんな動画を作りたい」と日本語で話しかけ、
              コードの生成・修正・デバッグをすべて任せました。
              実際のやりとりの抜粋です。
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="chat-wrap" style={{ margin: "2rem 0" }}>
              {[
                {
                  role: "user" as const,
                  text: "おちれのの目指せclaudeマスター！というコーナーのオープニングを作りたいです。この画像の左のクマがおちえくです。右の黒人がれのあです。",
                },
                {
                  role: "claude" as const,
                  text: "10秒のサイバーパンク風オープニングを作ります。ParticleBurst, ExpansionRings, ScanWipe, GlitchText, TypewriterText, EnergyBeam を追加します。",
                },
                {
                  role: "user" as const,
                  text: "タイトル今10秒位の時にBGMとか効果音の盛り上がりが来てて、その時にどんとタイトルを出して欲しいんですけど、今だと7秒位で出ちゃっててBGMが遅れてる状態なので変えて欲しいです。あと後ろのキャラクターをそれぞれ2人分何か動きを追加してもらえるとより面白いです。揺れるような感じがいいです。",
                },
                {
                  role: "claude" as const,
                  text: "タイトルを f.0283（9.4秒）に移動します。キャラクターは clip-path で左右に分割して、それぞれ独立した sin 波のスウェイを追加します。おちえくは呼吸のような揺れ、れのあはクールな別リズムで。",
                },
                {
                  role: "user" as const,
                  text: "もっとMotion Graphicsを乱用して欲しいです",
                },
                {
                  role: "claude" as const,
                  text: "ホログラムリング（回転六角形HUD）、ライトレイ、CHARGEゲージ、グリッチプレショック、タイトルインパクト（衝撃波4連 + パーティクル42発）を追加します。",
                },
              ].map((msg, i) => (
                <div
                  key={i}
                  className={`chat-msg chat-msg--${msg.role}`}
                >
                  <div
                    className="chat-label"
                    style={{ color: msg.role === "user" ? "var(--accent)" : "#9B4FFF" }}
                  >
                    {msg.role === "user" ? "自分" : "claude"}
                  </div>
                  {msg.text}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p style={p}>
              「揺れるような感じ」という曖昧な日本語で、
              2人が異なる速度・位相でスウェイするコードが一発で出てきます。
              「Motion Graphicsを乱用して」で5つのコンポーネントが追加されました。
              タイミングの計算（「10秒位で出て欲しい」→ 10×30fps=300f）も Claude 任せです。
            </p>

            <p style={p}>
              技術的な壁を Claude が埋めてくれる感覚が強くて、
              Remotion の API を全部覚えてから始めようとしたら何日もかかっていたと思います。
              TypeScript エラーや非推奨警告も指摘すると自動修正してくれます。
            </p>
          </Reveal>
        </section>

        {/* ━━━━ f.0390 ━━━━ */}
        <section id="review" style={{ marginBottom: "3rem" }}>
          <Reveal>
            <FM frame="f.0390" label="使ってみた感想" />

            {[
              {
                title: "localhost で確認しながら触れるのが便利",
                body: "Remotion Studio のタイムラインでフレームをスクラブして「この音はここで鳴ってるな」と確認しながら、IDEでコードを直して保存 → 即反映というサイクルが直感的でした。音のタイミングを数値で合わせるのは最初難しかったけど、慣れると「○秒 × 30fps = ○フレーム」で計算できるようになります。",
              },
              {
                title: "画像は自分で用意する（でもAI生成でOK）",
                body: "最初「画像どうするんだろう」と思ったけど、Geminiで生成した画像を public/ フォルダに置くだけでした。Remotionは画像を「作る」ツールではなく「組み込む」ツールなので、素材は何でもOKです。",
              },
              {
                title: "音の自動読み上げはまだハードル高め",
                body: "@remotion/captions や @remotion/whisper-web という公式パッケージがあって字幕タイミングを自動化できますが、複数のAPIキー設定が必要で今回は手動でMP3を用意しました。読み上げ動画を作るなら「TTS APIでMP3生成 → Remotionで使う」という流れになります。",
              },
              {
                title: "テロップを自由に変えられるのは良い",
                body: "フォント・サイズ・アニメーション・タイミングをコードで完全に制御できます。タイプライター風、グリッチエフェクト付きなど、アイデア次第で何でも作れます。既存の動画編集ソフトでは難しいアニメーションも、コードなら自由自在です。",
              },
              {
                title: "Claude 経由が圧倒的に楽だった",
                body: "「揺れる感じにして」「BGMの盛り上がりに合わせて」「乱用して」という日本語の指示だけで、複雑なアニメーションコードが出てきます。AIが『やりたいこと』と『技術的な作業』の間を埋めてくれる感覚が、このセッションで一番強く感じたことです。",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                style={{ marginBottom: "2rem" }}
              >
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-strong)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ ...p, marginBottom: 0, fontSize: "0.9rem" }}>
                  {item.body}
                </p>
                {i < 4 && (
                  <div
                    style={{
                      height: 1,
                      background: "var(--border)",
                      marginTop: "1.75rem",
                    }}
                  />
                )}
              </div>
            ))}
          </Reveal>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            letterSpacing: "0.06em",
          }}
        >
          f.log — Remotion × Claude Experience Report ·{" "}
          <a
            href="https://github.com/KeitoKuramochi/remotion"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-muted)", textDecoration: "none" }}
          >
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}

import KifuPlayer from "./components/kifu-player";

export default function App() {
  return (
    <>
      <h1 className="header">将棋盤コンポーネント実験室</h1>
      <section className="content">
        <KifuPlayer sfen='4k4/9/4G4/9/9/9/9/9/9 b Gg2 1' />
      </section>
    </>
  )
}

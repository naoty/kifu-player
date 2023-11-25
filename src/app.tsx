import KifuPlayer from "./components/kifu-player";

export default function App() {
  return (
    <>
      <h1>将棋盤コンポーネント実験室</h1>
      <section>
        <h2>平手初期局面</h2>
        <p>lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1</p>
        <KifuPlayer sfen='lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1' />
      </section>
      <section>
        <h2>詰将棋</h2>
        <p>4k4/9/4G4/9/9/9/9/9/9 b Gg2 1</p>
        <KifuPlayer sfen='4k4/9/4G4/9/9/9/9/9/9 b Gg2 1' />
      </section>
    </>
  )
}

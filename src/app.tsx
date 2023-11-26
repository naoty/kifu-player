import KifuPlayer from "./components/kifu-player";

export default function App() {
  return (
    <>
      <h1>将棋盤コンポーネント実験室</h1>
      <section>
        <h2>SFEN形式</h2>
        <p>position startpos moves 5g5f 7a6b 2h5h 5c5d 7g7f 6a5b 8h7g 5a4b 7i6h 4b3b 5i4h 3a4b 4h3h 4b5c 6h5g 5c6d 5g6f 6b5c 3h2h 7c7d 3i3h 9c9d 1g1f 1c1d 5f5e 5d5e 6f5e 6d6e 6i7h P*5d 5e4f 6e7f 7g8h 7d7e P*5e 7f6e 5e5d 6e5d 4f5e 5d6e 8i7g P*5g 5h5g 2b1c 5g5i 6e7f 5i5f 8a9c P*5d 5c4b 6g6f 9c8e 7g8e 7f8e N*6e N*6a 5d5c+ 6a5c 6e7c+ 8b9b 5e5d 7e7f 7c6c 5b6c 5d6c+ P*5d 5f5d P*5b 5d5e 8e7d 6c7c N*6c 5e5d 6c7e 7c7d 7e8g+ 7h8g 1c6h+ 5d6d 6h7h 6d6a+ 4a5a 6a7a P*6a N*5d 7h8g 5d4b+ 3b4b S*2b G*3b 2b2a 7f7g+ N*2d 2c2d S*2c 5c4e 7d6c 4c4d 2a3b 8g3b 2c3b+ 4b3b 8h7g S*4c 4g4f 4e5g+ 4f4e N*4f 4e4d 4c4d G*5d P*4c 7g8f 4f3h+ 4i3h N*4f 5d4d 4f3h+ 2h3h S*4g 3h2h S*3i 2h1g 4c4d N*3e 3i2h 1g2h 4g3h+ 2h3h 5b5c S*2c 3b4a 3e4c+ G*3a 8f5c+ G*4b S*3b 4b3b 4c3b 3a3b 2c3b+ 4a3b B*4c 3b2b S*2c 2b2c N*3e 2c1b G*2c mate</p>
        <KifuPlayer sfen='position startpos moves 5g5f 7a6b 2h5h 5c5d 7g7f 6a5b 8h7g 5a4b 7i6h 4b3b 5i4h 3a4b 4h3h 4b5c 6h5g 5c6d 5g6f 6b5c 3h2h 7c7d 3i3h 9c9d 1g1f 1c1d 5f5e 5d5e 6f5e 6d6e 6i7h P*5d 5e4f 6e7f 7g8h 7d7e P*5e 7f6e 5e5d 6e5d 4f5e 5d6e 8i7g P*5g 5h5g 2b1c 5g5i 6e7f 5i5f 8a9c P*5d 5c4b 6g6f 9c8e 7g8e 7f8e N*6e N*6a 5d5c+ 6a5c 6e7c+ 8b9b 5e5d 7e7f 7c6c 5b6c 5d6c+ P*5d 5f5d P*5b 5d5e 8e7d 6c7c N*6c 5e5d 6c7e 7c7d 7e8g+ 7h8g 1c6h+ 5d6d 6h7h 6d6a+ 4a5a 6a7a P*6a N*5d 7h8g 5d4b+ 3b4b S*2b G*3b 2b2a 7f7g+ N*2d 2c2d S*2c 5c4e 7d6c 4c4d 2a3b 8g3b 2c3b+ 4b3b 8h7g S*4c 4g4f 4e5g+ 4f4e N*4f 4e4d 4c4d G*5d P*4c 7g8f 4f3h+ 4i3h N*4f 5d4d 4f3h+ 2h3h S*4g 3h2h S*3i 2h1g 4c4d N*3e 3i2h 1g2h 4g3h+ 2h3h 5b5c S*2c 3b4a 3e4c+ G*3a 8f5c+ G*4b S*3b 4b3b 4c3b 3a3b 2c3b+ 4a3b B*4c 3b2b S*2c 2b2c N*3e 2c1b G*2c mate' />
      </section>
    </>
  )
}

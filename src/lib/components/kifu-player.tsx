import SFENPlayer from "./sfen-player"

type Props = {
  sfen: string,
  className?: string,
}

export default function KifuPlayer({ sfen, className }: Props) {
  return <SFENPlayer sfen={sfen} className={className} />
}

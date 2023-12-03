import ErrorBoundary from "./error-boundary"
import SFENPlayer from "./sfen-player"

type Props = {
  sfen: string,
  className?: string,
}

export default function KifuPlayer({ sfen, className }: Props) {
  return (
    <ErrorBoundary fallback={<h1>error</h1>}>
      <SFENPlayer sfen={sfen} className={className} />
    </ErrorBoundary>
  )
}

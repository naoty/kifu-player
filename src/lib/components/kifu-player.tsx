import EmptyPlayer from "./empty-player"
import ErrorBoundary from "./error-boundary"
import SFENPlayer from "./sfen-player"

type Props = {
  sfen: string,
  className?: string,
}

export default function KifuPlayer({ sfen, className }: Props) {
  return (
    <ErrorBoundary fallback={<EmptyPlayer />}>
      <SFENPlayer sfen={sfen} className={className} />
    </ErrorBoundary>
  )
}

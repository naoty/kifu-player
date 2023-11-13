import classNames from './board.module.css';
import Square from './square';
import RowNumber from './row-number';
import ColumnNumber from './column-number';
import Piece from './piece';
import { PieceOwner } from './piece-owner';
import { PieceType } from './piece-type';

export default function Board() {
  return (
    <table className={`${classNames.board}`}>
      <tbody>
        <tr>
          <ColumnNumber value='9' />
          <ColumnNumber value='8' />
          <ColumnNumber value='7' />
          <ColumnNumber value='6' />
          <ColumnNumber value='5' />
          <ColumnNumber value='4' />
          <ColumnNumber value='3' />
          <ColumnNumber value='2' />
          <ColumnNumber value='1' />
        </tr>
        <tr>
          <Square>
            <Piece type={PieceType.Lance} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Knight} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.SilverGeneral} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.GoldGeneral} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.AnotherKing} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.GoldGeneral} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.SilverGeneral} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Knight} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Lance} owner={PieceOwner.White} />
          </Square>
          <RowNumber value='一' />
        </tr>
        <tr>
          <Square></Square>
          <Square>
            <Piece type={PieceType.Rook} owner={PieceOwner.White} />
          </Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square>
            <Piece type={PieceType.Bishop} owner={PieceOwner.White} />
          </Square>
          <Square></Square>
          <RowNumber value='二' />
        </tr>
        <tr>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </Square>
          <RowNumber value='三' />
        </tr>
        <tr>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <RowNumber value='四' />
        </tr>
        <tr>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <RowNumber value='五' />
        </tr>
        <tr>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <RowNumber value='六' />
        </tr>
        <tr>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </Square>
          <RowNumber value='七' />
        </tr>
        <tr>
          <Square></Square>
          <Square>
            <Piece type={PieceType.Rook} owner={PieceOwner.Black} />
          </Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square>
            <Piece type={PieceType.Bishop} owner={PieceOwner.Black} />
          </Square>
          <Square></Square>
          <RowNumber value='八' />
        </tr>
        <tr>
        <Square>
            <Piece type={PieceType.Lance} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Knight} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.SilverGeneral} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.GoldGeneral} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.King} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.GoldGeneral} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.SilverGeneral} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Knight} owner={PieceOwner.Black} />
          </Square>
          <Square>
            <Piece type={PieceType.Lance} owner={PieceOwner.Black} />
          </Square>
          <RowNumber value='九' />
        </tr>
      </tbody>
    </table>
  )
}

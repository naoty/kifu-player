import classNames from './board.module.css';
import Piece from './piece';
import { PieceOwner } from './piece-owner';
import { PieceType } from './piece-type';

export default function Board() {
  return (
    <table className={`${classNames.board}`}>
      <tbody>
        <tr>
          <td>9</td>
          <td>8</td>
          <td>7</td>
          <td>6</td>
          <td>5</td>
          <td>4</td>
          <td>3</td>
          <td>2</td>
          <td>1</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Lance} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Knight} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.SilverGeneral} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.GoldGeneral} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.AnotherKing} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.GoldGeneral} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.SilverGeneral} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Knight} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Lance} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.row_number}`}>一</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Rook} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Bishop} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.row_number}`}>二</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.White} />
          </td>
          <td className={`${classNames.row_number}`}>三</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.row_number}`}>四</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.row_number}`}>五</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.row_number}`}>六</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Pawn} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.row_number}`}>七</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Rook} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Bishop} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.row_number}`}>八</td>
        </tr>
        <tr>
        <td className={`${classNames.square}`}>
            <Piece type={PieceType.Lance} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Knight} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.SilverGeneral} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.GoldGeneral} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.King} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.GoldGeneral} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.SilverGeneral} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Knight} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.square}`}>
            <Piece type={PieceType.Lance} owner={PieceOwner.Black} />
          </td>
          <td className={`${classNames.row_number}`}>九</td>
        </tr>
      </tbody>
    </table>
  )
}

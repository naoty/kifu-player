import classNames from './board.module.css';

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
            <span className={`${classNames.piece} ${classNames.piece__white}`}>香</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>桂</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>銀</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>金</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>玉</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>金</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>銀</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>桂</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>香</span>
          </td>
          <td className={`${classNames.row_number}`}>一</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>飛</span>
          </td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>角</span>
          </td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.row_number}`}>二</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece} ${classNames.piece__white}`}>歩</span>
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
            <span className={`${classNames.piece}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>歩</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>歩</span>
          </td>
          <td className={`${classNames.row_number}`}>七</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>飛</span>
          </td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>角</span>
          </td>
          <td className={`${classNames.square}`}></td>
          <td className={`${classNames.row_number}`}>八</td>
        </tr>
        <tr>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>香</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>桂</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>銀</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>金</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>王</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>金</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>銀</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>桂</span>
          </td>
          <td className={`${classNames.square}`}>
            <span className={`${classNames.piece}`}>香</span>
          </td>
          <td className={`${classNames.row_number}`}>九</td>
        </tr>
      </tbody>
    </table>
  )
}

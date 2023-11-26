import classNames from './row-number.module.css';

export default function RowNumber({ value }: { value: string }) {
  return <td className={`${classNames.row_number}`}>{value}</td>
}

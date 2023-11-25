import classNames from './column-number.module.css';

export default function ColumnNumber({ value }: { value: string }) {
  return <td className={`${classNames.column_number}`}>{value}</td>
}

import clsx from 'clsx';
import classNames from './row-number.module.css';

export default function RowNumber({ value }: { value: string }) {
  return (
    <td className={clsx('row-number', classNames.row_number)}>
      {value}
    </td>
  )
}

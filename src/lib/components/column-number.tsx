import clsx from 'clsx';
import classNames from './column-number.module.css';

export default function ColumnNumber({ value }: { value: string }) {
  return (
    <span className={clsx('column-number', classNames.column_number)}>
      {value}
    </span>
  )
}

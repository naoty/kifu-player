import clsx from 'clsx';
import classNames from './column-number.module.css';

export default function ColumnNumber({ value }: { value: string }) {
  return (
    <div className={clsx('column-number', classNames.column_number)}>
      <span>{value}</span>
    </div>
  )
}

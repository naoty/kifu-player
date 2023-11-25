import clsx from "clsx";
import classNames from "./navigation-button.module.css";

type Props = {
  className?: string,
}

export default function NavigationButton({ className }: Props) {
  return (
    <div className={clsx(className, classNames.container)}>
      <button className={`${classNames.button} ${classNames.back}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" className={`${classNames.icon}`}>
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
        </svg>
      </button>
      <button className={`${classNames.button}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960" className={`${classNames.icon}`}>
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
        </svg>
      </button>
    </div>
  )
}

import { CalendarDate, isSameDay } from '@internationalized/date'
import { useRef } from 'react'
import { useCalendarCell } from 'react-aria'
import { CalendarState, RangeCalendarState } from 'react-stately'
import styles from './CalendarCell.module.css'

type Props = {
  state: CalendarState | RangeCalendarState
  date: CalendarDate
}

export function CalendarCell({ state, date }: Props) {
  const ref = useRef(null)
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref)

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        data-is-selected={isSelected}
        data-is-unavailable={isUnavailable}
        data-is-disabled={isDisabled}
        data-is-today={isSameDay(date, state.focusedDate)}
        title={formattedDate}
        className={styles.button}
      >
        {date.day}
      </div>
    </td>
  )
}

import { AriaCalendarProps, useCalendar, useLocale } from 'react-aria'
import { CalendarStateOptions, useCalendarState } from 'react-stately'
import { createCalendar, DateValue } from '@internationalized/date'
import { useRef } from 'react'
import { CalendarGrid } from './CalendarGrid'
import { CalendarButton } from './CalendarButton'

type Props = CalendarStateOptions | AriaCalendarProps<DateValue>

export function Calendar(props: Props) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })
  const ref = useRef(null)
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state)

  return (
    <div {...calendarProps} ref={ref} className="w-full max-w-[1280px]">
      <div hidden className="mb-8">
        <h2 className="text-7xl" title={title}>
          <strong>{state.value.year}</strong>년{' '}
          <strong>{state.value.month}</strong>월
        </h2>
        <div hidden>
          <CalendarButton {...prevButtonProps}>&lt;</CalendarButton>
          <CalendarButton {...nextButtonProps}>&gt;</CalendarButton>
        </div>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}

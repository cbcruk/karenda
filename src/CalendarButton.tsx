import { useRef } from 'react'
import { AriaButtonProps, mergeProps, useButton } from 'react-aria'
import { useFocusRing } from 'react-aria'

type Props = AriaButtonProps<'button'>

export function CalendarButton(props: Props) {
  const ref = useRef(null)
  const { buttonProps } = useButton(props, ref)
  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      data-is-disabled={props.isDisabled}
      data-is-focus-visible={isFocusVisible}
    >
      {props.children}
    </button>
  )
}

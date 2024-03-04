import clsx from 'clsx'

type Props = {
  onClick: () => void
  label: string
  className?: string
}

export const StyledButton = ({ label, onClick, className }: Props) => {
  return (
    <button
      className={clsx(
        'px-[44.5px] py-[14px] bg-primary text-[#fff] text-base font-bold min-w-[180px]',
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

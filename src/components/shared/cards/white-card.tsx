import classNames from 'classnames'

interface Props {
  children?: React.ReactNode
  centered?: boolean
  className?: string
}

export function WhiteCard({ children, centered, className }: Props) {
  return (
    <div
      className={
        classNames(
          'bg-white border space-y-5 rounded-[20px] p-10 shadow-3xl shadow-shadow-500 w-full',
          className,
          {
            'text-center': centered,
            'flex flex-col items-center': centered
          }
        )
      }
    >
      {children}
    </div>
  )
}

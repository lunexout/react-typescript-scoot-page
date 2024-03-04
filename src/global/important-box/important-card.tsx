export type CardProps = {
  url: string
  numeration: string
  title: string
  description: string
}

export const ImportantCard = ({
  url,
  numeration,
  title,
  description
}: CardProps) => {
  return (
    <div className='flex flex-col items-center lg:items-start gap-[32px] '>
      <div className='p-[15px] relative w-[350px]'>
        <img src={url} className='w-[350px] h-[350px] object-contain' />
        <div className='w-[96px] h-[96px] rounded-full bg-primary flex justify-center items-center absolute bottom-0 left-1/2 transform -translate-x-1/2'>
          <p className='text-xl text-darkNavy'>{numeration}</p>
        </div>
      </div>
      <div className='flex flex-col gap-[27px] items-center justify-center w-full max-w-[457px] lg:max-w-[350px]'>
        <p className='text-xl text-darkNavy'>{title}</p>
        <p className='text-base text-dimGray text-center'>{description}</p>
      </div>
    </div>
  )
}

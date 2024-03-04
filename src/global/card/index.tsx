import leftLongArrow from '@/assets/arrows/left-long-arrow.png'
import rightLongArrow from '@/assets/arrows/right-long-arrow.png'
import halfCircle from '@/assets/cards/half-circle.png'
import { Container } from '@/global'
import clsx from 'clsx'
import { ReactNode } from 'react'

type Position = 'left' | 'right'

type Props = {
  title: string
  description: string
  url: string
  position?: Position
  button?: ReactNode
}

export const Card = ({
  title,
  description,
  url,
  button,
  position = 'right'
}: Props) => {
  return (
    <Container
      className={clsx(
        'flex justify-center gap-[56px] lg:gap-[0px] lg:justify-between items-center flex-wrap-reverse lg:flex-nowrap',
        {
          'flex-row-reverse': position === 'left',
          'flex-row': position === 'right'
        }
      )}
    >
      <div className='flex flex-col gap-10 items-center lg:items-start'>
        <div className='flex flex-col gap-6 max-w-[445px]'>
          <p className='text-darkNavy font-bold text-4xl leading-[48px] text-center lg:text-start'>
            {title}
          </p>
          <p className='text-dimGray text-base leading-[25px] text-center lg:text-start'>
            {description}
          </p>
        </div>
        {button}
      </div>
      {position === 'left' ? (
        <>
          <img src={rightLongArrow} className='absolute left-0 top-[100px]' />
          <img
            src={halfCircle}
            className='absolute left-0 top-[0px] rotate-180 -z-10'
          />
        </>
      ) : (
        <>
          <img src={leftLongArrow} className='absolute right-0 top-[300px]' />
          <img src={halfCircle} className='absolute right-0 top-[0px] -z-10' />
        </>
      )}
      <img src={url} className='h-[445px] rounded-full' />
    </Container>
  )
}

import { CardProps, ImportantCard } from './important-card'

type Props = {
  title: string
  boxes: Array<CardProps>
}

export const ImportantBox = ({ title, boxes }: Props) => {
  return (
    <div className='flex flex-col gap-[48px]'>
      <p className='text-4xl text-center text-darkNavy font-bold leading-[48px] -tracking-[2.14px]'>
        {title}
      </p>
      <div className='flex gap-[30px] flex-wrap justify-center lg:justify-start lg:flex-nowrap'>
        {boxes.map(card => {
          return (
            <ImportantCard
              key={card.title}
              description={card.description}
              numeration={card.numeration}
              title={card.title}
              url={card.url}
            />
          )
        })}
      </div>
    </div>
  )
}

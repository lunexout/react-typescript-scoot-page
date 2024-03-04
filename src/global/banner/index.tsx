import halfBackground from '@/assets/backgrounds/half-background.png'
import { Container } from '@/global'

type Props = {
  title: string
}

export const Banner = ({ title }: Props) => {
  return (
    <>
      <img
        src={halfBackground}
        className='w-full top-[96px] h-[200px] absolute -z-10 object-cover'
      />
      <Container>
        <p className='text-5xl text-[#fff] font-bold mt-[166px] max-w-[600px] leading-[56px] -tracking-[2.5px]'>
          {title}
        </p>
      </Container>
    </>
  )
}

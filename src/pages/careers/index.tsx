import cityPhoto from '@/assets/cards/city.png'
import {
  Banner,
  Card,
  Container,
  ImportantBox,
  Navigation,
  StyledButton
} from '@/global'
import { CardProps } from '@/global/important-box/important-card'

const boxes: Array<CardProps> = [
  {
    title: 'Our tech1',
    numeration: '01',
    description:
      'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
    url: cityPhoto
  },
  {
    title: 'Our integrity2',
    numeration: '02',
    description:
      'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
    url: cityPhoto
  },
  {
    title: 'Our community3',
    numeration: '03',
    description:
      'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
    url: cityPhoto
  }
]

const Careers = () => {
  return (
    <>
      <Navigation />
      <Banner title='Careers' />
      <div className='mt-[250px] relative'>
        <Card
          title='Care to join our mission?'
          description='We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!'
          url={cityPhoto}
          position='right'
          button={
            <StyledButton
              className='w-[200px]'
              label='Say hello'
              onClick={() => {}}
            />
          }
        />
      </div>
      <Container>
        <ImportantBox title='Why join us?' boxes={boxes} />
      </Container>
    </>
  )
}

export default Careers

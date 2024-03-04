import cityPhoto from '@/assets/cards/city.png'
import { Banner, Card, Container, ImportantBox, Navigation } from '@/global'
import { CardProps } from '@/global/important-box/important-card'

const boxes: Array<CardProps> = [
  {
    title: 'Our tech',
    numeration: '01',
    description:
      'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
    url: cityPhoto
  },
  {
    title: 'Our integrity',
    numeration: '02',
    description:
      'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
    url: cityPhoto
  },
  {
    title: 'Our community',
    numeration: '03',
    description:
      'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
    url: cityPhoto
  }
]

const About = () => {
  return (
    <>
      <Navigation />
      <Banner title='About' />
      <div className='mt-[250px] relative'>
        <Card
          title='Mobility for the digital era'
          description='Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.'
          url={cityPhoto}
          position='right'
        />
      </div>
      <div className='mt-[160px] relative'>
        <Card
          title='Better urban living'
          description='We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.'
          url={cityPhoto}
          position='left'
        />
      </div>
      <Container>
        <ImportantBox title='Our values' boxes={boxes} />
      </Container>
    </>
  )
}

export default About

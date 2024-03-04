import arrowLongRight from '@/assets/arrows/right-long-arrow.png'
import circles from '@/assets/backgrounds/circles.png'
import homeBackground from '@/assets/backgrounds/home-background.png'
import cityPhoto from '@/assets/cards/city.png'
import userPhoto from '@/assets/cards/user.png'
import { Card, Container, Navigation, StyledButton } from '@/global'

const Home = () => {
  return (
    <>
      <Navigation />
      <img
        src={homeBackground}
        className='w-full top-[96px] h-[650px] absolute -z-10'
      />
      <Container>
        <div className='w-[300px] h-[16px] bg-primary absolute top-[394px] left-[0px]' />
        <img
          src={arrowLongRight}
          className='absolute right-[288px] top-[394px]'
        />
        <img src={circles} className='absolute right-[0px] top-[470px]' />
        <p className='text-5xl text-[#fff] font-bold mt-[153px] max-w-[600px] leading-[56px] -tracking-[2.5px]'>
          Scooter sharing made simple
        </p>
        <div className='flex flex-col gap-10 max-w-[405px]'>
          <p className='text-base text-[#fff] mt-[40px] ml-[95px] leading-[25px]'>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <StyledButton
            className='ml-[95px]'
            label='Get Scootin'
            onClick={() => {}}
          />
        </div>
      </Container>
      <div className='mt-[250px] relative'>
        <Card
          title='Easy to use riding telemetry'
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          url={userPhoto}
          button={
            <StyledButton
              className='w-[200px]'
              label='Learn More'
              onClick={() => {}}
            />
          }
        />
      </div>
      <div className='mt-[160px] relative'>
        <Card
          title='Coming to a city near you'
          description='Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.'
          url={cityPhoto}
          position='left'
          button={
            <StyledButton
              className='w-[200px]'
              label='Learn More'
              onClick={() => {}}
            />
          }
        />
      </div>
      <div className='mt-[160px] relative'>
        <Card
          title='Zero hassle payments'
          description='Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.'
          url={userPhoto}
          button={
            <StyledButton
              className='w-[200px]'
              label='Learn More'
              onClick={() => {}}
            />
          }
        />
      </div>
    </>
  )
}

export default Home

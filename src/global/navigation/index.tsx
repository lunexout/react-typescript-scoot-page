import { Link } from 'react-router-dom'
import { StyledButton } from '..'

const navigation = [
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Location',
    path: '/location'
  },
  {
    label: 'Careers',
    path: '/careers'
  }
]

export const Navigation = () => {
  return (
    <nav className='bg-[#fff] fixed w-full z-20 top-0 start-0 h-[96px]'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mt-auto mx-auto p-4 flex-row-reverse lg:flex-row'>
        <div className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Link
            to='/'
            className='self-center text-3xl font-bold whitespace-nowrap dark:text-white text-darkNavy'
          >
            scoot
          </Link>
        </div>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <StyledButton
            className='hidden lg:block'
            label='Get scootin'
            onClick={() => {}}
          />
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='#FCB72B'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden lg:block w-full lg:flex lg:w-auto lg:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {navigation.map(home => {
              return (
                <li key={home.path}>
                  <Link
                    to={home.path}
                    className='block py-2 px-3 text-dimGray text-base font-bold bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                    aria-current='page'
                  >
                    {home.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

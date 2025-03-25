const Footer = () => {
  return (
    <footer className='w-full font-sans text-lg h-12 flex justify-center items-center text-black/32 no-text-shadow gap-3'>
      <span className='text-nowrap'>© Maeve Du</span>
      <a
        href='https://github.com/maeve-du/world-clock-2025'
        target='_blank'
        aria-label='GitHub 仓库'
        className='cursor-pointer w-6 aspect-square group transition-transform'>
        <img
          src='images/github-fill.svg'
          alt='GitHub'
          className='opacity-55 group-hover:opacity-100 transition-all hover:scale-105'
        />
      </a>
    </footer>
  )
}
export default Footer

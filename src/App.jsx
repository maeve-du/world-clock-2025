import ClockList from './components/ClockList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div
      id='app'
      className='w-dvw max-w-[1000px] min-h-dvh flex justify-center items-center flex-wrap'>
      <ClockList />
      <Footer />
    </div>
  )
}
export default App

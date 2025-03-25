import Clock from './Clock'
import { CITIES } from '../constants'

const ClockList = () => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {CITIES.map((city) => (
        <Clock key={city.name} city={city.name} timezone={city.timezone} />
      ))}
    </div>
  )
}
export default ClockList

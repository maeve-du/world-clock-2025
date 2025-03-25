import { memo } from 'react'

import { clsMerge } from '../../lib/utils.js'

import ClockHand from './ClockHand.jsx'
import { useClockTime } from '../../hooks/useClockTime.js'

const Clock = ({ city, timezone }) => {
  // 使用自定义Hook获取时间信息
  const { isDaytime, hourDegree, minuteDegree, secondDegree, formattedTime } =
    useClockTime(timezone)

  const textColor = isDaytime ? 'text-white' : 'text-black'
  const clockFace = isDaytime ? 'bg-white inset-shadow-black/5' : 'bg-white/15 inset-shadow-white/5'
  const clockCase = isDaytime ? 'bg-white' : 'bg-black'
  const background = isDaytime ? 'bg-black/5' : 'bg-white/10'

  return (
    <div
      className={clsMerge(
        'aspect-square flex px-12 py-5 m-3 flex-col items-center gap-y-3 rounded-3xl',
        background
      )}>
      <h2 className={clsMerge('text-2xl', textColor)}>{city}</h2>
      <div
        className={clsMerge(
          'shadow-lg p-4 shadow-black/25 rounded-full relative isolate',
          clockCase
        )}>
        <ClockHand hand={'hour'} isDaytime={isDaytime} degree={hourDegree} />
        <ClockHand hand={'minute'} isDaytime={isDaytime} degree={minuteDegree} />
        <ClockHand hand={'second'} isDaytime={isDaytime} degree={secondDegree} />
        <ClockHand isShaft={true} isDaytime={isDaytime} />
        <img
          src={isDaytime ? 'images/clock_white.png' : 'images/clock_black.png'}
          className={clsMerge(
            'select-none aspect-square rounded-full p-2 w-[200px] min-w-[200px] inset-shadow-lg',
            clockFace
          )}
        />
      </div>
      <h4 className={clsMerge('text-base font-mono', textColor)}>{formattedTime}</h4>
    </div>
  )
}
export default memo(Clock)

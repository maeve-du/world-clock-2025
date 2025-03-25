import { clsMerge } from '../../lib/utils'

const ClockHand = ({ hand = '', isDaytime = false, degree = 0, isShaft = false }) => {
  const hourHand = clsMerge(
    'z-10 before:w-[6px] before:h-[52px] before:left-[calc(50%-3px)] before:top-[76px] before:origin-center before:rounded-[2px]',
    isDaytime ? 'before:bg-gray-900' : 'before:bg-white'
  )
  const minuteHand = clsMerge(
    'z-20 before:w-[3px] before:h-[78px] before:left-[calc(50%-1.5px)] before:top-[50px] before:origin-center before:rounded-[2px]',
    isDaytime ? 'before:bg-gray-900' : 'before:bg-white'
  )

  const secondHand =
    'z-30 before:w-[2px] before:h-[98px] before:left-[calc(50%-1px)] before:top-[90px] before:bg-rose-600 before:rounded-[1px]'

  const shaft = clsMerge(
    'z-50 before:h-[12px] before:w-[12px] before:aspect-square before:left-[calc(50%-6px)] before:top-[calc(50%-6px)] before:border-3 before:rounded-full',
    isDaytime ? 'before:bg-white before:border-black' : 'before:bg-black before:border-white'
  )

  // 根据指针类型应用不同的旋转角度
  const rotateStyle = hand !== 'shaft' ? { transform: `rotate(${degree}deg)` } : {}

  return (
    <div
      style={rotateStyle}
      className={clsMerge(
        'w-full h-full absolute rounded-full top-0 left-0 before:content-[" "] before:absolute  before:bottom-[50%] drop-shadow-(--clock-drop-shadow)',
        hand === 'hour' && hourHand,
        hand === 'minute' && minuteHand,
        hand === 'second' && secondHand,
        isShaft && shaft
      )}></div>
  )
}
export default ClockHand

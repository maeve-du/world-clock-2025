import { useState, useEffect, useCallback } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { TEST_TIME, DAYTIME_HOURS } from '../constants'

// 初始化Day.js插件
dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * 自定义Hook，用于获取并实时更新特定时区的时间
 * @param {number} timezone 时区偏移量（小时）
 * @returns {Object} 包含时间信息和isDaytime状态的对象
 */
export function useClockTime(timezone) {
  // 创建一个计算目标时区时间的函数
  const getTargetTime = useCallback(() => {
    // 如果启用了测试时间，使用测试时间
    if (TEST_TIME.enabled) {
      return dayjs(TEST_TIME.time).utcOffset(+timezone)
    }
    // 正常计算当前时区时间
    return dayjs().utcOffset(+timezone)
  }, [timezone])

  const [time, setTime] = useState(getTargetTime())

  // 根据当前小时判断是否为白天
  const isDaytime = time.hour() >= DAYTIME_HOURS.start && time.hour() < DAYTIME_HOURS.end

  useEffect(() => {
    // 如果启用了测试时间，不需要定时器
    if (TEST_TIME.enabled) return

    // 创建定时器，每秒更新一次时间
    const timer = setInterval(() => {
      setTime(getTargetTime())
    }, 1000)

    // 组件卸载时清除定时器
    return () => clearInterval(timer)
  }, [timezone, getTargetTime])

  // 计算时针、分针、秒针的角度
  const hours = time.hour() % 12
  const minutes = time.minute()
  const seconds = time.second()

  const hourDegree = hours * 30 + minutes * 0.5 // 每小时30度，每分钟0.5度
  const minuteDegree = minutes * 6 // 每分钟6度
  const secondDegree = seconds * 6 // 每秒6度

  // 格式化日期和时间为单一字符串
  const formattedTime = dayjs(time).format('YYYY-MM-DD HH:mm:ss')

  return {
    time,
    isDaytime,
    hourDegree,
    minuteDegree,
    secondDegree,
    formattedTime
  }
}

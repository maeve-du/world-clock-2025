export const CITIES = [
  { name: 'Beijing', timezone: '8' },
  { name: 'London', timezone: '0' },
  { name: 'New York', timezone: '-5' },
  { name: 'Sydney', timezone: '10' }
]

export const DAYTIME_HOURS = {
  start: 6,
  end: 18
}

// 测试时间配置
export const TEST_TIME = {
  enabled: false, // 设置为true启用测试时间
  time: new Date('2024-06-15T12:00:05') // 白天时间测试
  // time: new Date('2024-06-15T00:00:35') // 夜间时间测试
}

# World Clock

A React application that displays the current time in different time zones around the world.

## Features

- Real-time clocks for multiple cities
- Automatic day/night theme switching
- Animated clock hands
- Test mode for fixed time testing
- Responsive design

## Tech Stack

- React 18
- Tailwind CSS V4
- Day.js

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Configuration

### Adding Cities

Edit the `CITIES` array in `src/constants.js`:

```javascript
export const CITIES = [
  { name: 'City Name', timezone: 'Timezone Offset' }
  // Add more cities...
]
```

### Day/Night Settings

Edit the `DAYTIME_HOURS` object in `src/constants.js`:

```javascript
export const DAYTIME_HOURS = {
  start: 6, // Day starts (24h format)
  end: 18 // Day ends (24h format)
}
```

### Test Mode

Edit the `TEST_TIME` object in `src/constants.js`:

```javascript
export const TEST_TIME = {
  enabled: true, // Enable test mode
  time: new Date('2024-06-15T19:38:05') // Test time
}
```

## License

MIT

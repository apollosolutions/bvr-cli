import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const cleanTimestamp = (timestamp: string | number | undefined) => `${dayjs(timestamp).utc().format("YYYY-MM-DD HH:MM:SS UTC")}`

export const offsetToTimestamp = (offset: number) => dayjs()
    .subtract(Math.abs(offset), 'seconds')
    .startOf('day')
    .toISOString()

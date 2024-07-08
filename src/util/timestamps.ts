import dayjs from 'dayjs'

export const cleanTimestamp = (timestamp: string) => timestamp.replace("T", " ").replace("Z", "") + " UTC"

export const offsetToTimestamp = (offset: number) => dayjs()
    .subtract(Math.abs(offset), 'seconds')
    .startOf('day')
    .toISOString()
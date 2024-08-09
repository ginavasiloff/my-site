const appFlags: { [key: string]: boolean } = {
  backgammon: false,
}

export const createFlags = (flags: { [key: string]: boolean } = appFlags) => {
  const isEnabled = (flagName: string): boolean => {
    const env = process.env.NODE_ENV
    return !!flags[flagName] || env === 'development'
  }
  return { isEnabled, flags: appFlags }
}

const flags = createFlags(appFlags)
export default flags

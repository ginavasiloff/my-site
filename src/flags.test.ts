import { vi } from 'vitest'
import { createFlags } from './flags'

describe('createFlags', () => {
  it('isEnabled returns true if running in dev mode', () => {
    vi.stubEnv('NODE_ENV', 'development')
    const testFlags = { disabledFlag: false }
    const flags = createFlags(testFlags)
    const result = flags.isEnabled('disabledFlag')
    expect(result).toBeTruthy()
  })
  it('isEnabled returns the flag value if not running in dev mode', () => {
    vi.stubEnv('NODE_ENV', 'not development')
    const testFlags = { disabledFlag: false, enabledFlag: true }
    const flags = createFlags(testFlags)
    const result1 = flags.isEnabled('disabledFlag')
    const result2 = flags.isEnabled('enabledFlag')
    expect(result1).toBeFalsy()
    expect(result2).toBeTruthy()
  })
})

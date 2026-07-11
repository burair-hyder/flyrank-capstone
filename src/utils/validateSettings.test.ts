import { describe, expect, it } from 'vitest'
import {
  defaultSettingsValues,
  isSettingsFormValid,
  validateSettings,
  type SettingsFormValues,
} from './validateSettings'

function createValues(overrides: Partial<SettingsFormValues> = {}): SettingsFormValues {
  return { ...defaultSettingsValues, ...overrides }
}

describe('validateSettings', () => {
  it('returns a name error when name is empty', () => {
    const errors = validateSettings(createValues({ name: '' }))

    expect(errors.name).toBe('Name is required.')
  })

  it('returns a name error when name is whitespace only', () => {
    const errors = validateSettings(createValues({ name: '   ' }))

    expect(errors.name).toBe('Name is required.')
  })

  it('does not return a name error for a valid name', () => {
    const errors = validateSettings(createValues({ name: 'Burair Hyder' }))

    expect(errors.name).toBeUndefined()
  })

  it('returns an email error when email is empty', () => {
    const errors = validateSettings(createValues({ email: '' }))

    expect(errors.email).toBe('Email is required.')
  })

  it.each(['not-an-email', 'a@', '@b.com'])(
    'returns an email format error for "%s"',
    (email) => {
      const errors = validateSettings(createValues({ email }))

      expect(errors.email).toBe('Enter a valid email address.')
    },
  )

  it('does not return an email error for a valid email', () => {
    const errors = validateSettings(createValues({ email: 'user@example.com' }))

    expect(errors.email).toBeUndefined()
  })
})

describe('isSettingsFormValid', () => {
  it('returns true when name and email are valid', () => {
    expect(
      isSettingsFormValid(
        createValues({
          name: 'Burair Hyder',
          email: 'user@example.com',
        }),
      ),
    ).toBe(true)
  })

  it('returns false when name is missing but email is valid', () => {
    expect(
      isSettingsFormValid(
        createValues({
          name: '',
          email: 'user@example.com',
        }),
      ),
    ).toBe(false)
  })
})

export type Theme = 'light' | 'dark' | 'system'

export interface SettingsFormValues {
  name: string
  email: string
  emailNotifications: boolean
  theme: Theme
}

export type SettingsFormErrors = Partial<Record<keyof SettingsFormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const defaultSettingsValues: SettingsFormValues = {
  name: '',
  email: '',
  emailNotifications: true,
  theme: 'system',
}

export function validateSettings(values: SettingsFormValues): SettingsFormErrors {
  const errors: SettingsFormErrors = {}

  const name = values.name.trim()
  if (!name) {
    errors.name = 'Name is required.'
  }

  const email = values.email.trim()
  if (!email) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}

export function isSettingsFormValid(values: SettingsFormValues): boolean {
  return Object.keys(validateSettings(values)).length === 0
}

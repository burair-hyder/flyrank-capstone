export type Theme = 'light' | 'dark' | 'system'
export type Language = 'en' | 'es' | 'fr' | 'de'

export interface SettingsFormValues {
  displayName: string
  email: string
  bio: string
  emailNotifications: boolean
  theme: Theme
  language: Language
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export type SettingsFormErrors = Partial<Record<keyof SettingsFormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

export const defaultSettingsValues: SettingsFormValues = {
  displayName: '',
  email: '',
  bio: '',
  emailNotifications: true,
  theme: 'system',
  language: 'en',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
}

export function validateSettings(values: SettingsFormValues): SettingsFormErrors {
  const errors: SettingsFormErrors = {}

  const displayName = values.displayName.trim()
  if (!displayName) {
    errors.displayName = 'Display name is required.'
  } else if (displayName.length < 2) {
    errors.displayName = 'Display name must be at least 2 characters.'
  } else if (displayName.length > 50) {
    errors.displayName = 'Display name must be 50 characters or fewer.'
  }

  const email = values.email.trim()
  if (!email) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (values.bio.length > 300) {
    errors.bio = 'Bio must be 300 characters or fewer.'
  }

  const changingPassword =
    values.currentPassword.length > 0 ||
    values.newPassword.length > 0 ||
    values.confirmPassword.length > 0

  if (changingPassword) {
    if (!values.currentPassword) {
      errors.currentPassword = 'Current password is required to set a new password.'
    }

    if (!values.newPassword) {
      errors.newPassword = 'New password is required.'
    } else if (!PASSWORD_PATTERN.test(values.newPassword)) {
      errors.newPassword =
        'Password must be at least 8 characters and include uppercase, lowercase, and a number.'
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Please confirm your new password.'
    } else if (values.newPassword !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.'
    }
  }

  return errors
}

export function hasValidationErrors(errors: SettingsFormErrors): boolean {
  return Object.keys(errors).length > 0
}

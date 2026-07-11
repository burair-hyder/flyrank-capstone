import { useId, useState, type ChangeEvent, type FormEvent } from 'react'
import {
  defaultSettingsValues,
  hasValidationErrors,
  validateSettings,
  type SettingsFormErrors,
  type SettingsFormValues,
} from '../utils/validateSettings'
import './SettingsForm.css'

type SettingsField = keyof SettingsFormValues

interface FieldConfig {
  id: SettingsField
  label: string
  type?: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox'
  placeholder?: string
  hint?: string
  options?: { value: string; label: string }[]
  maxLength?: number
  autoComplete?: string
}

const profileFields: FieldConfig[] = [
  {
    id: 'displayName',
    label: 'Display name',
    placeholder: 'How should we address you?',
    autoComplete: 'name',
  },
  {
    id: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'you@example.com',
    autoComplete: 'email',
  },
  {
    id: 'bio',
    label: 'Bio',
    type: 'textarea',
    placeholder: 'Tell us a little about yourself…',
    hint: 'Optional. Shown on your public profile.',
    maxLength: 300,
  },
]

const preferenceFields: FieldConfig[] = [
  {
    id: 'theme',
    label: 'Theme',
    type: 'select',
    options: [
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
      { value: 'system', label: 'System default' },
    ],
  },
  {
    id: 'language',
    label: 'Language',
    type: 'select',
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' },
    ],
  },
]

const passwordFields: FieldConfig[] = [
  {
    id: 'currentPassword',
    label: 'Current password',
    type: 'password',
    placeholder: 'Enter current password',
    autoComplete: 'current-password',
  },
  {
    id: 'newPassword',
    label: 'New password',
    type: 'password',
    placeholder: 'At least 8 characters',
    hint: 'Include uppercase, lowercase, and a number.',
    autoComplete: 'new-password',
  },
  {
    id: 'confirmPassword',
    label: 'Confirm new password',
    type: 'password',
    placeholder: 'Re-enter new password',
    autoComplete: 'new-password',
  },
]

interface SettingsFormProps {
  initialValues?: Partial<SettingsFormValues>
  onSave?: (values: SettingsFormValues) => void | Promise<void>
}

export function SettingsForm({ initialValues, onSave }: SettingsFormProps) {
  const formId = useId()
  const [values, setValues] = useState<SettingsFormValues>({
    ...defaultSettingsValues,
    ...initialValues,
  })
  const [errors, setErrors] = useState<SettingsFormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<SettingsField, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const updateField = (field: SettingsField, value: string | boolean) => {
    const nextValues = { ...values, [field]: value }
    setValues(nextValues)

    if (touched[field]) {
      const nextErrors = validateSettings(nextValues)
      setErrors((current) => ({ ...current, [field]: nextErrors[field] }))
    }
  }

  const handleBlur = (field: SettingsField) => {
    setTouched((current) => ({ ...current, [field]: true }))
    const nextErrors = validateSettings(values)
    setErrors((current) => ({ ...current, [field]: nextErrors[field] }))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type } = event.target
    const field = name as SettingsField

    if (type === 'checkbox') {
      updateField(field, (event.target as HTMLInputElement).checked)
      return
    }

    updateField(field, event.target.value)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('idle')
    setStatusMessage('')

    const validationErrors = validateSettings(values)
    setErrors(validationErrors)
    setTouched(
      Object.keys(values).reduce<Partial<Record<SettingsField, boolean>>>((acc, key) => {
        acc[key as SettingsField] = true
        return acc
      }, {}),
    )

    if (hasValidationErrors(validationErrors)) {
      setStatus('error')
      setStatusMessage('Please fix the highlighted fields before saving.')
      return
    }

    setStatus('submitting')

    try {
      if (onSave) {
        await onSave(values)
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600))
      }

      setStatus('success')
      setStatusMessage('Your settings were saved successfully.')
      setValues((current) => ({
        ...current,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }))
      setTouched({})
      setErrors({})
    } catch {
      setStatus('error')
      setStatusMessage('Something went wrong while saving. Please try again.')
    }
  }

  const renderField = (field: FieldConfig) => {
    const errorId = `${formId}-${field.id}-error`
    const hintId = `${formId}-${field.id}-hint`
    const fieldError = touched[field.id] ? errors[field.id] : undefined
    const describedBy = [field.hint ? hintId : '', fieldError ? errorId : ''].filter(Boolean).join(' ') || undefined

    if (field.type === 'checkbox') {
      return (
        <div key={field.id} className="settings-form__field settings-form__field--checkbox">
          <label className="settings-form__checkbox-label" htmlFor={`${formId}-${field.id}`}>
            <input
              id={`${formId}-${field.id}`}
              name={field.id}
              type="checkbox"
              className="settings-form__checkbox"
              checked={values[field.id] as boolean}
              onChange={handleChange}
              onBlur={() => handleBlur(field.id)}
            />
            <span>
              <span className="settings-form__checkbox-title">{field.label}</span>
              {field.hint && (
                <span id={hintId} className="settings-form__hint">
                  {field.hint}
                </span>
              )}
            </span>
          </label>
          {fieldError && (
            <p id={errorId} className="settings-form__error" role="alert">
              {fieldError}
            </p>
          )}
        </div>
      )
    }

    if (field.type === 'textarea') {
      return (
        <div key={field.id} className="settings-form__field">
          <label className="settings-form__label" htmlFor={`${formId}-${field.id}`}>
            {field.label}
          </label>
          <textarea
            id={`${formId}-${field.id}`}
            name={field.id}
            className={`settings-form__input settings-form__textarea${fieldError ? ' settings-form__input--invalid' : ''}`}
            placeholder={field.placeholder}
            value={values[field.id] as string}
            maxLength={field.maxLength}
            aria-invalid={Boolean(fieldError)}
            aria-describedby={describedBy}
            onChange={handleChange}
            onBlur={() => handleBlur(field.id)}
            rows={4}
          />
          <div className="settings-form__meta">
            {field.hint && (
              <p id={hintId} className="settings-form__hint">
                {field.hint}
              </p>
            )}
            {field.maxLength && (
              <p className="settings-form__counter" aria-live="polite">
                {(values[field.id] as string).length}/{field.maxLength}
              </p>
            )}
          </div>
          {fieldError && (
            <p id={errorId} className="settings-form__error" role="alert">
              {fieldError}
            </p>
          )}
        </div>
      )
    }

    if (field.type === 'select') {
      return (
        <div key={field.id} className="settings-form__field">
          <label className="settings-form__label" htmlFor={`${formId}-${field.id}`}>
            {field.label}
          </label>
          <div className="settings-form__select-wrap">
            <select
              id={`${formId}-${field.id}`}
              name={field.id}
              className={`settings-form__input settings-form__select${fieldError ? ' settings-form__input--invalid' : ''}`}
              value={values[field.id] as string}
              aria-invalid={Boolean(fieldError)}
              aria-describedby={describedBy}
              onChange={handleChange}
              onBlur={() => handleBlur(field.id)}
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {field.hint && (
            <p id={hintId} className="settings-form__hint">
              {field.hint}
            </p>
          )}
          {fieldError && (
            <p id={errorId} className="settings-form__error" role="alert">
              {fieldError}
            </p>
          )}
        </div>
      )
    }

    return (
      <div key={field.id} className="settings-form__field">
        <label className="settings-form__label" htmlFor={`${formId}-${field.id}`}>
          {field.label}
        </label>
        <input
          id={`${formId}-${field.id}`}
          name={field.id}
          type={field.type ?? 'text'}
          className={`settings-form__input${fieldError ? ' settings-form__input--invalid' : ''}`}
          placeholder={field.placeholder}
          value={values[field.id] as string}
          autoComplete={field.autoComplete}
          aria-invalid={Boolean(fieldError)}
          aria-describedby={describedBy}
          onChange={handleChange}
          onBlur={() => handleBlur(field.id)}
        />
        {field.hint && (
          <p id={hintId} className="settings-form__hint">
            {field.hint}
          </p>
        )}
        {fieldError && (
          <p id={errorId} className="settings-form__error" role="alert">
            {fieldError}
          </p>
        )}
      </div>
    )
  }

  return (
    <form className="settings-form" onSubmit={handleSubmit} noValidate>
      <header className="settings-form__header">
        <div>
          <p className="settings-form__eyebrow">Account</p>
          <h1 className="settings-form__title">Settings</h1>
          <p className="settings-form__subtitle">
            Manage your profile, preferences, and security in one place.
          </p>
        </div>
      </header>

      {statusMessage && (
        <div
          className={`settings-form__banner settings-form__banner--${status === 'success' ? 'success' : 'error'}`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </div>
      )}

      <section className="settings-form__section" aria-labelledby={`${formId}-profile-heading`}>
        <h2 id={`${formId}-profile-heading`} className="settings-form__section-title">
          Profile
        </h2>
        <p className="settings-form__section-description">
          Basic information visible to you and other members.
        </p>
        <div className="settings-form__grid">{profileFields.map(renderField)}</div>
      </section>

      <section className="settings-form__section" aria-labelledby={`${formId}-preferences-heading`}>
        <h2 id={`${formId}-preferences-heading`} className="settings-form__section-title">
          Preferences
        </h2>
        <p className="settings-form__section-description">
          Customize how the app looks and how we reach you.
        </p>
        <div className="settings-form__grid">
          {preferenceFields.map(renderField)}
          {renderField({
            id: 'emailNotifications',
            label: 'Email notifications',
            type: 'checkbox',
            hint: 'Receive product updates, reminders, and account alerts.',
          })}
        </div>
      </section>

      <section className="settings-form__section" aria-labelledby={`${formId}-security-heading`}>
        <h2 id={`${formId}-security-heading`} className="settings-form__section-title">
          Security
        </h2>
        <p className="settings-form__section-description">
          Leave password fields blank to keep your current password.
        </p>
        <div className="settings-form__grid settings-form__grid--compact">
          {passwordFields.map(renderField)}
        </div>
      </section>

      <footer className="settings-form__footer">
        <button
          type="button"
          className="settings-form__button settings-form__button--secondary"
          onClick={() => {
            setValues({ ...defaultSettingsValues, ...initialValues })
            setErrors({})
            setTouched({})
            setStatus('idle')
            setStatusMessage('')
          }}
          disabled={status === 'submitting'}
        >
          Reset
        </button>
        <button
          type="submit"
          className="settings-form__button settings-form__button--primary"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Saving…' : 'Save changes'}
        </button>
      </footer>
    </form>
  )
}

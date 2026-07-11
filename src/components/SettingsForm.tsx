import { useId, useState, type ChangeEvent, type FormEvent } from 'react'
import {
  defaultSettingsValues,
  isSettingsFormValid,
  validateSettings,
  type SettingsFormValues,
} from '../utils/validateSettings'
import './SettingsForm.css'

type SettingsField = keyof SettingsFormValues

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
  const [touched, setTouched] = useState<Partial<Record<SettingsField, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const errors = validateSettings(values)
  const isValid = isSettingsFormValid(values)

  const getFieldError = (field: SettingsField) =>
    touched[field] ? errors[field] : undefined

  const updateField = (field: SettingsField, value: string | boolean) => {
    setValues((current) => ({ ...current, [field]: value }))
    setStatus('idle')
    setStatusMessage('')
  }

  const handleBlur = (field: SettingsField) => {
    setTouched((current) => ({ ...current, [field]: true }))
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    setTouched({
      name: true,
      email: true,
      emailNotifications: true,
      theme: true,
    })

    if (!isSettingsFormValid(values)) {
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
    } catch {
      setStatus('error')
      setStatusMessage('Something went wrong while saving. Please try again.')
    }
  }

  const renderTextField = (
    field: 'name' | 'email',
    label: string,
    options: { type?: 'text' | 'email'; placeholder?: string; autoComplete?: string },
  ) => {
    const fieldError = getFieldError(field)
    const errorId = `${formId}-${field}-error`
    const describedBy = fieldError ? errorId : undefined

    return (
      <div className="settings-form__field">
        <label className="settings-form__label" htmlFor={`${formId}-${field}`}>
          {label}
        </label>
        <input
          id={`${formId}-${field}`}
          name={field}
          type={options.type ?? 'text'}
          className={`settings-form__input${fieldError ? ' settings-form__input--invalid' : ''}`}
          placeholder={options.placeholder}
          value={values[field]}
          autoComplete={options.autoComplete}
          aria-invalid={Boolean(fieldError)}
          aria-describedby={describedBy}
          onChange={handleChange}
          onBlur={() => handleBlur(field)}
          required
        />
        {fieldError && (
          <p id={errorId} className="settings-form__error" role="alert">
            {fieldError}
          </p>
        )}
      </div>
    )
  }

  const themeError = getFieldError('theme')
  const themeErrorId = `${formId}-theme-error`

  return (
    <form className="settings-form" onSubmit={handleSubmit} noValidate>
      <header className="settings-form__header">
        <p className="settings-form__eyebrow">Account</p>
        <h1 className="settings-form__title">Settings</h1>
        <p className="settings-form__subtitle">
          Manage your profile and preferences in one place.
        </p>
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
          Basic information used across your account.
        </p>
        <div className="settings-form__grid">
          {renderTextField('name', 'Name', {
            placeholder: 'Your full name',
            autoComplete: 'name',
          })}
          {renderTextField('email', 'Email address', {
            type: 'email',
            placeholder: 'you@example.com',
            autoComplete: 'email',
          })}
        </div>
      </section>

      <section className="settings-form__section" aria-labelledby={`${formId}-preferences-heading`}>
        <h2 id={`${formId}-preferences-heading`} className="settings-form__section-title">
          Preferences
        </h2>
        <p className="settings-form__section-description">
          Customize how the app looks and how we reach you.
        </p>
        <div className="settings-form__grid">
          <div className="settings-form__field">
            <label className="settings-form__label" htmlFor={`${formId}-theme`}>
              Theme
            </label>
            <div className="settings-form__select-wrap">
              <select
                id={`${formId}-theme`}
                name="theme"
                className={`settings-form__input settings-form__select${themeError ? ' settings-form__input--invalid' : ''}`}
                value={values.theme}
                aria-invalid={Boolean(themeError)}
                aria-describedby={themeError ? themeErrorId : undefined}
                onChange={handleChange}
                onBlur={() => handleBlur('theme')}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System default</option>
              </select>
            </div>
            {themeError && (
              <p id={themeErrorId} className="settings-form__error" role="alert">
                {themeError}
              </p>
            )}
          </div>

          <div className="settings-form__field settings-form__field--checkbox">
            <label className="settings-form__checkbox-label" htmlFor={`${formId}-emailNotifications`}>
              <input
                id={`${formId}-emailNotifications`}
                name="emailNotifications"
                type="checkbox"
                className="settings-form__checkbox"
                checked={values.emailNotifications}
                onChange={handleChange}
                onBlur={() => handleBlur('emailNotifications')}
              />
              <span>
                <span className="settings-form__checkbox-title">Email notifications</span>
                <span className="settings-form__hint">
                  Receive product updates, reminders, and account alerts.
                </span>
              </span>
            </label>
          </div>
        </div>
      </section>

      <footer className="settings-form__footer">
        <button
          type="button"
          className="settings-form__button settings-form__button--secondary"
          onClick={() => {
            setValues({ ...defaultSettingsValues, ...initialValues })
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
          disabled={!isValid || status === 'submitting'}
        >
          {status === 'submitting' ? 'Saving…' : 'Save changes'}
        </button>
      </footer>
    </form>
  )
}

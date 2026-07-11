import { SettingsForm } from './components/SettingsForm'
import './App.css'

function App() {
  return (
    <main className="app">
      <SettingsForm
        initialValues={{
          name: 'Burair Hyder',
          email: 'burair@example.com',
        }}
        onSave={async (values) => {
          console.log('Settings saved:', values)
        }}
      />
    </main>
  )
}

export default App

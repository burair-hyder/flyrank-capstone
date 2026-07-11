import { SettingsForm } from './components/SettingsForm'
import './App.css'

function App() {
  return (
    <main className="app">
      <SettingsForm
        initialValues={{
          displayName: 'Burair Hyder',
          email: 'burair@example.com',
          bio: 'FlyRank capstone intern building thoughtful web experiences.',
        }}
        onSave={async (values) => {
          console.log('Settings saved:', values)
        }}
      />
    </main>
  )
}

export default App

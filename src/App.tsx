import { today, getLocalTimeZone } from '@internationalized/date'
import { Calendar } from './Calendar'

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen p-10">
      <Calendar defaultValue={today(getLocalTimeZone())} />
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import VolcanoMap from './components/VolcanoMap'
import DataLoader from './components/DataLoader'
import VolcanoHeader from './components/VolcanoHeader'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)

      const res = await fetch(
        `https://eonet.gsfc.nasa.gov/api/v3/events?category=volcanoes&days=365`
      )

      const { events } = await res.json()
      console.log("NASA EVENTS:", events)  
      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <VolcanoHeader />
      {!loading ? <VolcanoMap eventData={eventData} /> : <DataLoader />}
    </div>
  )
}

export default App

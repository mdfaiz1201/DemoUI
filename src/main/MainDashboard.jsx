import { Dashboard, Header } from '../components'
import '../App.css'

const MainDashboard = () => {
  return (
    <div className='h-screen scrolling-container'>
      <Header/>
      <Dashboard/>
    </div>
  )
}

export default MainDashboard
import { Dashboard, Header } from '../components'
import '../App.css'

const MainDashboard = () => {
  return (
    <div className='h-screen scrolling-container m-8'>
      <Header/>
      <Dashboard/>
    </div>
  )
}

export default MainDashboard
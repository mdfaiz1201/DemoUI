import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Sidebar } from './components';
import MainDashboard from './main/MainDashboard';

const App = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
   navigate('/Dashboard');
  }, [])
  

  return (
    <div className='flex f-dc md:flex-row bg-gray-200'>
      <Sidebar />
      <main className='flex-1 bg-gray-200'>
        <Routes>
          <Route path='*' element={<MainDashboard />}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;

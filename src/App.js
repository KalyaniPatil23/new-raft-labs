import './App.css';
import Dashboard from './Components/Dashboard';
import { Col, Row } from 'antd';
import Sidebar from './Components/Sidebar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Row className='h-screen overflow-hidden'>
      <Sidebar />
      <Col span={20}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/analytic' element={<div className='font-bold text-center text-xl'>Analytic</div>} />
          <Route path='/explore' element={<div className='font-bold text-center text-xl'>Explore</div>} />
          <Route path='/shop' element={<div className='font-bold text-center text-xl'>Shop</div>} />
          <Route path='/inbox' element={<div className='font-bold text-center text-xl'>Inbox</div>} />
          <Route path='/setting' element={<div className='font-bold text-center text-xl'>Setting</div>} />
          <Route path='/help' element={<div className='font-bold text-center text-xl'>Help</div>} />
          <Route path='/amazon' element={<div className='font-bold text-center text-xl'>Analytic</div>} />
          <Route path='/invinity' element={<div className='font-bold text-center text-xl'>Analytic</div>} />
        </Routes>
      </Col>
    </Row>
  );
}

export default App;

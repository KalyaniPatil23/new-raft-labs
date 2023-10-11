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
          <Route path='/new-raft-labs/' element={<Dashboard />} />
          <Route path='/new-raft-labs/analytic' element={<div className='font-bold text-center text-xl'>Analytic</div>} />
          <Route path='/new-raft-labs/explore' element={<div className='font-bold text-center text-xl'>Explore</div>} />
          <Route path='/new-raft-labs/shop' element={<div className='font-bold text-center text-xl'>Shop</div>} />
          <Route path='/new-raft-labs/inbox' element={<div className='font-bold text-center text-xl'>Inbox</div>} />
          <Route path='/new-raft-labs/setting' element={<div className='font-bold text-center text-xl'>Setting</div>} />
          <Route path='/new-raft-labs/help' element={<div className='font-bold text-center text-xl'>Help</div>} />
          <Route path='/new-raft-labs/amazon' element={<div className='font-bold text-center text-xl'>Analytic</div>} />
          <Route path='/new-raft-labs/invinity' element={<div className='font-bold text-center text-xl'>Analytic</div>} />
        </Routes>
      </Col>
    </Row>
  );
}

export default App;

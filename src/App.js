import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import { Col, Row } from 'antd';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Row className='h-screen overflow-hidden'>
      <Sidebar />
      <Col span={20}>
        <Dashboard />
      </Col>
    </Row>
  );
}

export default App;

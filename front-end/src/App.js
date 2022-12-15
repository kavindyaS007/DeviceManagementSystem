import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarComponent from './components/navbar.component';
import Home from './components/Home';
import AddDevice from './components/Device/addDevice';
import ListDevices from './components/Device/listDevices';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className='wrapper'>
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/devices' element={<ListDevices/>} />
                <Route path='/add-device' element={<AddDevice/>} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;

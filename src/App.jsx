import { Image } from '@chakra-ui/react';
import logo from './assets/logo-spacex.png';
import { Link, Route, Routes } from 'react-router-dom';
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import { RocketDetails } from './components/RocketDetails';

function App() {

  return (
    <>
      <Link to='/'>
        <Image m={4} src={logo} alt="logo SpaceX" width={300} />
      </Link>

      <Routes>
        <Route path='/' element={<LaunchList />}></Route>
        <Route path='launch/:launchId' element={<LaunchDetails />}></Route >
        <Route path='rockets/:rocketId' element={<RocketDetails />}></Route >
      </Routes>

    </>
  )
}

export default App

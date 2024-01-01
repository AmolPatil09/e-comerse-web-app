
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
// import storeProvider from './store'
import { Provider } from 'react-redux';
import store from './store';


function App() {
 

  return (
    <>
    <Provider store={store}>
       <Navbar/> 
       <Body/>
       <Footer/>
    </Provider>
      
    </>
  )
}

export default App

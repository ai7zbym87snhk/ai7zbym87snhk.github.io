import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Body from './components/body'
import { VStack } from '@chakra-ui/react'
function App() {

  return (
    <div className='App'>
      <VStack>
        <Header />
        <Body />
        <Footer />
      </VStack>
    </div>
  )
}

export default App

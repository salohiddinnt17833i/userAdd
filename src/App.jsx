import { useSelector } from 'react-redux'
import Form from './components/Form';
function App() {
  const state = useSelector(state => state)
  return (
    <>
      <div className='w-full h-lvh bg-black p-5'>
        <div>
          <Form></Form>
        </div>
      </div>
    </>
  )
}

export default App
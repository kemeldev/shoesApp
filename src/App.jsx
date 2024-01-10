import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products/Products'
import { PageNotFound } from './Pages/PageNotFound/PageNotFound'
import { Details } from './Pages/Details/ShoeDetails'

function App () {
  return (
    <>
      <div className='app'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Details />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </div>
    </>
  )
}

export default App

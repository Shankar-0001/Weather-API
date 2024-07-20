
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { FakestoreCategories } from './fakestore-components/fakestore-categories'
import { FakestoreProducts } from './fakestore-components/fakestore-products'
import { FakeStoreLogin } from './fakestore-components/fakestore-login'
import { FakestoreInvalid } from './fakestore-components/fakestore-invalid'
import { FakestoreCategories } from './fakestore-components/fakestore-categories'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header className="text-center bg-dark text-white p-2">
          <h2>Shopper !</h2>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<FakeStoreLogin />} />
            {/* <Route path='home' element={<FakestoreCategories />} /> */}
            <Route path='category' element={<FakestoreCategories />} />
            <Route path='invalid' element={<FakestoreInvalid />} />
            <Route path='products/:category' element={<FakestoreProducts/>} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default App

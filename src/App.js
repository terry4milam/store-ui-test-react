import React, { useState, Suspense, useEffect } from 'react'
import './assets/css/site.css'
import getProductsCount from './APIs/products/getProductsCount'
import Loading from './global/loading'
import Pagination from './products/pagination'
const Products = React.lazy(() => import('./products'))
function App() {
  const init_state = {
    page_index: 0,
    page_length: 10,
    total_products_cnt: getProductsCount()
  }
  const [ paginationSettongs, setPaginationSettings ] = useState(init_state)
  
  return (
    <div id="app" className="App">
      <div className="app-header">
        <img src="https://static.ateasesystems.net/images/facilis-logo.png" alt="logo"/>
      </div>
      <Suspense callback={<Loading/>}>
        <div className="app-body">
            <div className="products-container">
                <Products props = {paginationSettongs}/>
                <Pagination 
                  paginationSettongs = {paginationSettongs} 
                  setPaginationSettings = {setPaginationSettings} 
                />
            </div>
        </div>
      </Suspense>
      
    </div>
  )
}

export default App

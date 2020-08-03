import React from 'react';

import ProductTable from './components/ProductTable';

    const products
      =[{name:"pantalon",price:100,category:"Clothes"},
      {name:"iPhone",price:900,category:"Electronics"}] ;
      function App() {
        return (
          <ProductTable tableau={products}/>
        );
      };
export default App;

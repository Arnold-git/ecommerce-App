import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar} from './components';



const App = () => {
    const [Products, setProducts] = useState([]);
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App

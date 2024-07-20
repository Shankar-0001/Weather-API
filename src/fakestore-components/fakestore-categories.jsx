import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export function FakestoreCategories(){


    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res => {
            setCategories(res.data);
        });
    })
    
    return(

        <div>
            <h2>Categories</h2>
            <ol>
                {
                    categories.map(category => <li key={category}> <Link to={`products/${category}`}>{category.toUpperCase()}</Link> </li>)
                }
            </ol>
        </div>
    )
}
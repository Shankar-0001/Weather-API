import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export function FakestoreProducts() {
    let params = useParams();
    const [products, setProducts] = useState([{ id: 0, title: '', image: '', category: '', description: '', price: 0, rating: { rate: 0, count: 0 } }]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(res=>{
            setProducts(res.data);
        })
    }, []);

    

    return (
        <div>
            <h2>{params.category.toUpperCase()} PRODUCTS</h2>
            <div>
                {
                    products.map(product=>
                        <img src={product.image} width="240" height="200" className="m-2" />
                    )
                }
            </div>
            <div><Link to='/'> Back to categories </Link></div>
        </div>
    )
}
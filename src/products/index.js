import {useState , useEffect} from 'react';

import getProducts from "../APIs/products/getProducts"
import ProductDetails from './prodcut.details'
import Product from './product'
const Products = ({props}) => {
    const {page_index, page_length } = props
    const [products_data, setProducts_data] = useState([]) 
    const [modalData, setModalData] = useState({show:false, product_info:{}})

    useEffect( () => {
        const fetchData = async () => {
            const data = await getProducts({page_index, page_length})
            return data
        }
        fetchData()
            .then(data=>{
                setProducts_data(data)
                setModalData({show:false, product_info:data[0]})
            })
            .catch(console.error);
    }, [page_index, page_length])

    const showDetails = (show, product_info) => {
        const product = product_info || modalData.product_info
        setModalData({show:true, product_info:product})
    }

    return (
        <>
            <div className = "products">
                {
                    products_data.length !== 0 && products_data.map( product_info => {
                        return (
                            <Product
                                key = {product_info.id} 
                                product_info={ product_info }
                                showDetails = {showDetails}
                            />
                        )
                    } )
                }
            </div>
            { 
                modalData.show && <ProductDetails 
                    product_info = {modalData.product_info}
                    setModalData = {setModalData}
                />
            }
        </>
    )
}
export default Products
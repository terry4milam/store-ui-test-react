import Product from "./product";
const ProdcutDetails = ({product_info, setModalData}) => {
    const { name, price, desc } = product_info;
    const hideModal = () => {
        setModalData(false)
    }
    return (
        <div className="product-details">
            <div className="modal-content">
                <span className="close" onClick = {()=>hideModal()}>&times;</span>
                <h1>${price}</h1>
                <div className="product_view">
                    <Product product_info = {product_info}/>
                    <div className="product-desc">
                        <h2>{name}</h2>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdcutDetails
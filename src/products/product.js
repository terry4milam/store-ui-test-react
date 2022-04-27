const product = ({product_info, showDetails}) => {
    const { name, image, price } = product_info;
    return (
        <div className="product" onClick = {() => { showDetails(true, product_info) }}>
            <div className="product-image">
                <img alt={ name } src= { image }/>
            </div>
            <div className="product-name"> { name } </div>
            <div className="product-price"> {price} </div>
        </div>
    )
}

export default product;
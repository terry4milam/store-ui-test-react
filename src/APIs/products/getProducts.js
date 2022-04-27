import products from '../../assets/data/products.json'
const getProducts = ({page_index, page_length}) => {
    return products.slice(page_index*page_length, page_index*page_length+page_length*1)
}
export const getProductsCount = () => {
    return products.length
}
export default getProducts

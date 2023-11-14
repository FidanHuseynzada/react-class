import { products } from "../../../products"
function Product() {
    return (
        <ul className='list'>
            {products.sort(function (b, a) { return a.price - b.price }).map((product, i) => {
                return <li key={i}>{product.title}</li>
            })}
        </ul>)
}
export default Product
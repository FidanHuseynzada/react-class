import { products } from "../../../products"
function Card(){
    console.log(products.sort(function (b, a) { return a.price - b.price })[0]);
    return(
        <div className="Card">
            <p>{products.sort(function (b, a) { return a.price - b.price })[0].title}</p>
        </div>
    )
}
export default Card
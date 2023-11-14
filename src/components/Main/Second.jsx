import { products } from "../../../products"
function Names() {
    return (
        <table>
            <thead>
                <tr><th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>category</th>
                    <th>rate</th>
                    <th>count</th></tr>
            </thead>
            <tbody>
                {products.map((product, i) => {
                    return <tr key={i}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.rating.rate}</td>
                        <td>{product.rating.count}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
export default Names
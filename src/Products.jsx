import Product from './Product'
import productData from './ProductData'

function Products() {
    
    
    return (
        <div className="p-15">
            <div className="products-header">
                <h1 style={{marginBottom: 4 + "px"}}>Produkty</h1>
                <span className="text-secondary">{productData.length} produkty/ow.</span>
            </div>
            <div className="products">
                <div className="product-list">
                    {
                        productData.map(product => {
                            return (
                                <Product product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
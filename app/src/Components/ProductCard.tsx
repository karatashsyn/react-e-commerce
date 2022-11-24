import { Product } from '../Types/Product'

export default function ProductCard(product:Product) {
  
  return (

    
        <div key={product.name} className='products-container__product-card'>
            <div className='product-card__imgBox' style={{backgroundImage:`url(${product.image})`}}></div>
            <div className="product-card__info-container">
            <span className='product-card__brand'>{`${product.brand} `}</span>
            <p className='product-card__productName'>{product.name}</p>
            <span>{"$ " + product.price}</span>
            </div>
            
        <button className='product-card__add-to-cart-btn'>
          <img className='add-to-cart-btn__cart-img' src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.png" alt="cart-img" />
        </button>
      </div>
    
    
  )
}

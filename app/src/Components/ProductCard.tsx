import { Product } from "../Types/Product"

export default function ProductCard(product: Product) {
  return (

    <div key={product.description} className='products-container__product-card'>
      <div
        className='product-card__imgBox'
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className='product-card__info-container'>
        <span className='product-card__brand'>{`${product.brand} `}</span>
        <p className='product-card__productName'>{product.name}</p>
      </div>
      <div className='product-card__btn-container'>
        <span className='product-card__price'>{"$ " + product.price}</span>
        <button className='product-card__add-to-cart-btn'>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect x='5.6' width='2.8' height='14' rx='1.4' fill='white' />
            <rect
              y='8.4'
              width='2.8'
              height='14'
              rx='1.4'
              transform='rotate(-90 0 8.4)'
              fill='white'
            />
          </svg>
        </button>

      </div>
    </div>
  )
}

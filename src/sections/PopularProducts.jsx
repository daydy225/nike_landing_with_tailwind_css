import { useTranslation } from 'react-i18next'
import { PopularProductCard } from '../components'
import { products } from '../constants'

const PopularProducts = () => {
  const { t } = useTranslation()
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palaquin font-bold">
          {t('our')} <span className="text-coral-red">{t('popular')} </span>
          {t('products')}
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          {t('popular_desc')}
        </p>
      </div>

      <div className="mt-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map(product => (
          <div key={product.name}>
            <PopularProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  )
}

// TODO: make a new component for product details when clicked on each product card

export default PopularProducts

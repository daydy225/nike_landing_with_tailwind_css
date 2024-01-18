import { useTranslation } from 'react-i18next'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import { Button } from '../components'

const SpecialOffer = () => {
  const { t } = useTranslation()
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">{t('special')} </span>
          {t('offer')}
        </h2>
        <p className="mt-4 info-text">{t('specialOfferDescription')}</p>
        <p className="mt-6 info-text">{t('specialOfferDescription2')}</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label={t('shop_now')}
            iconURL={arrowRight}
          />
          <Button
            label={t('learn_more')}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer

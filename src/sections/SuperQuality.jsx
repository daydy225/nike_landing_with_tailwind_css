import { useTranslation } from 'react-i18next'
import { shoe8 } from '../assets/images'
import { Button } from '../components'

const SuperQuality = () => {
  const { t } = useTranslation()
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          {t('provide_you')}
          <span className="text-coral-red"> {t('super')} </span>
          <span className="text-coral-red">{t('quality')}</span> {t('shoe_1')}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">{t('quality_desc')}</p>
        <p className="mt-6 lg:max-w-lg info-text">{t('quality_desc2')}</p>
        <div className="mt-11">
          <Button label={t('view_details')} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality

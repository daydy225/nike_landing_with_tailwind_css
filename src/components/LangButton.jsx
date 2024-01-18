import { useState } from 'react'
import { languages } from '../constants'
import { useTranslation } from 'react-i18next'

const LangButton = () => {
  const [selectedLang, setSelectedLang] = useState('French')
  const [showOptions, setShowOptions] = useState(false)
  const { i18n } = useTranslation()

  const changeLanguage = language => {
    i18n.changeLanguage(language)
  }

  const handleLangChange = lang => {
    setSelectedLang(lang)
    changeLanguage(lang === 'English' ? 'en' : 'fr')
    setShowOptions(false)
    // You can add any additional logic here when the language changes
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="py-2 px-3 rounded-md border-2 border-gray-300 text-sm focus:outline-none focus:border-2 focus:border-coral-red"
      >
        {selectedLang === 'French' ? 'Français' : selectedLang}
      </button>
      {showOptions && (
        <div className="absolute mt-1 p-2 bg-white border rounded-md text-sm text-gray-400 shadow-md">
          {languages.map((lang, index) => (
            <ButtonOption
              key={index}
              selectedLang={selectedLang}
              handleLangChange={handleLangChange}
              langValue={lang}
            />
          ))}
          {/* Add more language options as needed */}
        </div>
      )}
    </div>
  )
}

const ButtonOption = ({ selectedLang, handleLangChange, langValue }) => {
  return (
    <button
      type="button"
      onClick={() => handleLangChange(langValue)}
      className={
        selectedLang === langValue
          ? 'text-coral-red font-semibold hover:translate-x-1 transition-transform duration-200'
          : `hover:text-coral-red hover:translate-x-1 transition-transform duration-200`
      }
    >
      {langValue === 'French' ? 'Français' : langValue}
    </button>
  )
}

export default LangButton

import { ChangeEvent, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export const useLanguage = () => {
  const [language, setLanguage] = useState<string>('en')
  const [t, i18n] = useTranslation("global")

  //to save selected language to localStorage
  const saveToLocalStorage = (language: string) => {
    localStorage.setItem('language', JSON.stringify(language));
  }

  //get selected language from localStorage
  const loadFromLocalStorage = () => {
    const selectedLanguage = localStorage.getItem('language');
    return selectedLanguage ? JSON.parse(selectedLanguage) : null;
  }

  useEffect(() => {
    const getLanguage = loadFromLocalStorage();
    setLanguage(getLanguage)
  }, [language])

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  const handleLanguage = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage)
    saveToLocalStorage(selectedLanguage)
  }

  return { language, handleLanguage, t }
}

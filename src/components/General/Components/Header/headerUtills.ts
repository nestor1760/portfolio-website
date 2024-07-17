import { TFunction } from "i18next"
import { AppDispatch } from "../../../../store"
import { setShow } from "../../../../store/modalSlice"
import { TMenuData } from "./interface"

export const showModal = (dispatch: AppDispatch): void => {
  dispatch(setShow({ show: true, scroll: true }))
}

export const menuData = (t: TFunction): TMenuData[] => {
  const menuData = [
    { label: t("header.home"), part: 'home' },
    { label: t("header.about"), part: 'about_me' },
    { label: t("header.skills"), part: 'skills' },
    { label: t("header.work"), part: 'projects' }
  ];

  return menuData
}
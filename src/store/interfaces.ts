import { TItem } from "../data/interface"

//for modalSlice.ts
export interface ISidebarState {
  scroll: boolean,
  sidebar: boolean,
}

export interface IModalFormState {
  show: boolean,
  scroll: boolean,
}

export type ModalState = {
  scroll: boolean,
  sidebar: boolean,
  show: boolean
}

//for switcherSlice.ts
export interface ISwitcherState {
  switcher: boolean,
}

//for technologySlice.ts

export type TechState = {
  data: TItem[],
  loading: boolean,
  error: boolean | string,
}

//for cookie slice
export type TCookieConsentState = {
  showCookie: boolean | null,
};
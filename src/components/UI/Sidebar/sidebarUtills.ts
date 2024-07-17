import { TFunction } from "i18next";
import { TSidebarData } from "./interface";

import { FaAddressBook } from 'react-icons/fa';
import { BiFolder } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

export const SidebarUtills = (t: TFunction) => {
  const menuData: TSidebarData[] = [
    { label: t("header.home"), part: 'home', icon: FaHome },
    { label: t("header.about"), part: 'about_me', icon: FaAddressBook },
    { label: t("header.skills"), part: 'skills', icon: BiCodeAlt },
    { label: t("header.work"), part: 'projects', icon: BiFolder }
  ];

  return { menuData }
}
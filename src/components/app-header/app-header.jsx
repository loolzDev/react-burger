import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import headerStyles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <nav className={headerStyles.navigation}>
        <ul className={headerStyles.list}>
          <li className={`${headerStyles.item} p-4`}>
            <a className={headerStyles.link} href="#">
              <BurgerIcon type="primary" />
              Конструктор
            </a>
          </li>
          <li className={`${headerStyles.item} pb-4 pt-4 pl-5 pr-5 text_color_inactive`}>
            <a className={headerStyles.link} href="#">
              <ListIcon type="secondary" />
              Лента заказов
            </a>
          </li>
          <li className={headerStyles.logo}>
            <a className={headerStyles.link} href="#">
              <Logo />
            </a>
          </li>
          <li className={`${headerStyles.item} pb-4 pt-4 pl-5 pr-5 text_color_inactive`}>
            <a className={headerStyles.link} href="#">
              <ProfileIcon type="secondary" />
              Личный кабинет
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;

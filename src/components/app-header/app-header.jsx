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
            <BurgerIcon type="primary" />
            Конструктор
          </li>
          <li className={`${headerStyles.item} pb-4 pt-4 pl-5 pr-5 text_color_inactive`}>
            <ListIcon type="secondary" />
            Лента заказов
          </li>
          <li className={headerStyles.logo}>
            <Logo />
          </li>
          <li className={`${headerStyles.item} pb-4 pt-4 pl-5 pr-5`}>
            <button className={`${headerStyles.button} text_color_inactive`}>
              <ProfileIcon type="secondary" />
              Личный кабинет
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;

import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import tabsStyles from "./tabs.module.css";
import { TABS } from "../../constants";

const Tabs = ({ currentTab }) => {
  return (
    <nav className="mb-10">
      <ul className={tabsStyles["tabs"]}>
        {TABS.map((ingredient, idx) => (
          <li key={idx} className={tabsStyles.item}>
            <Tab active={ingredient.type === currentTab}>{ingredient.title}</Tab>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Tabs.propTypes = { currentTab: PropTypes.string.isRequired };

export default Tabs;

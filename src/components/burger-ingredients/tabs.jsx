import { useSelector } from "react-redux";

import tabsStyles from "./tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const Tabs = () => {
  const { ingredientTypes, currentTab } = useSelector((store) => store.ingredients);
  return (
    <nav className="mb-10">
      <ul className={tabsStyles["tabs"]}>
        {ingredientTypes.map((ingredient, idx) => (
          <li key={idx} className={tabsStyles.item}>
            <Tab active={currentTab === ingredient.title}>{ingredient.title}</Tab>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;

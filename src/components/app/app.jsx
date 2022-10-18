import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import appStyles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
    <>
      <div className={`${appStyles.app} text_type_main-default`}>
        <AppHeader />
        <main className={`${appStyles.main} pt-10 pb-5 pl-4 pr-4`}>
          <h2 className={`${appStyles.title} text text_type_main-large`}>Соберите бургер</h2>
          <DndProvider backend={HTML5Backend}>
            <div className={appStyles["main-content"]}>
              <BurgerIngredients />
              <BurgerConstructor />
            </div>
          </DndProvider>
        </main>
      </div>
    </>
  );
}

export default App;

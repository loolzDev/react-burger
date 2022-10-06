import { useState, useEffect } from "react";

import appStyles from "./app.module.css";
import { getIngredients } from "../../utils/burger-api";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  useEffect(() => {
    getIngredients()
      .then((res) => {
        setState({
          hasError: false,
          ingredients: [...res.data],
          burgerData: { ...getBurgerData(res.data) },
        });
      })
      .catch(() =>
        setState({
          ...state.ingredients,
          ...state.burgerData,
          hasError: true,
        })
      );
  }, []);

  const [modalData, setModalData] = useState({
    isOpen: false,
    type: "",
  });

  const [state, setState] = useState({
    hasError: false,
    ingredients: [],
    burgerData: { bun: { name: "", price: 0, image_mobile: "" }, mainIngredients: [] },
  });

  const getBurgerData = (ingredients) => {
    const data = {
      bun: null,
      mainIngredients: [],
    };

    ingredients.forEach((item) => {
      if (!data.bun && item.type === "bun") {
        data.bun = item;
      }
      item.type !== "bun" && data.mainIngredients.push(item);
    });

    return data;
  };

  const showModal = (modalType) => {
    setModalData({
      ...modalData,
      isOpen: true,
      type: modalType,
    });
  };

  const closeModal = () => {
    setModalData({
      ...modalData,
      isOpen: false,
      type: "",
    });
  };

  return (
    <>
      <div className={`${appStyles.app} text_type_main-default`}>
        <AppHeader />
        {!state.hasError ? (
          <main className={`${appStyles.main} pt-10 pb-5 pl-4 pr-4`}>
            <h2 className={`${appStyles.title} text text_type_main-large`}>Соберите бургер</h2>
            <div className={appStyles["main-content"]}>
              <BurgerIngredients
                ingredients={state.ingredients}
                modalData={modalData}
                onClose={closeModal}
                showModal={showModal}
              />
              <BurgerConstructor
                burgerIngredients={state.burgerData}
                modalData={modalData}
                onClose={closeModal}
                showModal={showModal}
              />
            </div>
          </main>
        ) : (
          <div>Упс, что-то пошло не так</div>
        )}
      </div>
    </>
  );
}

export default App;

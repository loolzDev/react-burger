import { useState, useEffect } from "react";
import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

function App() {
  useEffect(() => {
    const baseUrl = "https://norma.nomoreparties.space/api/ingredients";
    fetch(baseUrl)
      .then((res) => res.json())
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
    data: {},
    identifier: "",
    title: "",
    classModifier: "",
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

  const handleClickIngredient = (ingredient) => {
    setModalData({
      ...modalData,
      isOpen: true,
      type: "details",
      data: ingredient,
      title: "Детали ингредиента",
      classModifier: "ingredient-details",
    });
  };

  const handleClickOrderButton = () => {
    setModalData({
      ...modalData,
      isOpen: true,
      type: "order",
      identifier: "034536",
      classModifier: "order-details",
    });
  };

  const closeModal = () => {
    setModalData({
      ...modalData,
      isOpen: false,
      type: "",
      identifier: "",
      title: "",
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
              <BurgerIngredients ingredients={state.ingredients} onClick={handleClickIngredient} />
              <BurgerConstructor
                burgerIngredients={state.burgerData}
                onClick={handleClickOrderButton}
              />
            </div>
          </main>
        ) : (
          <div>Упс, что-то пошло не так</div>
        )}
      </div>

      {modalData.isOpen && (
        <>
          <Modal
            title={modalData.title}
            classModifier={modalData.classModifier}
            onCloseModal={closeModal}
          >
            {modalData.type === "order" ? (
              <OrderDetails identifier={modalData.identifier} />
            ) : (
              <IngredientDetails details={modalData.data} />
            )}
          </Modal>
        </>
      )}
    </>
  );
}

export default App;

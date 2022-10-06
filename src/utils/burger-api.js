const BASE_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getIngredients = () => {
  return fetch(`${BASE_URL}/ingredients`).then((res) => checkResponse(res));
};

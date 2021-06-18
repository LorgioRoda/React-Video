const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state, //traemos el estado que ya tenemos
        mylist: [...state.mylist, action.payload], //traemos el elemento que vamos actualizar, traemos los elementos que contenga y ultimo valor el objeto que vamos a guardar en la lista
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload), //comparar la desigualdad si tenemos o no el item
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case "GET_SEARCH_VIDEO":
      if (action.payload === "") return { ...state, searchResult: [] };

      const list = [...state.trends, ...state.originals];

      return {
        ...state,
        searchResult: list.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default reducer;

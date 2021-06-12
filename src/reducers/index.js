const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state, //traemos el estado que ya tenemos
        mylist: [...state.mylist, action.payload], //traemos el elemento que vamos actualizar, traemos los elementos que contenga y ultimo valor el objeto que vamos a guardar en la lista
      };
    default:
      return state;
  }
};

export default reducer;

import { createStore } from "redux";
import { rootReducer } from "../Reducers"

export const store = createStore(
    rootReducer,
    window._REDUX_EXTENSTION&&window._REDUX_DEVTOOLS_EXTENSION__()
    );


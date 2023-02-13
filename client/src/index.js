import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import DeviceStore from "./app/store/DeviceStore";
import UserStore from "./app/store/UserStore";

export const Context = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            device: new DeviceStore()
        }}
    >
        <App />
    </Context.Provider>
);

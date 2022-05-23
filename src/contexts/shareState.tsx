import React from "react";
import { IShareStateContext } from "../interfaces/context.I";

const MyContentx = React.createContext<IShareStateContext>({
    sharedState: null,
    setSharedState: () => void 0,
});

export const ShareStateContext: React.FC = ({children}) => {
    const [sharedState, setSharedState] = React.useState(null);
    return <MyContentx.Provider value={{sharedState, setSharedState}}>{children}</MyContentx.Provider>;
};

export const useSharedState = ()=> {
    const context = React.useContext(MyContentx);
    if (!context) console.error("useSharedState: context is not defined");
    const {sharedState, setSharedState} = context;
    return {sharedState, setSharedState};
}
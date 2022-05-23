export interface IShareStateContext {
    sharedState: object | null;
    setSharedState: React.Dispatch<React.SetStateAction<null>>
};
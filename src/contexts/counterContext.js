import { createContext, useReducer, useState } from "react";
export const CounterContext = createContext({
    count: 0,//getter
    decrement: () => null,
    increment: () => null,
    reset: () => null
});

const INITIAL_STATE = {
    count: 0,
   
}

export const COUNTER_ACTION_TYPES={
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
};
export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return {
                ...state, //copy all members from state
                count: state.count + 1,
            };
        case COUNTER_ACTION_TYPES.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case COUNTER_ACTION_TYPES.RESET:
            return { ...state, count: 0 }
        default:
            return { ...state };
        // throw new Exception('Invalid type action')
    }
}

export default function CounterProvider(props) {
    const [{ count}, dispatch] = useReducer(counterReducer, INITIAL_STATE);
    const decrement = () => { dispatch({ type: COUNTER_ACTION_TYPES.DECREMENT }); };
    const increment = () => { dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT }); };
    const reset = () => { dispatch({ type: COUNTER_ACTION_TYPES.RESET }); };


    const values = { count, decrement, increment, reset };
    return (
        <CounterContext.Provider value={values}>
            {props.children}
        </CounterContext.Provider>
    )
}

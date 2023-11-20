import { createContext, useReducer, useState } from "react";
export const CounterContext = createContext({
    count: 0,//getter
    decrement: () => null,
    increment: () => null,
    reset: () => null
});

const INITIAL_STATE = {
    count: 0,
    title: "Counter #"
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
    const [{ count, title }, dispatch] = useReducer(counterReducer, INITIAL_STATE);
    //action realizations
    const decrement = () => { dispatch({ type: COUNTER_ACTION_TYPES.DECREMENT }); };
    const increment = () => { dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT }); };
    const reset = () => { dispatch({ type: COUNTER_ACTION_TYPES.RESET }); };

    const values = { count, title, decrement, increment, reset };
    return (
        <CounterContext.Provider value={values}>
            {props.children}
        </CounterContext.Provider>
    )
}

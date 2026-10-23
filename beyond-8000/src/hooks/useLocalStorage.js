import { useState } from "react";

export default function useLocalStorage(key, initialState){
    const [state, setState] = useState(()=>{
        const persistedState = localStorage.getItem(key)

        if(persistedState){
            return JSON.parse(persistedState)
        }
        return initialState
    })

    const setPersistedState = (value) => {
        let result = value

        if(typeof value === 'function'){
            result = value(state)
        }

        localStorage.setItem(key, JSON.stringify(result))

        setState(result)
    }

    return [state, setPersistedState]
}
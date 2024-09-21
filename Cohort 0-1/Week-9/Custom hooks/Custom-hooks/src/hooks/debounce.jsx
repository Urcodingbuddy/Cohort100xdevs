import { useEffect, useState } from 'react'
const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return () => clearTimeout(timerId)
         // this will stops the values to wait the last key Stroke was hit 
    }, [value, delay]);
    return debounceValue;
}
export default useDebounce;

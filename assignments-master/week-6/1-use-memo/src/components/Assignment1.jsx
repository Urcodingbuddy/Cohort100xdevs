import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState();
    // Your solution starts here
    const expensiveValue = useMemo(() => {
        let value = 1;
        if (typeof input === "number" && input > 0) {
            for (let i = 1; i <= input; i++) {
                value = value * i;
            }
        } 
        return value;   // Your solution ends here
    },[input])

    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value === "" ? "" : Number(e.target.value))}
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}
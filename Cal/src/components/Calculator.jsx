import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (label) => {
        if (label === "=") {
            try {
                setInput(eval(input).toString());
            } catch {
                setInput("Error");
            }
        } else if (label === "C") {
            setInput("");
        } else {
            setInput(input + label);
        }
    };

    const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"];

    return (
        <div className="calculator">
            <Display value={input} />
            <div className="buttons">
                {buttons.map((label) => (
                    <Button key={label} label={label} onClick={handleClick} />
                ))}
            </div>
        </div>
    );
};

export default Calculator;

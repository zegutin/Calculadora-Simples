import { useState } from "react"
import { Button } from "./Button"
import Styles from "./Calculadora.module.css"

export const Calculator = () => {
    const [result, setResult] = useState(0)
    const [oldNum, setOldNum] = useState()
    const [operator, setOperator] = useState()

    const handleClick = (e) => {
        let numbers = e.target.value
        if (result === 0) {
            setResult(numbers)
        }else {
            setResult(result + numbers)
        }
    }

    const resultHandler = () => {
        if (result > 0) {
            setResult(-result)
        } else {
            setResult(Math.abs)
        }
    }

    const operatorHandler = (e) => {
        var operatorInput = e.target.value
        setOperator(operatorInput)
        setOldNum(result)
        setResult("")
    }
    
    let calculator = () => {
        if( operator === "/" ) {
            setResult(oldNum / result)
        }else if( operator === "+" ) {
            setResult(Number(oldNum) + Number(result))
        }else if( operator === "-" ) {
            setResult(oldNum - result)
        }else if( operator === "X" ) {
            setResult(oldNum * result)
        }
    }
    return (
        <>
            <div className={Styles.result}>
                <h1>{result}</h1>
            </div>
            <div className={Styles.calculator}>
                <Button
                    i="AC"
                    onClick={() => setResult(0)}
                    color="button gray"
                />
                <Button
                    i="+/-"
                    onClick={resultHandler}
                    color="button gray" />
                <Button
                    i="%"
                    onClick={() => setResult(result / 100)}
                    color="button gray" />
                <Button
                    i="/"
                    onClick={operatorHandler}
                    value={"/"}
                    
                    color="button gray" />
                <Button
                    i="7"
                    value={7}
                    onClick={handleClick}
                    color="button"
                />
                <Button
                    i="8"
                    value={8}
                    onClick={handleClick}
                    color="button" />
                <Button
                    i="9"
                    value={9}
                    onClick={handleClick}
                    color="button" />
                <Button
                    i="X"
                    onClick={operatorHandler}
                    value="X"
                    color="button gray" />
                <Button
                    i="4"
                    value={4}
                    onClick={handleClick}
                    color="button" />
                <Button
                    i="5"
                    value={5}
                    onClick={handleClick}
                    color="button" />
                <Button
                    i="6"
                    value={6}
                    onClick={handleClick}
                    color="button" />
                <Button
                    i="-"
                    value="-"
                    onClick={operatorHandler}
                    color="button gray" />
                <Button
                    i="1"
                    value={1}
                    onClick={handleClick}
                    color="button" />
                <Button
                    i="2"
                    value={2}
                    onClick={handleClick}
                    color="button" />
                <Button
                    i="3"
                    value={3}
                    onClick={handleClick}
                    color="button" />
                <Button
                    i="+"
                    value="+"
                    onClick={operatorHandler}
                    color="button gray" />
                <Button
                    i="0"
                    value={0}
                    onClick={handleClick}
                    color="button zero" />
                <Button
                    i="."
                    value={"."}
                    onClick={handleClick}
                    color="button" />
                <Button
                    i="="
                    onClick={calculator}
                    color="button purple" />
            </div>
        </>
    )
}
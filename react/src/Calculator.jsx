import {useState} from "react";
import {useEffect} from "react";

const Calculator = () => {

	// for current running total
	const [result, setResult] = useState(0)

	// for current number being input
	const [value, setValue] = useState('')

	// store the previous and current operators
	const [operation, setOperation] = useState(null)
	const [prevOperation, setPrevOperation] = useState(null)

	const add = () => {
		setResult(result + Number(value))
	}
	const subtract = () => {
		setResult(result - Number(value))
	}
	const multiply = () => {
		setResult(result * Number(value))
	}
	const divide = () => {
		if (value === '0') {
			setResult("Division by zero is not allowed")
		}
		setResult(result / Number(value))
	}

	const inputDigit = (digit) => {
		setValue(value + digit)
	}

	const equals = () => {

	}
	// FIXME re-render is not triggered if operator is the same for a 2nd time in a row
	useEffect(() => {
		console.log(prevOperation);
		console.log(operation);
		if (prevOperation === 'add') {
			add()
		}
		if (prevOperation === 'subtract') {
			subtract()
		}
		if (prevOperation === 'multiply') {
			multiply()
		}
		if (prevOperation === 'divide') {
			divide()
		}
		setValue('')

		setPrevOperation(operation)
	}, [operation])

	return (
		<div>
			<div className="page-grid">
				<div className="screen">
					{value}
				</div>
				<div className="buttons-grid">
					<div className="numbers-grid">
						<button id="7" onClick={()=>inputDigit('7')}>7</button>
						<button id="8" onClick={()=>inputDigit('8')}>8</button>
						<button id="9" onClick={()=>inputDigit('9')}>9</button>
						<button id="4" onClick={()=>inputDigit('4')}>4</button>
						<button id="5" onClick={()=>inputDigit('5')}>5</button>
						<button id="6" onClick={()=>inputDigit('6')}>6</button>
						<button id="1" onClick={()=>inputDigit('1')}>1</button>
						<button id="2" onClick={()=>inputDigit('2')}>2</button>
						<button id="3" onClick={()=>inputDigit('3')}>3</button>
						<button id="decimal" onClick={()=>inputDigit('.')}>.</button>
						<button id="0"  onClick={()=>inputDigit('0')}>0</button>
						<button id="neg">+/-</button>
					</div>
					<div className="operations-grid">
						<button onClick={()=>setOperation('divide')} id="div">/</button>
						<button onClick={()=>setOperation('multiply')} id="multiply">x</button>
						<button onClick={()=>setOperation('subtract')} id="sub">-</button>
						<button onClick={()=>setOperation('add')} id="add">+</button>
					</div>
					<div className="function-grid">
						<button id="clear-all" onClick={()=>setResult(0)}>C/E</button>
						<button id="clear" onClick={()=>setValue('')}>CLEAR</button>
						<button id="equals" onClick={equals}>=</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
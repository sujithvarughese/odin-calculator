import {useState} from "react";
import {useEffect} from "react";

const Calculator = () => {

	// for current running total
	const [result, setResult] = useState(0)

	// for current number being input
	const [value, setValue] = useState('')

	useEffect(()=> {
		setValue('0')
	}, [result])

	const add = () => {
		setResult(result + Number(value))
	}
	const subtract = (value) => {
		setResult(result - Number(value))
	}
	const multiply = (value) => {
		setResult(result * Number(value))
	}
	const divide = (value) => {
		if (value === '0') {
			setResult("Division by zero is not allowed")
		}
		setResult(result / Number(value))
	}


	const inputDigit = (digit) => {
		setValue(value + digit)
	}
	console.log(result);

	return (
		<div>
			<div className="page-grid">
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
						<button id="C/E" onClick={()=>setValue('0')}>CLEAR</button>
						<button id="0"  onClick={()=>inputDigit('0')}>0</button>
						<button id="neg">+/-</button>
					</div>
					<div className="operations-grid">
						<button onClick={divide} id="div">/</button>
						<button onClick={multiply} id="multiply">x</button>
						<button onClick={subtract} id="sub">-</button>
						<button onClick={add} id="add">+</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
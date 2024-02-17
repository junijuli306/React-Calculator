import React from 'https://esm.sh/react@18.2.0'
import './react-calculator.css';

let equation = " ";
let result = 0;
const testRegex = /=/;
const testRegex2 = /[*|/|+|-][*|/|+]/;


export class Calculator extends React.Component {
  constructor(props) {
    super(props);
  
    
    this.state = {
      equation2: " ",
      result2: " "
    };
    
    this.handleClick = this.handleClick.bind(this);
    
  }
  
 

handleClick (event) {
  
  if (event === "=") {
    
  let match = testRegex2.exec(equation);
  if (match) {
  let i = match.index;
  let betterEquation = equation.replace(equation[i], "");
  result = eval(betterEquation);
} else {
  result = eval(equation);
}
  equation = equation + "=" + result;
this.setState ({
  equation2: equation,
  result2: result
});
  } 
  else if (event === "AC") {
    equation =  " ";
      result = 0;
   this.setState ({
     equation2: equation,
     result2: result
   });
  } else if (testRegex.test(equation)) {
      equation = result + event;
      this.setState ({
        equation2: equation
      }); 
    
  }
  else { 
  equation += event;
   this.setState({
     equation2: equation
   });
  }

  } 
    
  
  render() {
    return (
      <div id="calculator">
        <div id="container2">
        <div className="first row">
          <div id="display" className="item">{this.state.equation2}<br/>{this.state.result2}</div>
        </div>
        <div className="second row">
          <div id="clear" className="item" onClick={() => this.handleClick('AC')}>AC</div>
          <div id="divide" className="item" onClick={() => this.handleClick('/')}>/</div>
          <div id="multiply" className="item" onClick={() => this.handleClick('*')}>*</div>
        </div>
        <div className="third row">
          <div id="seven" className="item" onClick={() => this.handleClick('7')}>7</div>
          <div id="eight" className="item" onClick={() => this.handleClick('8')}>8</div>
          <div id="nine" className="item" onClick={() => this.handleClick('9')}>9</div>
          <div id="subtract" className="item" onClick={() => this.handleClick('-')}>-</div>
        </div>
        <div className="fourth row">
          <div id="four" className="item" onClick={() => this.handleClick('4')}>4</div>
          <div id="five" className="item" onClick={() => this.handleClick('5')}>5</div>
          <div id="six" className="item" onClick={() => this.handleClick('6')}>6</div>
          <div id="add" className="item" onClick={() => this.handleClick('+')}>+</div>
        </div>
        <div className="fifth row">
          <div id="one" className="item" onClick={() => this.handleClick('1')}>1</div>
          <div id="two" className="item" onClick={() => this.handleClick('2')}>2</div>
          <div id="three" className="item" onClick={() => this.handleClick('3')}>3</div>
          <div id="equals" className="item" onClick={() => this.handleClick('=')}>=</div>
        </div>
        <div className="sixth row">
          <div id="zero" className="item" onClick={() => this.handleClick('0')}>0</div>
          <div id="decimal" className="item" onClick={() => this.handleClick('.')}>.</div>
        </div>
        </div>
        </div>
    )
  }
  }


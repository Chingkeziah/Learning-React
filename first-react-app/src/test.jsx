// rfce react functional component export
// rcce react class component export

// jsx allows us to write both html and js in one file without an issue
// jsx = javascript xml extended markup language


import continent, {kez, car, add} from "./test"

// import * as custom from "./test"
// in this situation, you use the name attached to all the imports.the name of the variable we are importing

function App() {
  // create a variable
  const fellow = 'Keziah Ching'
  const customCode = {
    color: 'darkcyan',
    fontSize: '30px',
    border: '1px solid black'
  }

  return (
 
    //  initialized the variable
    <div>
      <h1 className="heading">Hi there! My name is {fellow}</h1>
      <p style={customCode}>I am from {continent} React!!!</p>
      <p>{kez}</p>
      <p>I have {add()} {car}</p>
      <p></p>

    </div>
  )
}
// inovoking the function only where we need it
// diff btw js statement and js expression
// an expression is something that would evaluate into a value e.g the return value from a function
// a statement is a command or instruction to do something e.g a function or an if else statement



// babel is a compiler that compiles jsx into a readable file for the browser
export default App





// <></> called fragments and allow you to create multiple elements in react
// components allow you to break down your code into small reusable bits
export default class test extends Component {
  render() {
    return (
      <>
        <h1>This is a class component</h1>
      </>
    )
  }
}



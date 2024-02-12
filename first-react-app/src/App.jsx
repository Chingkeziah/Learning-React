// rfce react functional component export
// rcce react class component export

// jsx allows us to write both html and js in one file without an issue
// jsx = javascript xml extended markup language
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
      <p style={customCode}>I am now learning React!!!</p>
    </div>
  )
}

// diff btw js statement and js expression
// an expression is something that would evaluate into a value e.g the return value from a function
// a statement is a command or instruction to do something e.g a function or an if else statement



// babel is a compiler that compiles jsx into a readable file for the browser
export default App

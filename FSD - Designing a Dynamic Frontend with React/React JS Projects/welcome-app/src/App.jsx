
function HeaderComponent() {
  return <h2>This is my Header Component</h2>
}

function FooterComponent() {
  return <h2>This is my Footer Component</h2>
}

function ButtonComponent() {
  return <button>Click Me</button>
}

function EmployeeComponent() {
  let name = "Akash";       // JS Code 

  return(
    <div>
        <p>My Name is {name}</p>
    </div>
  )
}
function App(){

  //return <div>Welcome to React JS created by Akash</div>
  // return <div>Welcome to React JS</div>
  //       <p>Welcome to React JS once again</p>

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Welcome to React JS</h1>
      <p>Today we are learning React JS</p>
      <EmployeeComponent></EmployeeComponent>
      <ButtonComponent></ButtonComponent>
      <FooterComponent></FooterComponent>
    </div>
  )

}

export default App;
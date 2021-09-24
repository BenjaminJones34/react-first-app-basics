// import './App.css';

// // const App = () => {
// //   return (
// //     <div>
// //       <h1>Hello!</h1>
// //       <Person name="Benj" age="too old" />
// //       <Job job="junior developer" petName="Dexter" type="dog" />
// //     </div>
// //   );
// // }

// // const Person = (props) => {
// //   return (
// //     <div>
// //       <p> Hi I'm {props.name} and I am {props.age} </p>
// //       < Pet petName={props.petName} type={props.type} />
// //     </div>
// //   )
// // }

// // const Job = (props) => {
// //   return (
// //     <div>
// //       <p> I'm a {props.job} </p>
// //     </div>
// //   )
// // }

// // const Pet = (props) => {
// //   return (
// //     <div>
// //       <p> Hi my name is {props.petName} and I am a {props.type} </p>
// //     </div>
// //   )
// // }

// //states
// // // no1
// // import { useState } from "react"

// // const App = () => {
// //   //const [count, setCount] = useState("This is the hook value")
// //   const [count, setCount] = useState(0)

// //   const handleClick =() => {
// //     setCount(count + 1)
// //   }

// //   return (
// //     <div>
// //       <h1 onClick={handleClick}>{count}</h1>
// //     </div>
// //   )
// // }

// // no2
// import { useState } from "react"

// const App = () => {
//   const [persons, setPersons] = useState([{name: "benj"}, {name: "smelly"}])

//   const handleClick = (name) => {
//     console.log("Hello " + name)
//   }

//   return (
//     <div>
//       <Person name={persons[0].name} click={handleClick} />
//       <Person name={persons[1].name} click={handleClick} />
//     </div>
//   )
// }

// const Person = (props) => {
//   const handleClick = () => { //you can only send in functions as a reference, otherwise it runs it immediately when loaded in
//     props.click(props.name)
//   }
//   return <h4 onClick={handleClick}>{props.name}</h4>
// }

// export default App;

import "./App.css"
import { useState } from "react"

const App = () => {
    const [darkMode, setDarkMode] = useState(true)

    if (darkMode) {
        return (
            <div className="darkMode">
                <h1>Welcome</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>You are not welcome</h1>
            </div>
        )
    }
}

export default App
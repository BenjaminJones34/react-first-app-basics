import { useState } from "react"

const App = () => {
    const [darkMode, setDarkMode] = useState(false)

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
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AccountContext } from "./AccountContext"

function NewPasswordForm() {
    let { account, setAccount, saveAccountToCookie } = useContext(AccountContext)
    let [ form, setForm ] = useState({})

    const handleChange = (e) => {
        let formCopy = Object.assign({}, form)

        formCopy[e.target.name] = e.target.value

        setForm(formCopy)
    }

    let [ editable, setEditable ] = useState(false);

    const changeAccDetails = () => {
        if (account === null) {
            alert("Nie jestes zalogowany!")
            return;
        }

        if (account.password !== form.current) {
            alert("Wprowadzone obecne hasło jest nieprawidłowe.")
            return;
        }

        if (form.new !== form.repeat) {
            alert("Hasła różnią sie.")
            return;
        }

        let accountCopy = Object.assign({}, account)
        accountCopy["password"] = form.new

        setAccount(accountCopy)
        setEditable(false)

        setForm({})
    }

    const defaultIfEmpty = (str, def) => {
        return (str === "" ? def : str)
    }

    if (editable) {
        return (
            <div>
                <h3>Zmiana hasla</h3>
                <input type="password" name="current" value={form["current"] || ""} onChange={handleChange} placeholder="Obecne haslo" />
                <input type="password" name="new" value={form["new"] || ""} onChange={handleChange} placeholder="Nowe haslo" />
                <input type="password" name="repeat" value={form["repeat"] || ""} onChange={handleChange} placeholder="Powtorz nowe haslo" />
                <button onClick={changeAccDetails} className="btn btn-green">Wyslij</button>
                <button onClick={() => {setEditable(false)}} className="btn btn-red">Anuluj</button>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Zmiana hasla</h3>
                <button className="btn btn-green" onClick={() => {setEditable(true)}}>Zmień</button>
            </div>
        )
    }
}

export default NewPasswordForm
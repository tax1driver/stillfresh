import { useContext, useState } from "react"
import { useCookies } from "react-cookie"
import { Navigate, useNavigate } from "react-router-dom"
import { AccountContext } from "./AccountContext"


function LoginRegister() {
    let { account, setAccount } = useContext(AccountContext)
    let [ form, setForm ] = useState({})


    const handleChange = (e) => {
        let formCopy = Object.assign({}, form)

        formCopy[e.target.name] = e.target.value

        setForm(formCopy)
    }

    let [cookies, setCookie, removeCookie] = useCookies()
    const navigate = useNavigate()

    const loginAccount = () => {
        if (cookies.accounts.hasOwnProperty(form.email) 
            && cookies.accounts[form.email].password == form.password) {
            setAccount(cookies.accounts[form.email])
        }

        navigate("/")
    }

    

    const registerAccount = () => {
        if (cookies.accounts.hasOwnProperty(form.email)) {
            alert("Konto z podanym emailem juz istnieje.")
            return
        }

        let accObj = {
            email: form["r_email"],
            name: form["r_name"],
            password: form["r_pwd"],
            addrStreet: "",
            addrPostcode: "",
            addrAdditional: "",
            addrCity: ""
        }

        setAccount(accObj)

        navigate("/lr/2")
    }

    return (
        <div className="accounts-page">
        <div className="accounts-grid">
            <div className="accounts-col">
                <div className="text-center">
                    <h2 style={{marginTop: 4 + "px"}}>Logowanie</h2>
                </div>

                <div>
                    <input type="email" name="email" value={form["email"] || ""} onChange={handleChange} placeholder="Adres email" />
                    <input type="password" name="password" value={form["password"] || ""} onChange={handleChange} placeholder="Hasło" />
                    <button onClick={loginAccount} className="btn btn-green btn-full">Zaloguj</button>
                </div>
            </div>
            <div className="vertical-divider"></div>
            <div className="accounts-col">
                <div className="text-center">
                    <h2 style={{marginTop: 4 + "px"}}>Rejestracja</h2>
                </div>

                <div>
                    <input type="text" name="r_name" value={form["r_name"] || ""} onChange={handleChange} placeholder="Imię i nazwisko" />
                    <input type="email" name="r_email" value={form["r_email"] || ""} onChange={handleChange} placeholder="Adres email" />
                    <input type="password" name="r_pwd" value={form["r_pwd"] || ""} onChange={handleChange} placeholder="Hasło" />
                    <input type="password" name="r_pwd_repeat" value={form["r_pwd_repeat"] || ""} onChange={handleChange} placeholder="Powtórz hasło" />
                    <button onClick={registerAccount} className="btn btn-green btn-full">Kontynuuj</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LoginRegister
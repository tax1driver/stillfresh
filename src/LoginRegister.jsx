import { useContext, useState } from "react"
import { useCookies } from "react-cookie"
import { Navigate, useNavigate } from "react-router-dom"
import { AccountContext } from "./AccountContext"


function LoginRegister() {
    let { account, setAccount, saveSessionStateCookie } = useContext(AccountContext)
    let [ form, setForm ] = useState({})


    const handleChange = (e) => {
        let formCopy = Object.assign({}, form)

        formCopy[e.target.name] = e.target.value

        setForm(formCopy)
    }

    let [cookies, setCookie, removeCookie] = useCookies()
    const navigate = useNavigate()

    const loginAccount = (e) => {
        e.preventDefault();

        if (cookies.accounts.hasOwnProperty(form.email) 
            && cookies.accounts[form.email].password == form.password) {
            setAccount(cookies.accounts[form.email]);
            navigate("/");
        } else {
            alert("Nieprawidłowe dane.");
            let formCopy = Object.assign({}, form);
            formCopy["password"] = "";

            setForm(formCopy);
        }

        
    }

    

    const registerAccount = (e) => {
        e.preventDefault();

        if (cookies.accounts.hasOwnProperty(form.email)) {
            alert("Konto z podanym emailem juz istnieje.")
            return;
        }

        if (form["r_pwd"] !== form["r_pwd_repeat"]) {
            alert("Podane hasła różnią się.")
            return;
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

        navigate("/acc")
    }

    return (
        <div className="accounts-page">
        <div className="accounts-grid">
            <div className="accounts-col">
                <div className="text-center">
                    <h2 style={{marginTop: 4 + "px"}}>Logowanie</h2>
                </div>

                <form onSubmit={loginAccount}>
                    <input type="email" name="email" required value={form["email"] || ""} onChange={handleChange} placeholder="Adres email" />
                    <input type="password" name="password" required value={form["password"] || ""} onChange={handleChange} placeholder="Hasło" />
                    <input type="submit" className="btn btn-green btn-full" value="Zaloguj"/>
                </form>
            </div>
            <div className="vertical-divider"></div>
            <div className="accounts-col">
                <div className="text-center">
                    <h2 style={{marginTop: 4 + "px"}}>Rejestracja</h2>
                </div>

                <form onSubmit={registerAccount}>
                    <input type="text" name="r_name" required pattern="[a-zA-Z0-9 ]+" value={form["r_name"] || ""} onChange={handleChange} placeholder="Imię i nazwisko" />
                    <input type="email" name="r_email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={form["r_email"] || ""} onChange={handleChange} placeholder="Adres email" />
                    <input type="password" name="r_pwd" required minLength={8} value={form["r_pwd"] || ""} onChange={handleChange} placeholder="Hasło" />
                    <input type="password" name="r_pwd_repeat" required value={form["r_pwd_repeat"] || ""} onChange={handleChange} placeholder="Powtórz hasło" />
                    <input type="submit" className="btn btn-green btn-full" value="Zarejestruj"/>
                </form>
            </div>
        </div>
        </div>
    )
}

export default LoginRegister
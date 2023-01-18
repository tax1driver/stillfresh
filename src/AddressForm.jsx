import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AccountContext } from "./AccountContext"

function AddressForm() {
    let { account, setAccount, saveAccountToCookie } = useContext(AccountContext)
    let [ form, setForm ] = useState({})

    const handleChange = (e) => {
        let formCopy = Object.assign({}, form)

        formCopy[e.target.name] = e.target.value

        setForm(formCopy)
    }

    const navigate = useNavigate()

    const changeAccDetails = () => {
        if (account === null) {
            alert("Nie jestes zalogowany!")
            return
        }

        let accountCopy = Object.assign({}, account)
        accountCopy["addrStreet"] = form.street
        accountCopy["addrAdditional"] = form.additional
        accountCopy["addrPostcode"] = form.postcode
        accountCopy["addrCity"] = form.city

        setAccount(accountCopy)
        saveAccountToCookie()

        navigate("/")
    }


    return (
        <div className="accounts-page">
            <div className="accounts-col">
                <h3>Uzupelnij swoje dane adresowe</h3>
                <input type="text" name="street" value={form["street"] || ""} onChange={handleChange} placeholder="Ulica i numer domu" />
                <input type="text" name="additional" value={form["additional"] || ""} onChange={handleChange} placeholder="Nr mieszkania/klatka/inne" />
                <input type="text" name="postcode" value={form["postcode"] || ""} onChange={handleChange} pattern="^\d{2}-\d{3}$" placeholder="Kod pocztowy" />
                <input type="text" name="city" value={form["city"] || ""} onChange={handleChange} placeholder="Miejscowość" />
                <button onClick={changeAccDetails} className="btn btn-green">Wyslij</button>
            </div>
        </div>
    )
}

export default AddressForm
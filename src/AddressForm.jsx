import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AccountContext } from "./AccountContext"

function AddressForm(props) {
    let { account, setAccount, saveAccountToCookie } = useContext(AccountContext)
    let [ form, setForm ] = useState({})

    const handleChange = (e) => {
        let formCopy = Object.assign({}, form)

        formCopy[e.target.name] = e.target.value

        setForm(formCopy)
    }

    let [ editable, setEditable ] = useState(false);

    useEffect(() => {
        setForm({
            street: account.addrStreet,
            additional: account.addrAdditional,
            postcode: account.addrPostcode,
            city: account.addrCity
        })

    }, [editable])

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
        setEditable(false)
    }

    const defaultIfEmpty = (str, def) => {
        return (str === "" ? def : str)
    }

    if (editable) {
        return (
            <div>
                <h3>Dane adresowe</h3>
                <input type="text" name="street" value={form["street"]} onChange={handleChange} placeholder="Ulica i numer domu" />
                <input type="text" name="additional" value={form["additional"]} onChange={handleChange} placeholder="Nr mieszkania/klatka/inne" />
                <input type="text" name="postcode" value={form["postcode"]} onChange={handleChange} pattern="^\d{2}-\d{3}$" placeholder="Kod pocztowy" />
                <input type="text" name="city" value={form["city"]} onChange={handleChange} placeholder="Miejscowość" />
                <button onClick={changeAccDetails} className="btn btn-green">Zatwierdź</button>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Dane adresowe</h3>
                <div>
                    <b>Ulica i numer domu: </b>
                    <span className="text-secondary">{defaultIfEmpty(account.addrStreet, "Nie podano")}</span>
                </div>
                <div>
                    <b>Mieszkanie/lokal: </b>
                    <span className="text-secondary">{defaultIfEmpty(account.addrAdditional, "Nie podano")}</span>
                </div>
                <div>
                    <b>Miasto: </b>
                    <span className="text-secondary">{defaultIfEmpty(account.addrPostcode, "Nie podano")} {account.addrCity}</span>
                </div>
                <br />
                {props.readonly === undefined ? <button className="btn btn-green" onClick={() => {setEditable(true)}}>Edytuj adres</button> : ""}
            </div>
        )
    }
}

export default AddressForm
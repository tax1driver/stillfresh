import { useContext } from "react"
import AddressForm from "./AddressForm"
import { AccountContext } from "./AccountContext"

function AccountPage(props) {
    let { account, setAccount, saveAccountToCookie } = useContext(AccountContext)

    return (
        <div className="p-15">
            <h1 style={{marginBottom: 4 + "px"}}>Konto</h1>
            <span className="text-secondary">Tutaj mozesz zarzadzac swoim kontem</span>

            <h3>{account.name}</h3>

            <AddressForm />
        </div>
    )
}

export default AccountPage;
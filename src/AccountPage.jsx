import { useContext, useEffect } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import AddressForm from "./AddressForm"
import { AccountContext } from "./AccountContext"
import NewPasswordForm from "./NewPasswordForm"

function AccountPage(props) {
    let { account, setAccount, removeAccount } = useContext(AccountContext)
    const navigate = useNavigate()

    if (account === null)
        return (<Navigate to="/lr"></Navigate>)

    const logout = () => {
        setAccount(null);
        navigate("/");
    }

    const deleteAccount = () => {
        removeAccount();
        navigate("/");
    }

    return (
        <div className="p-15">
            <div className="account-header">
                <h1 style={{marginBottom: 4 + "px"}}>Konto</h1>
                <span className="text-secondary">Tutaj mozesz zarzadzac swoim kontem</span>
            </div>

            <div className="account-page">
                <div>
                    <div>
                        <h3>Dane osobowe</h3>
                        <b>{account.name}</b>
                    </div>
                    <span className="text-secondary">Email: {account.email}</span>
                </div>

                <AddressForm />
                <NewPasswordForm />
                <div>
                    <h3>Zarządzanie</h3>
                    <button className="btn btn-red" onClick={logout}>Wyloguj</button>
                    <button className="btn btn-red" onClick={deleteAccount}>Usuń konto</button>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;
import { useContext } from "react";
import { AccountContext } from "./AccountContext"

function Contact(props) {
    const { account } = useContext(AccountContext);

    const loggedIn = account != null;

    return (
        <div className="p-15">
            <h1 style={{marginBottom: 4 + "px"}}>Kontakt</h1>
            <span className="text-secondary">Uzyj naszego formularza kontaktowego ponizej.</span>

            <div className="contact-form">
                <input type="text" disabled={loggedIn} value={loggedIn ? account.name : undefined} name="name" placeholder="Imię i nazwisko" />
                <input type="email" disabled={loggedIn} value={loggedIn ? account.email : undefined} name="email" placeholder="Adres e-mail" />
                <textarea rows="5" cols="50" placeholder="Treść" />

                <button onClick={() => {alert("Wiadomość została wysłana.")}} className="btn btn-green">Wyślij formularz</button>
            </div>

            <span className="text-secondary">Wiadomosc zwrotna przeslemy na podany adres email.</span>
        </div>
    )
}

export default Contact;
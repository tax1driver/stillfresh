function Contact(props) {
    return (
        <div className="p-15">
            <h1 style={{marginBottom: 4 + "px"}}>Kontakt</h1>
            <span className="text-secondary">Uzyj naszego formularza kontaktowego ponizej.</span>

            <div className="contact-form">
                <input type="text" name="name" placeholder="Imię i nazwisko" />
                <input type="email" name="email" placeholder="Adres e-mail" />
                <textarea rows="5" cols="50" placeholder="Treść" />

                <button className="btn btn-green">Wyślij formularz</button>
            </div>

            <span className="text-secondary">Wiadomosc zwrotna przeslemy na podany adres email.</span>
        </div>
    )
}

export default Contact;
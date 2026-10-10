import { useState } from "react";

function Form () {

const [nome, setNome] = useState();
const [email, setEmail] = useState();

function displayData(e) {
    
    e.preventDefault();
    setNome(e.target[0].value);
    setEmail(e.target[1].value);
    const card = document.querySelector(".card");
    
    if (nome == undefined || nome == "") {
        setNome("sconosciuto");
    }
    if (email == undefined || email == "") {
        setEmail("non pervenuta");
    } /** Perché gli if funzionano a pagina appena caricata ma non dopo aver inserito e cancellato dati? PERCHE' LEGGE IL VALORE PRIMA CHE VENGA MODIFICATO*/
    /**Però allora perché legge subito correttamente nuove stringhe inserite? */

    return card.style.display = "block";
    /** Sicuramente non è il modo più adatto a React per intervenire sul DOM */
}

function closeCard() {

    const card = document.querySelector(".card");
    return card.style.display = "none";
}

    return (
        <>
        <div className="form" >
            <form action="" onSubmit={displayData}>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" placeholder="Mario"/>
                <label htmlFor="e-mail">e-mail</label>
                <input type="email" id="e-mail" placeholder="mario@gmail.com"/>
                <button type="submit" >Invia</button>
            </form>
            <div className="card">
                <p><span>Nome</span>: {nome}</p>
                <p><span>e-mail</span>: {email}</p>
                <button type="button" onClick={closeCard}>X</button>
            </div>
        </div>
        </>
    )
}

export default Form
import List from "./List";
import Counter from "./Counter";
import Form from "./Form";

function Header({lists}){

    return (
    <>
    <header>
        <div className="title">
            <h1>Modulo 2 esercizio 3: state managment</h1>
        </div>
        {/* <div>
            <List lists={lists} />
        </div> */}
        <Counter />
        <Form />
    </header>
    </>
    )
}

export default Header

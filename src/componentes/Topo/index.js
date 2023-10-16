import './style.css';

export default function Header({tema, alteraTema}){
    function alteraNome () {
        return tema ? "Light" : "Dark";
    }

    return(
        <header className={tema ? "dia" : "noite"}>
            <div className={tema ? "dia" : "noite"} id="encaixe">
                <div id="logo"></div>
                <button className={tema ? "dia" : "noite"} id="tema" onClick={alteraTema}>
                    <div id={tema ? "dia" : "noite"}></div>
                    <p className={tema ? "dia" : "noite"} id="nome">{alteraNome()}</p>
                </button>
            </div>
        </header>
    )
}
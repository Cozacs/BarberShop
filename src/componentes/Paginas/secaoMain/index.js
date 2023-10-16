import './style.css';
import Banner from '../secaoBanner';

export default function LandingPage({tema}) {
    return(
        <main  className={tema ? "dia" : "noite"}>
            <Banner />
            <section className="Info">
                <h1>Bem-vindo a Barber Shop</h1>
                <p><strong>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</strong></p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                <p id="assinatura">S. Kelly</p>
            </section>
        </main>       
    );
}
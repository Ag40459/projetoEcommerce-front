import { CardCategory } from '../../components/CardCategory/CardCategory';
import './home.css';


function Initial() {

  return (
    <div className='container-initial'>
      <div className='container-initial-title'>
        <h1>
          Uma nova forma de Comprar
        </h1>
        <h3>
          Tenha um encontro hoje em sua cidade, escolha sua categoria
        </h3>
      </div>
      <div className='container-initial-cards'>
        <CardCategory
        />
      </div>
      <div className='container-initial-information'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque perferendis rerum, eos cupiditate obcaecati quia, aliquam quisquam illo nam possimus culpa impedit debitis? Voluptates ex et sequi praesentium, amet omnis harum aliquid fuga nobis unde! Quibusdam suscipit laborum commodi dolor doloribus, sunt, non voluptatem, ut ullam fugit laboriosam facilis aspernatur? Sit, debitis. Blanditiis, itaque aliquid ducimus praesentium delectus nesciunt.
        </p>
      </div>
      <footer>
        <a href="">Termos e Condições</a>
        <a href="">Politica de Privacidade</a>
        <a href="">Fale Conosco</a>
        <a id='end' href="">Promover seus Anúncios</a>

      </footer>
    </div>
  )
}

export default Initial;
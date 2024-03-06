import './Atracao.css'
import imgNotFound from '../../assets/img-not-found.png';

function Atracao() {

    return (
        <div className='ctn-atracao'>
            
            <img src={imgNotFound} />
            <p>Lorem Ipsun</p>
        </div>
    );
}

export default Atracao;
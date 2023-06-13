import './Equipe.css'
import Profissional from '../Profissionais'


const Equipe = (props)=> {
    return(
        <section className='equipe' style={{backgroundColor: props.corSecundaria}}>
        
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            
            {props.profissionais.map(profissional =><Profissional/> )}


            
        </section>
    )
    
}
export default Equipe
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

    const equipes = [
        'Gestor',
        'Psicólogo',
        'Terapia Ocupacional',
        'Fonoaudiólogo',
        'Fisioterapeuta',
        'Educador Especial',
        'Agente de manutenção'
    ]
     
    const [nome, setNome] = useState ('')
    const [formacao, setFormacao] = useState ('')
    const [telefone, setTelefone ]= useState ('')
    const [imagem, setImagem] = useState ('')
    const [equipe, setEquipe] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()

        props.aoProfissionalCadastrado({
            nome, 
            formacao,
            telefone,
            imagem,
            equipe
        })
        
        console.log('Form foi submetido =>', nome, formacao, telefone, imagem, equipe)
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
           
            <h2>Preencha os dados para criar seu Card</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label= "Nome" 
                    placeholder='Digite seu nome'
                    valor= {nome}
                    aoAlterado={valor=> setNome(valor)} 
                    />

                <CampoTexto 
                    obrigatorio={true}
                    label= "Formação" 
                    placeholder='Digite seu formação' 
                    valor= {formacao} 
                    aoAlterado={valor=> setFormacao(valor)}
                    />

                <CampoTexto 
                    obrigatorio={true} 
                    label= "Telefone" 
                    placeholder='Digiteo número do seu telefone'  
                    valor={telefone}
                    aoAlterado={valor=> setTelefone(valor)}
                />

                <CampoTexto 
                    
                    label= "Imagem" 
                    placeholder='Digite o endereço de sua imagem '  
                    valor={imagem}
                    aoAlterado={valor=> setImagem(valor)}
                    />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label= "Equipe" 
                    itens = {equipes}
                    valor = {equipe}
                    aoAlterado = { valor=> setEquipe(valor)}
                    />

                <Botao>
                    Create Card
                </Botao>
               
            </form>
        </section>
    )
}
export default Formulario
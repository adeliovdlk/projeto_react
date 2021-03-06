import {Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../componentes/Button'
import '../styles/auth.scss'



  //webpack (snowpack, vite, ...)
export function NewRoom(){
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustraçao simbolizando pergunta e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas 
          da sua audiência em tempo real </p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input 
            type="text" 
            placeholder="Nome da sala"
            />
            <Button type="submit" >
              Criar na sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente <Link to ="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>

  )
}
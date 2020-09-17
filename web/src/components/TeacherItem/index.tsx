import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/52974568?s=460&u=1160314eec540c568cc199c88a708a66e9ae9bbf&v=4" alt="Rodrigo Duarte"/>
        <div>
          <strong>Rodrigo Duarte</strong>
          <span>Physics</span>
        </div>
      </header>

      <p>
        Human being from Earth
        <br/> <br/>
        Rodrigo is a human being living in a planet called Earth located in the Solar System that's is located in the Milky Way
      </p>

      <footer>
        <p>
          Price/time
          <strong>U$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Get in touch 
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
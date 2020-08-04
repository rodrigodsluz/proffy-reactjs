import React from 'react'

import PageHeader from '../../components/PageHeader'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherList = () => {
  return (
      <div id="page-teacher-list" className="container">
        <PageHeader title="These are the available teachers">
          <form id="search-teachers">
            <div className="input-block">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject"/>
            </div>

            <div className="input-block">
              <label htmlFor="week-day">Week day</label>
              <input type="text" id="week-day"/>
            </div>

            <div className="input-block">
              <label htmlFor="time">Time</label>
              <input type="text" id="time"/>
            </div>
          </form>
        </PageHeader>

        <main>
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
        </main>
      </div>
    )
}

export default TeacherList
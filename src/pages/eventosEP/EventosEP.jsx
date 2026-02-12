import { useState } from 'react'
import InfoCard from '../../components/infoCard/InfoCard'
import SuccessMessage from '../../components/successMessage/SuccessMessage'
import { cardsData } from '../../data/cardsData'
import s from './eventosEP.module.scss'

const EventosEP = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleParticipate = () => {
    setShowSuccess(true)
    
    // Fecha a mensagem automaticamente após 3 segundos
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <section className={s.container}>
      <h1>Eventos</h1>
      
      {showSuccess && (
        <SuccessMessage 
          mensagem="Inscrito com sucesso!"
          onClose={() => setShowSuccess(false)}
        />
      )}

      <div className={s.cardsContainer}>
        {cardsData.eventos.map(card => (
          <InfoCard 
            key={card.id} 
            {...card}
            onParticipate={handleParticipate}
          />
        ))}
      </div>
    </section>
  )
}

export default EventosEP
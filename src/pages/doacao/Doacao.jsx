import { useState } from 'react'
import InfoCard from '../../components/infoCard/InfoCard'
import SuccessMessage from '../../components/successMessage/SuccessMessage'
import { cardsData } from '../../data/cardsData'
import s from './doacao.module.scss'

const Doacao = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleParticipate = () => {
    setShowSuccess(true)
    
    // Fecha a mensagem automaticamente após 3 segundos
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <div className={s.container}>
      <h1>Doação</h1>
      
      {showSuccess && (
        <SuccessMessage 
          mensagem="Obrigado pelo interesse em doar! Página em manutenção."
          onClose={() => setShowSuccess(false)}
        />
      )}

      <div className={s.cardsContainer}>
        {cardsData.doacoes.map(card => (
          <InfoCard 
            key={card.id} 
            {...card}
            onParticipate={handleParticipate}
          />
        ))}
      </div>
    </div>
  )
}

export default Doacao
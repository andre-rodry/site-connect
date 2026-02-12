import { useState } from 'react'
import InfoCard from '../../components/infoCard/InfoCard'
import SuccessMessage from '../../components/successMessage/SuccessMessage'
import { cardsData } from '../../data/cardsData'
import s from './voluntariado.module.scss'

const Voluntariado = () => {
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
      <h1>Voluntariado</h1>
      
      {showSuccess && (
        <SuccessMessage 
          mensagem="Inscrito com sucesso!"
          onClose={() => setShowSuccess(false)}
        />
      )}

      <div className={s.cardsContainer}>
        {cardsData.voluntariado.map(card => (
          <InfoCard 
            key={card.id}
            titulo={card.titulo}
            descricao={card.descricao}
            imagem={card.imagem}
            textoBotao={card.textoBotao}
            onParticipate={handleParticipate}
          />
        ))}
      </div>
    </div>
  )
}

export default Voluntariado
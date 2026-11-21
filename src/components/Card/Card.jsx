import './style.css'

export function Card({ titulo, contagem, iconPrefComun, alternancia }) {
  const temContagem = contagem !== undefined && contagem !== null
  const tipoBadge = alternancia === 'Preferencial' ? 'preferencial' : 'comum'

  return (
    <div className="card-metrica">
      <div className="card-metrica-cabecalho">
        {iconPrefComun && (
          <span
            className={`ponto-indicador ${
              iconPrefComun === 'Preferencial'
                ? 'ponto-preferencial'
                : 'ponto-comum'
            }`}
          />
        )}
        <p className="card-metrica-titulo">{titulo}</p>
      </div>

      <div className="card-metrica-conteudo">
        {temContagem ? (
          <p className="card-metrica-valor">{contagem}</p>
        ) : (
          alternancia && (
            <span className={`badge-alternancia badge-${tipoBadge}`}>
              <span className={`ponto-indicador ponto-${tipoBadge}`} />
              {alternancia}
            </span>
          )
        )}
      </div>
    </div>
  )
}
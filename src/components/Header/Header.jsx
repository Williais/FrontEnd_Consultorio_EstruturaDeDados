import { Plus, UserPlus, Stethoscope } from 'lucide-react'
import './style.css'

export function Header({ onNovoPaciente, onAdicionarFila }) {
  const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  }).format(new Date())

  return (
    <header className="cabecalho">
      <div className="cabecalho-container">
        <div className="cabecalho-marca">
          <div className="cabecalho-logo">
            <Stethoscope size={20} />
          </div>
          <div className="cabecalho-titulo-grupo">
            <span className="cabecalho-titulo">Dente Bom</span>
            <span className="cabecalho-separador">|</span>
            <span className="cabecalho-data">{dataFormatada}</span>
          </div>
        </div>

        <div className="cabecalho-acoes">
          <button
            type="button"
            onClick={onNovoPaciente}
            className="botao-secundario"
          >
            <UserPlus size={14} className="icone-secundario" />
            <span className="texto-desktop">Novo paciente</span>
            <span className="texto-mobile">Novo</span>
          </button>

          <button
            type="button"
            onClick={onAdicionarFila}
            className="botao-primario"
          >
            <Plus size={14} />
            <span>Adicionar à fila</span>
          </button>
        </div>
      </div>
    </header>
  )
}
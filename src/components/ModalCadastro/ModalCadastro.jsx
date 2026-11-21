import { useState } from 'react'
import { X } from 'lucide-react'
import './style.css'


export function ModalCadastro({ onFechar, onSalvar }) {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [cep, setCep] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [possuiDeficiencia, setPossuiDeficiencia] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    onSalvar({
      nome,
      cpf,
      dataNascimento,
      cep,
      telefone,
      email,
      possuiDeficiencia,
    })
  }

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal-caixa" onClick={(e) => e.stopPropagation()}>
        <div className="modal-cabecalho">
          <h2 className="modal-titulo">Cadastrar paciente</h2>
          <button type="button" className="modal-fechar" onClick={onFechar}>
            <X size={18} />
          </button>
        </div>

        <form className="modal-formulario" onSubmit={handleSubmit}>
          <div className="campo-grupo">
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="campo-linha">
            <div className="campo-grupo">
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="dataNascimento">Data de nascimento</label>
              <input
                id="dataNascimento"
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="campo-linha">
            <div className="campo-grupo">
              <label htmlFor="telefone">Telefone</label>
              <input
                id="telefone"
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="campo-grupo">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label className="campo-checkbox">
            <input
              type="checkbox"
              checked={possuiDeficiencia}
              onChange={(e) => setPossuiDeficiencia(e.target.checked)}
            />
            <span>Paciente possui deficiência (PCD)</span>
          </label>

          <div className="modal-rodape">
            <button type="button" className="botao-cancelar" onClick={onFechar}>
              Cancelar
            </button>
            <button type="submit" className="botao-salvar">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
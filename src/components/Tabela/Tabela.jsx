import { Eye, UserMinus } from 'lucide-react'
import './style.css'

function calcularIdade(dataNascimento) {
  const hoje = new Date()
  const nascimento = new Date(dataNascimento)
  let idade = hoje.getFullYear() - nascimento.getFullYear()
  const diferencaMes = hoje.getMonth() - nascimento.getMonth()

  if (
    diferencaMes < 0 ||
    (diferencaMes === 0 && hoje.getDate() < nascimento.getDate())
  ) {
    idade--
  }

  return idade
}

function formatarHora(dataISO) {
  return new Date(dataISO).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

function calcularTempoEspera(dataISO) {
  const diferencaMinutos = Math.max(
    0,
    Math.floor((Date.now() - new Date(dataISO).getTime()) / 60000)
  )

  if (diferencaMinutos < 60) {
    return `${diferencaMinutos} min`
  }

  const horas = Math.floor(diferencaMinutos / 60)
  const minutos = diferencaMinutos % 60
  return `${horas}h ${minutos}m`
}

export function Tabela({
  tipo = 'comum',
  pacientes = [],
  onVerPaciente,
  onRemoverFila,
}) {
  const ehPreferencial = tipo === 'preferencial'
  const quantidade = pacientes.length

  return (
    <section className="tabela-fila">
      <header className="tabela-cabecalho">
        <div className="tabela-titulo-grupo">
          <span
            className={`ponto-indicador ${
              ehPreferencial ? 'ponto-preferencial' : 'ponto-comum'
            }`}
          />
          <h2 className="tabela-titulo">
            {ehPreferencial ? 'Fila Preferencial' : 'Fila Comum'}
          </h2>
          {ehPreferencial && (
            <span className="tabela-subtitulo">60+ e PCD</span>
          )}
        </div>

        <span
          className={`tabela-contador ${
            ehPreferencial ? 'contador-preferencial' : 'contador-comum'
          }`}
        >
          {quantidade}
        </span>
      </header>

      <div className="tabela-lista">
        {quantidade === 0 ? (
          <p className="tabela-vazia">Nenhum paciente aguardando nesta fila.</p>
        ) : (
          pacientes.map((paciente, index) => {
            const ehIdoso = calcularIdade(paciente.dataNascimento) >= 60

            return (
              <div key={paciente.cpf} className="tabela-linha">
                <div className="tabela-info-principal">
                  <span
                    className={`tabela-posicao ${
                      index === 0 && ehPreferencial ? 'posicao-destaque' : ''
                    }`}
                  >
                    #{index + 1}
                  </span>

                  <div className="tabela-dados-paciente">
                    <div className="tabela-nome-badges">
                      <strong className="tabela-nome">{paciente.nome}</strong>

                      {ehIdoso && (
                        <span className="badge-prioridade">60+</span>
                      )}

                      {paciente.possuiDeficiencia && (
                        <span className="badge-prioridade">PCD</span>
                      )}
                    </div>

                    <div className="tabela-metadados">
                      <span>{paciente.cpf}</span>
                      <span>·</span>
                      <span>{formatarHora(paciente.horarioEntrada)}</span>
                      <span>·</span>
                      <span>{calcularTempoEspera(paciente.horarioEntrada)}</span>
                    </div>
                  </div>
                </div>

                <div className="tabela-acoes">
                  <button
                    type="button"
                    className="botao-icone"
                    onClick={() => onVerPaciente(paciente)}
                    title="Ver ficha do paciente"
                  >
                    <Eye size={16} />
                  </button>

                  <button
                    type="button"
                    className="botao-icone"
                    onClick={() => onRemoverFila(paciente.cpf)}
                    title="Remover da fila"
                  >
                    <UserMinus size={16} />
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}
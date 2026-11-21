import { useState } from 'react'
import {Header} from './components/Header/Header'
import {Card} from './components/Card/Card'
import { Tabela } from './components/Tabela/Tabela'
import { ModalCadastro } from './components/ModalCadastro/ModalCadastro'
import './App.css'

function App() {

  const [modalCadastroAberto, setModalCadastroAberto] = useState(false)

  function handleSalvarPaciente(dadosPaciente) {
    console.log('Paciente cadastrado:', dadosPaciente)
    setModalCadastroAberto(false)
  }

  const filaPreferencial = [
  {
    cpf: '123.456.789-01',
    nome: 'Maria Helena Silva',
    dataNascimento: '1958-04-12',
    possuiDeficiencia: false,
    horarioEntrada: '2026-11-20T22:13:00',
  },
  {
    cpf: '234.567.890-12',
    nome: 'Lucas Eduardo Ferreira',
    dataNascimento: '1995-08-20',
    possuiDeficiencia: true,
    horarioEntrada: '2026-11-20T22:27:00',
  },
]

const filaComum = [
  {
    cpf: '123.456.789-01',
    nome: 'Maria Helena Silva',
    dataNascimento: '1999-04-12',
    possuiDeficiencia: false,
    horarioEntrada: '2026-11-20T22:13:00',
  },
  {
    cpf: '234.567.890-12',
    nome: 'Lucas Eduardo Ferreira',
    dataNascimento: '2001-08-20',
    possuiDeficiencia: false,
    horarioEntrada: '2026-11-20T22:27:00',
  },
]

  return (
    <>
     <Header onNovoPaciente={() => setModalCadastroAberto(true)} onAdicionarFila={() => {}}/>

      {modalCadastroAberto && (
        <ModalCadastro
          onFechar={() => setModalCadastroAberto(false)}
          onSalvar={handleSalvarPaciente}
        />
      )}

     <div className="barra-metricas">
        <Card titulo="Total aguardando" contagem={6} />
        <Card titulo="Preferencial" contagem={3} iconPrefComun="Preferencial" />
        <Card titulo="Comum" contagem={3} iconPrefComun="Comum" />
        <Card titulo="Atendidos hoje" contagem={2} />
        <Card titulo="Regra de alternância" alternancia="Preferencial" />
     </div>


      <div className='container-tabela'>

        <Tabela
          tipo="preferencial"
          pacientes={filaPreferencial}
          onVerPaciente={(paciente) => console.log('Abrir ficha:', paciente)} // lembrar de trocar
          onRemoverFila={(cpf) => console.log('Remover CPF:', cpf)} // lembrar de trocar
        />

        <Tabela
          tipo="comum"
          pacientes={filaComum}
          onVerPaciente={(paciente) => console.log('Abrir ficha:', paciente)} // lembrar de trocar
          onRemoverFila={(cpf) => console.log('Remover CPF:', cpf)} // lembrar de trocar
        />
      </div>

    </>
  )
}

export default App

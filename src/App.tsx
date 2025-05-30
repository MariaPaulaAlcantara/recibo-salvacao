import { useState, useEffect, useRef } from 'react'
import './App.css'

// Props para NameInputScreen
interface NameInputScreenProps {
  name: string
  setName: (value: string) => void
  handleSubmit: (e: React.FormEvent) => void
  inputRef: React.RefObject<HTMLInputElement>
}

const NameInputScreen = ({ name, setName, handleSubmit, inputRef }: NameInputScreenProps) => (
  <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
    <div style={{ backgroundColor: '#378eff' }} className="p-6 text-center">
      <h1 className="text-2xl font-bold text-white tracking-wider">Bem-vindo à Igreja Batista Filadélfia</h1>
      <p className="text-gray-300 mt-2">Verifique o preço que você tem que pagar para obter a salvação</p>
    </div>


    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            O seu nome
          </label>
          <input
            type="text"
            id="name"
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Introduza o seu nome"
            required
            autoComplete="on"
            autoCapitalize="words"
            autoCorrect="off"
            spellCheck="false"
            inputMode="text"
          />
        </div>
        <button
          type="submit"
          style={{ backgroundColor: '#378eff' }}
          className="w-full text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Ver Recibo
        </button>
      </form>
    </div>
  </div>
)

// Props para ReceiptScreen
interface ReceiptScreenProps {
  savedName: string | null
  handleReset: () => void
}

const ReceiptScreen = ({ savedName, handleReset }: ReceiptScreenProps) => (
  <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="p-8 font-mono text-black">
      {/* Título */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider leading-none">SALVAÇÃO</h1>
        <p className="text-sm tracking-wide mt-1">JESUS PAGOU TUDO</p>
      </div>

      {/* Lista de itens pagos */}
      <div className="space-y-3 mb-8">
        <div className="flex justify-between items-baseline">
          <span className="font-bold">PECADOS</span>
          <span className="flex-1 mx-2 border-b border-dotted border-gray-400 self-end mb-1"></span>
          <span className="font-bold">PAGO</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="font-bold">ERROS</span>
          <span className="flex-1 mx-2 border-b border-dotted border-gray-400 self-end mb-1"></span>
          <span className="font-bold">PAGO</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="font-bold">MAGOAS</span>
          <span className="flex-1 mx-2 border-b border-dotted border-gray-400 self-end mb-1"></span>
          <span className="font-bold">PAGO</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="font-bold">IRA</span>
          <span className="flex-1 mx-2 border-b border-dotted border-gray-400 self-end mb-1"></span>
          <span className="font-bold">PAGO</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="font-bold">TRANSGRESSÕES</span>
          <span className="flex-1 mx-2 border-b border-dotted border-gray-400 self-end mb-1"></span>
          <span className="font-bold">PAGO</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="font-bold">MEDO</span>
          <span className="flex-1 mx-2 border-b border-dotted border-gray-400 self-end mb-1"></span>
          <span className="font-bold">PAGO</span>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-b-2 border-dashed border-gray-400 my-6"></div>

      {/* Informações adicionais */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div>
          <div className="font-bold">DÍVIDA</div>
          <div className="font-bold">TROCO</div>
        </div>
        <div>
          <div>PAGA</div>
          <div>VIDA ETERNA</div>
        </div>
      </div>

      {/* Subtotal personalizado com o nome */}
      <div className="text-xl font-bold mb-4">
        SUB TOTAL***** R$0,00
      </div>
      <div className="text-md mb-4">
        {/* O preço que Jesus pagou por  foi seu sangue na cruz. */}
        O preço que Jesus pagou por <strong>{savedName}</strong> foi o Seu precioso sangue derramado na cruz.
      </div>


      {/* Linha separadora */}
      <div className="border-b-2 border-dashed border-gray-400 my-6"></div>

      {/* Versículo bíblico */}
      <div className="text-sm text-center my-2">
        <p>Porque o salário do pecado é a morte, mas o dom gratuito</p>
        <p>de Deus é a vida eterna, por Cristo Jesus nosso Senhor.</p>
        <p className="mt-2 font-bold">Romanos 6:23</p>
      </div>

      {/* Código de barras (representação visual) */}
      <div className="flex justify-center mt-8 mb-4">
        <svg className="h-16 w-64" viewBox="0 0 100 30">
          {Array.from({ length: 40 }).map((_, i) => {
            const width = ((i * 13) % 10 > 3) ? 1.5 : 0.8
            return (
              <rect
                key={i}
                x={i * 2.5}
                y="0"
                width={width}
                height="30"
                fill="black"
              />
            )
          })}
        </svg>
      </div>
    </div>

    {/* Botão para voltar */}
    <div className="p-4 bg-gray-100 text-center">
      <button
        onClick={handleReset}
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        Voltar
      </button>
    </div>
  </div>
)

function App() {
  const [name, setName] = useState<string>('')
  const [savedName, setSavedName] = useState<string | null>(null)
  const [showReceipt, setShowReceipt] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const storedName = localStorage.getItem('userName')
    if (storedName) {
      setSavedName(storedName)
      setShowReceipt(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      localStorage.setItem('userName', name)
      setSavedName(name)
      setShowReceipt(true)
    }
  }

  const handleReset = () => {
    localStorage.removeItem('userName')
    setName('')
    setSavedName(null)
    setShowReceipt(false)

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {!showReceipt ? (
        <NameInputScreen
          name={name}
          setName={setName}
          handleSubmit={handleSubmit}
          inputRef={inputRef}
        />
      ) : (
        <ReceiptScreen savedName={savedName} handleReset={handleReset} />
      )}

      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} | Juventude da Igreja Batista Filadélfia</p>
      </footer>
    </div>
  )
}

export default App

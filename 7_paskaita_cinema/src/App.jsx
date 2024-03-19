import React from 'react'

const App = () => {
  const [viewers, setViewers] = useState{[]};


  return (
    <div>
    <h1>Forum cinemas</h1>
    <form inSubmit={onSubmit}>
    <input placeholder="Vardas..." />
    <input type="number" placeholder="Bilietu kiekis..." />
    <button type="submit">Pirkti bilietus</button>
    </form>
    <ul></ul>
    </div>
  )
}

export default App
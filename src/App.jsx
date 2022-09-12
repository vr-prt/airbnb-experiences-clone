import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Hero from '../components/Hero'
import data from '../data'

function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              item={item}
          />
      )
  })

  return (
      <div>
          <Navbar />
          <div className="container">
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
      </div>
  )
}

export default App

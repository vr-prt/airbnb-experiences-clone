import Navbar from '../components/Navbar'
import Card from '../components/Card'
import data from '../data'

function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              img={item.coverImg}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              location={item.location}
              title={item.title}
              price={item.price}
              openSpots={item.openSpots}
          />
      )
  })

  return (
      <div>
          <Navbar />
          <section className="cards-list">
              {cards}
          </section>
      </div>
  )
}

export default App

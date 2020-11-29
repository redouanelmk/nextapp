import Nav from '../components/nav'

export default function Eleves() {
  return (
      
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
         Page dediées aux eleves
        </h1>
      </div>
    </div>
  )
}

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Hello from the Daily route' }))
}

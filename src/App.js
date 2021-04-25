import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ListView from './components/ListView'
import DetailView from './components/DetailView'
import Error from './components/Error'
import './App.css'

const url = 'data.json'
function App() {
  const [data, setData] = useState([])
  const [detail, setDetail] = useState({})
  const [navText, setNavText] = useState('This is List view')
  const fetchData = async () => {
    const res = await fetch(url)
    const result = await res.json()
    setData(result)
  }
  const handleClick = (val) => {
    setDetail({ ...val })
    setNavText('This is Detail View')
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar navText={navText} />
            <ListView data={data} handleClick={handleClick} />
          </Route>
          <Route exact path="/detail">
            <Navbar navText={navText} />
            <DetailView detail={detail} setNavText={setNavText} />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App

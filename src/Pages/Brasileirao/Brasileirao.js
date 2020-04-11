import React from 'react'
import './Brasileirao.css'
import { getLeagueTable, getNextMatches } from '../../services/api'

const Brasileirao = () => {
  const [loading, setLoading] = React.useState(false)
  const [leagueTable, setLeagueTable] = React.useState()
  const [nextMatches, setNextMatches] = React.useState()

  React.useEffect(() => {
    const leagueId = 2013
    const load = async () => {
      setLoading(true)
      const promises = [
        getLeagueTable(leagueId),
        getNextMatches(leagueId)
      ]
      const [leagueTable, nextMatches] = await Promise.all(promises)
      setLeagueTable(leagueTable.standings[0].table)
      setNextMatches(nextMatches.matches)
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div>
      {loading && <h1>Carregando</h1>}
      {!loading && (
        <>
          <h1>Tabela</h1>
          <div></div>
          <h1>Próximas Partidas</h1>
          <div></div>
        </>
      )}
    </div>
  )
}

export default Brasileirao
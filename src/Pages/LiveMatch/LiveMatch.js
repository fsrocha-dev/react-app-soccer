import React from 'react'
import { getMatch } from '../../services/api'

import './LiveMatch.css'

const LiveMatch = () => {
  const [loading, setLoading] = React.useState(false)
  const [match, setMatch] = React.useState()

  React.useEffect(() => {
    const load = async () => {
      setLoading(true)
      const match = await getMatch(1)
      setMatch(match)
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div>
      {loading && <div>Carregando...</div>}
      {!loading && match && (
        <div className="match" style={{ marginTop: '30px' }}>
          <div className="match-header">
            <div className="home-team">
              <span className="team-name">{match.homeTeamName}</span>
              <span className="team-score">0</span>
            </div>
            <div className="versus">X</div>
            <div className="away-team">
              <span className="team-score">0</span>
              <span className="team-name">{match.awayTeamName}</span>
            </div>
          </div>
          <div className="match-info">
            <div className="match-date">01/01/2020</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LiveMatch
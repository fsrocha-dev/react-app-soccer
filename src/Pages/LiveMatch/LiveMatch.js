import React from 'react'
import { getMatch, subscribeToMatch } from '../../services/api'
import { dateTimeFormat } from '../../Utils/dateTimeFormat'

import './LiveMatch.css'

const formatDate = date => dateTimeFormat.format(new Date(date))

const LiveMatch = () => {
  const [loading, setLoading] = React.useState(false)
  const [listening, setListening] = React.useState(false)
  const [match, setMatch] = React.useState()
  const [homeTeamGoals, setHomeTeamGoals] = React.useState(0)
  const [awayTeamGoals, setAwayTeamGoals] = React.useState(0)
  const [matchUpdates, setMatchUpdates] = React.useState([])

  React.useEffect(() => {
    const load = async () => {
      setLoading(true)
      const match = await getMatch(1)
      setMatch(match)
      setLoading(false)
    }
    load()
  }, [])

  React.useEffect(() => {
    if (!match) {
      return
    }
    const unsubscribe = subscribeToMatch(update => {
      setMatchUpdates(u => [update, ...u])
      setHomeTeamGoals(update.homeTeamGoals)
      setAwayTeamGoals(update.awayTeamGoals)
      setListening(!update.finishBroadcast)
    })
    return () => {
      unsubscribe()
    }
  }, [match])

  return (
    <div>
      {loading && <div>Carregando...</div>}
      {!loading && match && (
        <>
          <div className="match" style={{ marginTop: '30px' }}>
            <div className="match-header">
              <div className="home-team">
                <span className="team-name">{match.homeTeamName}</span>
                <span className="team-score">{homeTeamGoals}</span>
              </div>
              <div className="versus">X</div>
              <div className="away-team">
                <span className="team-score">{awayTeamGoals}</span>
                <span className="team-name">{match.awayTeamName}</span>
              </div>
            </div>
            <div className="match-info">
              <div className="match-date">{formatDate(match.date)}</div>
            </div>
          </div>
          <hr />
          {listening && (
            <p className="realtime-warning">Atualizado em tempo real</p>
          )}
          <ul className="timeline">
            {matchUpdates.map(u => (
              <li key={u.id}>
                <p className="timeline-date">
                  <span className="half-time">{u.halfTime}</span>
                  <span className="half">{u.half}º tempo</span>
                </p>
                <div className="timeline-content">
                  <p>{u.description}</p>
                </div>
              </li>
            ))}
          </ul>

        </>
      )}
    </div>
  )
}

export default LiveMatch
import times from 'lodash.times'

export default function Grid({ children, cols }) {
  const columns = []
  for (let i = 0; i < cols; i++) {
    columns.push(<div className="column">{children[i % cols]}</div>)
  }
  return (
    <>
      <div id="grid">{columns}</div>

      <style jsx>{`
        #grid {
          display: grid;
          grid-template-columns: repeat(${cols}, minmax(180px, 1fr));
          grid-gap: 10px;
          grid-auto-flow: dense;
        }
      `}</style>
    </>
  )
}

export default function Grid({ children, cols }) {
  return (
    <>
      <div id="grid">{children}</div>

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

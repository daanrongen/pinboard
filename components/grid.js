import Masonry from 'react-masonry-css'

export default function Grid({ children, cols }) {
  const columns = []
  for (let i = 0; i < children.length; i++) {
    columns.push(
      <>
        <div className="column">{children[i]}</div>
        <style jsx>{`
          .column {
            height: max-content;
            display: inline-block;
          }
        `}</style>
      </>
    )
  }

  return (
    <Masonry
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      breakpointCols={{ default: 4, 1280: 3, 1100: 2, 500: 1 }}
    >
      {columns}
    </Masonry>
  )
}

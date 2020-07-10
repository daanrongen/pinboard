import { getColor } from '../utils'

export default function Tag({ tag, isActive, handleClick }) {
  const color = isActive ? getColor(tag) : 'lightgrey'
  return (
    <div>
      <span
        className="tag-value"
        onMouseDown={handleClick ? () => handleClick(tag) : null}
      >
        {tag}
      </span>
      <style jsx>{`
        .tag-value {
          color: white;
          background-color: ${color};
          border-radius: 6px;
          padding: 6px;
          margin: 6px;
          transition: 0.2s;
        }

        .tag-value:hover {
          background-color: ${isActive ? color : 'grey'};
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

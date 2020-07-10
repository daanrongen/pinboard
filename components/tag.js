import { getColor } from '../utils'

export default function Tag({ tag }) {
  return (
    <div>
      <span className="tag-value">{tag}</span>
      <style jsx>{`
        .tag-value {
          color: white;
          background-color: ${getColor(tag)};
          border-radius: 6px;
          padding: 6px;
          margin: 6px;
        }
      `}</style>
    </div>
  )
}

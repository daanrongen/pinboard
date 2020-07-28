export default function ({ src, desc }) {
  return (
    <div>
      <div className="image-container">
        {desc && <p>{desc}</p>}
        <img src={src} className="image" alt={desc ?? null} />
      </div>
      <style jsx>{`
        .image-container {
          border: 1px solid lightgrey;
          border-radius: 12px;
          padding: 12px;
        }

        .image {
          width: 100%;
          height: auto;
        }

        .image-container p {
          margin: 0.5rem 0 1rem 0;
          font-weight: 400;
        }
      `}</style>
    </div>
  )
}

export default function ({ src, desc }) {
  return (
    <div>
      <div className="image-container">
        <img src={src} className="image" alt={desc ?? null} />
        {desc && <p>{desc}</p>}
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
        }
      `}</style>
    </div>
  )
}

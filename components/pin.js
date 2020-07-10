import { TwitterTweetEmbed } from 'react-twitter-embed'
import InstagramEmbed from 'react-instagram-embed'
import Image from '../components/image'
import Tag from '../components/tag'

export default function Pin({ item, showTags = false }) {
  const { desc, type, id, tags } = item

  if (type === 'instagram')
    return (
      <div className="pin">
        <InstagramEmbed
          url={id}
          hideCaption
          containerTagName="div"
          injectScript
        />
        {showTags && (
          <ul>
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} isActive />
            ))}
          </ul>
        )}
        <style jsx>{`
          ul {
            padding: 0;
            display: flex;
          }
        `}</style>
      </div>
    )

  if (type === 'twitter')
    return (
      <div className="pin">
        <TwitterTweetEmbed tweetId={id} />
        {showTags && (
          <ul>
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} isActive />
            ))}
          </ul>
        )}
        <style jsx>{`
          ul {
            padding: 0;
            display: flex;
          }
        `}</style>
      </div>
    )

  if (type === 'image')
    return (
      <div className="pin">
        <Image src={id} desc={desc} />
        {showTags && (
          <ul>
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} isActive />
            ))}
          </ul>
        )}
        <style jsx>{`
          ul {
            padding: 0;
            display: flex;
          }
        `}</style>
      </div>
    )
}

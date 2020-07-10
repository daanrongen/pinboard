import Head from 'next/head'
import { useState, useMemo } from 'react'

import database from '../database.json'
import { getTags } from '../utils'

import Grid from '../components/grid'
import Pin from '../components/pin'
import Tag from '../components/tag'

export default function Home() {
  const [showTags, setShowTags] = useState(false)
  const [activeTags, setActiveTags] = useState(getTags())

  const tags = useMemo(() => {
    return [...activeTags]
  }, [activeTags])

  const handleClick = (tag) => {
    if (tags.includes(tag)) {
      setActiveTags(activeTags.filter((e) => e !== tag))
      console.log('removed: ', tag)
    } else {
      setActiveTags(tags.push(tag))
      console.log('added: ', tag)
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Pinboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="tags-menu">
          <button id="tags-switch" onClick={() => setShowTags(!showTags)}>
            {showTags ? 'hide tags' : 'show tags'}
          </button>

          {showTags && (
            <div>
              <ul>
                {getTags().map((tag) => (
                  <li key={tag}>
                    <Tag
                      tag={tag}
                      isActive={tags.includes(tag)}
                      handleClick={handleClick}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Grid cols={4}>
          {database
            .filter((entry) =>
              entry.tags.some((r) => activeTags.indexOf(r) >= 0)
            )
            .map((entry, index) => (
              <Pin item={entry} showTags={showTags} key={`pin-${index}`} />
            ))}
        </Grid>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
        }

        main {
          padding: 1rem;
        }

        #tags-switch {
          position: absolute;
          right: 1rem;
          background-color: transparent;
          border: none;
          color: grey;
          transition: 0.2s;
        }

        #tags-switch:hover {
          cursor: pointer;
          color: black;
        }

        #tags-menu {
          min-height: 40px;
          margin-bottom: 12px;
        }

        #tags-menu ul {
          display: flex;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ul {
          padding: 0;
          margin: 0;
        }

        li {
          list-style-type: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

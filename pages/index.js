import Head from 'next/head'
import { useState } from 'react'

import database from '../database.json'
import { getTags } from '../utils'

import Grid from '../components/grid'
import Pin from '../components/pin'
import Tag from '../components/tag'

export default function Home() {
  const [showTags, setShowTags] = useState(true)

  return (
    <div className="container">
      <Head>
        <title>Pinboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button id="tags-switch" onClick={() => setShowTags(!showTags)}>
          {showTags ? 'hide tags' : 'show tags'}
        </button>

        {showTags && (
          <div id="tags-menu">
            <ul>
              {getTags().map((tag) => (
                <li>
                  <Tag tag={tag} isActive={false} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <Grid cols={4}>
          {database.map((entry) => (
            <Pin item={entry} showTags={showTags} />
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
        }

        #tags-menu {
          min-height: 40px;
          margin-bottom: 12px;
          border-bottom: 1px solid lightgrey;
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

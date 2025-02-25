"use client"

import { type MfmSearch } from "mfm-js"
import { useRef } from "react"

function search(query: string) {
  window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`)
}

export default function Search({ query }: MfmSearch["props"]) {
  const input = useRef<HTMLInputElement>(null)

  return (
    <div className="mfm-search">
      <input
        type="search"
        defaultValue={query}
        placeholder={query}
        ref={input}
        key={query}
        className="mfm-searchButton"
      />
      <button
        onClick={() => {
          const current = input.current?.value
          if (current) search(current)
        }}
        className="mfm-searchButton">
        検索
      </button>
    </div>
  )
}

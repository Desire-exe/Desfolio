import { useEffect } from 'react'

const BASE = 'DΞSIRΞ-ΞXΞ'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}` : `${BASE} — Full Stack Developer`
  }, [title])
}
import { useState, useEffect } from 'react'
import { PERSONAL_INFO } from '../utils/constants'

function useGithubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=100`
        )

        if (!response.ok) {
          throw new Error('Gagal mengambil data dari GitHub')
        }

        const data = await response.json()
        const filtered = data.filter((repo) =>
          repo.topics.includes('showcase-portfolio')
        )

        setRepos(filtered)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return { repos, loading, error }
}

export default useGithubRepos
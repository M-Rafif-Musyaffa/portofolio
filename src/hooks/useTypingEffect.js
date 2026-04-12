import { useState, useEffect } from 'react'

function useTypingEffect(text, speed = 80) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= text.length) return

    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + text[index])
      setIndex(prev => prev + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [index, text, speed])

  return displayText
}

export default useTypingEffect
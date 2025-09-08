'use client'
import { useState, useEffect, useRef } from 'react'

export default function HomePage() {
  const initialTiles = [...Array(15).keys(), null] // 0–14 = tile, null = ช่องว่าง
  const [tiles, setTiles] = useState(initialTiles)
  const [seconds, setSeconds] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const timerRef = useRef(null)

  // นับเวลา
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setSeconds((s) => s + 1)
      }, 1000)
    }
    return () => clearInterval(timerRef.current)
  }, [isPlaying])

  // เช็คว่าเกมจบหรือยัง
  useEffect(() => {
    if (
      isPlaying &&
      tiles.every((tile, i) => tile === (i === 15 ? null : i))
    ) {
      clearInterval(timerRef.current)
      setIsPlaying(false)
      alert(`ชนะแล้ว! ใช้เวลา ${seconds} วินาที 🎉`)
    }
  }, [tiles, isPlaying, seconds])

  const moveTile = (index) => {
    const emptyIndex = tiles.indexOf(null)
    const row = Math.floor(index / 4)
    const col = index % 4
    const emptyRow = Math.floor(emptyIndex / 4)
    const emptyCol = emptyIndex % 4

    const isAdjacent =
      (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
      (col === emptyCol && Math.abs(row - emptyRow) === 1)

    if (isAdjacent) {
      const newTiles = [...tiles]
      newTiles[emptyIndex] = tiles[index]
      newTiles[index] = null
      setTiles(newTiles)
    }
  }

  // ฟังก์ชันสุ่ม
  const shuffleTiles = () => {
    const shuffled = [...initialTiles]
      .sort(() => Math.random() - 0.5) // สุ่มง่ายๆ
    setTiles(shuffled)
    setSeconds(0)
    setIsPlaying(true)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] px-4 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Kuma Puzzle 🧩</h1>

      {/* แสดงเวลา */}
      <div className="text-lg">
        ⏱️ เวลา: <span className="font-mono">{seconds}</span> วินาที
      </div>

      {/* ปุ่ม Shuffle */}
      <button
        onClick={shuffleTiles}
        className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Shuffle
      </button>

      {/* กระดานเกม */}
      <div className="grid grid-cols-4 grid-rows-4 gap-1 w-full max-w-md aspect-square">
        {tiles.map((tile, i) => {
          if (tile === null) {
            return (
              <div
                key={i}
                className="bg-black/30 rounded-lg"
              />
            )
          }

          const row = Math.floor(tile / 4)
          const col = tile % 4

          return (
            <button
              key={i}
              onClick={() => moveTile(i)}
              className="rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/kuma.jpg')",
                backgroundSize: '400% 400%',
                backgroundPosition: `${(col / 3) * 100}% ${(row / 3) * 100}%`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
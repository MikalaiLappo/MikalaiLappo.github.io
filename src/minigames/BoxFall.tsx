'use client'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

const BoxFall = () => {
  const [boxes, setBoxes] = useState<Box[]>([])
  const [boxesLeft, setBoxesLeft] = useState<number>(-1)
  const [started, setStarted] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const containerElem = useRef<null | HTMLDivElement>(null)

  const spawnABox = () => {
    if (!containerElem.current || !started || gameOver || boxesLeft == 0) return
    const { x: containerX, y: containerY } =
      containerElem.current.getBoundingClientRect()

    setBoxes((prev) => [...prev, createBox({ containerX, containerY })])
    setBoxesLeft((prev) => prev - 1)
  }

  const moveBoxes = () => {
    if (!containerElem?.current || !boxes.length) return
    const { y: containerY } = containerElem.current.getBoundingClientRect()

    const dead = boxes.some(
      ({ y }) => containerY + CONTAINER_H - DOWN_BAR_H <= y + BOX_H,
    )
    if (dead) return endGame()

    setBoxes(incrY(1))
  }

  const damageBox = (boxId: number) => {
    if (gameOver) return

    const targetBox = boxes.find(({ id }) => id == boxId)
    if (!targetBox) throw Error('Damaging non-existing box')

    if (targetBox.health == 1) {
      setBoxes(removeBox(targetBox))

      if (boxesLeft == 0) {
        setGameOver(true)
        return
      }
    }

    setBoxes(decreaseHP(targetBox))
  }

  /**
   * Better ways to handle loops below:
   *
   * 1. Class Components
   * `state` would be the same presisted reference (instead of scope-pinned `useState` changing every render)
   * it could've at least make `setTimeout` saner for this particular purpose
   *
   * 2. Imperative code w/ `refs`
   * probably is the right (times more efficient and `clearTimeout` jitter-free) option to implement this stuff
   * but I'm solving it within lifecycles as a challenge
   */

  /** move loop */
  useEffect(() => {
    if (!started || gameOver) return
    const moveTimeout = setTimeout(moveBoxes, calcMoveFrequency(boxesLeft))
    return () => clearTimeout(moveTimeout)
  }, [started, boxes, gameOver])

  /** spawn loop */
  useEffect(() => {
    if (!started || gameOver) return
    const spawnTimeout = setTimeout(spawnABox, calcSpawnFrequency(boxesLeft))
    return () => clearTimeout(spawnTimeout)
  }, [started, boxesLeft, gameOver])

  /** */

  const initGame = () => {
    setStarted(true)
    setGameOver(false)
    setBoxesLeft(TOTAL_BOXES)
    setBoxes([])
  }

  const endGame = () => {
    setGameOver(true)
  }

  return (
    <div
      ref={containerElem}
      className={'flex flex-col-reverse w-64 h-96 bg-dracula-darker'}
    >
      <div>
        {boxes.map(({ x, y, health, id }) => (
          <button
            onMouseOver={() => damageBox(id)}
            key={`box_${id}`}
            className={cn('absolute w-4 h-4', healthColors[health])}
            style={{ top: y, left: x }}
          ></button>
        ))}
      </div>
      <div className="flex items-center justify-center h-8 text-center text-white cursor-pointer bg-dracula-dark-800">
        <Status
          {...{ onClick: initGame, started, gameOver, boxesLeft, boxes }}
        />
      </div>
    </div>
  )
}

type TStatusProps = {
  started: boolean
  gameOver: boolean
  boxesLeft: number
  boxes: Box[]
  onClick: () => void
}
const Status = ({
  started,
  gameOver,
  boxesLeft,
  boxes,
  onClick,
}: TStatusProps) => {
  if (started && !gameOver) return <div>{boxesLeft}</div>

  return (
    <div
      onClick={onClick}
      className={cn('cursor-pointer, font-bold', {
        'text-dracula-red-600': gameOver && boxes.length > 0,
        'text-dracula-orange': gameOver && boxesLeft == 0,
      })}
    >
      {!started && !gameOver
        ? 'start'
        : gameOver && boxesLeft == 0 && boxes.length == 0
        ? 'gratz!!! ^_^'
        : 'dead x_x'}
    </div>
  )
}

export default BoxFall

type Box = { x: number; y: number; health: 3 | 2 | 1; id: number }

/**
 * Keeping these config constants in-sync with styles by hand (defining analogous TailwindCSS cns manually)
 * It could be dropped directly into `style` but I find it messy
 */
const BOX_H = 16
const BOX_W = BOX_H
const CONTAINER_W = 256
const CONTAINER_H = 384
const MAX_W_STEP = CONTAINER_W / BOX_W
const DOWN_BAR_H = 32
/**/

const TOTAL_BOXES = 101

const healthColors = {
  3: 'bg-dracula-green',
  2: 'bg-dracula-orange',
  1: 'bg-dracula-red',
}

/** Box factory function */
const createBox = ({
  containerX,
  containerY,
}: {
  containerX: number
  containerY: number
}) =>
  ({
    x: containerX + CONTAINER_W - (~~(MAX_W_STEP * Math.random()) + 1) * BOX_W,
    y: containerY,
    health: 3,
    id: Math.random(),
  } as const)

/** Game loop helper functions. If you want to change the pase — modify this */
const calcMoveFrequency = (enemies: number) =>
  enemies > 98 ? 50 : enemies > 75 ? 35 : enemies > 50 ? 25 : 10

const calcSpawnFrequency = (enemies: number) =>
  enemies > 95 ? 1000 : enemies > 75 ? 750 : enemies > 50 ? 500 : 350

/** `setState` wrappers */
const incrY = (n: number) => (boxes: Box[]) =>
  boxes.map((box) => ({
    ...box,
    y: box.y + n,
  }))

const decreaseHP = (targetBox: Box) => (boxes: Box[]) =>
  boxes.map((box) =>
    box.id != targetBox.id
      ? box
      : { ...targetBox, health: (targetBox.health - 1) as 2 | 1 },
  )

const removeBox = (targetBox: Box) => (boxes: Box[]) =>
  boxes.filter(({ id }) => id != targetBox.id)

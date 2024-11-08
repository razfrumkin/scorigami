import { FC, useState } from 'react'
import { ScorigamiHexagon } from '../ScorigamiHexagon'
import { HexagonGrid } from '../../../common/components/HexagonGrid'
import { useGames } from '../../game/hooks/useGames'
import { Game } from '../../game/entities/game'
import { ValuedPoint } from '../../../common/components/HexagonGrid/interfaces/valuedPoint'
import { ScorigamiDialog } from '../ScorigamiDialog'
import { sortByScore } from '../../game/utilities/sortByScore'

interface ScorigamiChartProps {}

export const ScorigamiChart: FC<ScorigamiChartProps> = ({}) => {
    const [selectedGames, setSelectedGames] = useState<Game[] | null>(null)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const games = useGames()

    if (games.length === 0) {
        return null
    }

    const maximumX = games.reduce(
        (maximumX, game) =>
            game.winnerPoints > maximumX ? game.winnerPoints : maximumX,
        games[0].winnerPoints
    )

    const maximumY = games.reduce(
        (maximumY, game) => {
            const difference = game.winnerPoints - game.loserPoints

            return difference > maximumY ? difference : maximumY
        },

        games[0].winnerPoints - games[0].loserPoints
    )

    const rows = maximumX - 1
    const columns = maximumY - 1

    const scores = sortByScore(games)

    const points: ValuedPoint[] = Object.keys(scores).map(score => {
        const game = scores[score][0]

        return {
            x: game.winnerPoints,
            y: game.winnerPoints - game.loserPoints,
            value: scores[score].length
        }
    })

    return (
        <>
            <HexagonGrid
                points={points}
                rows={rows}
                columns={columns}
                renderHexagon={(index, path, position) => (
                    <ScorigamiHexagon
                        value={points[index].value}
                        isHovered={hoveredIndex === index}
                        key={index}
                        path={path}
                        position={position}
                        onClick={() => {
                            const point = points[index]
                            const score = `${point.x}-${point.x - point.y}`

                            setSelectedGames(scores[score].reverse())
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    />
                )}
            />

            <ScorigamiDialog
                open={selectedGames != null}
                onClose={() => setSelectedGames(null)}
                games={selectedGames}
            />
        </>
    )
}

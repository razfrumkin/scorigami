import { FC, useMemo } from 'react'
import { hexbin } from 'd3-hexbin'
import { Box } from '@mui/material'
import { Point } from './interfaces/point'
import { useStyles } from './HexagonGrid.styles'
import { useDimensions } from '../../hooks/useDimensions'
import { ValuedPoint } from './interfaces/valuedPoint'

interface HexagonGridProps {
    points: ValuedPoint[]
    rows: number
    columns: number
    renderHexagon: (index: number, path: string, position: Point) => JSX.Element
}

export const HexagonGrid: FC<HexagonGridProps> = ({
    points,
    rows,
    columns,
    renderHexagon
}) => {
    const [ref, { width, height }] = useDimensions()

    const hexData = useMemo(() => {
        if (points.length === 0 || width === 0 || height === 0) {
            return null
        }

        const SQRT_3 = Math.sqrt(3)

        const hexRadius = Math.min(
            width / ((rows + 0.5) * SQRT_3),
            height / ((columns + 1 / 3) * 1.5)
        )

        const transformedPoints: [number, number][] = points.map(point => {
            const x =
                hexRadius * point.x * SQRT_3 +
                (point.y % 2 === 1 ? (hexRadius * SQRT_3) / 2 : 0)
            const y = hexRadius * point.y * 1.5

            return [x, y]
        })

        const layoutWidth = hexRadius * (rows * SQRT_3 + 3)
        const layoutHeight = hexRadius * (columns * 1.5 + 3)

        const generator = hexbin()
            .x(data => data[0] - hexRadius)
            .y(data => -data[1])
            .radius(hexRadius)

        return { generator, transformedPoints, layoutWidth, layoutHeight }
    }, [points, width, height])

    const { classes } = useStyles()

    return (
        <Box ref={ref} className={classes.root}>
            <svg width={width} height={height}>
                {hexData != null && (
                    <g
                        transform={`translate(${
                            (width - hexData.layoutWidth) / 2
                        }, ${(height + hexData.layoutHeight) / 2})`}
                    >
                        {hexData
                            .generator(hexData.transformedPoints)
                            .map((data, index) =>
                                renderHexagon(
                                    index,
                                    hexData.generator.hexagon(),
                                    data
                                )
                            )}
                    </g>
                )}
            </svg>
        </Box>
    )
}

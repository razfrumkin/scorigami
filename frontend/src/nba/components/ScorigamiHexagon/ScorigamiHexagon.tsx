import { FC, MouseEventHandler } from 'react'
import { useStyles } from './ScorigamiHexagon.styles'
import { HexagonPath } from '../../../common/components/HexagonPath'
import { Point } from '../../../common/components/HexagonGrid/interfaces/point'
import { interpolate } from '../../../common/utilities/math/interpolate'

export interface ScorigamiHexagonProps {
    value: number
    isHovered: boolean
    path: string
    position: Point
    onClick: MouseEventHandler<SVGPathElement>
    onMouseEnter: MouseEventHandler<SVGPathElement>
    onMouseLeave: MouseEventHandler<SVGPathElement>
}

export const ScorigamiHexagon: FC<ScorigamiHexagonProps> = ({
    value,
    isHovered,
    path,
    position,
    onClick,
    onMouseEnter,
    onMouseLeave
}) => {
    const fill = `hsl(${-interpolate(value, 0.05) * 45 + 45}, 100%, 50%)`

    const { classes } = useStyles({ fill })

    return (
        <HexagonPath
            className={isHovered ? classes.hovered : classes.root}
            path={path}
            position={position}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    )
}

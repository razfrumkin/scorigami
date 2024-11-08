import { FC, MouseEventHandler } from 'react'
import { Point } from '../HexagonGrid/interfaces/point'

interface HexagonPathProps {
    className: string
    path: string
    position: Point
    onClick?: MouseEventHandler<SVGPathElement>
    onMouseEnter?: MouseEventHandler<SVGPathElement>
    onMouseLeave?: MouseEventHandler<SVGPathElement>
}

export const HexagonPath: FC<HexagonPathProps> = ({
    className,
    path,
    position,
    onClick,
    onMouseEnter,
    onMouseLeave
}) => {
    return (
        <path
            className={className}
            d={path}
            transform={`translate(${position.x}, ${position.y})`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    )
}

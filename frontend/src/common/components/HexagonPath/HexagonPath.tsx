import { forwardRef, HTMLProps } from 'react'
import { Point } from '../HexagonGrid/interfaces/point'

interface HexagonPathProps extends HTMLProps<SVGPathElement> {
    path: string
    position: Point
}

export const HexagonPath = forwardRef<SVGPathElement, HexagonPathProps>(
    ({ path, position, ...props }, ref) => {
        return (
            <path
                {...props}
                ref={ref}
                d={path}
                transform={`translate(${position.x}, ${position.y})`}
            />
        )
    }
)

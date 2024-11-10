import { forwardRef, HTMLProps } from 'react'
import { useStyles } from './ScorigamiHexagon.styles'
import { HexagonPath } from '../../../common/components/HexagonPath'
import { Point } from '../../../common/components/HexagonGrid/interfaces/point'
import { interpolate } from '../../../common/utilities/math/interpolate'

export interface ScorigamiHexagonProps extends HTMLProps<SVGPathElement> {
    value: number
    path: string
    position: Point
}

export const ScorigamiHexagon = forwardRef<
    SVGPathElement,
    ScorigamiHexagonProps
>(({ value, path, position, ...props }, ref) => {
    const fill = `hsl(${-interpolate(value, 0.05) * 45 + 45}, 100%, 50%)`

    const { classes } = useStyles({ fill })

    return (
        <HexagonPath
            {...props}
            ref={ref}
            className={classes.root}
            path={path}
            position={position}
        />
    )
})

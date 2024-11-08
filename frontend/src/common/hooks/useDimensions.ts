import { RefObject, useEffect, useRef, useState } from 'react'
import { Dimensions } from '../interfaces/dimensions'

export const useDimensions = <T extends HTMLElement>(): [
    RefObject<T>,
    Dimensions
] => {
    const ref = useRef<T>(null)
    const [dimensions, setDimensions] = useState<Dimensions>({
        width: 0,
        height: 0
    })

    useEffect(() => {
        const updateDimensions = () => {
            if (ref.current != null) {
                const { width, height } = ref.current.getBoundingClientRect()
                setDimensions({ width, height })
            }
        }

        window.addEventListener('resize', updateDimensions)

        updateDimensions()

        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    return [ref, dimensions]
}

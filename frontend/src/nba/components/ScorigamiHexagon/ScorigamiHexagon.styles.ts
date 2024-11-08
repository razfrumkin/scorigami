import { tss } from 'tss-react/mui'
import { Property } from 'csstype'

export const useStyles = tss
    .withParams<{ fill: Property.Fill }>()
    .create(({ fill }) => ({
        root: {
            fill,
            stroke: '#555'
        },

        hovered: {
            fill: 'lightgrey',
            cursor: 'pointer'
        }
    }))

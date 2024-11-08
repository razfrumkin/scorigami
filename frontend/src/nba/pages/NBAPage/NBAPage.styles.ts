import { tss } from 'tss-react/mui'

export const useStyles = tss.create({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },

    chartContainer: {
        width: '95%',
        height: '95%'
    }
})

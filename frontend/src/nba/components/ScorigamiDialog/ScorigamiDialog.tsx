import { FC } from 'react'
import { Game } from '../../game/entities/game'
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import dayjs from 'dayjs'

interface ScorigamiDialogProps {
    open: boolean
    onClose: () => void
    games: Game[] | null
}

export const ScorigamiDialog: FC<ScorigamiDialogProps> = ({
    open,
    onClose,
    games
}) => {
    if (games == null) return null

    const sampleGame = games[0]

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Games ended with {sampleGame.winnerPoints}-
                {sampleGame.loserPoints}
            </DialogTitle>
            <DialogContent>
                {games.map(game => (
                    <Typography key={game.id}>
                        {game.winnerMatchup} at {dayjs(game.time).format('LL')}
                    </Typography>
                ))}
            </DialogContent>
        </Dialog>
    )
}

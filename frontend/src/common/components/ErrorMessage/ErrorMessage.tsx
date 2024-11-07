import { FC } from 'react'

interface ErrorMessageProps {
    error: Error
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
    return error.message
}

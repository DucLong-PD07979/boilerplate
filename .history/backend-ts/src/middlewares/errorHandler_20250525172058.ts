import { NextFunction, Request, Response } from 'express'
import { StatusCodes, getReasonPhrase } from 'http-status-codes'

interface CustomError extends Error {
  statusCode?: number
  errors?: any
}

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error(err)

  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  const message = err.message || getReasonPhrase(statusCode)
  const errors = err.errors || undefined

  return res.status(statusCode).json({
    success: false,
    message,
    errors
  })
}

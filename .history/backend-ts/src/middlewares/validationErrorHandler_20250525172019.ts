import { NextFunction, Request, Response } from 'express'

export const validationErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'ValidationError') {
    err.statusCode = 400
    err.message = 'Validation failed'
    err.errors = err.errors || err.inner || err.details || null
  }
  next(err)
}

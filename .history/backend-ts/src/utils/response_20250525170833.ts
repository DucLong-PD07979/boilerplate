import { Response } from 'express'
import { StatusCodes, getReasonPhrase } from 'http-status-codes'

interface SuccessResponseOptions<T = unknown> {
  res: Response
  data?: T
  message?: string
  code?: number
  meta?: object // dùng cho pagination hoặc thông tin thêm
}

interface ErrorResponseOptions {
  res: Response
  message?: string
  code?: number
  errors?: any // chi tiết lỗi nếu có (ví dụ: từ yup)
}

export const success = <T = any>({
  res,
  data = {},
  message = 'Success',
  code = StatusCodes.OK,
  meta
}: SuccessResponseOptions<T>) => {
  const responseBody: any = {
    success: true,
    message,
    data
  }

  if (meta) {
    responseBody.meta = meta
  }

  return res.status(code).json(responseBody)
}

export const error = ({
  res,
  message = getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  code = StatusCodes.INTERNAL_SERVER_ERROR,
  errors
}: ErrorResponseOptions) => {
  const responseBody: any = {
    success: false,
    message
  }

  if (errors) {
    responseBody.errors = errors
  }

  return res.status(code).json(responseBody)
}

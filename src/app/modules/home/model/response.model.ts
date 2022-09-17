export interface Response<M> {
  data: M
  responseCode: number
  responseMessage: string
  status:string
}

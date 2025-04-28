import { post } from './axios'

export const _askForDemo = (params: {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  companyName: string
  howCanWeHelpYou?: string
}) => {
  return post('/marketing/corepass/bookdemo', params)
}

import { get, post } from '@/axios/index'

export const userList = (params) => post('/users/userList',params)

export const createUser = (params) => post('/users/createUser',params)

export const uploadUserPic = () => {return '/users/upload'}


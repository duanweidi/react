import axios from 'axios'

const service = axios.create()
const domain = 'http://localhost:4207'
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(domain + url, { params: params }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.post(domain + url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}


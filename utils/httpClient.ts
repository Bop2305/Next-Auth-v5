'use client'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
const controller = new AbortController()

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxMDA1ODUxOSwiZXhwIjoxNzEwMDYyMTE5fQ.N8Qv10NgrOWDRyNd2HBLtZL1yo_fVapunx87hRHLN84'

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Accept: '*',
    'Content-Type': 'application/json',
  },
  signal: controller.signal,
})

export const useHttpClient = () => {
  const { data } = useSession()

  useEffect(() => {
    if (data) {
      httpClient.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return httpClient
}

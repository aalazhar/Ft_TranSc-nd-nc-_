import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type } from 'os'
import React from 'react'

type initialState = {
  name: string,
  userName: string,
  rank: number,
  level: number
  pathImg: string
}

const initialState:initialState = {
  name: '---',
  userName: '---',
  pathImg: '/noBadge.png',
  rank: 0,
  level: 0
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
}) 

export default userSlice


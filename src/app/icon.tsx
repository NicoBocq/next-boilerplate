import React from 'react'
import { ImageResponse } from 'next/og'

import { appConfig } from '@/config/app'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

const env = process.env.NODE_ENV

export default function Icon() {
  const colorDict = {
    development: 'pink',
    production: 'white',
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: colorDict[env as keyof typeof colorDict],
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
        }}
      >
        <span>{appConfig.favicon}</span>
      </div>
    ),
    {
      ...size,
    },
  )
}

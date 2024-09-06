import localFont from 'next/font/local'
import { ImageResponse } from 'next/og'

import { appConfig } from '@/config/app'

export const runtime = 'edge'

export const alt = appConfig.name
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  weight: '100 900',
})

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 100,
          fontWeight: 'bold',
          color: '#000',
          fontFamily: geistSans.className,
        }}
      >
        <span>{appConfig.name}</span>
      </div>
    ),
    {
      ...size,
    },
  )
}

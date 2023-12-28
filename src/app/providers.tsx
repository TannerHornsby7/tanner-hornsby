// app/providers.tsx
'use client'
import '@fontsource/raleway/300.css'
import '@fontsource/slackey/400.css'
import '@fontsource/open-sans/700.css'

import theme from '../../theme'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
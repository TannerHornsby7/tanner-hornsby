'use client'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box textAlign="center" mt={10}>
      <Heading as="h1" size="xl" mb={4}>
        Tanner Hornsby
      </Heading>
      <Text fontSize="xl">Full-Stack Engineer</Text>
    </Box>
  )
}
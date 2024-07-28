import React from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

const LoadingButton = () => {
  return (
    <Button>
        <Loader2/>
        Loading
    </Button>
  )
}

export default LoadingButton
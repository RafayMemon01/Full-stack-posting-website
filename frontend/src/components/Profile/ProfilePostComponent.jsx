import React from 'react'
import PostHeader from './PostHeader'
import { Box } from '@chakra-ui/react'
const ProfilePostComponent = () => {
  return (
    <>
    <Box display={'flex'} flexDir={'column'} justifyContent={'start'}>
    
     <PostHeader/> 
     {/* PostBody */}
     {/* PostFooter */}
    </Box>
    </>
  )
}

export default ProfilePostComponent

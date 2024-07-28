import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import HeaderProfilePage from './HeaderProfilePage'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfilePostComponent from '../../components/Profile/ProfilePostComponent'

const ProfilePage = () => {
  const navigate = useNavigate()
  const isAuth = useSelector((state)=>state.user.isAuthenticate)
  const userInfo = useSelector((state)=>state.user.userInfo)

  if(!isAuth){
    navigate('/auth')
    return;
  }
  return (
    <Box h={'80vh'} px={10}>
        <HeaderProfilePage userInfo={userInfo} />
        <Box display={'flex'} justifyContent={'center'} my={5} gap={2}>
          <Button bg={'transparent'} _hover={{background:'transparent'}}>0 Posts</Button>
          <Button bg={'transparent'} _hover={{background:'transparent'}}>0 Followers</Button>
          <Button bg={'transparent'} _hover={{background:'transparent'}}>0 Following</Button>
        </Box>

        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={'1em'}>
          <ProfilePostComponent />
        </Flex>

        
    </Box>
  )
}

export default ProfilePage

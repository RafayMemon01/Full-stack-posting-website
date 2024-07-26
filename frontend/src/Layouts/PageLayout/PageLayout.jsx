import React from 'react'
import LayoutHeader from '../../components/LayoutHeader'
import LayoutFooter from '../../components/LayoutFooter'
import { Box } from '@chakra-ui/react'

const PageLayout = ({children}) => {
  return (
    <>
     <LayoutHeader />
     <Box>
     {children}
     </Box>
     <LayoutFooter /> 
    </>
  )
}

export default PageLayout

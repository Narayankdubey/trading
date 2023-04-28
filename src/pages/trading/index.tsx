import LayoutContainer from '@/components/layout';
import { TradingContainer } from '@/components/screens';
import React, { FC } from 'react'

interface indexProps {
  
}

const index: FC<indexProps> = ({  }) => {
  return (
    <LayoutContainer>
      <TradingContainer/>
    </LayoutContainer>
  )
}

export default index;
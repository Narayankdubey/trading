import LayoutContainer from '@/components/layout';
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const StrategyResult = (props: Props) => {
    const router = useRouter();
    console.log(router.query,'router')
  return (
    <LayoutContainer>
        <div>StrategyResult</div>
    </LayoutContainer>
  )
}

export default StrategyResult
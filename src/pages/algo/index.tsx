import LayoutContainer from '@/components/layout';
import AlgoContainer from '@/components/screens/algo';
import React, { FC } from 'react'

interface AlgoProps {

}

const Algo: FC<AlgoProps> = ({ }) => {
    return (
        <LayoutContainer>
            <AlgoContainer />
        </LayoutContainer>
    )
}

export default Algo;
import React from 'react'
import { render, queryByTestId } from '@testing-library/react'
import Episodes from './Episodes'

test ("episode array renders ", ()=>{
    const {queryByTestId} = render(<Episodes episodes={[]} />);

})
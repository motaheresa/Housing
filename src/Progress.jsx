import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react'

const Progress = () => {
    const prog={
        color:"rgb(207,175,86)",
    }
            return (
                <div className='h-screen w-screen bg-black'>
                    <div className='bg-transparent flex items-center h-full justify-center text-5xl text-white'>
                        <CircularProgress style={prog}/>
                    </div>
                </div>
            )

}

export default Progress
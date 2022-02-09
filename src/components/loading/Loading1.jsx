import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {BallTriangle} from 'react-loader-spinner'

const Loading1 = () => {
  return (<div style={{display: 'flex',
                   justifyContent:'center',
                   marginTop: '40px',
                   marginBottom: '100px' }}>
        <BallTriangle
            color="blue"
            height={40}
            width={40}
            timeout={1000}
        />
      </div>);
};

export default Loading1;

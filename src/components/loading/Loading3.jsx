import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {Bars} from 'react-loader-spinner'

const Loading1 = () => {
  return (<div style={{display: 'flex',
                   justifyContent:'center',
                   marginTop: '40px',
                   marginBottom: '100px' }}>
        <Bars
            color="blue"
            height={40}
            width={40}
            timeout={1600}
        />
      </div>);
};

export default Loading1;

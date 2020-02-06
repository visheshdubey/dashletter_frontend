import React from 'react';

function ImgComp({src}) {
    let imgStyles= {
        width: 100 + '%',
        height: 'auto'
    }
    return <img src={src} alt="side-img" style={imgStyles}/>
}

export default ImgComp;
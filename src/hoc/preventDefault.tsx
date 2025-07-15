import React from 'react'

const preventDefault = (func?: (e: React.MouseEvent<any>)=> void) => {
    return (e: React.MouseEvent<any>) => {
        e.preventDefault();
        e.stopPropagation();
        if (func) {
            func(e);
        }
    }
};

export default preventDefault;

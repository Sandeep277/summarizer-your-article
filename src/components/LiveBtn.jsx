import React from 'react'

const LiveBtn = () => {
    return (
        <button type="button"
            style={{ marginBottom: '3rem' }}
            className="black_btn"
            onClick={() => window.open('https://github.com/sandeep277')}>
            Live Demo
        </button>
    )
}

export default LiveBtn

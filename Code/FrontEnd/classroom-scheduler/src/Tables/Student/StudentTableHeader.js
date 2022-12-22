import React from 'react'

function StudentTableHeader({ setIsAdding }) {
    return (
        <header>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Button</button>
            </div>
        </header>
    )
}

export default StudentTableHeader
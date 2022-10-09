import React from 'react';

// Component
import HeaderTitle from './HeaderTitle';
import HeaderSortAdd from './HeaderSortAdd';

export default function TodoListHeader({ handleClick, showDropdown }) {
    return (
        <div className='content-header'>
            <HeaderTitle />
            <HeaderSortAdd
                handleClick={handleClick}
                showDropdown={showDropdown}
            />
        </div>
    )
}

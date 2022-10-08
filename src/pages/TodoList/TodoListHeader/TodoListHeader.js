import React from 'react';

// Component
import HeaderTitle from './HeaderTitle';
import HeaderSortAdd from './HeaderSortAdd';

export default function TodoListHeader() {
    return (
        <div className='content-header'>
            <HeaderTitle />
            <HeaderSortAdd />
        </div>
    )
}

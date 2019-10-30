import React from 'react';

const Author = () => {

    return ( 
        <ul className='list-group list-group-flush  text-left ml-3'>
            <li className='list-group-item borderless'>
                <span className='mr-4' >
                    <svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor">
                        <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
                    </svg>
                </span>
                Hamza Chorfi
                <br/>
                <span className='job-title'>Software developer</span>
            </li>
            <li className='list-group-item borderless'>
                <span className='mr-4' >
                    <svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor">
                        <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" />
                        <circle cx="16" cy="21" r="4" />
                    </svg>
                </span>
                514-260-2646
            </li>
            <li className='list-group-item borderless'>
                <span className='mr-4' >
                    <svg id="i-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor">
                        <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
                    </svg>
                </span>
                developerw3@gmail.com
            </li>
        </ul>
    );
}

export default Author;

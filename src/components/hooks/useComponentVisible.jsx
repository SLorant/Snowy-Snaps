import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const reft = useRef(null);

    const handleClickOutside = (event) => {
        if (reft.current && !reft.current.contains(event.target)) {
            setIsComponentVisible(false);
            
        }
        else { setIsComponentVisible(true); }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { reft, isComponentVisible, setIsComponentVisible };
}
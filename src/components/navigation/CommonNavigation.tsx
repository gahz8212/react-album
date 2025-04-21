import './CommonNavigation.scss';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavItems from './NavItems.json'
import { searchState } from '@/jotai/atoms/searchState';
import { pageState } from '@/jotai/atoms/pageState';
import { useAtom } from 'jotai';

type navi = {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}
const CommonNavigation = () => {
    const location = useLocation();
    const [navigation, setNavigation] = useState<navi[]>(NavItems)
    const [, setSearch] = useAtom(searchState)
    const [, setPage] = useAtom(pageState)


    useEffect(() => {

        navigation.forEach((nav: navi) => {
            nav.isActive = false

            if (nav.path === location.pathname || location.pathname.includes(nav.path)) {
                nav.isActive = true
                setSearch(nav.searchValue)
                setPage('1')
            }
        })
        setNavigation([...navigation])
    }, [location.pathname])
    const navigationDatas = navigation.map(nav =>
        <Link to={nav.path} key={nav.path} className={`menu ${nav.isActive ? "active" : "inactive"}`}>
            {/* <span onClick={() => { onToggle(nav.index) }}>{nav.label}</span> */}
            <span>{nav.label}</span>
        </Link>)

    return (
        <div className="navigation">
            {navigationDatas}
        </div>
    );
};

export default CommonNavigation;
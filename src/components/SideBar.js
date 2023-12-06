import React, { useCallback, useState } from 'react';
import styles from '../styles/App';
import { Link } from 'react-router-dom';

const initialState = {
    type: 'students',
    routes: [
        { name: 'Main', title: true },
        {
            name: 'Reports',
            menu: [
                { text: 'Attendance', path: '/attendance', selected: false },
                { text: 'All courses', path: '', selected: false },
                { text: 'All students', path: '', selected: false }
            ]
        },
        { name: 'Admin', title: true },
        {
            name: 'Course',
            menu: [
                { text: 'Create', path: '/course/add', selected: false },
                { text: 'Show List', path: '/course/list', selected: false }
            ]
        },
        {
            name: 'Student',
            menu: [
                { text: 'Create', path: '/student/add', selected: false },
                { text: 'Show List', path: '/student/list', selected: false }
            ]
        }
    ]
}
export default function SideBar() {
    const [submenuType, setSubMenuType] = useState(initialState.type);
    const toggleMenu = useCallback((type) => {
        setSubMenuType(prev => {
            if (prev == type) return '';
            else return type;
        })
    }, []);
    const { routes } = initialState;
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        {
                            routes.map((r, rIdx) => {
                                const routeName = r.name;
                                const routeNameKey = routeName.toLowerCase();
                                return r.title ? (
                                    <li key={`${routeNameKey}-${rIdx}`} className="menu-title">{routeName}</li>
                                ) : (
                                    <li key={`${routeNameKey}-${rIdx}`} className={r.menu ? 'submenu' : ''}>
                                        <a
                                            href="javascript:void(0)"
                                            onClick={toggleMenu.bind(null, routeNameKey)}
                                            className={submenuType == routeNameKey ? "active subdrop" : ''}
                                        >
                                            <i className="fa fa-user"></i>
                                            <span> {r.name} </span>
                                            <span className="menu-arrow">
                                            </span>
                                        </a>
                                        {
                                            submenuType == routeNameKey ? (
                                                <ul style={styles.block}>
                                                    {
                                                        r.menu.map((rm, idx) => (
                                                            <li key={`${routeNameKey}-${rm.text.toLowerCase()}-${idx}`}>
                                                                <Link
                                                                    to={rm.path}
                                                                    className={rm.selected ? 'active' : ''}
                                                                >{rm.text}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            ) : null
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

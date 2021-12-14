import React, { useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router';
import './Dashboard.css'
import Users from '../Users/Users';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faObjectGroup, faUpload, faFileExport, faTrash } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [displayUsers, setDisplayUsers] = useState(0);

    //Fetching data from the API and storing them in states
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setDisplayUsers(data)
            })
    }, [])

    const [toggled, setToggled] = useState(false);
    let { path, url } = useRouteMatch();


    // Search bar functionality
    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchedUsers = users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayUsers(matchedUsers);
    }


    return (
        <>
            {
                //Default value of displayUsers is 0 so if it becomes an array with length then users data are fetched so till it's 0 a spinner is displayed in UI for good UX. 
                displayUsers !== 0
                    ?
                    <div className={toggled ? "d-flex toggled" : "d-flex"} id="wrapper">

                        <div className="bg-dark" id="sidebar-wrapper">
                            <div className="text-center pt-4 pb-2 border-bottom">
                                <button className="btn btn-outline-light btn-lg rounded-pill mb-3"> <FontAwesomeIcon icon={faPlus} /> Create Contact</button>
                            </div>
                            <div className="list-group list-group-flush my-3 mx-auto">
                                <Link to={`${url}`}><Button className="btn app-main-btn col-10 mb-3 " >
                                    <FontAwesomeIcon icon={faUser} /> Contacts</Button>
                                </Link>
                                <Link to={`${url}/merge-fix`}>
                                    <Button className="btn app-main-btn col-10 mb-3" >
                                        <FontAwesomeIcon icon={faObjectGroup} /> Merge & Fix
                                    </Button>
                                </Link>
                                <Link to={`${url}/import`}>
                                    <Button className="btn app-main-btn col-10 mb-3" >
                                        <FontAwesomeIcon icon={faUpload} /> Import
                                    </Button>
                                </Link>
                                <Link to={`${url}/export`}>
                                    <Button className="btn app-main-btn col-10 mb-3" >
                                        <FontAwesomeIcon icon={faFileExport} /> Export
                                    </Button>
                                </Link>
                                <Link to={`${url}/trash`}>
                                    <Button className="btn app-main-btn col-10 mb-3" >
                                        <FontAwesomeIcon icon={faTrash} /> Trash
                                    </Button>
                                </Link>

                            </div>
                        </div>

                        <div id="page-content-wrapper">
                            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4 d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <i onClick={() => setToggled(!toggled)} className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"
                                        style={{ color: '#007cc2' }}
                                    ></i>
                                    <h3 className="m-0 text-uppercase dashboard-title"
                                    >Contacts</h3>
                                </div>

                                <div className="col-12 mt-3 mt-md-0 col-md-7">
                                    <input onChange={handleSearch} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                </div>

                            </nav>

                            <div className="container-fluid px-4">
                                {/* Nested Routing */}
                                <Switch>
                                    <Route exact path={path}>
                                        <Users users={displayUsers}></Users>
                                    </Route>
                                    <Route path={`${path}/merge-fix`}>

                                    </Route>
                                    <Route path={`${path}/import`}>

                                    </Route>
                                    <Route path={`${path}/export`}>

                                    </Route>
                                    <Route path={`${path}/trash`}>

                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                    :
                    // Loading Spinner
                    <div class="spinner d-flex align-items-center justify-content-center">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
            }
        </>
    );
};

export default Dashboard;
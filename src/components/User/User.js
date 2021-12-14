import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const User = ({ user }) => {
    // Destructuring data from user object 
    const { id, name, username, email, address, phone, website, company } = user;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Color code stored to display randomly
    const colors = ["#3984ff", "#fa5649", "#ffa113", "#5a00dd"];


    return (
        <>
            <tr className="mb-4" onClick={handleShow}>
                <td className="py-3">
                    <span className="fw-bold px-3 py-2 rounded-circle text-white me-3" style={{ backgroundColor: (colors[Math.floor(Math.random() * colors.length)]) }}>
                        {name[0]}
                    </span>
                    <span>
                        {name}
                    </span>
                </td>
                <td className="d-none d-lg-table-cell py-3">{phone}</td>
                <td className="d-none d-lg-table-cell py-3">{email}</td>

            </tr>
            {/* Modal to show detailed information about the user */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li><span className="fw-bold">ID</span> : {id}</li>
                        <li><span className="fw-bold">Username</span> : {username}</li>
                        <li><span className="fw-bold">Email</span> : {email}</li>
                        <li><span className="fw-bold">Phone</span> : {phone}</li>
                        <li><span className="fw-bold">Website</span> : {website}</li>
                        <li><span className="fw-bold">Address</span> :
                            {address.street + "," + address.suite + "," + address.city + "," + address.zipcode + ","}
                        </li>
                        <li><span className="fw-bold">Company</span> : {company.name}</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default User;
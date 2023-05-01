import React from 'react';
import AddListing from '../../components/addListing/AddListing';
import { useAuth0 } from "@auth0/auth0-react";

const CarUpload = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <>
            {isAuthenticated ? (
                <AddListing />
            ) : (
                <h1><center>reikia prisijungti</center></h1>
            )}
        </>
    );
};
export default CarUpload;
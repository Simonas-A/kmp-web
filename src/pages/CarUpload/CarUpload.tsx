import React from 'react';
import AddListing from '../../components/addListing/AddListing';
import { useAuth0 } from "@auth0/auth0-react";

const CarUpload = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <>
            <div className='background-new-upload'>
                {isAuthenticated ? (
                    <AddListing />
                ) : (
                    <h1 style={{backgroundColor: "lavender", textAlign: "center", paddingTop: 300}}>
                        Norint įdėti naują skelbimą, reikia prisijungti
                    </h1>
                )}
            </div>
        </>
    );
};
export default CarUpload;
import {useState, useEffect} from "react";
import Form from "../Form/Form";
// import {} from "@""

const UserDetails = () => {
    const [openForm, setOpenForm] = useState(open);

    return(
        <>
            {
                (openForm && <Form editid={4}/>)
            }
        </>
    );
}

export default UserDetails;
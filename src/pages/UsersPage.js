
import React, { Fragment } from "react";

function UsersPage() {
    const [usersData, setUsersData] = React.useState(false);

    const columns = [
        {
            name: 'Sr. No.',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Mobile',
            selector: row => row.phone,
        },
        {
            name: 'Age',
            selector: row => row.age,
        },
        {
            name: 'Slots',
            selector: row => row.slots,
        },
        {
            name: 'Message',
            selector: row => row.message,
        },
    ];

    return (
        <Fragment>
            <>
                <div>
                </div>
            </>
        </Fragment>
    );
}


export default UsersPage;
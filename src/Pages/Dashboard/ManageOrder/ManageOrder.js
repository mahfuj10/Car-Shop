import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from 'react-hook-form';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ManageOrder() {

    const [allOrders, setAllOrders] = React.useState([]);
    const [status, setStatus] = React.useState('');

    React.useEffect(() => {
        fetch(`https://evening-fjord-73042.herokuapp.com/book`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders]);


    const handleStatusValue = (event) => {
        setStatus(event.target.value);
    };

    const handaleStatusChange = id => {

        fetch(`https://evening-fjord-73042.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
    }

    const handaleDelete = id => {

        const uri = `https://evening-fjord-73042.herokuapp.com/bookCar/${id}`;
        const exist = window.confirm("Are You sure want to delete ??");
        if (exist) {
            fetch(uri, {
                method: "DELETE",
            })
                .then()
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remainingCar = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingCar);
                        alert("delete")
                    }
                })
        }
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="right">Email ID</TableCell>
                        <TableCell align="right">Cars Name</TableCell>
                        <TableCell align="right">Action</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allOrders.map((row) => (
                        <TableRow
                            key={row?._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row?.userName}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row?.address}
                            </TableCell>
                            <TableCell align="right">{row?.email}</TableCell>
                            <TableCell align="right">{row?.name}</TableCell>
                            <TableCell align="right" ><DeleteIcon onClick={() => handaleDelete(row._id)} /></TableCell>
                            <TableCell align="right">
                                <select
                                    onChange={handleStatusValue}
                                    onClick={() => handaleStatusChange(row?._id)}
                                    style={{ padding: "5px 10px" }}>

                                    <option value="Pending">{row.status}</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Done">Done</option>
                                </select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
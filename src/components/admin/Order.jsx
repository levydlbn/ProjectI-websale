import React from 'react'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import './css/order.css'

const columns = [
    { id: 'codeOrder', label: 'Mã đặt hàng', minWidth: 170 },
    { id: 'timeOrder', label: 'Thời gian', minWidth: 100 },
    {
        id: 'locationOrder',
        label: 'Địa chỉ',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'customerOrder',
        label: 'Khách hàng',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'priceOrder',
        label: 'Khách cần trả',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'MethodPayment',
        label: 'Phương thức thanh toán',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(codeOrder, timeOrder, locationOrder, customerOrder, priceOrder, MethodPayment) {
    return { codeOrder, timeOrder, locationOrder, customerOrder, priceOrder, MethodPayment };
}

const rows = [
    createData('23r4234swf', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('234243dr', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('345234235sd', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('àdasfsdf343', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('234234sdfs', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('àdasfsdf343', 'AU23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('àdasfsdf343dd', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('345234235sddsds', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('345234235sdsdsa', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('345234235sdsdaa', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('345234235sdewe3', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('345234235sddfdf', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('345234235sdfda', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('345234235sd453', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('345234235sdsdfr234', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('qwe34523qw4235sdqwe', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('xv34523sdf4235sd', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('xv34523sdf4235sd', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('xv34523sdf4235sd', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('xv34523sdf4235sd', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('xv34523sdf4235sd', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('xv34523sdf4235sd', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('xv34523sdf4235sd', '23:12:32 25/11/2021', 'ngã tư Phố mới, Quế Võ, Bắc Ninh', 'Nguyễn Thị Lụa', 3287263, 'Thanh toán khi lấy hàng'),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];






const Order = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return ( 
    <div className = 'order'>
        <Paper sx = {
            { width: '100%', overflow: 'hidden' } }>
        <TableContainer sx = {
            { maxHeight: 500 } }>
        <Table>
        <TableHead>
        <TableRow> {
            columns.map((column) => ( 
                <TableCell key = { column.id }
                align = { column.align }
                style = {
                    { minWidth: column.minWidth } }>
                { column.label } 
                </TableCell>
            ))
        } </TableRow> 
        </TableHead> 
        <TableBody> {
            rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
                return ( 
                    <TableRow hover role = "checkbox"
                    tabIndex = {-1 }
                    key = { row.code } > {
                        columns.map((column) => {
                            const value = row[column.id];
                            return ( 
                                <TableCell key = { column.id }
                                align = { column.align } > {
                                    column.format && typeof value === 'number' ?
                                    column.format(value) :
                                        value
                                } 
                                </TableCell>
                            );
                        })
                    } 
                    </TableRow>
                );
            })
        } 
        </TableBody> 
        </Table> 
        </TableContainer> 
        <TablePagination rowsPerPageOptions = {
            [10, 25, 100] }
        component = "div"
        count = { rows.length }
        rowsPerPage = { rowsPerPage }
        page = { page }
        onPageChange = { handleChangePage }
        onRowsPerPageChange = { handleChangeRowsPerPage }/> 
        </Paper> 
        </div>
    )
}

export default Order
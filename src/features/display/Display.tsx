import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

interface IAcoountTable {
    id: string,
    date: {
        date: string,
        dateTemplate?:string,
        plus?: number,       //n일 후까지
        minus?: number,      //n일 전까지
    },
    name: string,
    price: {
        price: number,
        plus?: number,
        minus?: number,
    },
}

const tableData: IAcoountTable[] = [
    {
        id: "asjhdfle",
        date:{
            date:'20190918',
            dateTemplate:'yyyymmdd',
            minus:2,
            plus:2,
        },
        name:"배게",
        price:{
            price:15000,
            minus:2000,
        }
    },
    {
        id: "shdpohnjwg",
        date:{
            date:'20190920',
            dateTemplate:'yyyymmdd',
        },
        name:"피부과",
        price:{
            price:360000,
            plus:90000,
            minus:50000,
        }
    },

]

export const Display = () => {
    const classes = useStyles()
    const [rowNum, setRowNum] = useState(8)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label={"simple table"}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align={"right"}>Date</TableCell>
                        <TableCell align={"right"}>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component={"th"} scope={"row"}>{row.name}</TableCell>
                            <TableCell align={"right"}>{row.date.date} {(row.date.minus) ? `-${row.date.minus}` : ``}{(row.date.plus) ? `+${row.date.plus}` : ``}</TableCell>
                            <TableCell align={"right"}>{row.price.price} {(row.price.minus) ? `-${row.price.minus}` : ``}{(row.price.plus) ? `+${row.price.plus}` : ``}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow key={"table-sum"}>
                            <TableCell component={"th"} scope={"row"}>합계</TableCell>
                            <TableCell align={"right"}></TableCell>
                            <TableCell align={"right"}>{tableData.map(i=>i.price.price).reduce((total, num)=>total+num, 0)} -{tableData.map(i=>i.price.minus??0).reduce((total, num)=>total+num, 0)}+{tableData.map(i=>i.price.plus??0).reduce((total, num)=>total+num, 0)}</TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
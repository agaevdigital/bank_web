import React from 'react';
import axios from "axios/index";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {api_endpoint} from "settings";

// const tableStyle = {
//     color: '#C7C1C1',
// };

// const tableStyle1 = {
//     color: '#ffffff',
// };

const tableStyle = {
    //textColor: 'white',
    // margin: 'dense',
    color: '#000000',
//     '&:hover': {
//         backgroundColor: 'blue !important'
//     },
//     '&:hover fieldset': {
//         backgroundColor: 'red !important',
//     },
    // onRowHover: 'black'
    //fontColor: 'white'
};

const tableHeaderStyle = {
    //textColor: 'white',
    color: '#EAEAEA',
    fontWeight: 'bold',
    backgroundColor: '#3B4754'
    //fontColor: 'white'

};

const finlogHeadCells = [
    { id: 'id',               api_label:'ord_id',               numeric: true, disablePadding: true, label: 'ID', asc: 'true', direction: 'asc' },
    { id: 'user_id',          api_label:'ord_user_id',          numeric: true, disablePadding: true, label: 'User_ID', asc: 'false', direction: 'desc'},
    { id: 'user_fullname',    api_label:'ord_user_fullname',    numeric: true, disablePadding: true, label: 'User fullname', asc: 'false', direction: 'desc' },
    { id: 'total_amount',     api_label:'ord_total_amount',     numeric: true, disablePadding: true, label: 'Total amount', asc: 'false', direction: 'desc' },
    { id: 'total_commission', api_label:'ord_total_commission', numeric: true, disablePadding: true, label: 'Total commission', asc: 'false', direction: 'desc' },
    { id: 'currency',         api_label:'ord_currency',         numeric: true, disablePadding: true, label: 'Currency', asc: 'false', direction: 'desc' },
    { id: 'created_at',       api_label:'ord_created_at',       numeric: true, disablePadding: true, label: 'Operation date', asc: 'false', direction: 'desc' },
    { id: 'status',           api_label:'ord_status',           numeric: true, disablePadding: true, label: 'Status', asc: 'false', direction: 'desc' },
    { id: 'opertype',         api_label:'ord_opertype',         numeric: true, disablePadding: true, label: 'Operation type', asc: 'false', direction: 'desc' },
];

export default class UserFinOperLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table_content: [],
            dialogOpened: true,
            sorting_fields: {
                "id": true,
                "user_id": false,
                "user_fullname": false,
                "total_amount": false,
                "total_commission": false,
                "currency" : false,
                "created_at" : false,
                "status" : false,
                "opertype" : false
            }
        };

        this.getContent = this.getContent.bind(this);
        this.finopsDialogClose = this.finopsDialogClose.bind(this);
        this.performSort = this.performSort.bind(this);
        this.render_amount = this.render_amount.bind(this);

    }

    getContent() {
        axios.get(api_endpoint+'/finoperations')
            .then(response => {
                this.setState({table_content: response.data});
                //alert(this.state.table_content.length);
            })
            .catch(err=>{
                console.error(`${err}`);
            });

    }

    finopsDialogClose() {
        this.setState({dialogOpened: false});
    }

    performSort(headCell) {
        // alert('clicked id  = ' + headCell.id);
        if (this.state.table_content.length !== 0) {
            if (finlogHeadCells.asc === 'true') {
                finlogHeadCells.find(finlogHeadCells_ => finlogHeadCells_.id === finlogHeadCells.id).asc = 'false';
                finlogHeadCells.find(finlogHeadCells_ => finlogHeadCells_.id === finlogHeadCells.id).direction = 'desc';
                for (const hc of finlogHeadCells) {
                    if (hc.id !== finlogHeadCells.id) {
                        hc.direction = 'desc';
                        hc.asc = 'false';
                    }
                }
            } else {
                finlogHeadCells.find(headCell_ => headCell_.id === finlogHeadCells.id).asc = 'true';
                finlogHeadCells.find(headCell_ => headCell_.id === finlogHeadCells.id).direction = 'asc';
                for (const hc of finlogHeadCells) {
                    if (hc.id !== finlogHeadCells.id) {
                        hc.direction = 'desc';
                        hc.asc = 'false';
                    }
                }
            }

            // let keyname = finlogHeadCells.api_label;
            // let keyval;
            // if (finlogHeadCells.asc === 'true') {
            //     keyval = 0;
            // }
            // else {
            //     keyval = 1;
            // }
        }
    }

    render_amount (sum, dec) {
        return Number(sum).toFixed(dec)
    }

    render() {
        return (
            <div>
                <Table stickyHeader size={'small'}>
                    <TableHead>
                        <TableRow style={tableHeaderStyle}>
                            {finlogHeadCells.map(finlogHeadCells => (
                                <TableCell
                                    key={finlogHeadCells.id}
                                    align={finlogHeadCells.numeric ? 'left':'left'}
                                    style={tableHeaderStyle}
                                    padding={finlogHeadCells.disablePadding ? 'none':'default'}
                                >
                                    <TableSortLabel
                                        active={'true'}
                                        direction={finlogHeadCells.direction}
                                        style={tableHeaderStyle}
                                        onClick={event => this.performSort(finlogHeadCells)}
                                    >
                                        {finlogHeadCells.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody style={tableStyle}>
                        {
                            this.state.table_content.map(result =>(
                                <TableRow
                                    hover = {{backgroundColor: '#911'}}
                                    key = {result.id}
                                    onDoubleClick={event => this.finOpsTableClickHandler(event, result.id)}
                                    style={tableStyle}
                                >
                                    <TableCell style={tableStyle} padding={'none'}>
                                        {result.id}
                                    </TableCell>
                                    <TableCell style={tableStyle} padding={'none'}>
                                        {result.user_id}
                                    </TableCell>
                                    <TableCell style={tableStyle} padding={'none'}>
                                        {result.user_fullname}
                                    </TableCell>
                                    <TableCell style={tableStyle} padding={'none'}>
                                        {this.render_amount(result.total_amount, result.currency_dec)}
                                    </TableCell>
                                    <TableCell style={tableStyle} padding={'none'}>
                                        {this.render_amount(result.total_commission, result.currency_dec)}
                                    </TableCell>
                                    <TableCell style={tableStyle} padding={'none'}>
                                        {result.currency}
                                    </TableCell>
                                    <TableCell style={tableStyle} padding={'none'}>
                                        {result.created_at}
                                    </TableCell>
                                    <TableCell style={tableStyle} padding={'none'}>
                                        {result.status}
                                    </TableCell>
                                    <TableCell style={tableStyle} padding={'none'}>
                                        {result.opertype}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}

import React from 'react';
import axios from "axios/index";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Grid from '@material-ui/core/Grid';
import {api_endpoint} from "../../settings";


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
    backgroundColor: '#3B4754',
    //fontColor: 'white'

};

const finlogHeadCells = [
    { id: 'created_at',   api_label:'ord_created_at',   numeric: true, disablePadding: true, label: 'Operation date',     asc: 'true', direction: 'desc' },
    { id: 'opertype',     api_label:'ord_opertype',     numeric: true, disablePadding: true, label: 'Operation type',     asc: 'false', direction: 'desc' },
    { id: 'total_amount', api_label:'ord_total_amount', numeric: true, disablePadding: true, label: 'Total amount',       asc: 'false', direction: 'desc' },
    { id: 'currency',     api_label:'ord_currency',     numeric: true, disablePadding: true, label: 'Currency',           asc: 'false', direction: 'desc' },
    { id: 'card_number',  api_label:'ord_card_number',  numeric: true, disablePadding: true, label: 'Masked card number', asc: 'false', direction: 'desc'},
    { id: 'ip',           api_label:'ord_ip',           numeric: true, disablePadding: true, label: 'Ip',                 asc: 'false', direction: 'desc' },
    { id: 'location',     api_label:'ord_location',     numeric: true, disablePadding: true, label: 'Location',           asc: 'false', direction: 'desc' },
    { id: 'device',       api_label:'ord_device',       numeric: true, disablePadding: true, label: 'Device',             asc: 'false', direction: 'desc' },
    { id: 'browser',      api_label:'ord_browser',      numeric: true, disablePadding: true, label: 'Browser',            asc: 'false', direction: 'desc' },

];

export default class UserFinOperLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table_content: [],
            rows_per_page: 50,
            sorting_fields: {
                "created_at": true,
                "opertype": false,
                "total_amount": false,
                "currency": false,
                "card_number": false,
                "ip" : false,
                "location" : false,
                "device" : false,
                "browser" : false
            }
        };

        this.getContent = this.getContent.bind(this);
        this.performSort = this.performSort.bind(this);
        this.render_amount = this.render_amount.bind(this);

    }

    getContent() {
        // alert(sessionStorage.getItem('user_id'))
        axios.get(api_endpoint+'/userfinoperlog',{params:
                {'user_id': sessionStorage.getItem('user_id')}})
            .then(response => {
                this.setState({table_content: response.data});
                //alert(this.state.table_content.length);
            })
            .catch(err=>{
                console.error(`${err}`);
            });
        // alert(sessionStorage.getItem('user_id'))

    }

    performSort(finlogHeadCell) {
        // alert('clicked id  = ' + headCell.id);
        if (this.state.table_content.length !== 0) {
            if (finlogHeadCell.asc === 'true') {
                finlogHeadCells.find(finlogHeadCells_ => finlogHeadCells_.id === finlogHeadCell.id).asc = 'false';
                finlogHeadCells.find(finlogHeadCells_ => finlogHeadCells_.id === finlogHeadCell.id).direction = 'desc';
                for (const hc of finlogHeadCells) {
                    if (hc.id !== finlogHeadCell.id) {
                        hc.direction = 'desc';
                        hc.asc = 'false';
                    }
                }
            } else {
                finlogHeadCells.find(finlogHeadCells_ => finlogHeadCells_.id === finlogHeadCell.id).asc = 'true';
                finlogHeadCells.find(finlogHeadCells_ => finlogHeadCells_.id === finlogHeadCell.id).direction = 'asc';
                for (const hc of finlogHeadCells) {
                    if (hc.id !== finlogHeadCell.id) {
                        hc.direction = 'desc';
                        hc.asc = 'false';
                    }
                }
            }

            let keyname = finlogHeadCell.api_label;
            let keyval;
            if (finlogHeadCell.asc === 'true') {
                keyval = 0;
            }
            else {
                keyval = 1;
            }
            axios.get(api_endpoint+'/userfinoperlog', {
                params:
                    {
                        'user_id': sessionStorage.getItem('user_id'),
                        [keyname]: keyval,
                        'limit': this.state.rows_per_page,
                    }
            })
                .then(response => {
                    this.setState({table_content: response.data})
                })
        }
    }

    render_amount (sum, dec) {
        return Number(sum).toFixed(dec)
    }

    render() {
        return (
            <div>
                <Grid>
                    <Table stickyHeader size={'small'}>
                        <TableHead >
                            <TableRow style={tableHeaderStyle}>
                                {finlogHeadCells.map(finlogHeadCell => (
                                    <TableCell
                                        key={finlogHeadCell.id}
                                        align={finlogHeadCell.numeric ? 'left':'left'}
                                        style={tableHeaderStyle}
                                        padding={finlogHeadCell.disablePadding ? 'none':'default'}
                                    >
                                        <TableSortLabel
                                            active={'true'}
                                            direction={finlogHeadCell.direction}
                                            style={tableHeaderStyle}
                                            onClick={event => this.performSort(finlogHeadCell)}
                                        >
                                            {finlogHeadCell.label}
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
                                        style={tableStyle}
                                    >
                                        <TableCell style={tableStyle} padding={'none'}>
                                            {result.created_at}
                                        </TableCell>
                                        <TableCell style={tableStyle} padding={'none'}>
                                            {result.opertype}
                                        </TableCell>
                                        <TableCell style={tableStyle} padding={'none'}>
                                            {this.render_amount(result.total_amount, result.currency_dec)}
                                        </TableCell>
                                        <TableCell style={tableStyle} padding={'none'}>
                                            {result.currency}
                                        </TableCell>
                                        <TableCell style={tableStyle} padding={'none'}>
                                            {result.card_number}
                                        </TableCell>
                                        <TableCell style={tableStyle} padding={'none'}>
                                            {result.ip}
                                        </TableCell>
                                        <TableCell style={tableStyle} padding={'none'}>
                                            {result.location}
                                        </TableCell>
                                        <TableCell style={tableStyle} padding={'none'}>
                                            {result.device}
                                        </TableCell>
                                        <TableCell style={tableStyle} padding={'none'}>
                                            {result.browser}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Grid>
            </div>
        );
    }
}

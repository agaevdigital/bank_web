import React from 'react';
import Button from '@material-ui/core/Button';
import {createMuiTheme} from "@material-ui/core/styles/index";
import { ThemeProvider } from '@material-ui/styles';
import axios from "axios/index";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import IconButton from '@material-ui/core/IconButton';
import NextIcon from '@material-ui/icons/NavigateNext';
import PrevIcon from '@material-ui/icons/NavigateBefore';
import XLSX from 'xlsx';
import {saveAs} from 'file-saver';
import PUSelect from '../selects/PUSelect';
import PUCheckboxSelect from '../selects/PUCheckboxSelect';

import TFID from '../inputs/TFID';
import TFNumeric from '../inputs/TFNumeric';
import TFName from '../inputs/TFName';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {api_endpoint} from "settings";
import Switch from "@material-ui/core/Switch/index";



const theme = createMuiTheme({
    palette: {
        primary: {500: "#FF5246"},
    },
});

const theme2 = createMuiTheme({
    palette: {
        primary: {
            main: '#FF5246',
            light: 'rgba(0,0,0,0.5)',
            dark: 'rgba(255,255,255,1)',
            contrastText: 'rgba(255,255,255,1)'
        },
        secondary: {
            main: 'rgba(255,0,0,1)'
        },
        textColor: 'rgba(255,255,255,1)',
        type: "dark"
    }
});

const StyledTableRow = withStyles({
    root: {
        "&:hover:hover": {
            backgroundColor: "#121121"
        }
    }
})(TableRow);

const CssKeyboardDatePicker = withStyles({
    root: {
        '& .MuiSvgIcon-root': {
            fill: 'white'
        }
    }
})(KeyboardDatePicker);

const CssFormControlLabel = withStyles({
    root: {
        '& .MuiCheckbox-root': {
            color: 'white'
        },
        '& .MuiCheckbox-colorPrimary.Mui-checked': {
            color: '#3f51b5'
        }
    }
})(FormControlLabel);


const TextSwitch = withStyles({
    switchBase: {
        color: "#ffffff",
        '&$checked': {
            color: "#C7C1C1",
        },
        '&$checked + $track': {
            backgroundColor: "#C7C1C1",
        },
    },
    checked: {},
    track: {},
})(Switch);

const paginationButtonDivStyle = {
    paddingLeft: '10px'
};


// const tableStyle = {
//     //textColor: 'white',
//     color: '#C7C1C1',
//     //fontColor: 'white'
// };

const tableStyle = {
    color: '#C7C1C1',
};

const tableStyle1 = {
    color: '#ffffff',
};

const pagination_select_options = [
    {
        'id': 10,
        'label': '10'
    },
    {
        'id': 25,
        'label': '25'
    },
    {
        'id': 50,
        'label': '50'
    },
    {
        'id': 100,
        'label': '100'
    },
    {
        'id': 5000,
        'label': '5000'
    },
];

const tableHeaderStyle = {
    //textColor: 'white',
    color: '#EAEAEA',
    fontWeight: 'bold',
    backgroundColor: '#3B4754'
    //fontColor: 'white'

};

const headCells = [
    { id: 'id',              api_label:'ord_id',              numeric: true, disablePadding: true, label: 'ID', asc: 'true', direction: 'asc' },
    { id: 'user_id_to',      api_label:'ord_user_id_to',      numeric: true, disablePadding: true, label: 'User_ID_to', asc: 'false', direction: 'desc'},
    { id: 'user_id_from',    api_label:'ord_user_id_from',    numeric: true, disablePadding: true, label: 'User_ID_from', asc: 'false', direction: 'desc'},
    { id: 'u_to_fullname',   api_label:'ord_u_to_fullname',   numeric: true, disablePadding: true, label: 'User_to fullname', asc: 'false', direction: 'desc' },
    { id: 'u_from_fullname', api_label:'ord_u_from_fullname', numeric: true, disablePadding: true, label: 'User_from fullname', asc: 'false', direction: 'desc' },
    { id: 'amount',          api_label:'ord_amount',          numeric: true, disablePadding: true, label: 'Amount', asc: 'false', direction: 'desc' },
    { id: 'currency',        api_label:'ord_currency',        numeric: true, disablePadding: true, label: 'Currency', asc: 'false', direction: 'desc' },
    { id: 'created_at',      api_label:'ord_created_at',      numeric: true, disablePadding: true, label: 'Operation date', asc: 'false', direction: 'desc' },
    { id: 'activated',       api_label:'ord_activated',       numeric: true, disablePadding: true, label: 'Activated', asc: 'false', direction: 'desc' },
];

export default class Vouchers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            table_content: [],
            vouchercurrency: [],
            dialogOpened: false,
            amountFilterChecked: false,
            createdAtFilterChecked: false,
            currencyFilterChecked: false,
            userIdToFilterChecked: false,
            userIdFromFilterChecked: false,
            userToFullNameFilterChecked: false,
            userFromFullNameFilterChecked: false,
            activatedFilterChecked: false,
            checkedA: true,
            amountMin: 0,
            amountMax: 0,
            minCreatedAt: new Date('2019-01-31'),
            maxCreatedAt: new Date('2019-01-31'),
            currency: [],
            userIDTo: '',
            userIDFrom: '',
            u_to_fullname: '',
            u_from_fullname: '',
            activated: null,
            activation_date: "",
            comment: "",
            changeColor: tableStyle,
            clickedOperation: {
                id:0,
                user_id_to: 0,
                user_id_from: 0,
                u_to_fullname: "",
                u_from_fullname: "",
                currency: "",
                amount: 0,
                activated: "",
                created_at: "",
                updated_at: "",
                hash: "",
                send_type: "",
                activation_date: "",
                comment: ""
            },
            sorting_fields: {
                "id": true,
                "user_id_to": false,
                "user_id_from": false,
                "u_to_fullname": false,
                "u_from_fullname": false,
                "amount": false,
                "currency" : false,
                "created_at" : false,
                "activated" : false,
            },
            current_page: 0,
            rows_per_page: 10,
            total_pages: 0,
            prev_button_enabled: false,
            next_button_enabled: false
        };

        this.tf_id_to = React.createRef();
        this.tf_id_from = React.createRef();
        this.tf_amount_min = React.createRef();
        this.tf_amount_max = React.createRef();
        this.tf_username_to = React.createRef();
        this.tf_username_from = React.createRef();
        this.cb_clearCurrency = React.createRef();
        this.cb_clearActivated = React.createRef();
        this.getContent = this.getContent.bind(this);
        this.voucherDialogClose = this.voucherDialogClose.bind(this);
        this.voucherTableClickHandler = this.voucherTableClickHandler.bind(this);
        this.performSort = this.performSort.bind(this);
        // this.handleAmountMinChange = this.handleAmountMinChange.bind(this);
        // this.handleAmountMaxChange = this.handleAmountMaxChange.bind(this);
        this.handleMinDateChange = this.handleMinDateChange.bind(this);
        this.handleMaxDateChange = this.handleMaxDateChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        // this.handleUserToIdChange = this.handleUserToIdChange.bind(this);
        // this.handleUserFromIdChange = this.handleUserFromIdChange.bind(this);
        // this.handleUserToFullNameChange = this.handleUserToFullNameChange.bind(this);
        // this.handleUserFromFullNameChange = this.handleUserFromFullNameChange.bind(this);
        this.handleActivatedChange = this.handleActivatedChange.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.rowsPerPageChange = this.rowsPerPageChange.bind(this);
        this.parseActivated = this.parseActivated.bind(this);
        this.generateXlsReport = this.generateXlsReport.bind(this);
        this.render_amount = this.render_amount.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
        this.changeTextColor = this.changeTextColor.bind(this);
        this.voucherCurrency();
    }


    getContent() {
        let appliedFilters = this.applyFilters();
        axios.get(api_endpoint+'/vouchers',
            {
                params:
                    {
                        'filters': JSON.stringify(appliedFilters),
                        'limit': this.state.rows_per_page,
                        'offset': this.state.current_page*this.state.rows_per_page
                    }
            })
            .then(response => {
                let maxPage = 0;
                maxPage = Math.floor(response.data.rowcount / this.state.rows_per_page);
                this.setState({
                    table_content: response.data.rows,
                    total_pages: maxPage
                });
                // this.setState({table_content: response.data});
                //alert(this.state.table_content.length);
                if (this.state.current_page===0 && this.state.rows_per_page>this.state.table_content.length) {
                    //alert(this.state.table_content.length);
                    this.setState({prev_button_enabled: false});
                    this.setState({next_button_enabled: false});
                } else {
                    if (this.state.current_page > 0 && this.state.rows_per_page > this.state.table_content.length) {
                        //alert(this.state.table_content.length);
                        this.setState({prev_button_enabled: true});
                        this.setState({next_button_enabled: false});
                    }

                    else {
                        //alert(this.state.table_content.length);
                        this.setState({prev_button_enabled: true});
                        this.setState({next_button_enabled: true});
                    }

                    if(this.state.current_page===0) {
                        this.setState({prev_button_enabled: false});
                    }
                }
            })

    }
    voucherCurrency() {
        axios.get(api_endpoint+'/finoperationcurrency')
            .then(response => {
                let vouchercurrency_ = [];
                for (const response_row of response.data) {
                    vouchercurrency_.push(response_row);
                }
                this.setState({vouchercurrency: vouchercurrency_})
            })
    }

    voucherTableClickHandler(event, operation_id){
        //alert("clicked");
        this.setState({clickedOperation: this.state.table_content.find(row => row.id === operation_id)});
        this.setState({dialogOpened: true});
    }

    voucherDialogClose() {
        this.setState({dialogOpened: false});
    }

    performSort(headCell) {
        // alert('clicked id  = ' + headCell.id);
        if (this.state.table_content.length !== 0) {
            if (headCell.asc === 'true') {
                headCells.find(headCell_ => headCell_.id === headCell.id).asc = 'false';
                headCells.find(headCell_ => headCell_.id === headCell.id).direction = 'desc';
                for (const hc of headCells) {
                    if (hc.id !== headCell.id) {
                        hc.direction = 'desc';
                        hc.asc = 'false';
                    }
                }
            } else {
                headCells.find(headCell_ => headCell_.id === headCell.id).asc = 'true';
                headCells.find(headCell_ => headCell_.id === headCell.id).direction = 'asc';
                for (const hc of headCells) {
                    if (hc.id !== headCell.id) {
                        hc.direction = 'desc';
                        hc.asc = 'false';
                    }
                }
            }

            let keyname = headCell.api_label;
            let keyval;
            if (headCell.asc === 'true') {
                keyval = 0;
            }
            else {
                keyval = 1;
            }
            let appliedFilters = this.applyFilters();
            axios.get(api_endpoint+'/vouchers', {
                params:
                    {
                        [keyname]: keyval,
                        'filters': JSON.stringify(appliedFilters),
                        'limit': this.state.rows_per_page,
                        'offset': this.state.current_page*this.state.rows_per_page
                    }
            })
                .then(response => {
                    this.setState({table_content: response.data})
                })
        }
    }


    applyFilters() {
        let allFilterGroups =
            [
                {
                    'checkbox_name': 'amountFilterChecked',
                    'checkbox_value': this.state.amountFilterChecked
                },
                {
                    'checkbox_name': 'createdAtFilterCheck',
                    'checkbox_value': this.state.createdAtFilterChecked
                },
                {
                    'checkbox_name': 'currencyFilterChecked',
                    'checkbox_value': this.state.currencyFilterChecked
                },
                {
                    'checkbox_name': 'userIdToFilterChecked',
                    'checkbox_value': this.state.userIdToFilterChecked
                },
                {
                    'checkbox_name': 'userIdFromFilterChecked',
                    'checkbox_value': this.state.userIdFromFilterChecked
                },
                {
                    'checkbox_name': 'userToFullNameFilterChecked',
                    'checkbox_value': this.state.userToFullNameFilterChecked
                },
                {
                    'checkbox_name': 'userFromFullNameFilterChecked',
                    'checkbox_value': this.state.userFromFullNameFilterChecked
                },
                {
                    'checkbox_name': 'activatedFilterChecked',
                    'checkbox_value': this.state.activatedFilterChecked
                }
            ];
        let appliedFilters = {};

        for(const filterGroup of allFilterGroups) {
            if (filterGroup.checkbox_value) {
                if (filterGroup.checkbox_name === 'amountFilterChecked'){
                    if (this.tf_amount_min.current.getValue() != null && this.tf_amount_min.current.getValue().length > 0) {
                        appliedFilters.amountMin = this.tf_amount_min.current.getValue();
                    }
                    if (this.tf_amount_max.current.getValue() != null && this.tf_amount_max.current.getValue().length > 0) {
                        appliedFilters.amountMax = this.tf_amount_max.current.getValue();
                    }
                }

                if (filterGroup.checkbox_name === 'createdAtFilterCheck'){
                    // if (this.state.minCreatedAt != null) {
                    //     appliedFilters.minCreatedAt = this.state.minCreatedAt;
                    // }
                    // if (this.state.maxCreatedAt != null) {
                    //     appliedFilters.maxCreatedAt = this.state.maxCreatedAt;
                    // }
                    if (sessionStorage.getItem('minCreatedAt') != null) {
                        appliedFilters.minCreatedAt = sessionStorage.getItem('minCreatedAt');
                    }
                    if (sessionStorage.getItem('maxCreatedAt') != null) {
                        appliedFilters.maxCreatedAt = sessionStorage.getItem('maxCreatedAt');
                    }
                }
                if (filterGroup.checkbox_name === 'currencyFilterChecked'){
                    if (this.state.currency != null) {
                        appliedFilters.currency = this.state.currency;
                    }
                    // if (sessionStorage.getItem('currency') != null) {
                    //     appliedFilters.currency = sessionStorage.getItem('currency');
                    // }
                }
                if (filterGroup.checkbox_name === 'userIdToFilterChecked'){
                    if (this.tf_id_to.current.getValue() != null) {
                        appliedFilters.userIDTo = this.tf_id_to.current.getValue();
                    }
                }
                if (filterGroup.checkbox_name === 'userIdFromFilterChecked'){
                    if (this.tf_id_from.current.getValue() != null) {
                        appliedFilters.userIDFrom = this.tf_id_from.current.getValue();
                    }
                }
                if (filterGroup.checkbox_name === 'userToFullNameFilterChecked'){
                    if (this.tf_username_to.current.getValue() != null) {
                        appliedFilters.u_to_fullname = this.tf_username_to.current.getValue();
                    }
                }
                if (filterGroup.checkbox_name === 'userFromFullNameFilterChecked'){
                    if (this.tf_username_from.current.getValue() != null) {
                        appliedFilters.u_from_fullname = this.tf_username_from.current.getValue();
                    }
                }
                if (filterGroup.checkbox_name === 'activatedFilterChecked'){
                    if (this.state.activated != null) {
                        appliedFilters.activated = this.state.activated;
                    }
                    if (sessionStorage.getItem('activated') != null) {
                        appliedFilters.activated = sessionStorage.getItem('activated');
                    }
                }
            }
        }
        // alert(JSON.stringify(appliedFilters));
        return appliedFilters;
    }

    amountFilterCheck() {
        this.setState({amountFilterChecked: !this.state.amountFilterChecked});
    }

    createdAtFilterCheck() {
        this.setState({createdAtFilterChecked: !this.state.createdAtFilterChecked});
    }

    currencyFilterCheck() {
        this.setState({currencyFilterChecked: !this.state.currencyFilterChecked});
    }

    userToIdFilterCheck() {
        this.setState({userIdToFilterChecked: !this.state.userIdToFilterChecked});
    }

    userFromIdFilterCheck() {
        this.setState({userIdFromFilterChecked: !this.state.userIdFromFilterChecked});
    }

    userToFullNameFilterCheck() {
        this.setState({userToFullNameFilterChecked: !this.state.userToFullNameFilterChecked});
    }

    userFromFullNameFilterCheck() {
        this.setState({userFromFullNameFilterChecked: !this.state.userFromFullNameFilterChecked});
    }

    activatedFilterCheck() {
        this.setState({activatedFilterChecked: !this.state.activatedFilterChecked});
    }

    isNumber(input){
        return[...input].every(c => '0123456789 .'.includes(c));
    }

    isId(input){
        return[...input].every(c => '0123456789 '.includes(c));
    }

    isName(input) {
        if (input.length===0){
            return true;
        }
        if ([...input].every(c => 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMёйцукенгшщзхъфывапролджэячсмитьбюЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ '.includes(c))) {
            return true;
        }
    }

    // handleAmountMinChange(event) {
    //     if (this.isNumber(event.target.value)) {
    //         sessionStorage.setItem('amountMin', event.target.value);
    //         this.setState({amountMin: event.target.value});
        // }
    // }

    // handleAmountMaxChange(event) {
    //     if (this.isNumber(event.target.value)) {
    //         sessionStorage.setItem('amountMax', event.target.value);
    //         this.setState({amountMax: event.target.value});
        // }
    // }

    handleMinDateChange(date) {
        //alert(date);
        sessionStorage.setItem('minCreatedAt', date);
        // this.setState({minCreatedAt: date});
    };

    handleMaxDateChange(date) {
        sessionStorage.setItem('maxCreatedAt', date);
        // this.setState({maxCreatedAt: date});
    };

    handleCurrencyChange(currency_) {
        // sessionStorage.setItem('currency', currency_);
        this.setState({currency: currency_});
        if (currency_ === null || currency_.length===0){
            this.setState({currency: null});
            // sessionStorage.setItem('currency', null);
        }
    }

    // handleUserToIdChange(userIDTo_) {
    //     this.setState({userIDTo: userIDTo_});
    // }
    //
    // handleUserFromIdChange(userIDFrom_) {
    //     this.setState({userIDFrom: userIDFrom_});
    // }

    // handleUserToFullNameChange(event) {
    //     if(this.isName(event.target.value)) {
    //         sessionStorage.setItem('u_to_fullname', event.target.value);
    //         // this.setState({u_to_fullname: event.target.value});
    //     }
    // }
    //
    // handleUserFromFullNameChange(event) {
    //     if(this.isName(event.target.value)) {
    //         sessionStorage.setItem('u_from_fullname', event.target.value);
    //         // this.setState({u_from_fullname: event.target.value});
    //     }
    // }

    parseActivated (isActivated) {
        if (isActivated === true) {
            return 'Activated'
        }
        else {
            return 'Not activated'
        }
    }

    handleActivatedChange(activated_) {
        sessionStorage.setItem('activated', activated_);
        // this.setState({activated: activated_});
        if (activated_ === null || activated_.length===0){
            // this.setState({activated: null});
            sessionStorage.setItem('activated', null);
        }
    }

    changeTextColor () {
        this.setState({ checkedA: !this.state.checkedA});
        if (!this.state.checkedA) {
            this.setState({changeColor: tableStyle})
        }
        else {
            this.setState({changeColor: tableStyle1})
        }
    }

    render_amount (sum, dec) {
        // alert(sum + ' ' + dec);
        return Number(sum).toFixed(dec)
    }

    clearCb() {
        this.cb_clearCurrency.current.clear([]);
        this.cb_clearActivated.current.clear();
        this.tf_id_from.current.clear();
        this.tf_id_to.current.clear();
        this.tf_amount_min.current.clear();
        this.tf_amount_max.current.clear();
        this.tf_username_to.current.clear();
        this.tf_username_from.current.clear();
    }


    clearFilters () {
        // sessionStorage.setItem('amountMin', null);
        // sessionStorage.setItem('amountMax', null);
        sessionStorage.setItem('minCreatedAt', '2019-01-31');
        sessionStorage.setItem('maxCreatedAt', '2019-01-31');
        // sessionStorage.setItem('userIDTo', '');
        // sessionStorage.setItem('userIDFrom', '');
        // sessionStorage.setItem('u_to_fullname', '');
        // sessionStorage.setItem('u_from_fullname', '');
        // sessionStorage.setItem('currency', null);
        sessionStorage.setItem('activated', null);
        // this.setState ({amountMin: 0});
        // this.setState ({amountMax: 0});
        // this.setState ({minCreatedAt: new Date('2019-01-31')});
        // this.setState ({maxCreatedAt: new Date('2019-01-31')});
        // this.setState ({userIDTo: ''});
        // this.setState ({userIDFrom: ''});
        // this.setState ({u_to_fullname: ''});
        // this.setState ({u_from_fullname: ''});
        this.setState ({currency: null});
        this.clearCb ([]);
        // this.setState ({activated: null});
        this.setState ({amountFilterChecked: false});
        this.setState ({createdAtFilterChecked: false});
        this.setState ({userIdToFilterChecked: false});
        this.setState ({userIdFromFilterChecked: false});
        this.setState ({userToFullNameFilterChecked: false});
        this.setState ({userFromFullNameFilterChecked: false});
        this.setState ({currencyFilterChecked: false});
        this.setState ({activatedFilterChecked: false});
        this.setState ({table_content: []})
    }

    rowsPerPageChange(row_) {
        this.setState(
            {
                rows_per_page: row_,
                current_page: 0
            },
            () =>
                this.getContent()
        );
    }

    prevPage() {
        if (this.state.current_page>0) {
            this.setState(
                {current_page: this.state.current_page - 1},
                () => this.getContent()
            );
            this.setState({prev_button_enabled: true});
        }
        else {
            this.setState({prev_button_enabled: false});
        }
    }

    nextPage() {
        if (this.state.rows_per_page>=this.state.table_content.length) {
            this.setState(
                {current_page: this.state.current_page + 1},
                () => this.getContent()
            );
            this.setState({next_button_enabled: true});

        }
        else {
            this.setState({next_button_enabled: false});
        }
    }

    generateXlsReport () {
        let wb = XLSX.utils.book_new();
        wb.Props = {
            Title: "Vouchers",
            Subject: "Bitexfin vouchers",
            Author: "Bitexfin admin-ui"
        };
        wb.SheetNames.push("Vouchers");
        let ws_data = [
            [
                'id',
                'user_id_from',
                'user_id_to',
                'user_from_fullname',
                'user_to_fullname',
                'currency',
                'amount',
                'activated',
                'created_at',
                'updated_at',
                'hash',
                'send_type',
                'activation_date',
                'comment'
            ]
        ];

        for (const table_row of this.state.table_content) {
            ws_data.push(
                [
                    table_row.id,
                    table_row.user_id_from,
                    table_row.user_id_to,
                    table_row.u_from_fullname,
                    table_row.u_to_fullname,
                    table_row.currency,
                    this.render_amount(table_row.amount, table_row.currency_dec),
                    this.parseActivated(table_row.activated),
                    table_row.created_at,
                    table_row.updated_at,
                    table_row.hash,
                    table_row.send_type,
                    table_row.activation_date,
                    table_row.comment
                ]
            );
        }

        let ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["Vouchers"] = ws;

        let wbout = XLSX.write(wb, {bookType:'xlsx', type: 'binary'});

        function s2ab(s) {
            let buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
            let view = new Uint8Array(buf);  //create uint8array as viewer
            for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
            return buf;
        }
        saveAs(new Blob([s2ab(wbout)], {type:"application/octet-stream"}), 'Vouchers.xlsx');
    }


    render() {
        return (
            <div>
                <Grid container spacing={6} direction={'row'} justify={'center'}>
                    <Grid item>
                        <Grid container direction={'column'} alignItems={'flex-start'}>
                            <Grid item>
                                <CssFormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.amountFilterChecked}
                                            onChange={event => this.amountFilterCheck()}
                                            value="checkedF1"
                                            color="primary"
                                        />
                                    }
                                    label="Apply amount filter"
                                />
                            </Grid>
                            <Grid item>
                                <TFNumeric
                                    tf_label="Amount min"
                                    tf_min_width="250px"
                                    tf_max_width="250px"
                                    tf_variant="outlined"
                                    tf_default_value="0"
                                    tf_enabled={this.state.amountFilterChecked}
                                    ref ={this.tf_amount_min}
                                />
                            </Grid>
                            <Grid item>
                                <TFNumeric
                                    tf_label="Amount max"
                                    tf_min_width="250px"
                                    tf_max_width="250px"
                                    tf_variant="outlined"
                                    tf_default_value="0"
                                    tf_enabled={this.state.amountFilterChecked}
                                    ref ={this.tf_amount_max}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={'column'} alignItems={'flex-start'}>
                            <Grid item>
                                <CssFormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.createdAtFilterChecked}
                                            onChange={event => this.createdAtFilterCheck()}
                                            value="checkedF1"
                                            color="primary"
                                        />
                                    }
                                    label="Apply created_at filter"
                                />
                            </Grid>
                            <Grid item>
                                <ThemeProvider theme={theme2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <CssKeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            margin="dense"
                                            id="dp-created-at-min"
                                            label="Created at min"
                                            value={
                                                sessionStorage.getItem('minCreatedAt')
                                                // this.state.minCreatedAt
                                            }
                                            onChange={this.handleMinDateChange}
                                            disabled={!this.state.createdAtFilterChecked}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </ThemeProvider>
                            </Grid>
                            <Grid item>
                                <ThemeProvider theme={theme2}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <CssKeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            margin="dense"
                                            id="dp-created-at-max"
                                            label="Created at max"
                                            value={
                                                sessionStorage.getItem('maxCreatedAt')
                                                // this.state.maxCreatedAt
                                            }
                                            onChange={this.handleMaxDateChange}
                                            disabled={!this.state.createdAtFilterChecked}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </ThemeProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={'column'} alignItems={'flex-start'}>
                            <Grid item>
                                <CssFormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.currencyFilterChecked}
                                            onChange={event => this.currencyFilterCheck()}
                                            value="checkedF1"
                                            color="primary"
                                        />
                                    }
                                    label="Apply currency filter"
                                />
                            </Grid>
                            <Grid item>
                                <PUCheckboxSelect
                                    change_handler={this.handleCurrencyChange}
                                    combobox_label="Currency"
                                    cb_min_width="250px"
                                    cb_max_width="250px"
                                    select_options={this.state.vouchercurrency}
                                    cb_enabled={this.state.currencyFilterChecked}
                                    ref ={this.cb_clearCurrency}
                                />
                            </Grid>
                            <Grid item>
                                <Grid container direction={'column'} alignItems={'flex-start'}>
                                    <Grid item>
                                        <CssFormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.activatedFilterChecked}
                                                    onChange={event => this.activatedFilterCheck()}
                                                    value="checkedF1"
                                                    color="primary"
                                                />
                                            }
                                            label="Apply activated filter"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <PUSelect
                                            change_handler={this.handleActivatedChange}
                                            combobox_label="Activated"
                                            cb_min_width="200px"
                                            select_options={[
                                                {'id': null, 'label': ''},
                                                {'id': false, 'label': 'Not activated'},
                                                {'id': true, 'label': 'Activated'}
                                            ]}
                                            cb_enabled={this.state.activatedFilterChecked}
                                            ref ={this.cb_clearActivated}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={'column'} alignItems={'flex-start'}>
                            <Grid item>
                                <CssFormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.userIdToFilterChecked}
                                            onChange={event => this.userToIdFilterCheck()}
                                            value="checkedF1"
                                            color="primary"
                                        />
                                    }
                                    label="Apply user_id_to filter"
                                />
                            </Grid>
                            <Grid item>
                                <TFID
                                    tf_label="user_id_to"
                                    tf_min_width="250px"
                                    tf_max_width="250px"
                                    tf_variant="outlined"
                                    tf_enabled={this.state.userIdToFilterChecked}
                                    ref ={this.tf_id_to}
                                />
                            </Grid>
                            <Grid item>
                                <CssFormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.userIdFromFilterChecked}
                                            onChange={event => this.userFromIdFilterCheck()}
                                            value="checkedF1"
                                            color="primary"
                                        />
                                    }
                                    label="Apply user_id_from filter"
                                />
                            </Grid>
                            <Grid item>
                                <TFID
                                    tf_label="user_id_from"
                                    tf_min_width="250px"
                                    tf_max_width="250px"
                                    tf_variant="outlined"
                                    tf_enabled={this.state.userIdFromFilterChecked}
                                    ref ={this.tf_id_from}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={'column'} alignItems={'flex-start'}>
                            <Grid item>
                                <CssFormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.userToFullNameFilterChecked}
                                            onChange={event => this.userToFullNameFilterCheck()}
                                            value="checkedF1"
                                            color="primary"
                                        />
                                    }
                                    label="Apply user_to full name filter"
                                />
                            </Grid>
                            <Grid item>
                                <TFName
                                    tf_label="User_to full name"
                                    tf_min_width="250px"
                                    tf_max_width="250px"
                                    tf_variant="outlined"
                                    tf_default_value=""
                                    tf_enabled={this.state.userToFullNameFilterChecked}
                                    ref ={this.tf_username_to}
                                />
                            </Grid>
                            <Grid item>
                                <CssFormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.userFromFullNameFilterChecked}
                                            onChange={event => this.userFromFullNameFilterCheck()}
                                            value="checkedF1"
                                            color="primary"
                                        />
                                    }
                                    label="Apply user_from full name filter"
                                />
                            </Grid>
                            <Grid item>
                                <TFName
                                    tf_label="User_from full name"
                                    tf_min_width="250px"
                                    tf_max_width="250px"
                                    tf_variant="outlined"
                                    tf_default_value=""
                                    tf_enabled={this.state.userFromFullNameFilterChecked}
                                    ref ={this.tf_username_from}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <ThemeProvider theme={theme}>
                    <Grid container spacing={6} direction={'row'} justify={'space-between'}>
                        <Grid item>
                            <Grid container spacing={6} direction={'row'} justify={'flex-start'}>
                                <Grid item>
                                    <FormControlLabel
                                        control={
                                            <TextSwitch
                                                checked={this.state.checkedA}
                                                onChange={event => this.changeTextColor()}
                                                value="checkedA"
                                            />
                                        }
                                        label="Change text color"
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick = {this.clearFilters}
                                        color="primary" variant="contained"
                                    >
                                        Clear filters
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={6} direction={'row'} justify={'flex-end'}>
                                <Grid item>
                                    <Button onClick = {this.generateXlsReport} color="primary" variant="contained">
                                        XLS_save
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={this.getContent}>
                                        View Vouchers
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ThemeProvider>
                <p> </p>
                <Table stickyHeader size={'small'}>
                    <TableHead>
                        <TableRow
                            style={tableHeaderStyle}
                            // onClick={this.performSort(headCells[0])}
                        >
                            {headCells.map(headCell => (
                                <TableCell
                                    key={headCell.id}
                                    align={headCell.numeric ? 'left':'left'}
                                    style={tableHeaderStyle}
                                    padding={headCell.disablePadding ? 'none':'default'}
                                >
                                    <TableSortLabel
                                        active={'true'}
                                        direction={headCell.direction}
                                        style={tableHeaderStyle}
                                        onClick={event => this.performSort(headCell)}
                                    >
                                        {headCell.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody style={this.state.changeColor}>
                        {
                            this.state.table_content.map(result =>(
                                <StyledTableRow
                                    hover
                                    key = {result.id}
                                    onDoubleClick={event => this.voucherTableClickHandler(event, result.id)}
                                    style={this.state.changeColor}
                                >
                                    <TableCell
                                        style={this.state.changeColor}
                                        padding={'none'}
                                    >
                                        {result.id}
                                    </TableCell>
                                    <TableCell
                                        style={this.state.changeColor}
                                        padding={'none'}
                                    >
                                        {result.user_id_to}
                                    </TableCell>
                                    <TableCell
                                        style={this.state.changeColor}
                                        padding={'none'}
                                    >
                                        {result.user_id_from}
                                    </TableCell>
                                    <TableCell
                                        style={this.state.changeColor}
                                        padding={'none'}
                                    >
                                        {result.u_to_fullname}
                                    </TableCell>
                                    <TableCell
                                        style={this.state.changeColor}
                                        padding={'none'}
                                    >
                                        {result.u_from_fullname}
                                    </TableCell>
                                    <TableCell
                                        style={this.state.changeColor}
                                        padding={'none'}
                                    >
                                        {this.render_amount(result.amount, result.currency_dec)}
                                    </TableCell>
                                    <TableCell
                                        style={this.state.changeColor}
                                        padding={'none'}
                                    >
                                        {result.currency}
                                    </TableCell>
                                    <TableCell
                                        style={this.state.changeColor}
                                        padding={'none'}
                                    >
                                        {result.created_at}
                                    </TableCell>
                                    <TableCell
                                        style={this.state.changeColor}
                                        padding={'none'}
                                    >
                                        {this.parseActivated(result.activated)}
                                    </TableCell>
                                </StyledTableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <p></p>
                <Grid container spacing={1} direction={'row'} justify={'flex-end'}>
                    <Grid item>
                        <p>Showing page {this.state.current_page + 1} of {this.state.total_pages + 1}</p>
                    </Grid>
                    <Grid item>
                        <PUSelect
                            change_handler={this.rowsPerPageChange}
                            combobox_label="Rows per page"
                            cb_min_width="150px"
                            select_options={pagination_select_options}
                            cb_enabled={true}
                        />
                    </Grid>
                    <Grid item>
                        <div style={paginationButtonDivStyle}>
                            <IconButton
                                color="primary"
                                style={paginationButtonDivStyle}
                                onClick={this.prevPage}
                                disabled={!this.state.prev_button_enabled}
                            >
                                <PrevIcon/>
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={paginationButtonDivStyle}>
                            <IconButton
                                color="primary"
                                onClick={this.nextPage}
                                disabled={!this.state.next_button_enabled}
                            >
                                <NextIcon/>
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>

                <Dialog
                    open={this.state.dialogOpened}
                    onClose={this.voucherDialogClose}
                >
                    <DialogContent>
                        {/*<p></p>*/}
                        <div style={{paddingTop: '5px'}}>
                            <strong>Operation ID:</strong> {this.state.clickedOperation.id}
                        </div>
                        <div>
                            <strong>User ID to:</strong> {this.state.clickedOperation.user_id_to}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>User ID from:</strong> {this.state.clickedOperation.user_id_from}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>User Fullname to:</strong> {this.state.clickedOperation.u_to_fullname}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>User Fullname from:</strong> {this.state.clickedOperation.u_from_fullname}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>Amount:</strong> {this.state.clickedOperation.amount}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>Currency:</strong> {this.state.clickedOperation.currency}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>Created at:</strong> {this.state.clickedOperation.created_at}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>Updated at:</strong> {this.state.clickedOperation.updated_at}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>Activated:</strong> {this.parseActivated(this.state.clickedOperation.activated)}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>Activated date:</strong> {this.state.clickedOperation.activation_date}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>Hash:</strong> {this.state.clickedOperation.hash}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>Send type:</strong> {this.state.clickedOperation.send_type}
                        </div>
                        <div style={{paddingTop: '5px'}}>
                            <strong>Comment:</strong> {this.state.clickedOperation.comment}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.voucherDialogClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}




// import React from 'react';
// import TextField from "@material-ui/core/TextField";
//
// export default class Trades extends React.Component() {
//     constructor(props) {
//         super(props);
//         this.state = {
//             min: ""
//         };
//
//         this.amountMinChange = this.amountMinChange.bind(this);
//         this.amountMaxChange = this.amountMaxChange.bind(this);
//         this.voucherCurrency();
//     }
//
//     amountMinChange(event) {
//         this.setState({min: event.target.value})
//     }
//
//
//
//     render() {
//
//         return (
//             <div>
//                 <TextField label="Amount min"
//                            labelWidth={'300px'}
//                            defaultValue="0"
//                            margin="dense"
//                            variant="outlined"/>
//                 <TextField label="Amount max"
//                            labelWidth={'300px'}
//                            defaultValue="0"
//                            margin="dense"
//                            variant="outlined"/>
//             </div>
//         );
//     }
// }

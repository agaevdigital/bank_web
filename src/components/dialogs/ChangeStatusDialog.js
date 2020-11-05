import React from 'react';
import Button from '@material-ui/core/Button';
import axios from "axios/index";
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import {api_host, api_port, api_endpoint} from '../../settings';
import {visibility} from '@material-ui/system';


const CssBlackTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& label': {
            color: 'black',
        },
        '& input': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
        '& .MuiInputBase-input': {
            color: 'black',
        },
    },
})(TextField);

export default class ChangeStatusDialog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            validateDialogOpened: false,
            qrCodeMatch: false,
            hiddenChecked:false,
            disableStatusChange: false,
            disableGACode: true,
            comment_value:'',
            newStatus: null,
            status: [],
            statusSelect: "",
            dialogLabel: "",
            checkBoxColor: 'currentColor',
            mfa_value: "",
            previewStatus: "",
            csrf_name: '',
            csrf_value: '',
            phpSessionid: ''
        };

        this.MFAValueChange = this.MFAValueChange.bind(this);
        this.commentChange = this.commentChange.bind(this);
        this.MFACheck = this.MFACheck.bind(this);
        this.dialogClose = this.dialogClose.bind(this);
    }

    dialogClose() {
        this.setState({dialogLabel: ''});
        this.setState({qrCodeMatch:false});
        this.setState({mfa_value: ''});
        this.setState({comment_value:''});
        this.setState({hiddenChecked: false});
        this.props.validateDialogCloseHandler();
    }

    MFACheck() {
        axios.get(
            api_endpoint+'/google_auth_check',
            {
                params:
                    {
                        "mfa_value": this.state.mfa_value
                    }
            })
            .then(response => {
                this.setState({qrCodeMatch: response.data.qr_code_valid});
                if (this.state.qrCodeMatch === true) {
                    let updateStatus = {
                        "newStatus": this.props.d_newStatus,
                        "reasonDiscard": this.state.comment_value,
                        "id": this.props.d_id,
                        "old_status": this.props.d_oldStatus,
                        "user_id": this.props.d_user_id
                    };
                    let bitexfinAuth ={
                        "login": sessionStorage.getItem('enteredLogin'),
                        "password": sessionStorage.getItem('enteredPassword')

                    };
                    axios.post(api_endpoint+'/bitexfinlogin', bitexfinAuth)
                        .then(response => {
                            // alert(response.data);
                            if (response.data.status === 'OK') {
                                // alert('OK');
                                axios.post(api_endpoint+'/finoperationupdatestatus', updateStatus)
                                    .then(response => {
                                //         alert(response.data);
                                        this.props.getContentHandler();
                                        this.setState({dialogLabel:response.data});
                                        this.setState({mfa_value:''});
                                        this.setState({hiddenChecked:true});
                                        this.setState({comment_value:''})
                                    });
                            }
                            else {
                                if (response.data.status === 'Incorrect login and/or password.') {
                                    alert('Incorrect login and/or password.');
                                }
                                else {
                                    alert('server error');
                                }
                            }
                        });
                }
                else {
                    this.setState({dialogLabel:'Wrong code! Try again.'})
                }
            });
    }
    MFAValueChange(event) {
        if(this.isId(event.target.value)) {
            this.setState({mfa_value: event.target.value});
        }
    }

    commentChange(event) {
        this.setState({comment_value:event.target.value}, () => {
            if (this.state.comment_value === '' || this.state.comment_value.length === 0) {
                this.setState({disableGACode:true})
            }
            else {
                this.setState({disableGACode:false})
            }
        });

    }

    isId(input){
        return[...input].every(c => '0123456789 '.includes(c));
    }

    render() {
        if (this.state.hiddenChecked === false) {
            return (
                <div>
                    <Dialog
                        open={this.props.d_open}
                        onClose={this.dialogClose}
                        maxWidth={'xs'}
                    >
                        <DialogTitle>
                            {this.state.dialogLabel}
                        </DialogTitle>
                        <DialogContent>
                            <p></p>
                            <Grid container direction={'column'} spacing={3} visibility={this.state.hiddenChecked}>
                                <CssBlackTextField
                                    onChange={this.commentChange}
                                    variant={"outlined"}
                                    autoFocus={true}
                                    value={this.state.comment_value}
                                    // error={!this.state.qrCodeMatch}
                                    label={'Comment'}
                                    helperText={'* this field is required'}
                                    multiline={true}
                                >
                                </CssBlackTextField>
                                <CssBlackTextField
                                    onChange={this.MFAValueChange}
                                    value={this.state.mfa_value}
                                    error={!this.state.qrCodeMatch}
                                    helperText={'Enter the code from Google Authenticator'}
                                    disabled={this.state.disableGACode}
                                >
                                </CssBlackTextField>
                            </Grid>
                            <p></p>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={this.MFACheck}
                                color="primary" variant="contained"
                                disabled={this.state.disableGACode}
                                visibility={this.state.hiddenChecked}
                            >
                                Submit
                            </Button>
                            <Button
                                onClick={this.dialogClose}
                            >
                                close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Dialog
                        open={this.props.d_open}
                        onClose={this.dialogClose}
                        maxWidth={'xs'}
                    >
                        <DialogTitle>
                            {this.state.dialogLabel}
                        </DialogTitle>
                        <DialogActions>
                            <Button
                                onClick={this.dialogClose}
                            >
                                close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );
        }
    }
}

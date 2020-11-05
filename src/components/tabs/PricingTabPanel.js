import React from 'react';
import FreelancePricingTab from "./FreelancePricingTab";
import BusinessPricingTab from "./BusinessPricingTab";
import PersonalPricingTab from "./PersonalPricingTab";
import { Button } from '@material-ui/core';

const tabHeader = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 60
};

const tabUnderline = {
    borderBottom: "1px solid #DEE2E6",
    width: "100%"
};

const tabButton = {
    textTransform: "none",
    paddingLeft: 20,
    paddingRight: 20
};

export default class PricingTabPanel extends React.Component {

    constructor(props) {
        super(props);
        let preselectedItem = this.props.preselectedItem;
        if (preselectedItem === null) {
            preselectedItem = "PERSONAL";
        }
        this.state = {
            selectedItem: preselectedItem
        };
        this.selectItem = this.selectItem.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    selectItem(itemCode) {
        this.setState({selectedItem: itemCode})
    }

    renderContent() {
        switch (this.state.selectedItem) {
            case "PERSONAL": {
                return(<PersonalPricingTab />)
            }
            case "FREELANCE": {
                return(<FreelancePricingTab />)
            }
            case "BUSINESS": {
                return(<BusinessPricingTab />)
            }
            default: {
                return(
                    <div />
                )
            }
        }
    }

    generateTabStyle(tabCode) {
        if (tabCode === this.state.selectedItem) {
            return (
                {
                    borderTop: "1px solid #DEE2E6",
                    borderLeft: "1px solid #DEE2E6",
                    borderRight: "1px solid #DEE2E6",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                }
            )
        }
        else {
            return (
                {
                    borderBottom: "1px solid #DEE2E6"
                }
            )
        }
    }

    render() {

        return (
            <div>
                <div style={tabHeader}>
                    <div style={tabUnderline}>
                    </div>
                    <div
                        style={this.generateTabStyle("PERSONAL")}
                    >
                        <Button
                            onClick={() => this.selectItem("PERSONAL")}
                            style={tabButton}
                        >
                            Personal
                        </Button>
                    </div                    >
                    <div
                        style={this.generateTabStyle("FREELANCE")}
                    >
                        <Button
                            onClick={() => this.selectItem("FREELANCE")}
                            style={tabButton}
                        >
                            Freelance
                        </Button>
                    </div>
                    <div
                        style={this.generateTabStyle("BUSINESS")}
                    >
                        <Button
                            onClick={() => this.selectItem("BUSINESS")}
                            style={tabButton}
                        >
                            Business
                        </Button>
                    </div>
                    <div style={tabUnderline}>
                    </div>
                </div>
                {
                    this.renderContent()
                }

            </div>
        );
    }
}

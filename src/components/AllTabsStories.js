import React from "react";
import { ContextProvider } from "../Global/Context";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { db } from "../config";


const Alltabsstories = (props) => {

    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
    }, []);

    return (
        <div style={{ marginBottom: 10, width: '65%' }} >
            <Paper square>
                <Tabs
                    value={value}
                    textColor="primary"
                    indicatorColor="primary"
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <Tab label="All" />
                    <Tab label="Photos" />
                    <Tab label="Videos" />
                    <Tab label="Tranding Photos" disabled />
                </Tabs>
                {/* {PostFeeds(value)} */}
            </Paper>
        </div>
    );
};

export default Alltabsstories;

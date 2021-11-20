import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router";
import DashboardLayout from "./Component/DashBoard/Layout";
import { Button, Card, CardContent, Input, TextField, Typography } from "@mui/material";

function Land() {

    return (
        <>
            <Typography variant="h2">
                AGMEETING
            </Typography>
            <div>
                <Card style={{display: 'inline-block'}}>
                    <CardContent>
                        <TextField placeholder="Username" fullWidth>
                        </TextField>
                        <TextField placeholder="Password" type="password" fullWidth>
                        </TextField>
                        <Button href="dashboard">Login</Button>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Land;
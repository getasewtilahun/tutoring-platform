import { Avatar, Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
const Spacer = styled.div`
display:flex;
flex-direction:column;
height:40px;
`
export default function TutorProfile() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [user,setUser]=useState()
    const [profile,setProfile]=useState({})
    const [education,setEducation]=useState({})
    const [about,setAbout]=useState({})

    useEffect(async()=>{
        const res= await axios.get(`http://localhost:5000/api/user/${id}`)
        if(res.status==200){
            setUser(res.data.data)
            setProfile(res.data.data.profile)
            setEducation(res.data.data.education)
            setAbout(res.data.data.about)
        }
    },[]);
    console.log(user)

    return (
        <div>
            <Navbar />
            <Spacer />
            <Grid container spacing={2}>
                <Grid item lg={2}>

                </Grid>
                <Grid item lg={6}>
                    <Card variant="outlined">
                        <React.Fragment>
                            <CardContent>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: 300,
                                        backgroundColor: '#959e97',
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        display: "flex"
                                    }}
                                >
                                    <Stack>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={profile?profile.img?'http://localhost:5000/'+profile.img:'':''}
                                            sx={{
                                                width: 150, height: 150, justifyContent: "center", display: "flex"
                                            }}
                                        >
                                        </Avatar>
                                    </Stack>
                                </Box>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4 }}>
                                    <Grid item lg={10}>
                                        <Typography sx={{ fontSize: 18, fontWeight: 600, paddingTop: 2 }} color="text.primary" gutterBottom>
                                            {user?user.firstName:''} {user?user.lastName:''}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={2}>
                                    </Grid>
                                </Grid>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4 }}>
                                    <Grid item lg={9}>
                                        <Typography variant="body2">
                                            {profile?profile.address:''}
                                            <br />
                                            {profile?profile.phone:''}
                                            <br />
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Typography variant="body">
                                            
                                        {profile?profile.price+' Birr/hr':''}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </React.Fragment>
                    </Card>
                    <Spacer />
                    <Card variant="outlined">
                        <React.Fragment>
                            <CardContent>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4 }}>
                                    <Grid item lg={10}>
                                        <Typography sx={{ fontSize: 18, fontWeight: 600, paddingTop: 2 }} color="text.primary" gutterBottom>
                                            Education
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography sx={{ fontSize: 17, paddingTop: 2 }} color="text.primary" gutterBottom>
                                   {education?education.school:''}
                                </Typography>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4 }}>
                                    <Grid item lg={9}>
                                        <Typography variant="body2">
                                        {education?education.field:''}
                                            <br />
                                            {education?moment(education.start).format('YYYY'):''} - {education?moment(education.end).format('YYYY'):''}
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={3}>
                                        <Typography variant="body">
                                            {education?education.grade:''}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </React.Fragment>
                    </Card>
                    <Spacer />
                    <Card variant="outlined">
                        <React.Fragment>
                            <CardContent>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, lg: 4 }}>
                                    <Grid item lg={10}>
                                        <Typography sx={{ fontSize: 18, fontWeight: 600, paddingTop: 2 }} color="text.primary" gutterBottom>
                                            About
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography sx={{ fontSize: 17, paddingTop: 2 }} color="text.primary" gutterBottom>
                                    {about?about.content:''}
                                </Typography>
                            </CardContent>
                        </React.Fragment>
                    </Card>
                </Grid>
                <Grid item lg={4}>

                </Grid>
            </Grid>
            <Spacer />
            <Footer />
        </div>
    )
}

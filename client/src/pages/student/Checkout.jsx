import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'

const Title=styled.h2`
padding:15px 0px;
text-align:center;
`
const Name=styled.p`
font-size:20px;
`
export default function Checkout() {
    return (
        <div>
            <Navbar />
            <Grid sx={{ padding: "30px" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid lg={3} sm={1} md={2}>
                </Grid>
                <Grid lg={6} sm={10} md={8}>
                    <Card>
                        <CardContent>
                            <Title>Checkout</Title>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid lg={3} sm={1} md={2}>
                </Grid>
            </Grid>
        </div>
    )
}

import { Card, CardContent } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const Title = styled.h6`
padding:10px 0;
font-size:20px;
`
const Num = styled.p`
font-size:60px;
`
const Col = styled.div`
display:flex;
flex-direction:column;
`
const Row = styled.div`
padding:20px;
display:flex;
`
const Row2 = styled.div`
padding-top:10px;
display:flex;
`
const P=styled.p`
padding:5px;
`

export default function TutorProfileSidebar() {
    return (
        <div style={{ padding: '0 30px' }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Title>Reviews</Title>
                        <Row>
                            <Col>
                                <Num>4.5</Num>
                                <Rating name="half-rating-read" defaultValue={4.3} precision={0.5} readOnly />
                                <Row2>
                                <PersonOutlineIcon/>
                                <P>300,000</P>
                                <P>Users</P>
                                </Row2>
                            </Col>
                        </Row>
                    </CardContent>
                </React.Fragment>
            </Card>
        </div>
    )
}

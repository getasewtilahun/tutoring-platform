import { Button, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const Done = styled(DoneIcon)`
display:none;
`
const Close = styled(CloseIcon)`
display:none;
`
const Spacer = styled.div`
height:20px;
`
const Title = styled.h1`
font-size:25px;
padding-bottom:10px;
`
const Desc = styled.p`
font-size:19px;
`
const Question = styled.h6`
font-size:17px;
padding-bottom:10px;
`
const Row = styled.div`
display:flex;
justify-content:space-between;
`


export default function ({ id }) {
    const { user } = useSelector((state) => state.auth)
    const [quiz, setQuiz] = useState()

    useEffect(async () => {
        const res = await axios.get(`http://localhost:5000/api/quiz/60d4b5cf-ddf3-4463-8ca2-e6fa5e80e15a`)
        if (res.status === 200) {
            setQuiz(res.data.data);
        }
    }, [])
    console.log(quiz)
    return (
        <div style={{ backgroundColor: "rgb(230, 245, 255)" }}>
            <Navbar />
            <Spacer />
            {quiz ?
                <Grid container spacing={2}>
                    <Grid item lg={2} sm={1}>
                        hello
                    </Grid>
                    <Grid item lg={8} sm={10}>
                        <Title>{quiz.title}</Title>
                        <Desc>{quiz.desc}</Desc>
                        <Spacer />
                        {
                            quiz.questions ? quiz.questions.map((question, index) => (
                                <>   <Question key={index}>{index + 1 + ". "}  {question.question}</Question>
                                    {question.choices &&
                                        <Box sx={{ width: '100%', padding: "20px" }}>
                                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                <Grid item xs={6}>
                                                    <Button variant='contained' style={{ width: "100%", backgroundColor: "white", color: "black" }}>
                                                        <Row>
                                                            <>{question.choices[0].choice}
                                                            </>
                                                            <Done />
                                                            <Close />
                                                        </Row>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button variant='contained' style={{ width: "100%", backgroundColor: "white", color: "black" }}>
                                                        <Row>
                                                            <>{question.choices[1].choice}</>
                                                            <Done />
                                                            <Close />
                                                        </Row>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button variant='contained' style={{ width: "100%", backgroundColor: "white", color: "black" }}>
                                                        <Row>
                                                            <>{question.choices[2].choice}</>
                                                            <Done />
                                                            <Close />
                                                        </Row>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Button variant='contained' style={{ width: "100%", backgroundColor: "white", color: "black" }}>
                                                        <Row>
                                                            <>{question.choices[3].choice}</>
                                                            <Done />
                                                            <Close />
                                                        </Row>
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    }
                                </>
                            )) :
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                        }
                    </Grid>
                    <Grid item lg={2} sm={1}>
                        hello
                    </Grid>
                </Grid> : <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>}
            <Spacer />
            <Footer />
        </div>
    )
}

import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom'
import Card from '@mui/material/Card';

const Form = styled.form`
display:${props => props.quizDisplay ? "flex" : "none"};
flex-direction:column;
`
const Form2 = styled.form`
display:flex;
flex-direction:column;
`
const Label = styled.label`
font-size:15px;
font-family:ui-serif;
`
const Input = styled.input`
padding:8px 0;
border-radius:5px;
`
const Textarea = styled.textarea`
border-radius:5px;
`
const Spacer = styled.div`
height:10px;
`
const QuestionContainer = styled.div`
display:${props => props.displayQuestion ? "flex" : "none"};
flex-direction:column;
`
const ChoiceContainer = styled.div`
padding-left:30px;
display:flex;
flex-direction:column;
`
const Row = styled.div`
display:flex;
`
const HorSpacer = styled.div`
width:10px;
`
const NotificationContainer=styled.div`
display:${props => props.displayNotification ? "flex" : "none"};
flex-direction:column;
`
export default function CreateQuiz() {
  const { user } = useSelector((state) => state.auth)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [quizId, setQuizId] = useState()
  const [quizDisplay, setQuizDisplay] = useState(true)
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [displayNotification,setDisplayNotification]=useState(false)

  const submitQuiz = async (e) => {
    e.preventDefault()
    const data = {
      userId: user.data.id,
      title,
      desc
    }
    try {
      const res = await axios.post('http://localhost:5000/api/quiz', data)
      if (res.status === 201) {
        setQuizId(res.data.data.id)
        toast.success(res.data.message)
        setQuizDisplay(false)
        setDisplayQuestion(true)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }

  const [question, setQuestion] = useState('')
  const [choiceA, setChoiceA] = useState('')
  const [choiceB, setChoiceB] = useState('')
  const [choiceC, setChoiceC] = useState('')
  const [choiceD, setChoiceD] = useState('')

  const submitQuestion = async (e) => {
    const data = {
      quizId,
      question
    }
    try {
      const res = await axios.post('http://localhost:5000/api/question', data)
      if (res.status === 201) {
        await axios.post('http://localhost:5000/api/choice', {
          questionId: res.data.data.id,
          choice: choiceA
        })
        await axios.post('http://localhost:5000/api/choice', {
          questionId: res.data.data.id,
          choice: choiceB
        })
        await axios.post('http://localhost:5000/api/choice', {
          questionId: res.data.data.id,
          choice: choiceC
        })
        await axios.post('http://localhost:5000/api/choice', {
          questionId: res.data.data.id,
          choice: choiceD
        })
        // toast.success(res.data.message)
        // setDisplayQuestion(true)
        setQuestion('')
        setChoiceA('')
        setChoiceB('')
        setChoiceC('')
        setChoiceD('')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }
  
  const navigate=useNavigate()
  const saveQuiz=()=>{
    setDisplayQuestion(false);
    setDisplayNotification(true);
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={0} md={2} lg={2}>
        </Grid>
        <Grid item sm={12} md={8} lg={8}>
          <Form quizDisplay={quizDisplay}>
            <Label>Title of the quiz</Label>
            <Input type={"text"} placeholder={"Title of the quiz"} onChange={e => { setTitle(e.target.value) }} />
            <Spacer />
            <Label>Description of the quiz</Label>
            <Textarea type={"text"} placeholder={"Description of the quiz"} onChange={e => { setDesc(e.target.value) }}></Textarea>
            <Spacer />
            <Button variant='contained' onClick={submitQuiz}>Create Quiz</Button>
          </Form>
          <QuestionContainer displayQuestion={displayQuestion}>
            <Form2>
              <Label>Write the question</Label>
              <Input value={question} type={"text"} placeholder={"Write question"} onChange={e => { setQuestion(e.target.value) }} />
              <Spacer />
              <ChoiceContainer>
                <Row>
                  <Label>A</Label>
                  <HorSpacer />
                  <Input value={choiceA} type={"text"} placeholder={"  Enter Choice"} onChange={e => { setChoiceA(e.target.value) }} />
                </Row>
                <Spacer />
                <Row>
                  <Label>B</Label>
                  <HorSpacer />
                  <Input value={choiceB} type={"text"} placeholder={"  Enter Choice"} onChange={e => { setChoiceB(e.target.value) }} />
                </Row>
                <Spacer />
                <Row>
                  <Label>C</Label>
                  <HorSpacer />
                  <Input value={choiceC} type={"text"} placeholder={"  Enter Choice"} onChange={e => { setChoiceC(e.target.value) }} />
                </Row>
                <Spacer />
                <Row>
                  <Label>D</Label>
                  <HorSpacer />
                  <Input value={choiceD} type={"text"} placeholder={"  Enter Choice"} onChange={e => { setChoiceD(e.target.value) }} />
                </Row>
              </ChoiceContainer>
              <Spacer />
              <Spacer/>
              <Spacer/>
              <Button variant='contained' onClick={submitQuestion}><AddIcon />
                <HorSpacer />Add Question</Button>
              <Spacer />
              <Button variant='contained' onClick={saveQuiz}>Save Quiz</Button>
            </Form2>
          </QuestionContainer>
          <NotificationContainer displayNotification={displayNotification}>
            <p>Your Quiz Created Successfully, Thanks!</p>
          </NotificationContainer>
        </Grid>
        <Grid item sm={0} md={2} lg={2}>
        </Grid>
      </Grid>
    </div>
  )
}

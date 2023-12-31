import '../css/old_css/headers.css'
import '../css/old_css/register.css'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Form, Button, Row, Col, Container, Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions'
import Loader from '../components/Loader'

function RegisterScreen({location, history}) {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [surname, setSurname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [city, setCity] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [message, setMessage] = useState('')

  const redirect = location ? location.search.split('=')[1] : '/'
  const dispatch = useDispatch()
  const reload = useNavigate()
  const userRegister = useSelector(state => state.userRegister)
  const { error, loading, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password,surname,phoneNumber,city,streetAddress,postalCode))
    }
    reload('/')
  }

  return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <h1 className='text-center py-4 '>Create account</h1>
              {message && <Alert variant='danger'>{message}</Alert>}
              {error && <Alert variant='danger'>{error}</Alert>}
              {loading && <Loader />}
              <Form onSubmit={submitHandler}>

                <Form.Group className='py-3' controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                      required
                      type='name'
                      placeholder='Enter name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                      required
                      type='email'
                      placeholder='Enter Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='surname'>
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                      required
                      type='surname'
                      placeholder='Enter surname'
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='phoneNumber'>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                      required
                      type='number'
                      min={0}
                      placeholder='Enter phone number'
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='city'>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                      required
                      type='name'
                      placeholder='Enter city'
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='streetAddress'>
                  <Form.Label>Street address</Form.Label>
                  <Form.Control
                      required
                      type='name'
                      placeholder='Enter street address'
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='postalCode'>
                  <Form.Label>Postal code</Form.Label>
                  <Form.Control
                      required
                      type='name'
                      placeholder='Enter postal code'
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>


                <Form.Group className='py-3' controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                      required
                      type='password'
                      placeholder='Enter Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

                <Form.Group className='py-3' controlId='passwordConfirm'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                      required
                      type='password'
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                  >
                  </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                  Register
                </Button>

              </Form>

              <Row className='py-5'>
                <Col>
                  Have an Account? <Link
                    to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                  Sign In
                </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default RegisterScreen
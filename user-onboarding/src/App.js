import React,{useState,useEffect} from 'react';
import {withFormik,Field,Form} from 'formik'
import * as  Yup from 'yup'
import axios from 'axios'
import FormList from './Components/FormList'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App({errors,touched,values,status}) {
  const  [user,setUser] = useState([])
  useEffect(()=>{
    if(status){
      setUser(user =>[...user,status])
    }
  },[status])
  
  return (
    <div className="App" style ={{backgroundColor:'dodgerblue'}}>
      <h1>Subscription Form</h1>
      <Form>

        {/* Name */}

        <Field 
          type ="text" 
          name  ="name" 
          placeholder = 'Name'
          />
          {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
          )}

        {/* Email */}
        <Field 
          type =  "email" 
          name = "email" 
          placeholder = 'Email'
        />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        


        {/* Password */}
        <Field 
          type = "password" 
          name = "password"
          placeholder ='Password' 
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <Field component = "select" name = 'role'>
          <option value="UI-Designer">UI Designer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Devloper">Backend Developer</option>
        </Field>
        

        <Field 
          type = 'checkbox'
          name = 'tos'
          checked = {values.tos}
          
        />
        {touched.tos && errors.tos && (
          <p className="error">{errors.tos}</p>
        )}
        

        <button type = "submit">Submit</button>




      




      </Form>
      <FormList user =  {user} />
    </div>
  );


}


const FormikApp = withFormik({
  mapPropsToValues({name,email,password,tos,role}){
    return{
      name: name || '',
      email: email || '',
      password: password || '',
      tos: tos || false,
      role: role || "UI-Designer"
    }
  },
  // Validation
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    tos: Yup.boolean().required()
    
  }),
  handleSubmit(values,{resetForm,setErrors,setSubmitting,setStatus}){
    if(values.email === 'waffle@syrup.com'){
      setErrors({email: 'That email is already taken'})
    }
      axios
        .post('https://reqres.in/api/users/',values)
        .then(res => {
          console.log(res.data)
          setStatus(res.data)
          resetForm()
          setSubmitting(false)

        })
        .catch(err => {
          setSubmitting(false)
        })
  }
    
  
})(App)

export default FormikApp;

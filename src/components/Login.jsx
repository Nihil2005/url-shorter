import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from './ui/button';
import Error from './error';
import * as Yup from 'yup';
import useFetch from '@/hooks/use-fetch';
import { login } from '@/db/apiAuth';
import { supabase } from '@/db/supabase';
import { UrlStatae } from '@/pages/context';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { data, loading, error: fetchError, fetchData } = useFetch(login, formData);
  const {fetchuser} = UrlStatae();
  useEffect(()=>{
    if(error === null && data){
      Navigate(`/dashboard?${longlink ? `createNew=${longlink}` : ''}`);

    }
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    setError('');
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email is Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
      });

      await schema.validate(formData, { abortEarly: false });

      await fetchData(); // Ensure fetchData is called to initiate the fetch operation

      // Handle successful login logic here, e.g., redirect or state update
      const { user, error } = await supabase.auth.signIn({
        email: formData.email,
        password: formData.password
      });

      if (error) {
        throw error;
      }

      console.log('User:', user);
      
    } catch (e) {
      setError(e.message || 'An error occurred');
    }
  };

  // Check if data is undefined before destructuring
  const userData = data ? data : {};

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to login</CardDescription>
          {fetchError && <Error message={fetchError.message} />}
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-1'>
            <input
              type='email'
              placeholder='Enter your email'
              className='border rounded px-3 py-2'
              value={formData.email}
              onChange={handleInputChange}
              name="email"
            />
            {error.email && <Error message={error.email} />}
          </div>
          <div className='space-y-1'>
            <input
              type='password'
              placeholder='Enter your password'
              className='border rounded px-3 py-2'
              value={formData.password}
              onChange={handleInputChange}
              name="password"
            />
            {error.password && <Error message={error.password} />}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

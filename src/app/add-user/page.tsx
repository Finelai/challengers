"use client";

import React, { useState, FormEvent } from 'react'

export default function AddUserPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addUserFormSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData(e.target)
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.');
      }

      const data = await response.json();
      console.log(data);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form action='/add-user/api' onSubmit={addUserFormSubmitHandler}>
        <input placeholder='Your name' name='name' />
        <input type='email' placeholder='Your E-mail' name='email' />
        <input type='password' placeholder='Your Password' name='password' />
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Create Account'}
        </button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>Congratulations! Your account succesfully created</div>}
    </div>
  );
}
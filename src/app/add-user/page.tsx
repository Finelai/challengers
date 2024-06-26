'use client';

import React, { useState, FormEvent } from 'react';

import { tryCatchError } from '@utils/tryCatchError';

export default function AddUserPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const addUserFormSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);
    setSuccess(false);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch(e.currentTarget.action, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.');
      }

      const data = await response.json();
      console.log(data);
      setSuccess(true);
    } catch (error) {
      setErrorMsg(tryCatchError(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form action="/add-user/api" onSubmit={addUserFormSubmitHandler}>
        <input placeholder="Your name" name="name" />
        <input type="email" placeholder="Your E-mail" name="email" />
        <input type="password" placeholder="Your Password" name="password" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Create Account'}
        </button>
      </form>
      {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
      {success && <div style={{ color: 'green' }}>Congratulations! Your account succesfully created</div>}
    </div>
  );
}

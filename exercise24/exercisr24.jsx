
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


function Exercise24() {
    const [submited, setSubmited]=useState(false)
    const[studentData, setStudentData]=useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    setSubmited(true)
    setStudentData(data)

    
  };
  const handleClear = () => {
    reset();
    setSubmited(false);
    setStudentData(null);
};

  return (
    <div>
    <div className='main'>
      <form onSubmit={handleSubmit(onsubmit)}>

        <h1>Student Registration</h1>

        {/* Student Name */}
        <div className='student'>
          <label >Student Name</label><br />

          <input
            type="text"
            {...register('username', {
              required: "User Name is required",
              minLength: {
                value: 2,
                message: "At least 2 characters"
              }
            })}
            placeholder="User Name"
          />

          {errors.username && (
            <p style={{ color: "red" }}>
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className='student'>
          <label>Email</label><br />

          <input
            type="email"
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
            placeholder="Enter Email"
          />

          {errors.email && (
            <p style={{ color: "red" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Grade Level */}
        <div className='student1'>
          <label>Grade Level</label><br />

          <select
            {...register('gradeLevel', {
              required: "Please select a grade"
            })}
          >
            <option value="">Select Grade</option>
            <option value="grade9">Grade 9</option>
            <option value="grade10">Grade 10</option>
            <option value="grade11">Grade 11</option>
            <option value="grade12">Grade 12</option>
          </select>

          {errors.gradeLevel && (
            <p style={{ color: "red" }}>
              {errors.gradeLevel.message}
            </p>
          )}
        </div>

        {/* Subjects Interest */}
        <div className='student'>
          <label>Subjects Interest</label>

          <div className='student'>
            <label>
              <input
                type="checkbox"
                value="math"
                {...register('subjects', {
                  required: "Select at least one subject"
                })}
              />
              Mathematics
            </label>

            <label>
              <input
                type="checkbox"
                value="science"
                {...register('subjects', {
                  required: "Select at least one subject"
                })}
              />
              Science
            </label>

            <label>
              <input
                type="checkbox"
                value="english"
                {...register('subjects', {
                  required: "Select at least one subject"
                })}
              />
              English
            </label>
          </div>

          {errors.subjects && (
            <p style={{ color: "red" }}>
              {errors.subjects.message}
            </p>
          )}
        </div>

        <button type="submit" >
          Register
        </button>
         <button type="button" onClick={handleClear} >
          Clear
        </button>

      </form>
    <div>
      
      
    </div>
    </div>
        {
        submited && (
            <div className='back'>
                <h1>Student Registration</h1>
                <p>STUDENT NAME: {studentData.username}</p>
                <p> STUDENT EMAIL:{studentData.email}</p>
                <p> STDUENT GRADE:{studentData.gradeLevel}</p>
                <p> SUBJECT INTEREST:{studentData.subjects}</p>
            </div>
        )
      }

    </div>
    
  );
}

export default Exercise24;

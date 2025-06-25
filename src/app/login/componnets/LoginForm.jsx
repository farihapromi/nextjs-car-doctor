'use client'
import { loginUser } from '@/app/actions/auth/loginUser';
import { useRouter } from 'next/navigation';
import React from 'react'

const LoginForm = () => {
    const router=useRouter()
        const handleLogin=async(e)=>{
      
         e.preventDefault();
    const form = e.target;
 
    const email = form.email.value;
    const password = form.password.value;
    try {
        await loginUser('credentials',{email,password})
        router.push('/')
        
    } catch (error) {
        console.log(error)
        alert('Authentication failed')
        
    }
    
    }

  return (
    <div>
        <form onSubmit={handleLogin}>


  {/* Email */}
  <div className="form-control mb-4">
    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter email" className="input input-bordered w-full" required />
  </div>

  {/* Password */}
  <div className="form-control mb-6">
    <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter password" className="input input-bordered w-full" required />
    <label className="mt-1">
      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    </label>
  </div>

  {/* Submit */}
  <div className="form-control">
    <button type="submit" className="btn btn-primary w-full bg-orange-500 text-white">Login</button>
  </div>
</form>

      
    </div>
  )
}

export default LoginForm

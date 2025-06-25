'use client'
import Lottie from 'lottie-react'
import Link from 'next/link'
import registerAnimationData from '../../assets/lottie/login.json'




const Login = () => {
    const handleLogin=e=>{
        e.preventDefault()
    }

   
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2">
          <Lottie animationData={registerAnimationData} loop={true} className="w-full h-auto" />
        </div>

        {/* Signup Card */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center mb-6">Login Now</h1>
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

            <p className="text-sm text-center mt-6">
             Don't have an account?{' '}
              <Link href="/register" className="text-blue-500 font-semibold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

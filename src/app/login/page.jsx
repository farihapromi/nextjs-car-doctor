'use client'
import Lottie from 'lottie-react'
import Link from 'next/link'
import registerAnimationData from '../../assets/lottie/login.json'
import LoginForm from './componnets/LoginForm'




const Login = () => {

   
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
            <LoginForm/>
            <h1 className="text-4xl font-bold text-center mb-6">Login Now</h1>

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

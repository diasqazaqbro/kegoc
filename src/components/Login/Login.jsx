import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
	return (
		<div className='vh-100'>
			<div className='container-fluid h-custom'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col-md-9 col-lg-6 col-xl-5'>
						<img
							src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
							className='img-fluid'
							alt='Sample image'
						/>
					</div>
					<div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
						<form>
							<div className='form-outline mb-4'>
								<input
									type='email'
									id='form3Example3'
									className='form-control form-control-lg'
									placeholder='Enter a valid email address'
								/>
								<label className='form-label' for='form3Example3'>
									Email address
								</label>
							</div>

							<div className='form-outline mb-3'>
								<input
									type='password'
									id='form3Example4'
									className='form-control form-control-lg'
									placeholder='Enter password'
								/>
								<label className='form-label' for='form3Example4'>
									Password
								</label>
							</div>

							<div className='text-center text-lg-start mt-4 pt-2'>
								<Link
									to={'/main'}
									type='button'
									className='btn btn-primary btn-lg'
									style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
								>
									Войти
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login

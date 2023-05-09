'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Formik, Field, Form as FormikForm } from 'formik'

type Field = {
	label: string
	type: string
	placeholder?: string
	accessibility?: string
}

export type Fields = Field[]

export const listFields = [
	{
		label: 'First name',
		type: 'text',
		placeholder: 'John',
		accessibility: 'firstName',
	},
	{
		label: 'Last name',
		type: 'text',
		placeholder: 'Doe',
		accessibility: 'lastName',
	},
	{
		label: 'Email',
		type: 'email',
		placeholder: 'john.acme@example.com',
		accessibility: 'email',
	},
	{
		label: 'Password',
		type: 'password',
		accessibility: 'password',
	},
]

const renderFields = listFields.map((field) => {
	return (
		<div key={field.label} className='flex flex-col gap-2'>
			<label className='font-semibold' htmlFor={field.accessibility}>
				{field.label}
			</label>
			<Field
				type={field.type}
				id={field.accessibility}
				className={`form-input rounded-md border-slate-300 invalid:border-red-600 invalid:ring-red-600`}
				name={field.accessibility}
				placeholder={field.placeholder}
			/>
		</div>
	)
})

export default function SignUpForm() {
	const router = useRouter()
	const [checked, setChecked] = useState(false)

	const ariaChecked = () => {
		setChecked((prevState) => !prevState)
	}

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					phone_number: '',
					password: '',
					agree_terms: false,
				}}
				onSubmit={(values, actions) => {
					actions.resetForm()
					localStorage.setItem('isUserLogged', 'true')
					router.push('/passcode')
				}}
			>
				<FormikForm
					className='flex flex-col items-center gap-8'
					role='form'
				>
					<fieldset className='flex flex-col gap-4'>
						{renderFields}
						<div>
							<label
								htmlFor='agree_terms'
								className='flex items-center gap-2'
							>
								<Field
									type='checkbox'
									id='agree_terms'
									className={`form-checkbox`}
									name='agree_terms'
									placeholder='john@acme.com'
									onClick={ariaChecked}
									checked={checked}
									role='checkbox'
								/>
								I accept the{' '}
								<Link
									href='/'
									className='-mx-1 text-indigo-600 hover:text-indigo-700'
								>
									Privacy Terms
								</Link>{' '}
								&{' '}
								<Link
									href='/'
									className='-mx-1 text-indigo-600 hover:text-indigo-700'
								>
									Terms of Service
								</Link>
							</label>
						</div>
					</fieldset>
					<button
						type='submit'
						className='m-auto block rounded-md bg-red-600 px-6 py-3 font-semibold text-white delay-100 duration-300 ease-in-out hover:bg-red-700'
						aria-label='Submit button'
						role='button'
					>
						Submit
					</button>
					<p>
						Are you already a quizzer?{' '}
						<Link
							href='/login'
							className='text-blue-600 hover:underline'
						>
							Log in
						</Link>{' '}
						now.
					</p>
				</FormikForm>
			</Formik>
		</>
	)
}

'use client'

import { useRouter } from 'next/navigation'
import { Formik, Field, Form as FormikForm } from 'formik'
import { Fields, listFields } from '../signup/signupForm'

const loginFields: Fields = listFields.slice(2)

const renderFields = loginFields.map((field) => {
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

export default function Login() {
	const router = useRouter()
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
					</fieldset>
					<button
						type='submit'
						className='m-auto block rounded-md bg-red-600 px-6 py-3 font-semibold text-white delay-100 duration-300 ease-in-out hover:bg-red-700'
						aria-label='Submit button'
						role='button'
					>
						Submit
					</button>
				</FormikForm>
			</Formik>
		</>
	)
}

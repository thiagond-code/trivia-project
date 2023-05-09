'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Form as FormikForm, Formik, Field } from 'formik'

export default function Passcode() {
	const router = useRouter()

	useEffect(() => {
		const user = localStorage.getItem('isUserLogged') == 'true'
		if (!user) router.push('/signup')
	})

	return (
		<Formik
			initialValues={{
				password: '',
			}}
			onSubmit={(values, actions) => {
				console.log(JSON.stringify(values, null, 2))
			}}
		>
			<FormikForm className='flex flex-col justify-center gap-12'>
				<div className='flex flex-col gap-12 text-center'>
					<h1 className='text-3xl font-bold'>Let&apos;s play!</h1>
					<div>
						<Field
							type='text'
							id='password'
							className={`rounded-md border-slate-300`}
							name='password'
							placeholder='Enter the code'
						/>
					</div>
				</div>
				<button
					type='submit'
					className='m-auto block rounded-md bg-red-600 px-6 py-3 font-semibold text-white delay-100 duration-300 ease-in-out hover:bg-red-700 disabled:bg-red-500'
				>
					Submit
				</button>
			</FormikForm>
		</Formik>
	)
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Form as FormikForm, Formik, Field } from 'formik'

export default function Play() {
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
				<div className='flex flex-col text-center gap-12'>
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
					className='bg-red-600 px-6 py-3 rounded-md text-white font-semibold block m-auto disabled:bg-red-500 hover:bg-red-700 delay-100 duration-300 ease-in-out'
				>
					Submit
				</button>
			</FormikForm>
		</Formik>
	)
}

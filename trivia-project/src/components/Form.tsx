import { useState } from 'react'
import Link from 'next/link'
import { inter } from '@/pages'
import { Form as FormikForm, Field, Formik, useFormik } from 'formik'


type Field = {
    label: string,
    type: string,
    placeholder?: string,
    accessibility?: string
}

type Fields = Field[]


const listFields = [
    {
        label: 'First name',
        type: 'text',
        placeholder: 'John',
        accessibility: 'firstName'
    },
    {
        label: 'Last name',
        type: 'text',
        placeholder: 'Doe',
        accessibility: 'lastName'
    },
    {
        label: 'Email',
        type: 'email',
        placeholder: 'john.acme@example.com',
        accessibility: 'email'
    },
    {
        label: 'Password',
        type: 'password',
        accessibility: 'password'
    }
]


const renderFields = listFields.map(field => {
    return (
        <div key={field.label} className='flex flex-col gap-2'>
            <label className='font-semibold' htmlFor={field.accessibility}>{field.label}</label>
            <Field 
                type={field.type}
                id={field.accessibility}
                className={`${inter.className} form-input border-slate-300 rounded-md invalid:border-red-600 invalid:ring-red-600`}
                name={field.accessibility}
                placeholder={field.placeholder} 
            />
        </div>
    )
})

export default function Form() {

    const [checked, setChecked] = useState(false)

    const ariaChecked = () => {
        setChecked(prevState => !prevState)
    }

    

    return (
        <main className='flex flex-col items-center gap-8'>
            <h1 className='text-3xl font-bold'>Sign up</h1>
            <Formik
                initialValues= {
                    { 
                        name: '', 
                        email: '',
                        phone_number: '',
                        password: '',
                        agree_terms: false
                    }
                }

                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false)
                    }, 1000)
                }}
            >
                <FormikForm className='flex flex-col gap-8' role='form'>
                    <fieldset className='flex flex-col gap-4'>
                        {renderFields}    
                        <div>
                            <label htmlFor='agree_terms' className='flex items-center gap-2'>
                            <Field
                                type='checkbox'
                                id='agree_terms'
                                className={`${inter.className} form-checkbox `}
                                name='agree_terms'
                                placeholder='john@acme.com'
                                onClick={ariaChecked}
                                role='checkbox'
                            />
                            I accept the <Link href='/' className='-mx-1 text-indigo-600 hover:text-indigo-700'>Privacy Terms</Link> & <Link href='/' className='-mx-1 text-indigo-600 hover:text-indigo-700'>Terms of Service</Link>
                            </label>
                        </div>
                    </fieldset>
                    <button type='submit' className='bg-red-600 px-6 py-3 rounded-md text-white font-semibold block m-auto hover:bg-red-700 delay-100 duration-300 ease-in-out' aria-label='Submit button' role='button'>Submit</button>
                </FormikForm>
            </Formik>
        </main>
    )
}
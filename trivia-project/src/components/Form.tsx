import { useState } from 'react'
import Link from 'next/link'
import { Form as FormikForm, Field, Formik, useFormik } from 'formik'
import { inter } from '@/pages/index'

type Field = {
    label: string,
    type: string,
    placeholder?: string
}

type Fields = Field[]


const listFields = [
    {
        label: 'Name',
        type: 'text',
        placeholder: 'Thiago'
    }
]


export default function Form() {

    const [checked, setChecked] = useState(false)

    const ariaChecked = ()  => {
        setChecked(prevState => !prevState)
    }

    return (
        <main className='flex flex-col items-center gap-8'>
            <h1 className='text-3xl font-bold'>Sign up</h1>
            <Formik
                initialValues= {
                    { 
                        firstName: '',
                        lastName: '',
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
                <FormikForm role='form'>
                    <fieldset className='m-auto flex flex-col gap-2 w-1/2'>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold" htmlFor='firstName'>First Name</label>
                            <Field 
                                id='firstName'
                                className={`form-input ${inter.className} border-slate-300  rounded-md mb-4`}
                                name='firstName' 
                                placeholder='John'
                                type='text'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold" htmlFor='lastName'>Last Name</label>
                            <Field 
                                id='lastName'
                                className={`form-input ${inter.className} border-slate-300  rounded-md mb-4`}
                                name='lastName' 
                                placeholder='Doe'
                                type='text'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold" htmlFor='email'>Email</label>
                            <Field
                                id='email'
                                className={`form-input ${inter.className} border-slate-300  rounded-md mb-4`}
                                name='email'
                                placeholder='john@acme.com'
                                type='email'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold" htmlFor='phone_number'>Phone number</label>
                            <Field
                                id='phone_number'
                                className={`form-input ${inter.className} border-slate-300 rounded-md mb-4`}
                                name='phone_number'
                                placeholder='(33) 98803-9440'
                                type='tel'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold" htmlFor='password'>Password</label>
                            <Field
                                id='password'
                                className={`form-input ${inter.className} border-slate-300  rounded-md mb-6`}
                                name='password'
                                type='password'
                            />
                        </div>
                    </fieldset>
                    <div className='m-auto flex flex-col gap-8'>
                        <label className={`${inter.className} flex items-center gap-2`} htmlFor='agree_terms'>
                            <Field type='checkbox' id='agree_terms' name='agree_terms' onClick={ariaChecked} role='checkbox' aria-checked={checked} />
                            I agree to the <Link href='/' className='-mx-1 text-indigo-700 hover:text-indigo-800 delay-50 duration-300 ease-in-out'>Privacy Policy</Link> & <Link href='/' className='-mx-1 text-indigo-700 hover:text-indigo-800 delay-50 duration-300 ease-in-out'>Terms of Service</Link>
                        </label>
                        <button className='block m-auto px-6 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 delay-100 duration-300 ease-in-out' type='submit' aria-label="submit-button" role="button">Submit</button>
                    </div>
                </FormikForm>
            </Formik>
        </main>
    )
}
import { useEffect } from "react"
import { useRouter } from "next/router"
import { Form as FormikForm, Formik, Field } from "formik"
import { inter } from "."

const userLogged = true

export default function Play() {
    const router = useRouter()
    
    useEffect(() => {
        if (!userLogged) {
            router.push('/signup')
        }
    })

    return (
        <Formik
            initialValues= {
                { 
                    password: '', 
                }
            }

            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }, 1000)
            }}
        >
            <FormikForm className='flex flex-col justify-center gap-12'>
                <div className='flex flex-col text-center gap-12'>
                    <h1 className='text-3xl font-bold'>Let&apos;s play!</h1>
                    <div>
                        <Field 
                            type='text'  
                            id='password'
                            className={`${inter.className} rounded-md border-slate-300`}
                            name='password' 
                            placeholder='Enter the code'
                        />
                    </div>
                </div>
                <button type='submit' className='bg-red-600 px-6 py-3 rounded-md text-white font-semibold block m-auto'>Submit</button>
            </FormikForm>
        </Formik>
    )
}
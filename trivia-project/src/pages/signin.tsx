import { listFields } from "@/components/Form"
import { Field, Formik, Form as FormikForm } from "formik"
import { inter } from "@/pages"
import router from "next/router"


const fields = listFields.slice(2)

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

export default function SignIn() {
    return (
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
        localStorage.setItem('isUserLogged', 'true')
        router.push('/play')
    }}
>
    <FormikForm className='flex flex-col gap-8' role='form'>
        <fieldset className='flex flex-col gap-4'>
            {renderFields}    
        </fieldset>
        <button type='submit' className='bg-red-600 px-6 py-3 rounded-md text-white font-semibold block m-auto hover:bg-red-700 delay-100 duration-300 ease-in-out' aria-label='Submit button' role='button'>Submit</button>
    </FormikForm>
</Formik>
    )
}
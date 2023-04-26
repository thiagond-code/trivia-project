import { Form as FormikForm, Field, Formik, useFormik } from "formik"

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
    return (
        <main className="flex flex-col items-center gap-8">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <Formik
                initialValues= {
                    { 
                        name: '', 
                        email: '',
                        phone_number: '',
                        password: ''
                    }
                }
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false)
                    }, 1000)
                }}
            >
            <FormikForm className="flex flex-col gap-4">
                <label htmlFor="firstName">First Name</label>
                <Field 
                    id="firstName"
                    className="p-2 rounded-md border-b ring focus:ring-cyan-400 focus:border-blue-600"
                    name="firstName" 
                    placeholder="John" 
                />

                <label htmlFor="lastName">Last Name</label>
                <Field 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Doe" 
                />

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="john@acme.com"
                    type="email"
                />
                <div className="flex justify-center">
                    <button type="submit">Submit</button>
                </div>
            </FormikForm>
        </Formik>
        </main>
    )
}
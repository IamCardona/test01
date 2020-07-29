import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import firebase from '../../firebaseConfig'

export default function() {
    const router = useRouter()

    const [error, setError] = useState(null)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('El email no es valido')
                .required('El email es oblogatorio'),
            password: Yup.string()
                .required('La contraseña es obligatoria')
        }),
        onSubmit: async valores => {
            const { email, password } = valores
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                router.push('/');
            } catch(e) {
                console.log(e)
            }
        }
    })

    return(
        <div>
            <h1>Register</h1>

            {error && (
                <div>
                    {error}
                </div>
            )}

            <form onSubmit={formik.handleSubmit}>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />

                    {formik.touched.email && formik.errors.email ? (
                        <div>
                            <h1>{formik.errors.email}</h1>
                        </div> 
                    ) : null}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />

                    {formik.touched.password && formik.errors.password ? (
                        <div>
                            <h1>{formik.errors.password}</h1>
                        </div> 
                    ) : null}
                </div>

                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}
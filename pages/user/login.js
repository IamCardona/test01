import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { Form, Input, Button, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import firebase from '../../firebaseConfig'

export default function() {
    const router = useRouter()
    const [error, setError] = useState(false)

    const onFinish = async values => {
        const { email, password } = values;

            try {
                setError(false)
                await firebase.auth().signInWithEmailAndPassword(email, password)
                router.push('/')
            } catch(e) {
                setError(true)
            }
      };

    return(
        <div style={{ width: "100%", textAlign: "center"}}>
            <div className="login-container" style={{ backgroundColor: "rgb(247, 247, 247)", position: "absolute", left: "50%", top: "50%",  transform: "translate(-50%, -50%)" }}>
                <div>
                    <img style={{ marginTop: "3rem" }} src="/logo.png" alt="Logo" />
                    <div style={{ marginTop: "1rem", fontSize: "1.4rem", color: "rgba(0, 0, 0, 0.65)" }}>Inicia Sesión en Tardan</div>
                </div>

                {error && <Alert 
                type="error" closable message="Correo Electrónico o Contraseña Incorrectos" 
                style={{ width: "80%", margin: "1rem auto 0 auto" }}
                onClose={() => setError(false)} />}

                <div style={{ width: "90%", textAlign: "center", margin: "0 auto", padding: "2rem 0" }}>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Ingresa tu Correo Electrónico!',
                    },
                    {
                        type: 'email',
                        message: 'Ingresa un Correo Electrónico Valido!'
                    }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo Electrónico" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Ingresa tu Contraseña!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Contraseña"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "80%" }}>
                        Log in
                    </Button>
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="">
                    Restablecer contraseña
                    </a>
                    <br /> O <br />
                    <a href="">Registrarse ahora!</a>
                </Form.Item>
                </Form>
                </div>
            </div>
        </div>
    )
}

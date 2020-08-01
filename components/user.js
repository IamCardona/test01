import React, { useState, useEffect } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
import { useRouter } from 'next/router'

import firebase from '../firebaseConfig'
import { request } from 'graphql-request'

export default function() {
    const router = useRouter()
    const [user, setUser] = useState(null)

    const query = `
    query usuario($input: IdInput!) {
        getUser(input: $input) {
            name
            email
        }
    }
    `

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(userToken) {
            if(userToken) {
                const variables = {
                    input: {
                        id: userToken.uid
                    }
                }
                request('http://localhost:4000/graphql', query, variables).then((data) => {
                    if(data) setUser(data.getUser.name)
                })
            } else {
                setUser(null)
            }
        })
    }, [])

    const content = (
        <div>
            {user && (
                <div>
                    <div style={{ color: "#93a9b5", fontSize: "1rem", borderBottom: "1px #e5edef solid", paddingBottom: "0.5rem" }} className="click">Perfil</div>
                    <div style={{ color: "#ff4d4f", fontSize: "1rem", paddingTop: "0.5rem" }} className="click" onClick={() => firebase.auth().signOut()}>Cerrar sesión</div>
                </div>
            )}
            {!user && (
                <div>
                    <div style={{ color: "#93a9b5", fontSize: "1rem", borderBottom: "1px #e5edef solid", paddingBottom: "0.5rem" }} className="click" onClick={() => router.push('/user/login')}>Iniciar Sesión</div>
                    <div style={{ color: "#ff4d4f", fontSize: "1rem", paddingTop: "0.5rem" }} className="click" onClick={() => router.push('/user/register')}>Registrarse</div>
                </div>
            )}
        </div>
    )

    const title = () => {
        if(user) return <div style={{ color: "#93a9b5" }}>{user}</div>
    }
    return(
        <Popover content={content} placement="bottom" title={title()}>
            <div style={{ padding: "1rem" }}>
                <UserOutlined style={{ fontSize: "1.5rem", color: "#93a9b5" }} className="click" />
            </div>
        </Popover>
    )
}
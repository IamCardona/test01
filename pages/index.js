import Layout from '../components/layout'
import firebase from '../firebaseConfig'
import Login from './user/login'

export default function() {

  const cerrar = async () => {
    await firebase.auth().signOut()
    console.log("Cerrar session")
  }

  return(
      <Layout title="Index">
          <h1>Index</h1>

          <button onClick={() => cerrar()}>Cerrar session</button>
      </Layout>
  )
}
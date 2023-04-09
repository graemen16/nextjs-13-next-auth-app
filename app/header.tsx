//"use client"
import styles from "./header.module.css"
import { SignIn, SignOut } from "./actions"
import { getServerSession } from "next-auth/next"
import { getCurrentUser, getSession } from "./session"
import { UserBar } from "./user-bar"

export default async function Header() {
  //const session = await getServerSession()
  //const session = getSession()
  const user = await getCurrentUser()
  //const promise = getSession()
  
  return (
    <header className={styles.signedInStatus}>
      <div className={styles.loaded}>
      <UserBar
            user={{
              name: user?.name,
              image: user?.image,
              email: user?.email,
            }}
        />
      </div>
    </header>
  )
}

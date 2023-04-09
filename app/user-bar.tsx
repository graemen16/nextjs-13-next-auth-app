"use client"
import { User } from "next-auth"
import styles from "./header.module.css"
import { SignIn, SignOut } from "./actions"

interface UserBarProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">
}

export function UserBar({ user }: UserBarProps) {
  return (<>
    {user.name ? (
      <>
        {user.image && (
          <span
            style={{ backgroundImage: `url('${user.image}')` }}
            className={styles.avatar}
          />
        )}
        <span className={styles.signedInText}>
          <small>Signed in as</small>
          <br />
          <strong>{user.email ?? user.name}</strong>
        </span>
        <SignOut />
      </>
    ) : (
      <>
        <span className={styles.notSignedInText}>
          You are not signed in
        </span>
        <SignIn />
      </>
    )}
</>)
}

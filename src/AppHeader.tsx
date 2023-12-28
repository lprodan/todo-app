import { NavLink } from "react-router-dom"
import { NavConfig } from "./types/nav-config"

interface Props {
  isAuthenticated: boolean
}

export function AppHeader({ isAuthenticated }: Props) {
  const routes: NavConfig[] = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Todo",
      link: "/tasks",
      auth: true,
    },
    {
      label: "Log In",
      link: "/auth/login",
      auth: false,
    },
    {
      label: "About",
      link: "/about",
    },
  ]

  return (
    <nav>
      <ul>
        {routes
          .filter(
            (item) => item.auth === undefined || item.auth === isAuthenticated
          )
          .map((item) => {
            return (
              <li key={item.label}>
                <NavLink to={item.link}>{item.label}</NavLink>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

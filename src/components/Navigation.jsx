import { useState, useEffect } from "react"
import logo from "../assets/LogoW.svg"

export default function Navigation() {

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()

            const formattedDate = now.toLocaleDateString("en-IN", {
                weekday: "long",
                day: "2-digit",
                month: "short",
                year: "numeric",
                timeZone: "Asia/Kolkata"
            })

            const formattedTime = now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata"
            }).toLowerCase()

            setDate(formattedDate)
            setTime(formattedTime)
        }

        updateDateTime()
        const interval = setInterval(updateDateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <nav className="navigation_bar">
            <div className="navigation_container container">
                <img src={logo} alt="logo" className="brand_logo" />

                <div className="time_section">
                    <p className="body">{date}</p>
                    <h2 className="heading2">{time}</h2>
                </div>
            </div>
        </nav>
    )
}
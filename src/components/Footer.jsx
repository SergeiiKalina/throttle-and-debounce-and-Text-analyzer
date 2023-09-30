import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer
            style={{
                width: "100%",
                backgroundColor: "#E3EFFB",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 0 0 2px rgba(0 0 0 / 0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: "62%",
                    justifyContent: "space-between",
                    fontSize: "16px",
                    padding: "20px 0",
                }}
            >
                <div>Build by Sergeii Kalyna</div>
                <div>
                    <a
                        href="#"
                        style={{
                            paddingRight: "4px",
                            textDecoration: "none",
                            color: "black",
                        }}
                    >
                        About us
                    </a>
                    |
                    <a
                        href="#"
                        style={{
                            paddingLeft: "4px",
                            textDecoration: "none",
                            color: "black",
                        }}
                    >
                        Contact us
                    </a>
                </div>
            </div>
        </footer>
    )
}

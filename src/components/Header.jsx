import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import FeedIcon from "@mui/icons-material/Feed"
export default function Header() {
    return (
        <div
            style={{
                width: "100%",
                backgroundColor: "#E3EFFB",
                display: "flex",
                justifyContent: "center",
                boxShadow: "0 0 0 2px rgba(0 0 0 / 0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: "62%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                }}
            >
                <div style={{ fontWeight: "700" }}>Text Analyser</div>
                <div
                    style={{
                        width: "10%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <FeedIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                </div>
            </div>
        </div>
    )
}

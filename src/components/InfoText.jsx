export default function InfoText({ minutes, longestWord }) {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                backgroundColor: "#fff",
                height: "50px",
                margin: "20px 0 0 0",
                justifyContent: "space-around",
            }}
        >
            <div className="info_text_block">
                <div className="info_text_name">Average Reading Time:</div>
                <div className="info_text_meaning">~{minutes} minute</div>
            </div>
            <div className="info_text_block">
                <div className="info_text_name">Longest word:</div>
                <div className="info_text_meaning">{longestWord}</div>
            </div>
        </div>
    )
}

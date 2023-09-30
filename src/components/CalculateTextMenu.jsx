export default function CalculateTextMenu({
    quantityWord,
    quantityCharacters,
    quantitySentences,
    quantityParagraphs,
    quantityPronouns,
}) {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                backgroundColor: "#fff",
                alignItems: "center",
                height: "80px",
                justifyContent: "space-around",
            }}
        >
            <div className="calculate_Text_Block">
                <div className="calculate_Text_Name">Words</div>
                <div className="calculate_Text_Meaning">{quantityWord}</div>
            </div>
            <div className="calculate_Text_Block">
                <div className="calculate_Text_Name">Characters</div>
                <div className="calculate_Text_Meaning">
                    {quantityCharacters}
                </div>
            </div>
            <div className="calculate_Text_Block">
                <div className="calculate_Text_Name">Sentences</div>
                <div className="calculate_Text_Meaning">
                    {quantitySentences}
                </div>
            </div>
            <div className="calculate_Text_Block">
                <div className="calculate_Text_Name">Paragraphs</div>
                <div className="calculate_Text_Meaning">
                    {quantityParagraphs}
                </div>
            </div>
            <div className="calculate_Text_Block">
                <div className="calculate_Text_Name">Pronouns</div>
                <div className="calculate_Text_Meaning">{quantityPronouns}</div>
            </div>
        </div>
    )
}

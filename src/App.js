import React, { useEffect, useState } from "react"
import { Textarea } from "@mui/joy"
import { Box } from "@mui/system"
import "./App.scss"

import Header from "./components/Header"
import CalculateTextMenu from "./components/CalculateTextMenu"
import InfoText from "./components/InfoText"
import Footer from "./components/Footer"

function App() {
    const [quantityWord, setQuantityWord] = useState(0)
    const [quantityCharacters, setQuantityCharacters] = useState(0)
    const [quantitySentences, setQuantitySentences] = useState(0)
    const [quantityParagraphs, setQuantityParagraphs] = useState(0)
    const [quantityPronouns, setQuantityPronouns] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [longestWord, setLongestWord] = useState("")
    const [arrWords, setArrWords] = useState([])
    const [lastCall, setLastCall] = useState(null)
    const [timer, setTimer] = useState(null)
    function sentencesCounter(value) {
        let sentences = value.match(/[a-zA-Zа-яА-Я]+\s*[.!?]+\s*/g)
        setQuantitySentences(() => {
            if (sentences === null) {
                return 0
            } else {
                return sentences.length
            }
        })
    }

    function paragraphsCounter(value) {
        let paragraphs = value.match(/(\n\s*)+/g)
        setQuantityParagraphs(() => {
            if (paragraphs === null) {
                return 0
            } else {
                return paragraphs.length
            }
        })
    }
    function charactersCounter(value) {
        setQuantityCharacters(value.length)
    }
    function wordsCounter(value) {
        setQuantityWord(
            value
                .trim()
                .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9]/g, " ")
                .split(/\s+/)
                .filter(Boolean).length
        )
        setArrWords(
            value
                .trim()
                .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9]/g, " ")
                .split(/\s+/)
                .filter(Boolean)
        )
    }

    function pronounsCounter(value) {
        const regexPronouns =
            /\b(?:I|you|he|she|it|we|they|me|you|him|her|us|them)\b/gi
        let pronouns = value.match(regexPronouns)
        setQuantityPronouns(() => {
            if (pronouns === null) {
                return 0
            } else {
                return pronouns.length
            }
        })
    }

    function quickSort(arrWords) {
        let lessWords = []
        let moreWords = []
        let middleItem = arrWords[Math.floor(arrWords.length / 2)]
        if (arrWords.length < 2) {
            return arrWords
        }
        for (let i = 1; i < arrWords.length; i++) {
            if (middleItem.length >= arrWords[i].length) {
                lessWords.push(arrWords[i])
            } else {
                moreWords.push(arrWords[i])
            }
        }
        return [...quickSort(lessWords), middleItem, ...quickSort(moreWords)]
    }

    useEffect(() => {
        let min = Math.floor(quantityWord / 200)
        setMinutes(() => {
            if (min === 0 && quantityWord > 20) {
                return 1
            } else {
                return min
            }
        })
    }, [quantityWord])

    useEffect(() => {
        setArrWords(quickSort(arrWords))
    }, [quantityCharacters])

    useEffect(() => {
        setLongestWord(arrWords[arrWords.length - 1])
    }, [arrWords])

    function debounce(func, ms) {
        let firstCall = lastCall
        setLastCall(Date.now())

        if (firstCall && lastCall - firstCall <= ms) {
            setTimer(clearTimeout(timer))
        }
        setTimer(setTimeout(() => func(), ms))
    }

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Header />
            <div style={{ width: "50%", margin: "0 auto" }}>
                <CalculateTextMenu
                    quantityWord={quantityWord}
                    quantityCharacters={quantityCharacters}
                    quantitySentences={quantitySentences}
                    quantityParagraphs={quantityParagraphs}
                    quantityPronouns={quantityPronouns}
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Textarea
                        color="neutral"
                        minRows={15}
                        size="lg"
                        variant="plain"
                        onChange={(e) => {
                            let value = e.target.value
                            let ms = 500
                            debounce(() => sentencesCounter(value), ms)
                            debounce(() => paragraphsCounter(value), ms)
                            debounce(() => charactersCounter(value), ms)
                            debounce(() => wordsCounter(value), ms)
                            debounce(() => pronounsCounter(value), ms)
                        }}
                        sx={{
                            width: "100%",
                            backgroundColor: "#00000",
                            borderRadius: "0",
                            border: "none",
                            margin: "20px 0 0 0",
                            "--Textarea-focusedInset": "var(--any, )",
                            "--Textarea-focusedThickness": "none",
                            "--Textarea-focusedHighlight": "none",

                            "&::before": {
                                transition: "box-shadow .15s ease-in-out",
                            },
                            "&:focus-within": {
                                borderColor: "#fff",
                            },
                        }}
                    />
                </Box>
                <InfoText minutes={minutes} longestWord={longestWord} />
            </div>
            <Footer />
        </div>
    )
}

export default App

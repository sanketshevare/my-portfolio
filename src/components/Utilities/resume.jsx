export default function Resume() {
    return (
        <div className="bg-white ml-auto mr-auto w-3/4 pt-3 h-full">
            <p>Resume</p>
            <iframe title="resume" src={require("../data/r.pdf")} width="100%" height="700" />
            <a href={require("../data/r.pdf")} download>download</a>
        </div>
    )
}
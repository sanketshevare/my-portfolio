import { ReactTerminal } from "react-terminal";

export default function TerminalUi() {
    // Define commands here
    const commands = {
        whoami: "sanket",
        help: "These are the available commands: whoami, cd, ls, clear, socials, projects",
        ls: () => "README.md projects",
        clear: () => "",
        socials: () => `https://www.instagram.com/sanketshevare \n github : https://github.com/sanketshevare \n linkedin : https://www.linkedin.com/in/sanket-shevare-4a299a1b7}`,
        cd: (directory) => `changed path to ${directory}`,
        projects: () => `Will be updated soon`
    };

    return (
        <div className="w-1/2 mr-auto ml-auto h-96">
            <ReactTerminal
                welcomeMessage={"start by typing 'help'"}
                commands={commands}
                showControlButtons={true}
                theme={'dark'}
            />
        </div>
    );
}
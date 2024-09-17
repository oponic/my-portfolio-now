import { A } from "@solidjs/router";
import pfp from "./assets/pfp.jpg";

import githubIcon from "./assets/icons/github.svg"
import instagramIcon from "./assets/icons/instagram.svg"
import xIcon from "./assets/icons/x.svg"

export default function App(props) {
    return(
        <div class="w-full">
            <header
            class="p-4 text-xl flex items-center justify-between fixed z-10 bg-[rgba(25,25,25,0.5)] w-full backdrop-blur-sm">
                <div class="w-full md:w-5/12 mx-auto flex items-center justify-between">
                    <div class="flex items-center gap-4 hover:scale-105 duration-300">
                        <img src={pfp} class="w-9 h-9 rounded-full object-cover outline outline-[rgb(93,173,226)]" alt="luqman profile picture"/>
                        <h1>Luqman</h1>
                    </div>

                    <div class="flex items-center gap-4 text-[rgb(225,225,225)]">
                        <A href="https://github.com/theluqmn">
                            <img src={githubIcon} class="w-6 h-6 invert hover:scale-110 duration-300"/>
                        </A>

                        <A href="https://instagram.com/theluqmn">
                            <img src={instagramIcon} class="w-6 h-6 invert hover:scale-110 duration-300"/>
                        </A>

                        <A href="https://x.com/theluqmn">
                            <img src={xIcon} class="w-6 h-6 invert hover:scale-110 duration-300"/>
                        </A>
                    </div>
                </div>
            </header>

            <div class="p-4 w-full pt-28">
                {props.children}
            </div>
        </div>
    )
}
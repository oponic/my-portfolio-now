import { A } from "@solidjs/router";
import pfp from "./assets/pfp.jpg";

import githubIcon from "./assets/icons/github.svg"
import instagramIcon from "./assets/icons/instagram.svg"
import xIcon from "./assets/icons/x.svg"

export default function App(props) {
    return(
        <div class="w-full">
            <header
            class="p-4 text-xl flex items-center justify-between fixed z-10 bg-[rgba(25,25,25,0.5)] w-full backdrop-blur-sm outline outline-2 outline-[rgb(20,20,20)]">
                <div class="w-full md:w-5/12 mx-auto flex items-center justify-between">
                    <div class="flex items-center gap-4 hover:scale-105 duration-500">
                        <img src={pfp} class="w-9 h-9 rounded-full object-cover outline outline-[rgb(93,173,226)]" alt="luqman profile picture"/>
                        <h1>jack</h1>
                    </div>
                        <A href="https://github.com/oponic" target="_blank">
                            <img src={githubIcon} class="w-6 h-6 invert hover:scale-110 duration-300"/>
                        </A>
                    </div>
                </div>
            </header>

            <div class="p-4 w-full pt-28">
                {props.children}
            </div>

            <footer class="p-4 text-xl flex items-center justify-between z-10 bg-[rgba(0,0,0)] w-full backdrop-blur-sm bottom-0">
                <div class="w-full md:w-5/12 mx-auto flex items-center justify-between">
                    <a href="https://theluqmn.github.io" target="_blank">
                        <p class="text-sm">
                            Made by Luq. Edited by me, because I was too lazy to make my own
                        </p>
                    </a>
                </div>
            </footer>
        </div>
    )
}

import { A } from "@solidjs/router";
import pfp from "./assets/pfp.jpg";

import githubIcon from "./assets/icons/github.svg"
import instagramIcon from "./assets/icons/instagram.svg"
import xIcon from "./assets/icons/x.svg"

export default function App(props) {
  return(
    <div class="w-full">
      <header
      class="p-4 text-xl flex items-center justify-between fixed top-4 left-4 right-4 z-10 bg-[rgba(25,25,25,0.5)] w-auto max-w-[calc(100%-2rem)] lg:w-5/12 lg:left-5/12 lg:-translate-x-5/12 mx-auto rounded-md backdrop-blur-sm outline outline-[rgb(30,30,30)]"
      >
        <div class="flex items-center gap-4">
          <img src={pfp} class="w-12 h-12 rounded-full object-cover" alt="luqman profile picture"/>
          <div>
            <h1>Luqman</h1>
            <h2 class="text-sm text-[rgb(220,220,220)] font-mono">the renaissance man</h2>
          </div>
        </div>
        <div class="flex items-center gap-4 text-[rgb(225,225,225)]">
          <A href="https://github.com/theluqmn">
            <img src={githubIcon} class="w-6 h-6 invert"/>
          </A>

          <A href="https://instagram.com/theluqmn">
            <img src={instagramIcon} class="w-6 h-6 invert"/>
          </A>

          <A href="https://x.com/theluqmn">
            <img src={xIcon} class="w-6 h-6 invert"/>
          </A>
        </div>
      </header>

      <div class="p-4 w-full pt-28">
        {props.children}
      </div>
    </div>
  )
}
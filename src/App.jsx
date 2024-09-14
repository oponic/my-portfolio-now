import { A } from "@solidjs/router";
import pfp from "./assets/pfp.jpg";

export default function App(props) {
  return(
    <div class="w-full">
      <header
      class="p-4 text-xl flex items-center justify-between fixed top-4 left-4 right-4 z-10 bg-[rgba(25,25,25,0.8)] w-auto max-w-[calc(100%-2rem)] lg:w-1/2 lg:left-1/2 lg:-translate-x-1/2 mx-auto rounded-md backdrop-blur-sm outline outline-[rgb(30,30,30)]"
      >
        <div class="flex items-center gap-4">
          <img src={pfp} class="w-12 h-12 rounded-full object-cover" alt="luqman profile picture"/>
          <div>
            <h1>Luqman</h1>
            <h2 class="text-sm text-[rgb(220,220,220)] font-mono">the renaissance man</h2>
          </div>
        </div>
        <div class="flex items-center gap-4 text-[rgb(225,225,225)]">
          {/* Add your right-aligned items here */}
          <A href="https://github.com/theluqmn">G</A>
          <A href="https://instagram.com/theluqmn">I</A>
          <A href="https://x.com/theluqmn">X</A>
        </div>
      </header>

      <div class="p-4 w-full pt-28">
        {props.children}
      </div>
    </div>
  )
}
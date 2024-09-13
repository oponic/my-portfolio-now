import { A } from "@solidjs/router";
import pfp from "./assets/pfp.jpg";

export default function App(props) {
  return(
    <div class="w-full">
      <header
      class="p-4 text-xl flex items-center justify-between fixed top-0 left-0 right-0 z-10 bg-neutral-100 w-full"
      >
        <div class="flex items-center gap-4">
          <img src={pfp} class="w-12 h-12 rounded-full object-cover" alt="luqman profile picture"/>
          <h1>Luqman</h1>
        </div>
        <div class="flex items-center gap-4">
          {/* Add your right-aligned items here */}
          <A href="https://github.com/theluqmn">GitHub</A>
          <A href="https://instagram.com/theluqmn">Instagram</A>
          <A href="https://x.com/theluqmn">X</A>
        </div>
      </header>

      <div class="p-4 w-full pt-24">
        <h1 class="text-gray-100 text-xl bg-red-500 text-center p-4 m-4 rounded-md">
          This website is still a work in progress
        </h1>
        {props.children}
      </div>
    </div>
  )
}
import openIcon from "../assets/icons/open.svg"
import { A } from "@solidjs/router"

export default function Top(props) {
    return (
        <div>
            <div class="pt-32 pb-32">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-[rgb(93,173,226)] to-[rgb(195,155,211)] text-transparent bg-clip-text">
                    Human (or not)
                </h1>
                
                <p class="text-3xl">
                    <b>I am</b> not a <u className="text-[rgb(195,155,211)]">good person</u>.
                </p>
            </div>

            <hr className="border-t-2 my-4 border-[rgb(25,25,25)]" />
                <div class="flex flex-row justify-between">
                    <div className="flex flex-row space-x-4 items-center">
                        <div
                        class={`p-2 md:px-4 rounded-md ${props.page === "about" ? "bg-[rgb(20,20,20)]" : "bg-[rgb(0,0,0)]"} hover:scale-105 duration-300`}>
                            <A href="/">
                                <p class="md:text-xl text-[rgb(93,173,226)]">
                                    About
                                </p>
                            </A>
                        </div>

                        <div
                        class={`p-2 md:px-4 rounded-md ${props.page === "projects" ? "bg-[rgb(20,20,20)]" : "bg-[rgb(0,0,0)]"} hover:scale-105 duration-300`}>
                            <A href="/projects">
                                <p class="md:text-xl text-[rgb(93,173,226)]">
                                    Projects
                                </p>
                            </A>
                        </div>

                        <div
                        class={`p-2 md:px-4 rounded-md ${props.page === "contact" ? "bg-[rgb(20,20,20)]" : "bg-[rgb(0,0,0)]"} hover:scale-105 duration-300`}>
                            <A href="/contact">
                                <p class="md:text-xl text-[rgb(93,173,226)]">
                                    Contact
                                </p>
                            </A>
                        </div>
                    </div>
                    
                    <button
                    onClick={() => window.open('/blog', '_blank')}
                    class="p-2 px-4 hover:scale-110 duration-300 rounded-md flex space-x-2 items-center bg-gradient-to-r from-[rgb(93,173,226)] to-[rgb(195,155,211)]">
                        <p class="md:text-xl text-[rgb(20,20,20)]">
                            Blog
                        </p>
                        <img src={openIcon} class="h-4 w-4" />
                    </button>
                </div>
        </div>
    )
}

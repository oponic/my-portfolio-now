import openIcon from "../assets/icons/open.svg"

export default function Top() {
    return (
        <div>
            <div class="pt-32 pb-32">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-[rgb(93,173,226)] to-[rgb(195,155,211)] text-transparent bg-clip-text">
                    The Renaissance Man
                </h1>
                
                <p class="text-3xl">
                    <b>I am the one</b> that does a bit of <u className="text-[rgb(195,155,211)]">everything</u>.
                </p>
            </div>

            <hr className="border-t-2 my-4 border-[rgb(25,25,25)]" />

            <div class="flex flex-row justify-between">
                <div className="flex flex-row space-x-4 items-center">
                    <button class="p-2 md:px-4 rounded-md bg-[rgb(20,20,20)]">
                        <p class="md:text-xl text-[rgb(93,173,226)]">
                            About
                        </p>
                    </button>

                    <button class="p-2 md:px-4 rounded-md">
                        <p class="md:text-xl text-[rgb(93,173,226)]">
                            Projects
                        </p>
                    </button>

                    <button class="p-2 md:px-4 rounded-md">
                        <p class="md:text-xl text-[rgb(93,173,226)]">
                            Contact
                        </p>
                    </button>
                </div>

                <button class="p-2 px-4 hover:scale-110 duration-300 rounded-md flex space-x-2 items-center bg-gradient-to-r from-[rgb(93,173,226)] to-[rgb(195,155,211)]">
                    <p class="md:text-xl text-[rgb(20,20,20)]">
                        Blog
                    </p>
                    <img src={openIcon} class="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}
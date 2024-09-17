import Top from "../components/Top";
import Card from "../components/Card";
import { A } from "@solidjs/router";

export default function Projects() {
    return (
        <div class="w-full lg:w-5/12 items-center mx-auto space-y-4">
            <Top page="contact"/>

            <div class="pb-32">
                <Card rounded={true}>
                    <p class="pb-8">
                        You can always reach me by sending a <u>direct message</u> to my 
                        <A href="https://instagram.com/theluqmn" target="_blank" class="text-[rgb(93,173,226)]">instagram</A> or 
                        <A href="https://x.com/theluqmn" target="_blank" class="text-[rgb(93,173,226)]">X (formerly Twitter)</A>.
                    </p>

                    <p>
                        Might need to wait a while though, I am active once in a while on my public
                        accounts but not everyday.
                    </p>
                </Card>
            </div>
        </div>
    )
}
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
                        <A href="https://discord.com/invite/wwbrJPKQ" target="_blank" class="text-[rgb(93,173,226)]">discord</A> or 
                        <A href="https://www.reddit.com/u/thesstteam/" target="_blank" class="text-[rgb(93,173,226)]">reddit</A>.
                    </p>

                    <p>
                        I usually answer within 2-3 hours.
                    </p>
                </Card>
            </div>
        </div>
    )
}

import Link from "next/link"

interface ButtonType {
    text: string
}

export default function Button(props: ButtonType){
    return (
        <>
            <Link href="#contacts" className="w-full">
                <button id="contacts" className="bg-sky-900 text-white transition-colors rounded-md py-2 px-5 mt-4 hover:bg-yellow-500 hover:text-black w-full">
                    {props.text}
                </button>
            </Link>
        </>
    )
}
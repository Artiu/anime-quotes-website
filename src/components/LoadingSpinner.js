export default function Spinner() {
    return(
        <div className="w-screen h-screen absolute left-0 top-0 flex justify-center items-center">
            <div className="relative animate-spin w-16 h-16 border-8 border-blue-500 rounded-full">
                <div className="absolute top-0 left-1/2 transform -translate-y-full -translate-x-1/2 w-2 h-2 bg-white"/>
            </div>
        </div>
    )
}
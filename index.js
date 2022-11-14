const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.onclick = (e) => {
    e.preventDefault()
    console.log(input.value)
    getVideo()
}

const getVideo = () => {
    const blob = new Blob([input.value] , {type : "video/mp4"})
    const filterURL  = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = filterURL;
    link.download = "download mp3"
    link.click()
    input.value = ""
    console.log(blob)

    // fetch(input.value).then((file) => {

    //     console.log(file)
    // })


}
const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const textarea = form.querySelector("textarea");
const btn = from.querySelector("button");

const handleSubmit = (event) => {
    event.preventDefault();
    const text = textarea.value;
    const videoId = videoContainer.dataset.id;
    fetch(`/api/videos/${videoId}/comment`,{
        method: "POST",
        body: {
            text,
        },
    });

}

form.addEventListener("submit", handleSubmit);
window.onload = async (e) =>{
    e.preventDefault();

    /* check if any feedback */
    const response = await fetch(`http://localhost:9001/feedback`);
    
    const feedback = await response.json();

    if(feedback !== "null"){
        let tag = document.getElementById("feedback");
        tag.innerHTML = `
        <div class="alert alert-danger" role="alert">
            ${feedback}
        </div>`
    }

}
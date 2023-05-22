fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(elem => {
            let container = document.querySelector(".container")
            container.innerHTML += `
            <img width = "300" src=${elem.img} alt="">
            `
            let text = document.querySelector(".text")
            text.innerHTML += `
            <h1 style = "display flex">${elem.name}</h1>
            `
        });
    })
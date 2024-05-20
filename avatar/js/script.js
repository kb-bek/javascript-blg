
const url = "https://last-airbender-api.fly.dev/api/v1/characters?name=";



const search = () => {
    const value = document.getElementById("input").value;
    
    fetch(url + value)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            const main = document.querySelector(".main");
            const character = document.createElement('div');

            json.forEach((el) => {
                character.innerHTML = `
                    <h4>${el.name}</h4>
                `
                
                main.innerHTML = '';
                main.style.background = 'none';
                main.appendChild(character);
            })

        })
        .catch(error => console.log(error))

}

const btn = document.getElementById("btn");
btn.addEventListener('click', search)
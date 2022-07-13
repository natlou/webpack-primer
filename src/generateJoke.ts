import axios from 'axios'


export default function generateJoke(){
    const config: any = {
        headers: {
            Accept: 'application/json'
        }
    }

    const joke = document.getElementById('joke');

    axios.get('https://icanhazdadjoke.com', config).then( (res: any) => {
        if (joke !== null) joke.innerHTML = res.data.joke;
    })
}

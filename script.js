const api_key = "OojOOr2igq1E24EJMmISesTbq8pyc1baO5vY9QJE"

const fetchUrl = async (url) => {
    const data = await fetch(url)
    return data.json()
}

const apodComponent = ({title, url, date, explanation}) => {
    //const  {title, url, date} = astrologyPictureOfTheDay

    console.log(title)
    console.log(url)
    console.log(date)
    console.log(explanation)
}

async function init () {
    const data = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=5`)
    console.log(data)

    for (let i = 0; i < data.length; i++) {
        apodComponent(data[i])
    }
}

init()
const news = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic facere dolorum, dolor voluptates accusamus nemo maxime magni eos sed repudiandae tenetur voluptatibus reprehenderit omnis quas amet iure. Sed, dolorem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic facere dolorum, dolor voluptates accusamus nemo maxime magni eos sed repudiandae tenetur voluptatibus reprehenderit omnis quas amet iure. Sed, dolorem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic facere dolorum, dolor voluptates accusamus nemo maxime magni eos sed repudiandae tenetur voluptatibus reprehenderit omnis quas amet iure. Sed, dolorem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic facere dolorum, dolor voluptates accusamus nemo maxime magni eos sed repudiandae tenetur voluptatibus reprehenderit omnis quas amet iure. Sed, dolorem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic facere dolorum, dolor voluptates accusamus nemo maxime magni eos sed repudiandae tenetur voluptatibus reprehenderit omnis quas amet iure. Sed, dolorem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic facere dolorum, dolor voluptates accusamus nemo maxime magni eos sed repudiandae tenetur voluptatibus reprehenderit omnis quas amet iure. Sed, dolorem!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic facere dolorum, dolor voluptates accusamus nemo maxime magni eos sed repudiandae tenetur voluptatibus reprehenderit omnis quas amet iure. Sed, dolorem!"
]

let newsIndex = 0

function showNews() {
    const newsList = document.getElementById('newsList')
    for (let i = 0; i < 1; i++){
        if (newsIndex < news.length) {
            const newsItem = document.createElement('li')
            newsItem.textContent = news[newsIndex]
            newsList.appendChild(newsItem)
            newsIndex++
        } else {
            document.getElementById('loadMore').style.display = 'none'
            break
        }
    }
}

document.getElementById('loadMore').addEventListener('click', showNews)

showNews()
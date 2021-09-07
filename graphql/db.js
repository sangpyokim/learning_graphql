let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id:1,
        name: "Avengers - The new one",
        score: 9.0,
    },
    {
        id:2,
        name: "The GodFather I",
        score: 1
    }
]

export const getMovies = () => movies

export const getById = id => {
    const filteredPeople = people.filter( person => person.id === id )
    return filteredPeople[0]
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true
    } else {
        return false
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1 ,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie
}
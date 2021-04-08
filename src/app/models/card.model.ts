export class Card { 
    title: string;
    genres: string[];
    year: number;
    runtime: number;
    cast: string[];
    overview: string;
    posterURL: string[];

    constructor(userResponse: any){
        this.title = userResponse.title;
        this.genres = userResponse.genres;
        this.year = userResponse.year;
        this.runtime = userResponse.runtime;
        this.cast = userResponse.cast;
        this.overview = userResponse.overview;
        this.posterURL = userResponse.posterURLs;
    }

    getTitle() {
        return this.title;
    }

    getDescript() {
        return this.overview;
    }

    getRuntime(){
        return this.runtime;
    }

    getYear(){
        return this.year;
    }

    getGenres(){
        var parsedGenres = [];
        for(var x in Object.keys(this.genres)){
            if(this.genres[x] == "1"){
                parsedGenres.push("Biography");
            }
            if(this.genres[x] == "2"){
                parsedGenres.push("Film Noir");
            }
            if(this.genres[x] == "3"){
                parsedGenres.push("Game Show");
            }
            if(this.genres[x] == "4"){
                parsedGenres.push("Musical");
            }
            if(this.genres[x] == "5"){
                parsedGenres.push("Sport");
            }
            if(this.genres[x] == "6"){
                parsedGenres.push("Short");
            }
            if(this.genres[x] == "7"){
                parsedGenres.push("Adult");
            }
            if(this.genres[x] == "12"){
                parsedGenres.push("Adventure");
            }
            if(this.genres[x] == "14"){
                parsedGenres.push("Fantasy");
            }
            if(this.genres[x] == "16"){
                parsedGenres.push("Animation");
            }
            if(this.genres[x] == "18"){
                parsedGenres.push("Drama");
            }
            if(this.genres[x] == "27"){
                parsedGenres.push("Horror");
            }
            if(this.genres[x] == "28"){
                parsedGenres.push("Action");
            }
            if(this.genres[x] == "35"){
                parsedGenres.push("Comedy");
            }
            if(this.genres[x] == "36"){
                parsedGenres.push("History");
            }
            if(this.genres[x] == "37"){
                parsedGenres.push("Western");
            }
            if(this.genres[x] == "53"){
                parsedGenres.push("Thriller");
            }
            if(this.genres[x] == "80"){
                parsedGenres.push("Crime");
            }
            if(this.genres[x] == "99"){
                parsedGenres.push("Documentary");
            }
            if(this.genres[x] == "878"){
                parsedGenres.push("Science Fiction");
            }
            if(this.genres[x] == "9648"){
                parsedGenres.push("Mystery");
            }
            if(this.genres[x] == "10402"){
                parsedGenres.push("Music");
            }
            if(this.genres[x] == "10749"){
                parsedGenres.push("Romance");
            }
            if(this.genres[x] == "10751"){
                parsedGenres.push("Family");
            }
            if(this.genres[x] == "10752"){
                parsedGenres.push("War");
            }
            if(this.genres[x] == "10763"){
                parsedGenres.push("News");
            }
            if(this.genres[x] == "10764"){
                parsedGenres.push("Reality");
            }
            if(this.genres[x] == "10767"){
                parsedGenres.push("Talk Show");
            }

        }
        return parsedGenres;
    }

    getCast(){
        return this.cast;
    }

    getPoster(){
        return this.posterURL["original"];
    }
}

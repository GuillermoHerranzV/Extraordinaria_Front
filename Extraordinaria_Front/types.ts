
export type ApiResponse = {

    info: Info;
    results: Character[];

}

export type Info = {
    pages: number;
}

export type Character = {

    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;

}

export type Origin = {

    name: string;

}

export type Location = {
    name: string;
}
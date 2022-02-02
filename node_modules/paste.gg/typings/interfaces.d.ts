export declare enum Methods {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    PATCH = "PATCH"
}
export declare type IHeader = {
    "Content-Type"?: string;
    Authorization?: string;
};
export interface Options {
    baseUrl: string;
    mainUrl: string;
    version: number;
}
export interface Result {
    id: string;
    name?: string;
    url?: string;
    author?: Author;
    description?: string;
    visibility?: "public" | "unlisted" | "private";
    created_at: string;
    updated_at: string;
    expires?: string;
    files?: File[];
    deletion_key?: string;
}
export interface Output {
    status: string;
    result?: Result;
    error?: string;
    message?: string;
}
export interface Author {
    id?: string;
    username?: string;
    name?: string;
}
export interface Post extends Pick<Result, "name" | "description" | "visibility" | "expires"> {
    files: FileOut[];
}
export interface Update extends Pick<Result, "name"> {
    description: string;
}
export interface File {
    id: string;
    name: string;
    highlight_language?: string;
}
export interface FileOut {
    name?: string;
    content: Content;
}
export interface Content extends Pick<File, "highlight_language"> {
    format: "text" | "base64" | "gzip" | "xz";
    value: string;
}

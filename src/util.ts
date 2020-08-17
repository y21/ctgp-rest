import { BomRegex, PidRegex, RouteRegex } from "./types";
import { Response } from 'node-fetch';


export function removeBom(input: string): string {
    return input.replace(BomRegex, '');
}

export function isJson(resp: Response): boolean {
    return resp.headers.get('content-type')?.startsWith('application/json') ?? false;
}

export function isValidPid(pid: string): boolean {
    return PidRegex.test(pid);
}

export function formatUrl<T>(params: T, str: string): string {
    return str.replace(RouteRegex, (_, match) => {
        // @ts-ignore
        return `/${params[match] ?? ''}`
    });
}
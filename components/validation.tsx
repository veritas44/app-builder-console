export const strValidation: any = (regex: RegExp, value: string) => {
    return regex.test(value);
}